const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Serve HTML file from the root directory
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Sample data for countries and states
const countryStateData = {
  USA: ['California', 'New York', 'Texas'],
  Canada: ['Ontario', 'Quebec', 'British Columbia'],
  Australia: ['New South Wales', 'Victoria', 'Queensland']
};

// API endpoint to get country and state data
app.get('/api/countries', (req, res) => {
  res.json(countryStateData);
});

// Handle form submission (optional)
app.post('/', (req, res) => {
  const { country, state } = req.body;
  res.send(`You selected ${country} - ${state}`);
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
