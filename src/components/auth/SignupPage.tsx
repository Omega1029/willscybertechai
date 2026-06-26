import React, { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { Eye, EyeOff, Mail, Lock, Check, X } from 'lucide-react';

interface PasswordRule {
  label: string;
  test: (pw: string) => boolean;
}

const PASSWORD_RULES: PasswordRule[] = [
  { label: 'At least 8 characters', test: (pw) => pw.length >= 8 },
  { label: 'One uppercase letter', test: (pw) => /[A-Z]/.test(pw) },
  { label: 'One lowercase letter', test: (pw) => /[a-z]/.test(pw) },
  { label: 'One number', test: (pw) => /\d/.test(pw) },
];

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'error' | 'success'; text: string } | null>(null);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [confirmTouched, setConfirmTouched] = useState(false);
  const navigate = useNavigate();

  const ruleResults = useMemo(() => PASSWORD_RULES.map((r) => r.test(password)), [password]);
  const allRulesPassed = ruleResults.every(Boolean);
  const passwordsMatch = password === confirmPassword;
  const strength = ruleResults.filter(Boolean).length;

  const strengthLabel = ['', 'Weak', 'Fair', 'Good', 'Strong'][strength];
  const strengthColor = ['', 'bg-red-400', 'bg-amber-400', 'bg-blue-400', 'bg-blue-500'][strength];

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordTouched(true);
    setConfirmTouched(true);
    setMessage(null);

    if (!allRulesPassed) {
      setMessage({ type: 'error', text: 'Please meet all password requirements.' });
      return;
    }
    if (!passwordsMatch) {
      setMessage({ type: 'error', text: 'Passwords do not match.' });
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: { emailRedirectTo: undefined },
      });

      if (error) {
        setMessage({ type: 'error', text: error.message });
      } else {
        setMessage({ type: 'success', text: 'Account created successfully! Redirecting...' });
        setTimeout(() => navigate('/'), 1000);
      }
    } catch {
      setMessage({ type: 'error', text: 'An unexpected error occurred.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] py-12">
      <div className="max-w-md w-full mx-4">
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">

          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center gap-2 mb-6">
              <span className="text-xl font-bold tracking-tighter text-white uppercase">NEURAL INDEX</span>
            </Link>
            <h1 className="text-2xl font-bold text-white">Create Account</h1>
            <p className="mt-1.5 text-zinc-400">Sign up to get started</p>
          </div>

          {message && (
            <div className={`mb-6 p-4 rounded-lg text-sm ${
              message.type === 'error'
                ? 'bg-red-900/30 text-red-300 border border-red-500/30'
                : 'bg-blue-500/10 text-blue-400 border border-blue-500/30'
            }`}>
              {message.text}
            </div>
          )}

          <form onSubmit={handleSignup} className="space-y-5">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-10 pr-4 py-3 border border-zinc-700 rounded-lg bg-zinc-950 text-white placeholder-zinc-500 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-zinc-300 mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setPasswordTouched(true); }}
                  required
                  className={`w-full pl-10 pr-12 py-3 border rounded-lg bg-zinc-950 text-white placeholder-zinc-500 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors ${
                    passwordTouched && !allRulesPassed ? 'border-red-500/50' : 'border-zinc-700'
                  }`}
                  placeholder="Create a password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              {/* Strength bar */}
              {passwordTouched && password.length > 0 && (
                <div className="mt-2">
                  <div className="flex gap-1 mb-1.5">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                          i <= strength ? strengthColor : 'bg-zinc-700'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-zinc-500">{strengthLabel}</p>
                </div>
              )}

              {/* Rules checklist */}
              {passwordTouched && (
                <ul className="mt-3 space-y-1.5">
                  {PASSWORD_RULES.map((rule, i) => (
                    <li key={rule.label} className="flex items-center gap-2 text-xs">
                      {ruleResults[i] ? (
                        <Check className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      ) : (
                        <X className="w-3.5 h-3.5 text-red-400 shrink-0" />
                      )}
                      <span className={ruleResults[i] ? 'text-blue-400' : 'text-zinc-500'}>
                        {rule.label}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-zinc-300 mb-1.5">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => { setConfirmPassword(e.target.value); setConfirmTouched(true); }}
                  required
                  className={`w-full pl-10 pr-12 py-3 border rounded-lg bg-zinc-950 text-white placeholder-zinc-500 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors ${
                    confirmTouched && confirmPassword.length > 0
                      ? passwordsMatch ? 'border-blue-400/50' : 'border-red-500/50'
                      : 'border-zinc-700'
                  }`}
                  placeholder="Confirm your password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300"
                >
                  {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {confirmTouched && confirmPassword.length > 0 && (
                <p className={`mt-1.5 text-xs flex items-center gap-1.5 ${passwordsMatch ? 'text-blue-400' : 'text-red-400'}`}>
                  {passwordsMatch
                    ? <><Check className="w-3.5 h-3.5" /> Passwords match</>
                    : <><X className="w-3.5 h-3.5" /> Passwords do not match</>
                  }
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-500 hover:bg-blue-400 text-black font-semibold py-3 px-4 rounded-lg transition-all flex items-center justify-center disabled:opacity-60"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
              ) : (
                'Create Account'
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-zinc-400 text-sm">
              Already have an account?{' '}
              <Link to="/login" className="text-blue-400 hover:text-blue-300 font-semibold">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
