from flask import Flask, render_template, request, redirect, url_for, session
import mysql.connector
from werkzeug.security import check_password_hash

app = Flask(__name__)
app.secret_key = 'your_secret_key'  # Change this to a random secret key

# MySQL connection
mysql_connection = mysql.connector.connect(
    host="mysql",
    user="myuser",
    password="mypassword",
    database="mydatabase"
)
mysql_cursor = mysql_connection.cursor(dictionary=True)

@app.route('/')
def home():
    if 'username' in session:
        # Fetch data from MySQL
        mysql_cursor.execute("SELECT * FROM users")
        mysql_users = mysql_cursor.fetchall()
        return render_template('index.html', username=session['username'], mysql_users=mysql_users)
    return redirect(url_for('login'))

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']

        mysql_cursor.execute("SELECT * FROM users WHERE username=%s", (username,))
        user = mysql_cursor.fetchone()

        if user and check_password_hash(user['password'], password):
            session['username'] = username
            return redirect(url_for('home'))

        return 'Invalid username or password'

    return render_template('login.html')

@app.route('/logout')
def logout():
    session.pop('username', None)
    return redirect(url_for('login'))

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)
