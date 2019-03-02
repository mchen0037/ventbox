from flask import Flask, request
app = Flask(__name__)

# I'm not the best at Flask (or React.. (or anything, but.))
# I think there's a lot of different ways to use flask--we can render HTML
# pages when we call a certain function, or we can just use it as a
# server which outputs information for us and connects to the database.

# We do this because of security reasons--it's not good to have information
# about our database on the frontend server. Rather when we click a button
# on the front end, it should visit our backend website (giving it some or no
# information), and based on which "endpoint" we visited, we will return
# other information about the given variables

# For example, if this was 'Catcourses,' we might want to visit the
# <server>/grades&mightychen endpoint, which will query the database for
# mightychen and then return the grades for that user.

# This is an endpoint! To keep it simple for now, we'll keep this hello world
# in. Usually our endpoints will also display some text, but in a JSON format
# so that it is easier to read on our front end side. i.e:
# https://api.cryptonator.com/api/ticker/btc-usd
@app.route("/")
def hello():
    return "Hello World!"

# This is another endpoint! If you visit 0.0.0.0:4000/test, you will see this.
@app.route("/test")
def test():
    return "This is the test page!"

# Let's connect this with our front end. There will be two buttons:
# yes or no, and we will give a reply accordingly
ANSWER_YES = "Thai food is awesome!!"
ANSWER_NO = "Please leave."
@app.route("/thaifood/<string:ans>")
def thaifood(ans):
    # Basically, we want our 'yes' button to send the user to our /thaifood/yes
    # page and we want our 'no' button to send them to /thaifood/no
    if ans == "yes":
        return ANSWER_YES
    elif ans == "no":
        return ANSWER_NO
    else:
        return "error: please visit /thaifood/yes or /thaifood/no"

# Alternatively, we can pass arguments by parsing information through
# /grades?student=info&classname=moreinfo&...
# Set up some info..
info = {
    'mighty': {
        'oop':65,
        'db': 11,
        'robotics': 80
    },
    'vivian': {
        'oop': 100,
        'db': 99,
        'robotics': 103
    }
}

@app.route("/grades")
def grades():
    # These lines parse the address for the parameters.
    student = str(request.args.get('student'))
    classname = str(request.args.get('classname'))

    # you can use this to debug, it'll show up in the terminal window where
    # you ran server.py when you visit the certain website.
    print(student)
    print(classname)

    # If there was no argument for the student or class, or if they aren't
    # valid, print out an error message.
    if (student is None or classname is None or student not in info.keys() or
        classname not in ['oop', 'db', 'robotics']):
        out = ("""Error: Student or classname doesn't exist, try
                /grades?student=vivian&classname=oop""")
        return out

    # Otherwise, print out their grade in the class.
    out = (student + '\'s grade in ' + classname + ' is ' +
            str(info[student][classname]))
    return out

# We can use this to run the app on a specific server/port.
if __name__ == "__main__":
    app.run(debug=True,host='0.0.0.0', port=4000)
