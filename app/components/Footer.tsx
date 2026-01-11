import { Shield } from 'lucide-react';

interface FooterProps {
  isDark: boolean;
}

export function Footer({ isDark }: FooterProps) {
  return (
    <footer className={`py-12 ${isDark ? 'bg-gray-950 text-white border-t border-gray-800' : 'bg-gray-900 text-white'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Shield className="w-8 h-8 text-emerald-500" />
            <div>
              <div className="text-2xl font-bold">regX AI</div>
              <div className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Infrastructure for enforcing AI trust and deterministic decisioning</div>
            </div>
          </div>
          <div className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
            © 2026 regX AI. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

