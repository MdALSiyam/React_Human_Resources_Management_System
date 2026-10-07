import React from 'react';
import { UserPlus, Briefcase, Award } from 'lucide-react';

export default function RecruitmentDashboard() {
  return (
    <div className="space-y-6 text-slate-900 dark:text-slate-100">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Recruitment Dashboard</h1>
          <p className="text-xs text-slate-500 dark:text-slate-400">Candidates hiring analysis and stage performance.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
          <div className="text-xs text-slate-500 dark:text-slate-400">Open Positions</div>
          <div className="text-2xl font-bold mt-1">47</div>
        </div>
        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
          <div className="text-xs text-slate-500 dark:text-slate-400">Total Candidates</div>
          <div className="text-2xl font-bold text-blue-500 mt-1">2,384</div>
        </div>
        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
          <div className="text-xs text-slate-500 dark:text-slate-400">Interviews Today</div>
          <div className="text-2xl font-bold text-amber-500 mt-1">12</div>
        </div>
        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
          <div className="text-xs text-slate-500 dark:text-slate-400">Offers Released</div>
          <div className="text-2xl font-bold text-emerald-500 mt-1">28</div>
        </div>
      </div>
    </div>
  );
}