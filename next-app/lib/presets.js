/* eslint-disable no-unused-vars */
const define = {
  inputPlaceholder: 'Comparative Negligence',
  createOutputPrefix () {
    
  },
  createPrompt(userInput) {
    const prompt_v1 = `You're a law professor in the United States. You're good at giving detailed lectures. I am your law student learning about ${userInput}. Explain "${userInput}" and why this concept is important in the American legal system.`;
    const prompt_v3 = `You're a law professor in the United States. You're good at giving detailed lectures. I am a law student. What is the legal definition of ${userInput}.`;
    return prompt_v3;
  },
};

const explain = {
  inputPlaceholder: 'Habeus Corpus',
  createPrompt(userInput) {
    const prompt_v2 = `You're a law professor in the United States. You're good at giving detailed lectures. I am a law student. Give me a detailed lesson on ${userInput}.`;
    return prompt_v2;
  },
};

const summary = {
  inputPlaceholder: 'Brown vs. Board of Education',
  createPrompt(
    caseInput,
    courtInput = 'California Supreme Court',
    dateInput = '1948',
  ) {
    const prompt_v1 = `You're a law professor in the United. I am a law student. Tell me these three things about the case ${caseInput}: its major rulings, dissenting opinions, and overall impact it had on the American legal system.`;
    const prompt_v2 = `You're a law professor in the United. I am a law student learning about the case ${caseInput}, which occurred in ${courtInput} in ${dateInput}. Teach me about this case.`;
    const prompt_v3 = `You're a law professor in the United States. I am a law student learning about the case ${caseInput} that occurred in ${courtInput}. What did the court rule in that case?`;
    const prompt_v4 = `You're a law professor in the United States. I am a law student learning about ${caseInput}. Explain the significance of ${caseInput}.`;
    return prompt_v2;
  },
};

// introduce a presence penalty here
const example = {
  inputPlaceholder: 'Battery',
  createPrompt(userInput) {
    const prompt_v1 = `You're a law professor in the United States. I am a law student. Using hypethicals, give me three examples of ${userInput}.`;
    return prompt_v1;
  },
};
export const presets = { explain, define, example };
