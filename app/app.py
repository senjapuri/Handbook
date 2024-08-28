from flask import Flask, render_template, request, redirect, url_for, flash
import mysql.connector
from mysql.connector import Error
import bcrypt
import os

app = Flask(__name__)
app.secret_key = os.urandom(24)  # Securely generate a random secret key

def get_mysql_connection():
    """Create and return a MySQL database connection."""
    try:
        connection = mysql.connector.connect(
            host="mysql",
            port=3306,
            user="myuser",
            password="mypassword",
            database="mydatabase"
        )
        if connection.is_connected():
            return connection
    except Error as err:
        print(f"MySQL connection error: {err}")
        return None

@app.route('/')
def home():
    connection = get_mysql_connection()
    if connection:
        connection_status = "Connected to MySQL"
        connection.close()
    else:
        connection_status = "Error connecting to MySQL"
    
    return render_template('index.html', message=connection_status)

@app.route('/content')
def content():
    return render_template('content.html')


@app.route('/<role>_<wtd>')
def dynamic_route(role, wtd):
    # Render a template corresponding to the role and wtd combination
    template_name = f"{role}_{wtd}.html"
    return render_template(template_name)

@app.route('/login', methods=['POST'])
def login():
    username = request.form['username']
    password = request.form['password']
    
    if validate_user(username, password):
        return redirect(url_for('content'))
    else:
        flash('Invalid username or password')
        return redirect(url_for('home'))

def validate_user(username, password):
    """Validate user credentials against the database."""
    query = "SELECT password FROM users WHERE username = %s"
    connection = get_mysql_connection()
    
    if connection:
        try:
            with connection.cursor(dictionary=True) as cursor:
                cursor.execute(query, (username,))
                user = cursor.fetchone()
                
                if user and bcrypt.checkpw(password.encode('utf-8'), user['password'].encode('utf-8')):
                    return True
        except Error as e:
            print(f"Database query error: {e}")
        finally:
            connection.close()
    
    return False

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)
