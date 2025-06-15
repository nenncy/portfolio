import fs from 'fs';
import path from 'path';
import pdf from 'pdf-parse';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const userMessage = req.body.message;

    const pdfPath = path.join(process.cwd(), 'resume.pdf'); // PDF in root
    const pdfBuffer = fs.readFileSync(pdfPath);
    const pdfData = await pdf(pdfBuffer);
    const resumeText = pdfData.text.slice(0, 5000); // Trim for token budget

    const systemPrompt = `
You are a helpful assistant representing Nency Patel.

Primary Goal:
Answer questions based ONLY on Nency Patel’s resume unless the question is about her availability, greetings, or networking.

Resume Content:
${resumeText}

Rules:
1. If the resume doesn’t contain the answer and it’s unrelated to greetings or availability, reply: "I'm not sure based on the resume."
2. Be concise. All answers must be 2–3 lines max.
3. DO NOT mention “I am a chatbot” or restate the resume.
4. If the user asks:
  - About availability: Respond that Nency is open to work and networking.
  - For contact info: Provide email and LinkedIn.
  - Where she is or location: Say she’s in Chicago, recently graduated from Illinois Tech, and open to relocation.
  - If greeted (e.g., "Hi", "Hey", "Hello"): Respond with a similar greeting.
`;

    const geminiEndpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyCKtLRVU8RE2Y99V04MGQrgRd-tLys1MWI`;

    const geminiResponse = await fetch(geminiEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [
          { role: 'system', parts: [{ text: systemPrompt }] },
          { role: 'user', parts: [{ text: userMessage }] }
        ]
      }),
    });

    const data = await geminiResponse.json();

    if (data?.candidates?.[0]?.content?.parts?.[0]?.text) {
      res.status(200).json({ reply: data.candidates[0].content.parts[0].text });
    } else {
      res.status(500).json({ reply: 'No response from Gemini.' });
    }
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ error: 'Something went wrong' });
  }
}
