const axios = require('axios');

export default function handler(req, res) {
  const { key } = req.body;

  axios({
    method: 'post',
    url: 'https://sdk.dev.mixomoda.ai/v1/stores/pair',
    headers: { 
      'api-key': key, 
      'Content-Type': 'application/json'
    },
    data: JSON.stringify({})
  })
  .then(function (response) {
    res.status(200).json(response.data);
  })
  .catch(function (error) {
    res.status(200).json({ error: error });
  });
}
