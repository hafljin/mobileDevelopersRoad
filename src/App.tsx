
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import TaskDetail from './pages/TaskDetail';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import CourseCard from './components/CourseCard';
import AIFeedbackModal from './components/AIFeedbackModal';
import QuestionSelector from './components/QuestionSelector';
import QuestionScreen from './components/QuestionScreen';
import SignIn from './pages/SignIn';
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
  // 問題選択状態
  const [selected, setSelected] = useState<{ language: string; level: number } | null>(null);
  // サインイン画面表示状態
  const [showSignIn, setShowSignIn] = useState(true);

  return (
    <Router>
      <div className="min-h-screen bg-navy-dark text-text-primary font-sans">
        {showSignIn ? (
          <SignIn onSignIn={() => setShowSignIn(false)} />
        ) : (
          <>
            <Header user={user} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/questions" element={<QuestionSelector onStart={(language, level) => {}} />} />
              <Route path="/task/:id" element={<TaskDetail />} />
            </Routes>
            <BottomNav onAiTutorClick={() => setIsModalOpen(true)} />
            <AIFeedbackModal 
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
            />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
