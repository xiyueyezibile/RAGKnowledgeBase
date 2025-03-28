const { ChatOpenAI } = require("@langchain/openai");
const { HumanMessage, SystemMessage } = require("@langchain/core/messages");
const openKey = require("./env");
async function main() {
  try {
    const llm = new ChatOpenAI({
      openAIApiKey: openKey,
      configuration: {
        baseURL: "https://api.moonshot.cn/v1",
      },
      modelName: "moonshot-v1-8k",
      temperature: 0.3,
    });

    console.log("开始调用 API...", llm.invoke);
    const response = await llm.invoke([
      new HumanMessage("你好，我叫李雷，1+1等于多少？"),
    ]);
    console.log("API 响应:", response);
  } catch (error) {
    console.error("发生错误:", error);
  }
}

main();
