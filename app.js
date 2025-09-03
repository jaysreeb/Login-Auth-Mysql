import express from "express";
import pool from './db.js';
import authRoutes from './routes/authRoutes.js';

const app = express();
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT NOW() as time");
    
    res.json({ message: "Your DB connected ", serverTime: rows[0].time });
    
    
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.use('/', authRoutes);

const PORT = 3001;
app.listen(PORT , () =>{
    console.log(`Server is running at ${PORT}`);
});