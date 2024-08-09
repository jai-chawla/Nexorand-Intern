const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./mongoose/connect');
const dotenv = require('dotenv');
const cors= require('cors');
const User=require('./mongoose/schema');
const jwt = require('jsonwebtoken');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = 'kwdw92jne29wimd29';

app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
  res.send('Hellow');
})


//signup page form
app.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // user = new User({ email, password });
    // await user.save();

    const newUser = await User.create({
      email,
      password,
    })

    res.status(201).json({ message: 'User created successfully',data: newUser });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Check if password matches
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Generate a JWT token
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

const startServer= async()=>{
  try {
    connectDB(process.env.MONGO_URI);
    app.listen(PORT,()=> console.log(`Server has Started on port http://localhost:${PORT}`))
  } catch (error) {
    console.log(error);
  }
}

startServer();