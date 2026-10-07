import React from 'react';
import { DollarSign, FileText, ShieldAlert } from 'lucide-react';

export default function PayrollDashboard() {
  return (
    <div className="space-y-6 text-slate-900 dark:text-slate-100">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Payroll Operations</h1>
          <p className="text-xs text-slate-500 dark:text-slate-400">Payment processing, batch validation, and tax deduction trends.</p>
        </div>
        <button className="px-4 py-2 bg-orange-500 text-white rounded-lg text-xs font-semibold">
          Run Payroll
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700">
          <div className="text-xs text-slate-500 dark:text-slate-400">Total Gross Payroll</div>
          <div className="text-2xl font-bold mt-1">$2,458,320</div>
        </div>
        <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700">
          <div className="text-xs text-slate-500 dark:text-slate-400">Net Payable Amount</div>
          <div className="text-2xl font-bold text-emerald-500 mt-1">$1,987,450</div>
        </div>
        <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700">
          <div className="text-xs text-slate-500 dark:text-slate-400">Total Deductions</div>
          <div className="text-2xl font-bold text-rose-500 mt-1">$470,870</div>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700">
        <h3 className="font-bold text-base mb-4">Payroll Processing Pipeline</h3>
        <div className="space-y-3 text-xs">
          {['Data Validation', 'Attendance Calculation', 'Salary Computation', 'Deductions Processing', 'Payment Generation'].map((step, idx) => (
            <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
              <span className="font-medium">{idx + 1}. {step}</span>
              <span className="text-xs bg-emerald-100 dark:bg-emerald-950 text-emerald-600 px-2.5 py-0.5 rounded-full font-bold">Completed</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}