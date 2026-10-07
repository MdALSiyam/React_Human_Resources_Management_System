import React from 'react';
import { Server, ShieldCheck, Cpu, HardDrive } from 'lucide-react';

export default function ITAdminDashboard() {
  return (
    <div className="space-y-6 text-slate-900 dark:text-slate-100">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">IT Infrastructure & Security</h1>
          <p className="text-xs text-slate-500 dark:text-slate-400">System health, server status, MFA compliance, and storage logs.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
          <div className="text-xs text-slate-500 dark:text-slate-400">System Uptime</div>
          <div className="text-2xl font-bold text-emerald-500 mt-1">99.9%</div>
        </div>
        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
          <div className="text-xs text-slate-500 dark:text-slate-400">Active Servers</div>
          <div className="text-2xl font-bold text-blue-500 mt-1">18 Running</div>
        </div>
        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
          <div className="text-xs text-slate-500 dark:text-slate-400">System Health</div>
          <div className="text-2xl font-bold text-emerald-500 mt-1">Healthy</div>
        </div>
        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
          <div className="text-xs text-slate-500 dark:text-slate-400">MFA Enabled Users</div>
          <div className="text-2xl font-bold text-purple-500 mt-1">94%</div>
        </div>
      </div>
    </div>
  );
}