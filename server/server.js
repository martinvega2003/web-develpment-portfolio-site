import express from 'express';
import cors from 'cors';
import pool from './config/database.js';

const app = express();
app.use(express.json());
app.use(cors());

app.post('/submit', async (req, res) => {
    const { name, email, phone } = req.body;

    if (!name || !email) {
        return res.status(400).json({ error: 'Name and Email are required' });
    }

    try {
        const result = await pool.query(
            'INSERT INTO leads (name, email, phone) VALUES ($1, $2, $3) RETURNING *',
            [name, email, phone]
        );
        res.status(200).json({ message: 'Form submitted successfully', lead: result.rows[0] });
    } catch (err) {
        console.error('Error inserting lead data:', err);
        res.status(500).json({ error: 'Error processing your request' });
    }
});

app.post('/submit/maintenance', async (req, res) => {
    const { name, email, phone } = req.body;

    if (!name || !email) {
        return res.status(400).json({ error: 'Name and Email are required' });
    }

    try {
        const result = await pool.query(
            'INSERT INTO maintenance_leads (name, email, phone) VALUES ($1, $2, $3) RETURNING *',
            [name, email, phone]
        );
        res.status(200).json({ message: 'Form submitted successfully', lead: result.rows[0] });
    } catch (err) {
        console.error('Error inserting lead data:', err);
        res.status(500).json({ error: 'Error processing your request' });
    }
});

app.post('/submit/blogging', async (req, res) => {
    const { name, email, phone } = req.body;

    if (!name || !email) {
        return res.status(400).json({ error: 'Name and Email are required' });
    }

    try {
        const result = await pool.query(
            'INSERT INTO blogging_leads (name, email, phone) VALUES ($1, $2, $3) RETURNING *',
            [name, email, phone]
        );
        res.status(200).json({ message: 'Form submitted successfully', lead: result.rows[0] });
    } catch (err) {
        console.error('Error inserting lead data:', err);
        res.status(500).json({ error: 'Error processing your request' });
    }
});

app.post('/submit/seo', async (req, res) => {
    const { name, email, phone } = req.body;

    if (!name || !email) {
        return res.status(400).json({ error: 'Name and Email are required' });
    }

    try {
        const result = await pool.query(
            'INSERT INTO seo_leads (name, email, phone) VALUES ($1, $2, $3) RETURNING *',
            [name, email, phone]
        );
        res.status(200).json({ message: 'Form submitted successfully', lead: result.rows[0] });
    } catch (err) {
        console.error('Error inserting lead data:', err);
        res.status(500).json({ error: 'Error processing your request' });
    }
});

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
