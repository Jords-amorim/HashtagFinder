import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

type Data = {
  name: string
}


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(req)
    var config: any = {
        method: 'get',
        url: `https://api.twitter.com/2/tweets/search/recent?query=%23${req.query.query}&tweet.fields=author_id,created_at,entities`,
        // url: `https://api.twitter.com/1.1/search/tweets.json?q=${req.query.query}&count=50&result_type=recent`,
        headers: { 
          'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAAONiUAEAAAAAANPGiuEIbDPGnG7gnhQCuKGE5hc%3Dn6UGPAyavXOTQn08fIqu8yeeQ08MSDtVoaRS9nUWqVSYHbAxKB', 
        }
      };
      
      axios(config)
      .then(function (response) {
        res.status(200).json(response.data.data)
    
      })
      .catch(function (error) {
        res.status(error.response.status).json(error.response.data)
      });
}