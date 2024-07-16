from flask import Flask, render_template
import mysql.connector

app = Flask(__name__)

# MySQL connection
try:
    mysql_connection = mysql.connector.connect(
        host="mysql",
        user="myuser",
        password="mypassword",
        database="mydatabase"
    )
    mysql_cursor = mysql_connection.cursor(dictionary=True)
    connection_status = "Successfully connected to MySQL"
except mysql.connector.Error as err:
    connection_status = f"Error: {err}"

@app.route('/')
def home():
    return render_template('index.html', connection_status=connection_status)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)
