from flask import Flask, render_template, request, redirect, url_for, flash
import mysql.connector
import bcrypt

app = Flask(__name__)

# MySQL connection
try:
    mysql_connection = mysql.connector.connect(
        host="mysql",
        port=3306,
        user="myuser",
        password="mypassword",
        database="mydatabase"
    )
    mysql_cursor = mysql_connection.cursor(dictionary=True)
    connection_status = ""
except mysql.connector.Error as err:
    connection_status = f"Error: {err}"

@app.route('/')
def home():
    return render_template('index.html', message=connection_status)

@app.route('/content')
def content():
    return render_template('content.html')


@app.route('/login', methods=['POST'])
def login():
    username = request.form['username']
    print(username)
    password = request.form['password']
    print(password)
    if validate_user(username, password):
        return render_template('content.html')  # Assuming you have a content.html to show on successful login
    else:
        return redirect(url_for('home'))
        #return render_template('index.html', message="Unauthorized user")

def validate_user(username, password):
    query = "SELECT password FROM users WHERE username = %s"
    try:
        mysql_cursor.execute(query, (username,))
        user = mysql_cursor.fetchone()
        print('from db:')
        print(user['password'].encode('utf-8'))
        print('user one:')
        print(password.encode('utf-8'))
        if user and bcrypt.checkpw(password.encode('utf-8'), user['password'].encode('utf-8')):
            return True
    except Exception as e:
        print(f"An error occurred: {e}")
    return False

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)
