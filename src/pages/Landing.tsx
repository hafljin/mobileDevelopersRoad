import React from 'react';

const Landing: React.FC = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-navy-dark text-text-primary">
    <h1 className="text-4xl font-bold mb-4">VibeCoding Learning OS</h1>
    <p className="text-lg mb-6 max-w-xl text-center text-text-secondary">
      AI × Web × 自動化を最速で習得し、副業・SaaS開発へ到達するための個人用学習プラットフォームです。
      学習タスクの自動生成、コード演習、進捗管理、アウトプット生成をワンストップで提供します。
    </p>
    <div className="bg-navy-light rounded p-4 shadow-md">
      <ul className="list-disc pl-6 text-left">
        <li>学習タスク自動生成（AI/ルールベース）</li>
        <li>コード演習（ブラウザ内実行）</li>
        <li>進捗トラッカー</li>
        <li>アウトプット自動生成（SNS下書き）</li>
      </ul>
    </div>
  </div>
);

export default Landing;
