import React from 'react';
import { MessageSquare, X } from 'lucide-react';

export default function AIAssistantDrawer({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm flex justify-end">
      <div className="w-full max-w-md bg-white dark:bg-slate-800 h-full shadow-2xl flex flex-col border-l border-slate-200 dark:border-slate-700">
        <div className="p-4 bg-orange-500 text-white flex justify-between items-center">
          <div className="flex items-center space-x-2 font-bold">
            <MessageSquare className="w-5 h-5" />
            <span>SmartHR Copilot AI</span>
          </div>
          <button onClick={onClose}><X className="w-5 h-5" /></button>
        </div>
        <div className="flex-1 p-4 space-y-3 overflow-y-auto text-xs">
          <div className="p-3 bg-slate-100 dark:bg-slate-700 rounded-xl">
            How can I assist with your HR, Payroll or Late Arrival analytics today?
          </div>
        </div>
        <div className="p-4 border-t border-slate-200 dark:border-slate-700">
          <input type="text" placeholder="Type prompt..." className="w-full p-2.5 text-sm bg-slate-100 dark:bg-slate-700 rounded-lg outline-none" />
        </div>
      </div>
    </div>
  );
}