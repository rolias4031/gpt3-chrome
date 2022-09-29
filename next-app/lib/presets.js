const explain = {
  text: '',
  createPrompt(userInput) {
    const message = `You're a law professor in the United States. You're good at giving detailed lectures. Explain the concept of "${userInput}" and why this concept is important in the American legal system.`;
    return message;
  },
};

export const presets = { explain };
