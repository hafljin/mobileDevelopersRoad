
import React, { useState } from 'react';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import CourseCard from './components/CourseCard';
import AIFeedbackModal from './components/AIFeedbackModal';
import type { User, Rank, Course } from './types';
import { CourseCategory } from './types';

// --- Mock Data ---
const ranks: Rank[] = [
  { id: 1, name: "研修生", minExp: 0, maxExp: 100 },
  { id: 2, name: "少尉", minExp: 101, maxExp: 500 },
  { id: 3, name: "中尉", minExp: 501, maxExp: 1500 },
];

const mockUser: User = {
  id: 1,
  name: "Code Warrior",
  email: "dev@example.com",
  rank: ranks[1],
  exp: 350,
};

const mockCourses: Course[] = [
  {
    id: 1,
    title: "Android開発 基礎",
    description: "Kotlinの基本からJetpack Composeを使ったUI構築まで、最初のアプリを完成させます。",
    category: CourseCategory.ANDROID,
    chapterCount: 20,
    completedChapters: 12,
  },
  {
    id: 2,
    title: "Git実践ワークフロー",
    description: "ブランチ戦略やコンフリクト解決など、チーム開発で必須のGitスキルを習得します。",
    category: CourseCategory.GIT,
    chapterCount: 15,
    completedChapters: 15,
  },
  {
    id: 3,
    title: "CS基礎 for Mobile",
    description: "OS、メモリ、スレッドの概念を理解し、パフォーマンスの高いアプリ設計の土台を築きます。",
    category: CourseCategory.CS,
    chapterCount: 10,
    completedChapters: 3,
  },
  {
    id: 4,
    title: "Jetpack Compose 応用",
    description: "複雑なUI、アニメーション、状態管理など、より高度なComposeテクニックを学びます。",
    category: CourseCategory.ADVANCED,
    chapterCount: 25,
    completedChapters: 0,
  }
];

function App() {
  const [user] = useState<User>(mockUser);
  const [courses] = useState<Course[]>(mockCourses);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-navy-dark text-text-primary font-sans">
      <Header user={user} />

      <main className="max-w-4xl mx-auto p-4 pb-28">
        <h1 className="text-2xl font-bold text-text-primary mb-2">今日の目標</h1>
        <p className="text-text-secondary mb-6">コードリーディング訓練を1問クリアしよう！</p>
        
        <h2 className="text-xl font-bold text-text-primary mb-4">コース一覧</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {courses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </main>

      <BottomNav onAiTutorClick={() => setIsModalOpen(true)} />

      <AIFeedbackModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default App;
