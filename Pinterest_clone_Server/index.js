const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;
app.use(bodyParser.json());



// Middleware
app.use(cors());
app.use(bodyParser.json());

// File paths
const pinsPath = path.join(__dirname, 'data', 'pins.json');
const usersPath = path.join(__dirname, 'data', 'users.json');

// Utility functions
function readData(filePath) {
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
}

function writeData(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}


app.use(cors());
app.use(express.json());

// Routes

// Get all pins
app.get('/api/pins', (req, res) => {
  const pins = readData(pinsPath);
  res.json(pins);
});

// Create a new pin
app.post('/api/pins', (req, res) => {
  const pins = readData(pinsPath);
  const { title, imageUrl, description, userId } = req.body;
  const newPin = {
    id: pins.length + 1,
    title,
    imageUrl,
    description,
    userId,
    likes: 0
  };
  pins.push(newPin);
  writeData(pinsPath, pins);
  res.status(201).json(newPin);
});

// Like a pin
app.post('/api/pins/:id/like', (req, res) => {
  const pins = readData(pinsPath);
  const pinId = parseInt(req.params.id);
  const pin = pins.find(p => p.id === pinId);
  if (!pin) return res.status(404).json({ message: 'Pin not found' });
  pin.likes++;
  writeData(pinsPath, pins);s
  res.json(pin);
});

// Register user
app.post('/api/users', (req, res) => {
  const users = readData(usersPath);
  const { username } = req.body;
  const newUser = { id: users.length + 1, username };
  users.push(newUser);
  writeData(usersPath, users);
  res.status(201).json(newUser);
});

// Get all users
app.get('/api/users', (req, res) => {
  const users = readData(usersPath);
  res.json(users);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
