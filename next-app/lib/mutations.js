import { useMutation } from 'react-query';

async function fetchMakeCompletion(config) {
  const url = 'https://api.openai.com/v1/completions';
  const fetchOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'text-davinci-002',
      prompt: config.prompt,
      max_tokens: 1000,
    }),
  };
  // make request
  const response = await fetch(url, fetchOptions);
  console.log(response);
  const result = await response.json();
  console.log(result);
  if (!response.ok) {
    const error = new Error();
    error.error = result.error;
    throw error;
  }
  return result;
}

export const useMakeCompletion = () => {
  return useMutation(fetchMakeCompletion);
};
