// app/components/Footer.tsx
const socialLinks = [
  { name: 'GitHub', url: 'https://github.com', icon: '🐱' },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: '💼' },
  { name: 'Twitter', url: 'https://twitter.com', icon: '🐦' },
  { name: 'Email', url: 'mailto:sultanum@example.com', icon: '✉️' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white py-12 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 slide-up">
            <h3 className="text-2xl font-bold mb-2">Sultanum Mobin</h3>
            <p className="text-gray-400">Full Stack Developer</p>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0 slide-up">
            {socialLinks.map((social, index) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {social.icon}
                <span className="sr-only">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center slide-up">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Sultanum Mobin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}