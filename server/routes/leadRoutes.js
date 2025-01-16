// /routes/leadRoutes.js
import { Router } from 'express';
const router = Router();
import { query } from '../config/db';
import pool from '../config/database';

// POST request to handle form submission
router.post('/submit', async (req, res) => {
    const { name, email, phone } = req.body;

    // Input validation (basic)
    if (!name || !email) {
        return res.status(400).json({ error: 'Name and Email are required' });
    }

    try {
        // Insert data into the database
        const result = await pool.query(
            'INSERT INTO leads (name, email, phone) VALUES ($1, $2, $3) RETURNING *',
            [name, email, phone]
        );
        res.status(200).json({ message: 'Form submitted successfully', lead: result.rows[0] });
    } catch (err) {
        console.log('Error inserting lead data:', err);
        res.status(500).json({ error: 'Error processing your request' });
    }
});

export default router;
