import React, { useState } from 'react';
import { useKotlinQuestions } from '../hooks/useKotlinQuestions';

type Props = {
    onStart: ( language: string, leven: number ) => void;
}; 

const languages = [
    { value: 'kotlin', label: 'Kotlin' },
    // 拡張予定
    // { value: 'swift', label: 'Swift' },
    // { value: 'python', label: 'Python' },
    // { value: 'flutter', label: 'Flutter' },
    // ...
];

const levels = [1, 2, 3, 4, 5];

const QuestionSelector: React.FC<Props> = ({ onStart }) => {
  const questions = useKotlinQuestions();
  const [language, setLanguage] = useState('kotlin');
  const [level, setLevel] = useState(1);

  return (
    <div className="p-4 bg-navy-light rounded shadow-md max-w-md mx-auto">
      <h2 className="text-lg font-bold mb-4 text-text-primary">Kotlin問題一覧</h2>
      {questions.length === 0 ? (
        <div className="text-text-secondary">問題データを読み込み中...</div>
      ) : (
        <ul className="mb-4">
          {questions.map(q => (
            <li key={q.id} className="mb-3 p-3 bg-navy-dark rounded">
              <div className="font-bold text-text-primary">{q.title}</div>
              <div className="text-text-secondary text-sm mb-2">{q.description}</div>
              <button
                className="bg-accent-orange hover:bg-accent-orange-hover text-white font-bold py-1 px-3 rounded"
                onClick={() => onStart('kotlin', q.level || 1)}
              >
                この問題でスタート
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default QuestionSelector;