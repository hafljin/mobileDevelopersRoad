import React, { useState } from 'react';

interface SignInProps {
  onSignIn: () => void;
}

const SignIn: React.FC<SignInProps> = ({ onSignIn }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setTimeout(() => {
      setLoading(false);
      setMessage('（仮）サインイン処理が完了しました。');
      onSignIn();
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-navy-dark text-text-primary">
      <div className="bg-navy-light rounded p-8 shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">サインイン</h2>
        <form onSubmit={handleSignIn} className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-2 text-text-secondary">メールアドレス</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="w-full p-2 rounded border border-color bg-navy-dark text-text-primary"
              disabled={loading}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-accent-orange hover:bg-accent-orange-hover text-white font-bold py-2 px-4 rounded"
            disabled={loading}
          >
            {loading ? 'サインイン中...' : 'サインイン'}
          </button>
        </form>
        {message && <div className="mt-4 text-green-400 text-center">{message}</div>}
      </div>
    </div>
  );
};

export default SignIn;
