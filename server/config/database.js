// /config/db.js
import pkg from 'pg';
const { Pool } = pkg;
//require('dotenv').config();
import dotenv from "dotenv"
dotenv.config()


// Create a new pool instance to connect to PostgreSQL
const pool = new Pool({
    user: "postgres",//process.env.PG_USER,
    host: "localhost",//process.env.PG_HOST,
    database: "portfolio",//process.env.PG_DATABASE,
    password: "12345", //process.env.PG_PASSWORD,
    port: 5432,//process.env.PG_PORT,
});

export default pool;
