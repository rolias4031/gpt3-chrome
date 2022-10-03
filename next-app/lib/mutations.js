import { useMutation } from 'react-query';

async function fetchMakeCompletion(config) {
  const url = 'http://localhost:8080/api/completion';
  const fetchOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      prompt: config.prompt,
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
