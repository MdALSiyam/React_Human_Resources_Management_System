import React from 'react';
import { LifeBuoy, AlertCircle, CheckCircle, Clock } from 'lucide-react';

export default function HelpDeskDashboard() {
  return (
    <div className="space-y-6 text-slate-900 dark:text-slate-100">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Help Desk & Support</h1>
          <p className="text-xs text-slate-500 dark:text-slate-400">Track internal HR & IT tickets, SLA compliance, and agent performance.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
          <div className="text-xs text-slate-500 dark:text-slate-400">Total Tickets</div>
          <div className="text-2xl font-bold mt-1">2,847</div>
        </div>
        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
          <div className="text-xs text-slate-500 dark:text-slate-400">Open Tickets</div>
          <div className="text-2xl font-bold text-amber-500 mt-1">342</div>
        </div>
        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
          <div className="text-xs text-slate-500 dark:text-slate-400">Avg Resolution Time</div>
          <div className="text-2xl font-bold text-blue-500 mt-1">2.4h</div>
        </div>
        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
          <div className="text-xs text-slate-500 dark:text-slate-400">SLA Compliance</div>
          <div className="text-2xl font-bold text-emerald-500 mt-1">96.8%</div>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
        <div className="p-4 border-b border-slate-200 dark:border-slate-700 font-bold text-sm">
          Agent Performance
        </div>
        <div className="divide-y divide-slate-200 dark:divide-slate-700 text-sm">
          {[
            { name: 'Michael Johnson', tickets: 128, rate: '94%' },
            { name: 'Emily Davis', tickets: 95, rate: '91%' },
            { name: 'Robert Martinez', tickets: 84, rate: '88%' },
            { name: 'Megan Walker', tickets: 72, rate: '80%' },
          ].map((agent, i) => (
            <div key={i} className="p-4 flex items-center justify-between">
              <div>
                <div className="font-semibold">{agent.name}</div>
                <div className="text-xs text-slate-400">{agent.tickets} Tickets Solved</div>
              </div>
              <div className="text-right">
                <span className="text-xs font-bold text-emerald-500">{agent.rate} Resolution Rate</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}