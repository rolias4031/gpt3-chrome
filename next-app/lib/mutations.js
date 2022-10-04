import { useMutation } from 'react-query';

async function fetchMakeCompletion(config) {
  let url = 'https://gpt3-pocket-web.vercel.app/api/completion';
  const fetchOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'text-davinci-002',
      prompt: config.prompt,
      token: process.env.NEXT_PUBLIC_CHROME_TOKEN,
    }),
  };
  // make request
  const response = await fetch(url, fetchOptions);
  const result = await response.json();
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
