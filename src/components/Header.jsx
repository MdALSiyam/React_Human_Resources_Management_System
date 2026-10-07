import React from 'react';
import { Menu, Search, Moon, Sun, Bell, Plus } from 'lucide-react';

export default function Header({ setSidebarOpen, darkMode, toggleDarkMode, openAddEmployeeModal }) {
  return (
    <header className="h-16 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between px-4 lg:px-8 shrink-0">
      <div className="flex items-center space-x-4">
        <button 
          onClick={() => setSidebarOpen(true)}
          className="lg:hidden p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200"
        >
          <Menu className="w-6 h-6" />
        </button>
        
        <div className="relative hidden sm:block w-64 lg:w-80">
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search employees, assets, invoices..." 
            className="w-full pl-9 pr-4 py-2 text-sm bg-slate-100 dark:bg-slate-700/60 border-0 rounded-lg text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:ring-2 focus:ring-orange-500 focus:outline-none"
          />
        </div>
      </div>

      <div className="flex items-center space-x-3">
        <button 
          onClick={toggleDarkMode}
          className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
        >
          {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
        </button>

        <button className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-orange-500 rounded-full"></span>
        </button>

        <button 
          onClick={openAddEmployeeModal}
          className="hidden md:flex items-center space-x-1 px-3 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium rounded-lg transition shadow-sm"
        >
          <Plus className="w-4 h-4" />
          <span>Add Employee</span>
        </button>

        <div className="flex items-center space-x-3 pl-2 border-l border-slate-200 dark:border-slate-700">
          <img 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=80" 
            alt="Avatar" 
            className="w-8 h-8 rounded-full ring-2 ring-orange-500/30"
          />
          <div className="hidden sm:block text-left">
            <div className="text-xs font-bold leading-none text-slate-900 dark:text-slate-100">Arslan Khan</div>
            <div className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">Super Admin</div>
          </div>
        </div>
      </div>
    </header>
  );
}