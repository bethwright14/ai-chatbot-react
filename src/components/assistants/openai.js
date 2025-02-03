import OpenAI from "openai";

export class Assistant {
  #model;
  #openai;

  constructor(model = "gpt-3.5-turbo") {
    this.#model = model;
    this.#openai = new OpenAI({
      apiKey: process.env.REACT_APP_OPEN_AI_API_KEY,
      dangerouslyAllowBrowser: true,
    });
  }

  async chat(content, history) {
    try {
      const result = await this.#openai.chat.completions.create({
        model: this.#model,
        messages: [...history, { content, role: "user" }],
      });
      return result.choices[0].message.content;
    } catch (error) {
      throw error;
    }
  }
}
