require('dotenv').config(); 
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();


const PORT = process.env.PORT || 5000;  
const MONGO_URI = process.env.MONGO_URI;

app.use(cors());
app.use(express.json());

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error(`MongoDB connection error: ${error}`);
});

const memberSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

const Member = mongoose.model('Member', memberSchema);

app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const newMember = new Member({ name, email, password });
        await newMember.save();
        res.status(201).send('Member registered successfully');
    } catch (error) {
        res.status(400).send('Error registering member: ' + error.message);
    }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const member = await Member.findOne({ email, password });
    if (member) {
        res.status(200).json({ message: 'Login successful', member });
    } else {
        res.status(401).send('Invalid credentials');
    }
});

app.get('/members', async (req, res) => {
    const members = await Member.find();
    res.status(200).json(members);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
