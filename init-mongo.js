db = db.getSiblingDB('mydatabase');

db.createCollection('users');
db.users.insertMany([
    { name: 'John Doe', email: 'john@example.com' },
    { name: 'Jane Doe', email: 'jane@example.com' }
]);
