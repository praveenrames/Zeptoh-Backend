import express from 'express'
import cors from 'cors'
import encryptField from './utils/encrypt.js';

const app = express();
app.use(cors());
app.use(express.json());

const fields = [
    'name:text',
    'email:text',
    'age:number',
    'junkdata123456', // decoy field
];

app.get('/api/form', (req, res) => {
    const encryptedFields = fields.map(field => encryptField(field));
    res.json(encryptedFields);
});

app.post('/api/submit', (req, res) => {
    console.log('Received:', req.body);
    res.status(200).json({ message: "Form submitted successfully" })
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
})
