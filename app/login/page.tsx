// app/login/page.tsx
'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub, FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    rememberMe: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your authentication logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`${provider} login clicked`);
    // Add social login logic here
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Main Content - Centered Login Box */}
      <main className="py-20 flex-1 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          {/* Login Card */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
            
            {/* Header Section */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white text-center">
              <motion.div
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h1 className="text-2xl font-bold mb-2">
                  Welcome to <span className="text-yellow-300">Portfolio</span>
                </h1>
                <p className="text-blue-100 text-sm">
                  {isLogin 
                    ? "Sign in to access your dashboard"
                    : "Create your account to get started"
                  }
                </p>
              </motion.div>
            </div>

            {/* Form Section */}
            <div className="p-6">
              {/* Social Login Buttons */}
              <motion.div 
                className="grid grid-cols-2 gap-3 mb-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <motion.button
                  onClick={() => handleSocialLogin('google')}
                  className="flex items-center justify-center gap-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 py-2.5 px-4 rounded-lg hover:shadow transition-all duration-300 text-sm"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FcGoogle className="text-lg" />
                  <span>Google</span>
                </motion.button>
                <motion.button
                  onClick={() => handleSocialLogin('github')}
                  className="flex items-center justify-center gap-2 bg-gray-800 dark:bg-gray-900 text-white py-2.5 px-4 rounded-lg hover:shadow transition-all duration-300 text-sm"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaGithub className="text-lg" />
                  <span>GitHub</span>
                </motion.button>
              </motion.div>

              {/* Divider */}
              <div className="flex items-center my-6">
                <div className="flex-1 border-t border-gray-300 dark:border-gray-600"></div>
                <span className="px-3 text-gray-500 dark:text-gray-400 text-sm">or continue with</span>
                <div className="flex-1 border-t border-gray-300 dark:border-gray-600"></div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit}>
                {!isLogin && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    className="mb-4"
                  >
                    <label className="block text-gray-700 dark:text-gray-300 mb-1 text-sm">
                      Full Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaEnvelope className="text-gray-400 text-sm" />
                      </div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full pl-10 pr-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white text-sm transition-all duration-300"
                        placeholder="John Doe"
                        required={!isLogin}
                      />
                    </div>
                  </motion.div>
                )}

                {/* Email Input */}
                <div className="mb-4">
                  <label className="block text-gray-700 dark:text-gray-300 mb-1 text-sm">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaEnvelope className="text-gray-400 text-sm" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white text-sm transition-all duration-300"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>

                {/* Password Input */}
                <div className="mb-6">
                  <label className="block text-gray-700 dark:text-gray-300 mb-1 text-sm">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaLock className="text-gray-400 text-sm" />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full pl-10 pr-10 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white text-sm transition-all duration-300"
                      placeholder="••••••••"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
                      {showPassword ? (
                        <FaEyeSlash className="text-gray-400 hover:text-gray-600 text-sm" />
                      ) : (
                        <FaEye className="text-gray-400 hover:text-gray-600 text-sm" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Remember Me & Forgot Password */}
                      {isLogin && (
                                        <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleChange}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label className="ml-2 text-gray-700 dark:text-gray-300 text-sm">
                      Remember me
                    </label>
                  </div>
                  {isLogin && (
                    <a href="#" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 text-sm transition-colors">
                      Forgot password?
                    </a>
                  )}
                </div>
                      )}

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-2.5 px-4 rounded-lg shadow hover:shadow-lg transition-all duration-300 text-sm"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isLogin ? 'Sign In' : 'Create Account'}
                </motion.button>
              </form>

              {/* Toggle between Login/Signup */}
              <div className="text-center mt-6">
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {isLogin ? "Don't have an account?" : "Already have an account?"}
                  <button
                    onClick={() => setIsLogin(!isLogin)}
                    className="ml-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 font-medium text-sm transition-colors"
                  >
                    {isLogin ? 'Sign Up' : 'Sign In'}
                  </button>
                </p>
              </div>

              {/* Terms */}
              <p className="text-center text-gray-500 dark:text-gray-400 text-xs mt-6">
                By continuing, you agree to our{' '}
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
                  Terms
                </a>{' '}
                and{' '}
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
}