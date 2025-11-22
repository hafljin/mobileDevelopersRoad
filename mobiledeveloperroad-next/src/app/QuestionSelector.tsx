import React from 'react';

const questions = [
  {
    id: 1,
    title: '変数の宣言',
    description: 'Kotlinで整数型の変数xを10で宣言してください。',
  },
  {
    id: 2,
    title: 'if文の基本',
    description: '変数xが5より大きい場合に"OK"と出力するコードを書いてください。',
  },
];

export default function QuestionSelector() {
  return (
    <div className="p-4 bg-navy-light rounded shadow-md max-w-md mx-auto">
      <h2 className="text-lg font-bold mb-4 text-text-primary">Kotlin問題一覧</h2>
      <ul className="mb-4">
        {questions.map(q => (
          <li key={q.id} className="mb-3 p-3 bg-navy-dark rounded">
            <div className="font-bold text-text-primary">{q.title}</div>
            <div className="text-text-secondary text-sm mb-2">{q.description}</div>
            <a
              href={`/task/${q.id}`}
              className="bg-accent-orange hover:bg-accent-orange-hover text-white font-bold py-1 px-3 rounded inline-block mt-2"
            >
              この問題でスタート
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
