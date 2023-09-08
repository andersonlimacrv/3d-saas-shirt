import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';

dotenv.config();

const router = express.Router();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,

})

const openai = new OpenAIApi(configuration);

router.route('/').get((req, res) => {
    res.status(200).json({
        message: 'Hello from DALL.E ROUTES',
    });
})

router.route('/').post(async (req, res) => {
    try {
        const { prompt } = req.body;

        const response = await openai.createImage({
            prompt,
            n: 1,
            size: '256x256',
            response_format: 'b64_json',
        });

        const image = response.data.data[0].b64_json;

        res.status(200).json({ photo: image });
    } catch (error) {
        if (error.response) {
            // If had an error response from the API
            console.log("Avatar error status: ", error.response.status);
            console.log("Avatar error data: ", error.response.data);
            res.status(error.response.status).json({ error: error.response.data });
        } else {
            // If had a different error
            console.error("Avatar error message: ", error.message);
            res.status(500).json({ error: error.message });
        }
    }
});



export default router;