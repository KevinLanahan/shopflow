const pool = require("../config/db");

const getAllProducts = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT * FROM products
    `);

    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

module.exports = { getAllProducts };