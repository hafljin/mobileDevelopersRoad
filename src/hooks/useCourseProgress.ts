import { useState, useEffect } from 'react';

export type CourseProgress = {
  [courseId: number]: number; // completedChapters
};

const STORAGE_KEY = 'courseProgress';

export function useCourseProgress(initial: CourseProgress = {}) {
  const [progress, setProgress] = useState<CourseProgress>(initial);

  // 初回ロード時にlocalStorageから取得
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setProgress(JSON.parse(stored));
    }
  }, []);

  // 進捗が変わるたびlocalStorageへ保存
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  // 進捗を更新する関数
  const updateProgress = (courseId: number, completedChapters: number) => {
    setProgress(prev => ({ ...prev, [courseId]: completedChapters }));
  };

  return { progress, updateProgress };
}
