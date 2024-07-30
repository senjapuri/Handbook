CREATE DATABASE IF NOT EXISTS mydatabase;
USE mydatabase;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

-- Example user, password should be hashed using Werkzeug or similar tool
INSERT INTO users (id, username, password)
VALUES (2, 'admin', '$2b$12$KihLt4lfJ039fwGrcS4S2eM0IFb9OpWwcjzmlihVDX79fUVGrWnRe');
