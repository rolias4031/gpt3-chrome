const explain = {
  createPrompt(userInput) {
    const message_v1 = `You're a law professor in the United States. You're good at giving detailed lectures. I am a law student learning about ${userInput}. Explain "${userInput}" and why this concept is important in the American legal system.`;
    const message_v2 = `You're a law professor in the United States. You're good at giving detailed lectures. I am a smart law student. Give me a detailed lesson on ${userInput}.`;
    return message_v2;
  },
};

export const presets = { explain };
