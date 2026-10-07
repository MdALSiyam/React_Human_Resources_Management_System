import React from 'react';
import { X } from 'lucide-react';

export default function AddEmployeeModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-slate-900/50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-800 rounded-2xl max-w-md w-full p-6 space-y-4 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100">
        <div className="flex justify-between items-center border-b pb-3 border-slate-200 dark:border-slate-700 font-bold">
          <h3>Add New Employee</h3>
          <button onClick={onClose}><X className="w-5 h-5" /></button>
        </div>
        <div className="space-y-3 text-xs">
          <div>
            <label className="block mb-1 font-semibold">Full Name</label>
            <input type="text" placeholder="John Doe" className="w-full p-2 border rounded-lg dark:bg-slate-700 dark:border-slate-600" />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Email</label>
            <input type="email" placeholder="john@company.com" className="w-full p-2 border rounded-lg dark:bg-slate-700 dark:border-slate-600" />
          </div>
        </div>
        <div className="flex justify-end space-x-2 pt-2">
          <button onClick={onClose} className="px-3 py-1.5 border rounded-lg text-xs">Cancel</button>
          <button onClick={onClose} className="px-3 py-1.5 bg-orange-500 text-white rounded-lg text-xs font-semibold">Save</button>
        </div>
      </div>
    </div>
  );
}