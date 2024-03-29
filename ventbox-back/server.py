from flask import Flask, request, jsonify
from flask_cors import CORS
import psycopg2
import os
from getPolarity import *

app = Flask(__name__)
CORS(app)
conn = None

DBHOSTNAME = os.environ['DBHOSTNAME']
USER = os.environ['USER']
DATABASE = os.environ['DATABASE']
PASSWORD = os.environ['PASSWORD']
test = os.environ['re']

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
    print('hi')
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

@app.route('/vent', methods = ['POST'])
def vent():
    # Depending on what the text is from the POST (from the backend), we can
    # access those variables here from the JSON.
    conn = connectDB()
    vent_text = request.get_json()["text"]
    polarity = getPolarity(vent_text)
    likes = 0

    cur = conn.cursor()
    data = (vent_text, likes, polarity)
    cur.execute("""INSERT INTO vents(vent, likes, polarity, timestamp) VALUES(%s, %s, %s, now())""", data)
    # commit is very important:
    # https://stackoverflow.com/questions/9075349/using-insert-with-a-postgresql-database-using-python
    conn.commit()
    cur.close()

    return "hello"

@app.route('/refresh')
def refresh():
    conn = connectDB()
    cur = conn.cursor()
    cur.execute("""
        SELECT id, vent, polarity, likes
        FROM vents
        ORDER BY timestamp DESC
        LIMIT 5
        """)
    result = cur.fetchall()

    posts = []

    for row in result:
        posts.append(
            {"id": row[0], "text": row[1], "polarity": row[2], "likes": row[3]})

    cur.close()
    if len(row) == 0:
        return "Oh no error!"
    else:
        return jsonify(posts)

@app.route('/likes', methods = ['POST'])
def likes():
    post_id = request.get_json()["id"]

    conn = connectDB()
    cur = conn.cursor()

    cur.execute("""UPDATE vents SET likes = likes + 1 WHERE id = %s""", [post_id])
    conn.commit()
    cur.close()

    return "???"


def connectDB():
    conn = psycopg2.connect(host=DBHOSTNAME, database=DATABASE, user=USER, password=PASSWORD)
    return conn

# We can use this to run the app on a specific server/port.
if __name__ == "__main__":

    print('testing >>>>>>>>>>>>>', test, DBHOSTNAME)
    conn = psycopg2.connect(host=DBHOSTNAME, database=DATABASE, user=USER, password=PASSWORD)

    print('Successfully connected to database!')
    app.run(debug=True,host='0.0.0.0', port=4000)
