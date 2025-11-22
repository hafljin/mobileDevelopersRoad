import React, { useState } from 'react';

// 問題データ型
export type Question = {
  id: number;
  level: number;
  title: string;
  description: string;
  code: string;
  answer: string;
};

// props: 言語・レベル・戻るコールバック
interface Props {
  language: string;
  level: number;
  onBack: () => void;
}

// JSONデータのimport
import questionsData from '../data/kotlinQuestions.json';

const QuestionScreen: React.FC<Props> = ({ language, level, onBack }) => {
  // レベルに合う問題を抽出
  const questions: Question[] = (questionsData as Question[]).filter(q => q.level === level);
  // ランダムで1問選択
  const [question] = useState<Question>(questions[Math.floor(Math.random() * questions.length)]);
  const [input, setInput] = useState('');
  const [result, setResult] = useState<'correct' | 'wrong' | null>(null);

  const checkAnswer = () => {
    // 空白・改行を無視した簡易一致判定
    const normalize = (str: string) => str.replace(/\s+/g, '');
    if (normalize(input) === normalize(question.answer)) {
      setResult('correct');
    } else {
      setResult('wrong');
    }
  };

  return (
    <div className="p-4 bg-navy-light rounded shadow-md max-w-md mx-auto mt-8">
      <h2 className="text-lg font-bold mb-2 text-text-primary">{question.title}</h2>
      <p className="mb-2 text-text-secondary">{question.description}</p>
      <pre className="bg-navy-dark p-2 rounded text-sm mb-2 text-text-primary">{question.code}</pre>
      <textarea
        className="w-full p-2 rounded border border-color bg-navy-dark text-text-primary mb-2"
        rows={4}
        placeholder="ここに解答を入力"
        value={input}
        onChange={e => setInput(e.target.value)}
        disabled={!!result}
      />
      {result === 'correct' && (
        <div className="mb-2 text-green-400 font-bold">正解です！</div>
      )}
      {result === 'wrong' && (
        <div className="mb-2 text-red-400 font-bold">不正解です。正解例: <span className="font-mono">{question.answer}</span></div>
      )}
      <div className="flex gap-2">
        <button
          className="bg-accent-orange hover:bg-accent-orange-hover text-white font-bold py-2 px-4 rounded flex-1"
          onClick={checkAnswer}
          disabled={!!result}
        >
          解答を確認
        </button>
        <button
          className="bg-navy-dark border border-color text-text-secondary font-bold py-2 px-4 rounded flex-1"
          onClick={onBack}
        >
          戻る
        </button>
      </div>
    </div>
  );
};

export default QuestionScreen;
