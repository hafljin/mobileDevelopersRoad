
import React, { useState, useCallback } from 'react';
import { getAIFeedback } from '../services/geminiService';
import { Bot, X } from './icons';

interface AIFeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AIFeedbackModal: React.FC<AIFeedbackModalProps> = ({ isOpen, onClose }) => {
  const [code, setCode] = useState('');
  const [feedback, setFeedback] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGetFeedback = useCallback(async () => {
    if (!code.trim()) {
      setError('フィードバックするコードを入力してください。');
      return;
    }
    setIsLoading(true);
    setError('');
    setFeedback('');
    try {
      const result = await getAIFeedback(code);
      setFeedback(result);
    } catch (err) {
      setError('フィードバックの取得に失敗しました。');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [code]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
      <div className="bg-navy-medium rounded-xl border border-border-color w-full max-w-2xl max-h-[90vh] flex flex-col">
        <header className="flex items-center justify-between p-4 border-b border-border-color">
          <div className="flex items-center space-x-2">
            <Bot className="w-6 h-6 text-accent-orange" />
            <h2 className="text-lg font-bold text-text-primary">AI チューター</h2>
          </div>
          <button onClick={onClose} className="text-text-secondary hover:text-text-primary">
            <X className="w-6 h-6" />
          </button>
        </header>
        
        <div className="p-6 flex-grow overflow-y-auto space-y-4">
          <div>
            <label htmlFor="code-input" className="block text-sm font-medium text-text-secondary mb-2">
              フィードバックが欲しいコードを貼り付けてください
            </label>
            <textarea
              id="code-input"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="fun main() { ... }"
              className="w-full h-40 p-3 bg-navy-dark border border-border-color rounded-md text-text-primary font-mono text-sm focus:ring-2 focus:ring-accent-orange focus:border-accent-orange"
              disabled={isLoading}
            />
          </div>
          
          {error && <p className="text-red-400 text-sm">{error}</p>}
          
          {isLoading && (
            <div className="text-center py-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent-orange mx-auto"></div>
              <p className="mt-2 text-text-secondary">AIが分析中です...</p>
            </div>
          )}

          {feedback && (
            <div className="bg-navy-dark p-4 rounded-md border border-border-color">
              <h3 className="text-md font-semibold text-accent-orange mb-2">フィードバック:</h3>
              <div
                className="prose prose-invert prose-sm max-w-none text-text-primary"
                dangerouslySetInnerHTML={{ __html: feedback.replace(/\\n/g, '<br />') }}
              />
            </div>
          )}
        </div>
        
        <footer className="p-4 border-t border-border-color">
          <button
            onClick={handleGetFeedback}
            disabled={isLoading}
            className="w-full bg-accent-orange text-white font-bold py-3 px-4 rounded-lg transition-all duration-200 enabled:hover:bg-accent-orange-hover disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? '分析中...' : 'フィードバックを生成'}
          </button>
        </footer>
      </div>
    </div>
  );
};

export default AIFeedbackModal;
