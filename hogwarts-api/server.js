const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 3001;

// Enable CORS for all routes with specific origins
app.use(cors({
  origin: [
    'https://hogwarts-frontend-new.vercel.app',
    'https://hogwarts-34bfnzn9s-renia274s-projects.vercel.app',
    'http://localhost:3000'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(express.json());

// Houses endpoint
app.get('/houses', async (req, res) => {
  try {
    const { name } = req.query;
    const response = await fetch('https://wizard-world-api.herokuapp.com/houses');
    
    if (!response.ok) {
      throw new Error(`Wizard World API responded with status ${response.status}`);
    }
    
    const houses = await response.json();
    
    if (name) {
      const filteredHouses = houses.filter(house =>
        house.name.toLowerCase().includes(name.toLowerCase())
      );
      return res.json(filteredHouses);
    }
    
    res.json(houses);
  } catch (error) {
    console.error('Error fetching houses:', error);
    res.status(500).json({ error: 'Failed to fetch houses', message: error.message });
  }
});

// Colors endpoint
app.get('/colors/:colorName', async (req, res) => {
  try {
    const { colorName } = req.params;
    const response = await fetch(`https://csscolorsapi.com/api/colors/${colorName.toLowerCase()}`);
    
    if (!response.ok) {
      throw new Error(`Color API responded with status ${response.status}`);
    }
    
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching color:', error);
    res.status(500).json({
      error: 'Failed to fetch color',
      message: error.message
    });
  }
});

// Health check endpoint
app.get('/', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Hogwarts API is running' });
});

if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

// Export the Express app for Vercel
module.exports = app;