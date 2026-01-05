export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black border-t border-slate-200 dark:border-slate-800 mt-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
          <div>
            <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white">regX AI</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Infrastructure for enforcing AI trust and deterministic decisioning
            </p>
          </div>
          <div className="text-sm text-slate-600 dark:text-slate-400">
            <p>© {new Date().getFullYear()} regX AI. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

