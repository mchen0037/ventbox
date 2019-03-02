from flask import Flask
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

# We can use this to run the app on a specific server/port.
if __name__ == "__main__":
    app.run(debug=True,host='0.0.0.0', port=4000)
