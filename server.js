const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

const usersFilePath = './data/users.json';

// Load users from file
function loadUsers() {
    if (!fs.existsSync(usersFilePath)) {
        fs.writeFileSync(usersFilePath, JSON.stringify([]));
    }
    return JSON.parse(fs.readFileSync(usersFilePath));
}

// Save users to file
function saveUsers(users) {
    fs.writeFileSync(usersFilePath, JSON.stringify(users));
}

// Register endpoint
app.post('/api/register', (req, res) => {
    const { username, password } = req.body;
    const users = loadUsers();
    const existingUser = users.find(user => user.username === username);

    if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = bcrypt.hashSync(password, 8);
    users.push({ username, password: hashedPassword, currentStreak: 0, longestStreak: 0 });
    saveUsers(users);
    res.json({ message: 'User registered successfully' });
});

// Login endpoint
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    const users = loadUsers();
    const user = users.find(user => user.username === username);

    if (!user || !bcrypt.compareSync(password, user.password)) {
        return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    res.json({ success: true, currentStreak: user.currentStreak, longestStreak: user.longestStreak });
});

// Start streak endpoint
app.post('/api/streak/start', (req, res) => {
    const users = loadUsers();
    const user = users[0]; // For simplicity, using the first user. You can implement JWT for user identification.

    user.currentStreak += 1;
    user.longestStreak = Math.max(user.currentStreak, user.longestStreak);
    saveUsers(users);
    res.json({ currentStreak: user.currentStreak, longestStreak: user.longestStreak });
});

// Reset streak endpoint
app.post('/api/streak/reset', (req, res) => {
    const users = loadUsers();
    const user = users[0]; // For simplicity, using the first user.

    user.currentStreak = 0;
    saveUsers(users);
    res.json({ currentStreak: user.currentStreak, longestStreak: user.longestStreak });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
