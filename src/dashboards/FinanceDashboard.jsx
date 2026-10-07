import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const payrollData = [
  { month: 'Jan', budget: 420000, actual: 410000 },
  { month: 'Feb', budget: 420000, actual: 425000 },
  { month: 'Mar', budget: 450000, actual: 440000 },
  { month: 'Apr', budget: 450000, actual: 456545 },
];

export default function FinanceDashboard() {
  return (
    <div className="space-y-6 text-slate-900 dark:text-slate-100">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700">
          <div className="text-xs text-slate-500 dark:text-slate-400">Budget Remaining</div>
          <div className="text-2xl font-bold mt-1">$2,458,900</div>
          <div className="w-full bg-slate-100 dark:bg-slate-700 h-2 rounded-full mt-3 overflow-hidden">
            <div className="bg-emerald-500 h-full w-[68%]"></div>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700">
          <div className="text-xs text-slate-500 dark:text-slate-400">Total Payroll Cost</div>
          <div className="text-2xl font-bold mt-1">$2,458,900</div>
          <div className="text-xs text-emerald-500 mt-2 font-medium">+14% Headcount Growth</div>
        </div>
        <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700">
          <div className="text-xs text-slate-500 dark:text-slate-400">Reimbursements Pending</div>
          <div className="text-2xl font-bold text-rose-500 mt-1">$124,200</div>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700">
        <h3 className="font-bold text-base mb-4">Department Budget vs Actual Spending</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={payrollData}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
              <XAxis dataKey="month" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }} />
              <Line type="monotone" dataKey="budget" stroke="#3b82f6" strokeWidth={2} />
              <Line type="monotone" dataKey="actual" stroke="#ff6b35" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}