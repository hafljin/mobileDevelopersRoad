import React, { useState } from 'react';
import MonacoEditor from '@monaco-editor/react';
import AIFeedbackModal from '../components/AIFeedbackModal';

// タスク詳細のモックデータ
const taskDetail = {
  id: 1,
  title: 'Kotlin: 変数宣言の基礎',
  difficulty: 'Lv1',
  description: 'Kotlinで整数型の変数xを10で宣言してください。',
  templateCode: '// ここにコードを書いてください\n',
  testCases: [
    {
      input: '',
      expected: 'val x = 10',
      keywords: ['val', 'x', '10'],
    },
  ],
};

const TaskDetail: React.FC = () => {
  const [code, setCode] = useState(taskDetail.templateCode);
  const [result, setResult] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRun = () => {
    if (!code.trim()) {
      setResult('コードを入力してください。');
      return;
    }
    // キーワード判定: すべてのキーワードが含まれていれば正解
    const allPass = taskDetail.testCases.every(tc =>
      tc.keywords ? tc.keywords.every(kw => code.includes(kw)) : false
    );
    if (allPass) {
      setResult('正解です！（キーワード判定）');
    } else {
      setResult('不正解です。\n正解例: ' + taskDetail.testCases.map(tc => tc.expected).join(', '));
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-navy-dark text-text-primary p-8">
      <div className="bg-navy-light rounded p-6 shadow-md w-full max-w-xl">
        <h2 className="text-2xl font-bold mb-2">{taskDetail.title}</h2>
        <span className="text-xs bg-accent-orange text-white rounded px-2 py-1 mb-2 inline-block">{taskDetail.difficulty}</span>
        <p className="text-text-secondary mb-4">{taskDetail.description}</p>
        <div className="mb-2">
          <MonacoEditor
            height="200px"
            defaultLanguage="kotlin"
            value={code}
            onChange={value => setCode(value || '')}
            options={{
              theme: 'vs-dark',
              fontSize: 16,
              minimap: { enabled: false },
            }}
          />
        </div>
        <button
          className="w-full bg-accent-orange hover:bg-accent-orange-hover text-white font-bold py-2 px-4 rounded mb-2"
          onClick={handleRun}
        >
          実行
        </button>
        {result && (
          <div className={`mt-2 font-bold ${result.includes('正解') ? 'text-green-400' : 'text-red-400'}`}>{result}</div>
        )}
        <button
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-2"
          onClick={() => setIsModalOpen(true)}
        >
          AIフィードバック
        </button>
        {result && (
          <div className={`mt-2 font-bold ${result.includes('正解') ? 'text-green-400' : 'text-red-400'}`}>{result}</div>
        )}
      </div>
      <AIFeedbackModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default TaskDetail;
