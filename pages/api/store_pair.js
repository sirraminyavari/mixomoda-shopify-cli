const axios = require('axios');

export default function handler(req, res) {
  axios({
    method: 'post',
    url: 'https://sdk.dev.mixomoda.ai/v1/stores/pair',
    headers: { 
      'api-key': 'b6e52a50-46f0-11ec-8d0f-6f7d8db65af7', 
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
