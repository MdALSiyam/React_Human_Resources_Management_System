import React from 'react';

export default function AttendanceDashboard() {
  return (
    <div className="space-y-6 text-slate-900 dark:text-slate-100">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Attendance Dashboard</h2>
        <span className="text-xs bg-slate-200 dark:bg-slate-700 px-3 py-1.5 rounded-lg">Total Working Days: 300</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
          <div className="text-xs text-slate-500 dark:text-slate-400">Present Today</div>
          <div className="text-2xl font-bold text-emerald-500 mt-1">2,458</div>
          <div className="text-xs text-slate-400 mt-1">86.3% Overall Attendance</div>
        </div>
        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
          <div className="text-xs text-slate-500 dark:text-slate-400">Late Arrivals</div>
          <div className="text-2xl font-bold text-amber-500 mt-1">22</div>
          <div className="text-xs text-slate-400 mt-1">Avg Delay: 18 mins</div>
        </div>
        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
          <div className="text-xs text-slate-500 dark:text-slate-400">Missing Punches</div>
          <div className="text-2xl font-bold text-rose-500 mt-1">09</div>
          <div className="text-xs text-slate-400 mt-1">Requires HR Verification</div>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
        <div className="p-4 border-b border-slate-200 dark:border-slate-700 font-bold text-sm">
          Frequent Late Arrivals
        </div>
        <div className="divide-y divide-slate-200 dark:divide-slate-700 text-sm">
          {[
            { name: 'Michael Johnson', time: '09:45 AM', dept: 'Development' },
            { name: 'Emily Davis', time: '09:30 AM', dept: 'Human Resources' },
            { name: 'Robert Martinez', time: '09:25 AM', dept: 'Marketing' },
          ].map((row, i) => (
            <div key={i} className="p-4 flex items-center justify-between">
              <div>
                <div className="font-semibold">{row.name}</div>
                <div className="text-xs text-slate-400">{row.dept}</div>
              </div>
              <div className="text-right">
                <div className="text-xs font-mono font-bold text-rose-500">{row.time}</div>
                <span className="text-[10px] bg-rose-100 dark:bg-rose-950 text-rose-600 dark:text-rose-400 px-2 py-0.5 rounded">Check-in Alert</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}