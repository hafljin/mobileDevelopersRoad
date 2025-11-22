import { useState, useEffect } from 'react';

export interface KotlinQuestion {
  id: number;
  title: string;
  description: string;
  code: string;
  answer: string;
  level?: number;
}

export function useKotlinQuestions() {
  const [questions, setQuestions] = useState<KotlinQuestion[]>([]);

  useEffect(() => {
    fetch('/src/data/kotlinQuestions.json')
      .then(res => res.json())
      .then(setQuestions)
      .catch(() => setQuestions([]));
  }, []);

  return questions;
}
