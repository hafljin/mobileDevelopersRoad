
export interface Rank {
  id: number;
  name: string;
  minExp: number;
  maxExp: number;
}

export interface User {
  id: number;
  name: string;
  email: string;
  rank: Rank;
  exp: number;
}

export enum CourseCategory {
  ANDROID = "Android基礎",
  GIT = "Git運用",
  CS = "CS理論",
  ADVANCED = "Android応用"
}

export interface Course {
  id: number;
  title: string;
  description: string;
  category: CourseCategory;
  chapterCount: number;
  completedChapters: number;
}
