import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';

const app = express();
const PORT = 5000;

// Secret key for JWT signing (replace this with a secure key in production)
const secretKey = 'your_secret_key';

// Middleware
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  // Example hardcoded user
  const user = { username: 'test', password: 'test123' };

  if (username === user.username && password === user.password) {
    // Generate JWT token
    const token = jwt.sign({ username: user.username }, secretKey, { expiresIn: '1h' });

    res.json({ username: user.username, token });
  } else {
    res.status(400).json({ message: 'Invalid username or password' });
  }
});

app.post('/api/logout', (req, res) => {
  res.status(200).send();
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
