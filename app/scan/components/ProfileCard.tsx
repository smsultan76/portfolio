"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiUser } from 'react-icons/fi';
import { USER_CONFIG } from '@/app/config/user-config';

interface ProfileCardProps {
  onPhotoClick?: () => void;
}

export default function ProfileCard({ onPhotoClick }: ProfileCardProps) {
  return (
    <div className="relative w-full max-w-xl">
      {/* Glowing effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 blur-2xl opacity-30 animate-pulse" />
      
      {/* Main frame */}
      <motion.div
        initial={{ scale: 0.9, rotate: -5 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="relative rounded-3xl p-3 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500"
      >
        <div className="rounded-2xl overflow-hidden bg-gray-900 p-4">
          {/* Photo container */}
          <div 
            className="relative w-full aspect-[3/4] rounded-xl overflow-hidden group cursor-pointer"
            onClick={onPhotoClick}
          >
            {USER_CONFIG.photoUrl ? (
              <Image
                src={USER_CONFIG.photoUrl}
                alt={USER_CONFIG.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex flex-col items-center justify-center">
                <FiUser className="text-gray-400 text-8xl mb-4" />
                <span className="text-gray-400 text-lg">Add your photo</span>
              </div>
            )}
            
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                className="absolute bottom-0 left-0 right-0 p-6"
              >
                <h3 className="text-3xl font-bold text-white mb-2">{USER_CONFIG.name}</h3>
                <p className="text-purple-300 text-lg">{USER_CONFIG.title}</p>
                <div className="mt-4 flex gap-2">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-3 h-3 rounded-full bg-white animate-bounce"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}