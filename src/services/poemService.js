import { Configuration, OpenAIApi } from "openai";

const openai = new OpenAIApi(
  new Configuration({ apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY })
);

async function generatePoem(formData) {
  const { language, length, rhymes, style, theme } = formData;
  let len = parseInt(length) * 5 + 50;

  const prompt = `Create a ${language} ${
    rhymes ? "rhyming " : ""
  }poem in the style of ${style} about ${theme} with a length of ${length} words maximum`;

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: prompt,
      },
      {
        role: "user",
        content: "Start poem",
      },
    ],
    max_tokens: len,
  });

  if (response.data.choices && response.data.choices.length > 0) {
    console.log(response.data.choices[0].message.content);
    return response.data.choices[0].message.content;
  }

  throw new Error("Failed to generate poem");
}

module.exports = {
  generatePoem,
};
