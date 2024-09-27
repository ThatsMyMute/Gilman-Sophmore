// api/generate-question.js

const { Configuration, OpenAIApi } = require('openai');

module.exports = async (req, res) => {
  // Only allow POST requests
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method Not Allowed' });
    return;
  }

  // Parse the request body
  const { topic } = req.body;

  // Initialize OpenAI API
  const configuration = new Configuration({
    apiKey: process.env.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, // Use environment variable
  });
  const openai = new OpenAIApi(configuration);

  try {
    const prompt = `Generate a challenging multiple-choice question for a high school chemistry student about ${topic}. Provide four options labeled A, B, C, D, specify which option is correct, and include a brief explanation. Format the response as a JSON object with fields: 'question', 'options' (array of strings), 'correctOption' (index 0-3), 'explanation'.`;

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
      return res.status(500).json({ message: 'Error parsing the generated question.' });
    }

    res.status(200).json(questionData);
  } catch (error) {
    console.error('Error generating question:', error);
    res.status(500).json({ message: 'Error generating question' });
  }
};
