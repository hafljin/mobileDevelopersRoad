
import React from 'react';
import type { Course } from '../types';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const progress = course.chapterCount > 0 ? (course.completedChapters / course.chapterCount) * 100 : 0;

  return (
    <div className="bg-navy-medium border border-border-color rounded-lg p-5 transition-all duration-300 hover:border-accent-orange hover:shadow-lg hover:-translate-y-1">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-bold text-text-primary">{course.title}</h3>
        <span className="bg-navy-light text-accent-orange text-xs font-semibold px-2.5 py-1 rounded-full">
          {course.category}
        </span>
      </div>
      <p className="text-text-secondary mb-4 text-sm">{course.description}</p>
      <div>
        <div className="flex justify-between items-center mb-1 text-xs text-text-secondary">
          <span>進捗</span>
          <span>{course.completedChapters} / {course.chapterCount}</span>
        </div>
        <div className="w-full bg-navy-light rounded-full h-2">
          <div className="bg-accent-orange h-2 rounded-full" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
