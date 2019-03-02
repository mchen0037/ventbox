### Back end server for ventbox

## Using Python 3.6.7, any Python 3 should work?

1. Create a virtual environment.
  *tldr; we don't want to install every dependency on our core machine--some things might not be compatible, it doesn't make sense to install EVERYTHING on EVERY project we ever deploy, etc. Virtual environment gives us a 'clean' version of python with just the default packages.*
```
virtualenv -p python3 env
source env/bin/activate
```
  *once you run the source env/bin/activate, you can type ```python --version``` to see that it will use python 3.6.7 (or whatever) instead of the default on your machine (probably 2.7). Make sure you either remember to run this ```source env/bin/activate``` on every terminal window you open (for Flask) or just add the same line to the end of your ~/.bashrc file (every line in the ~/.bashrc file will run when you open a Terminal window.)*

2. Install the Dependencies.
  *These are the dependencies that this project will be using. It is the same output as ```pip freeze > requirements.txt```, and describes which version of every package that we need for our server to run.*
```
pip install -r requirements.txt
```
  *In the case that you add more, be sure to delete the old requirements.txt and recreate it:*
__ONLY IF YOU INSTALL NEW DEPENDENCIES__
```
rm requirements.txt
pip freeze > requirements.txt
```

3. Run the server!
```
FLASK_APP=hello.py flask run
```
