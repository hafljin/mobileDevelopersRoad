import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCourseProgress } from '../hooks/useCourseProgress';
import { CourseCategory } from '../types';

// モックコースデータ
const courses = [
  {
    id: 1,
    title: 'Android開発 基礎',
    description: 'Kotlinの基本からJetpack Composeを使ったUI構築まで、最初のアプリを完成させます。',
    category: CourseCategory.ANDROID,
    chapterCount: 20,
  },
  {
    id: 2,
    title: 'Git実践ワークフロー',
    description: 'ブランチ戦略やコンフリクト解決など、チーム開発で必須のGitスキルを習得します。',
    category: CourseCategory.GIT,
    chapterCount: 15,
  },
  {
    id: 3,
    title: 'CS基礎 for Mobile',
    description: 'OS、メモリ、スレッドの概念を理解し、パフォーマンスの高いアプリ設計の土台を築きます。',
    category: CourseCategory.CS,
    chapterCount: 10,
  },
  {
    id: 4,
    title: 'Jetpack Compose 応用',
    description: '複雑なUI、アニメーション、状態管理など、より高度なComposeテクニックを学びます。',
    category: CourseCategory.ADVANCED,
    chapterCount: 25,
  }
];

const Dashboard: React.FC = () => {
  const { progress, updateProgress } = useCourseProgress();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center bg-navy-dark text-text-primary p-8">
      <h1 className="text-3xl font-bold mb-6">コース進捗管理</h1>
      <div className="w-full max-w-2xl space-y-4">
        {courses.map(course => {
          const completed = progress[course.id] || 0;
          const percent = course.chapterCount > 0 ? Math.round((completed / course.chapterCount) * 100) : 0;
          return (
            <div key={course.id} className="bg-navy-light rounded p-4 shadow-md">
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-bold">{course.title}</span>
                <span className="text-xs bg-accent-orange text-white rounded px-2 py-1">{course.category}</span>
              </div>
              <p className="text-text-secondary mb-3">{course.description}</p>
              <div className="mb-2 text-xs text-text-secondary">進捗: {completed} / {course.chapterCount}（{percent}%）</div>
              <div className="w-full bg-navy-dark rounded-full h-2 mb-2">
                <div className="bg-accent-orange h-2 rounded-full" style={{ width: `${percent}%` }}></div>
              </div>
              <button
                className="bg-accent-orange hover:bg-accent-orange-hover text-white font-bold py-2 px-4 rounded mr-2"
                onClick={() => {
                  updateProgress(course.id, Math.min(completed + 1, course.chapterCount));
                  navigate(`/task/${course.id}`);
                }}
                disabled={completed >= course.chapterCount}
              >
                1章進める
              </button>
              <button
                className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
                onClick={() => updateProgress(course.id, 0)}
              >
                進捗リセット
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
