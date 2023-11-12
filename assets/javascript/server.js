// server.js
const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3002;

app.get('/maptiles/:z/:x/:y', async (req, res) => {
  const { z, x, y } = req.params;
  const tileUrl = `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;

  try {
    const response = await axios.get(tileUrl, { responseType: 'arraybuffer' });

    // Set the appropriate content type based on the tile format
    res.set('Content-Type', 'image/png');

    res.send(response.data);
  } catch (error) {
    console.error('Error fetching map tile:', error.message);
    res.sendStatus(500);
  }
});

app.listen(PORT, () => {
  console.log(`Caching server is running on http://localhost:${PORT}`);
});
