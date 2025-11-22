import React, { useState } from 'react';

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
    const [language, setLanguage] = useState('kotlin');
    const [level, setLevel] = useState(1);

    return (
    <div className="p-4 bg-navy-light rounded shadow-md max-w-md mx-auto">
      <h2 className="text-lg font-bold mb-4 text-text-primary">問題選択</h2>
      <div className="mb-4">
        <label className="block mb-1 text-text-secondary">言語</label>
        <select
          value={language}
          onChange={e => setLanguage(e.target.value)}
          className="w-full p-2 rounded border border-color bg-navy-dark text-text-primary"
        >
          {languages.map(lang => (
            <option key={lang.value} value={lang.value}>{lang.label}</option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-1 text-text-secondary">レベル</label>
        <select
          value={level}
          onChange={e => setLevel(Number(e.target.value))}
          className="w-full p-2 rounded border border-color bg-navy-dark text-text-primary"
        >
          {levels.map(lv => (
            <option key={lv} value={lv}>Lv{lv}</option>
          ))}
        </select>
      </div>
      <button
        className="w-full bg-accent-orange hover:bg-accent-orange-hover text-white font-bold py-2 px-4 rounded"
        onClick={() => onStart(language, level)}
      >
        スタート
      </button>
    </div>
  );
};

export default QuestionSelector;