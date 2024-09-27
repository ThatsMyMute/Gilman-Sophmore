// Nil for now
// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Configuration, OpenAIApi } = require('openai');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Replace '' with your actual API key
const configuration = new Configuration({
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);

app.post('/generate-question', async (req, res) => {
  const { topic } = req.body;

  try {
    const prompt = `Generate a multiple-choice question about ${topic}, along with four options (A, B, C, D), indicating which one is correct and providing a brief explanation. Format the response as a JSON object with fields: 'question', 'options' (array), 'correctOption', 'explanation'.`;

    const completion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: prompt,
      max_tokens: 250,
      temperature: 0.7,
    });

    // Parse the response
    const responseText = completion.data.choices[0].text.trim();

    // Ensure the response is valid JSON
    let questionData;
    try {
      questionData = JSON.parse(responseText);
    } catch (parseError) {
      console.error('Error parsing JSON:', parseError);
      return res.status(500).send('Error parsing the generated question.');
    }

    res.json(questionData);
  } catch (error) {
    console.error('Error generating question:', error);
    res.status(500).send('Error generating question');
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
