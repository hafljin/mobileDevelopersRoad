import React from 'react';

const courses = [
  {
    id: 1,
    title: 'Android開発 基礎',
    description: 'Kotlinの基本からJetpack Composeを使ったUI構築まで、最初のアプリを完成させます。',
    chapterCount: 20,
    completedChapters: 12,
  },
  {
    id: 2,
    title: 'Git実践ワークフロー',
    description: 'ブランチ戦略やコンフリクト解決など、チーム開発で必須のGitスキルを習得します。',
    chapterCount: 15,
    completedChapters: 15,
  },
  {
    id: 3,
    title: 'CS基礎 for Mobile',
    description: 'OS、メモリ、スレッドの概念を理解し、パフォーマンスの高いアプリ設計の土台を築きます。',
    chapterCount: 10,
    completedChapters: 3,
  },
  {
    id: 4,
    title: 'Jetpack Compose 応用',
    description: '複雑なUI、アニメーション、状態管理など、より高度なComposeテクニックを学びます。',
    chapterCount: 25,
    completedChapters: 0,
  }
];

const Dashboard: React.FC = () => (
  <div className="min-h-screen flex flex-col items-center bg-navy-dark text-text-primary p-8">
    <h1 className="text-3xl font-bold mb-6">コース進捗管理</h1>
    <div className="w-full max-w-2xl space-y-4">
      {courses.map(course => {
        const percent = course.chapterCount > 0 ? Math.round((course.completedChapters / course.chapterCount) * 100) : 0;
        return (
          <div key={course.id} className="bg-navy-light rounded p-4 shadow-md">
            <div className="flex justify-between items-center mb-2">
              <span className="text-lg font-bold">{course.title}</span>
            </div>
            <p className="text-text-secondary mb-3">{course.description}</p>
            <div className="mb-2 text-xs text-text-secondary">進捗: {course.completedChapters} / {course.chapterCount}（{percent}%）</div>
            <div className="w-full bg-navy-dark rounded-full h-2 mb-2">
              <div className="bg-accent-orange h-2 rounded-full" style={{ width: `${percent}%` }}></div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default Dashboard;
