
import { GoogleGenAI } from "@google/genai";
import type { GenerateContentResponse } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // In a real app, you might want to handle this more gracefully.
  // For this prototype, we'll throw an error if the key is missing.
  console.warn("API_KEY environment variable not set. AI features will not work.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

const model = 'gemini-2.5-flash';

export const getAIFeedback = async (codeSnippet: string): Promise<string> => {
  if (!API_KEY) {
    return Promise.resolve("AI機能は現在利用できません。APIキーが設定されていません。");
  }
  
  const prompt = `
あなたは、Web/iOS開発経験のあるAndroid開発初心者を指導する、経験豊富なAndroid開発メンターです。
以下のコードスニペットをレビューし、実践的なフィードバックを提供してください。

フィードバックのポイント：
- **ゲーム的な激励**: 学習者のモチベーションを高めるような、ポジティブでゲーム感覚の言葉遣いをしてください。（例：「素晴らしい！これで中尉への道が開けたぞ！」）
- **良かった点**: コードの良い部分を具体的に褒めてください。
- **改善点**: より良い書き方、ベストプラクティス、潜在的な問題を指摘してください。
- **次のステップ**: 次に何を学ぶべきか、具体的なアクションを提案してください。
- **形式**: Markdown形式で、読みやすく整形してください。

---
対象のコード:
\`\`\`kotlin
${codeSnippet}
\`\`\`
---
`;

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
        model: model,
        contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Error fetching AI feedback:", error);
    return "フィードバックの生成中にエラーが発生しました。しばらくしてから再度お試しください。";
  }
};
