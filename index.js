const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();

const PORT = process.env.PORT || 3000;

const port = 3000;
app.use(bodyParser.json()); 
app.get('/webhook', (req, res) => {
    const VERIFY_TOKEN = 'ali99'; 
    const mode = req.query['hub.mode'];
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];

    if (mode && token) {
      if (mode === 'subscribe' && token === VERIFY_TOKEN) {  
    
        res.status(200).send(challenge);
      } else {
        res.sendStatus(403); // Forbidden
      }
    }
  });
  



// Webhook to receive messages
app.post('/webhook', async (req, res) => {
    console.log('Received webhook:', req.body);

    const message = req.body.message?.text;

    if (message && message.toLowerCase() === 'weather') {
        try {
            const weatherData = await axios.get('https://api.weatherapi.com/your-endpoint'); // Example API
            console.log('Weather data retrieved:', weatherData.data);
            
            // Optionally, trigger a response back to the user with this data
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    }

    res.sendStatus(200); // Respond with 200 OK
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});





