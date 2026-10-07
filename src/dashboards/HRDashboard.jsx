import React from 'react';
import { Users, Clock, Calendar, CheckCircle2 } from 'lucide-react';

export default function HRDashboard() {
  return (
    <div className="space-y-6 text-slate-900 dark:text-slate-100">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">HR Operations Dashboard</h1>
          <p className="text-xs text-slate-500 dark:text-slate-400">Employee status, recruitment pipeline, and leave distribution.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
          <div className="text-xs text-slate-500 dark:text-slate-400">Total Employees</div>
          <div className="text-2xl font-bold mt-1">1,848</div>
          <div className="text-xs text-emerald-500 mt-1">+12% vs last month</div>
        </div>
        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
          <div className="text-xs text-slate-500 dark:text-slate-400">Active Employees</div>
          <div className="text-2xl font-bold text-emerald-500 mt-1">1,248</div>
        </div>
        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
          <div className="text-xs text-slate-500 dark:text-slate-400">Late Arrivals Today</div>
          <div className="text-2xl font-bold text-amber-500 mt-1">12</div>
        </div>
        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
          <div className="text-xs text-slate-500 dark:text-slate-400">Total Payroll Cost</div>
          <div className="text-2xl font-bold mt-1">$2.4M</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700">
          <h3 className="font-bold text-base mb-4">Employee Status & Type</h3>
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
              <div className="text-2xl font-bold text-blue-500">1,054</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Full Time</div>
            </div>
            <div className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
              <div className="text-2xl font-bold text-emerald-500">568</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Contractors</div>
            </div>
            <div className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
              <div className="text-2xl font-bold text-purple-500">80</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Probation</div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700">
          <h3 className="font-bold text-base mb-4">Upcoming Interviews</h3>
          <div className="space-y-3 text-xs">
            <div className="p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg flex justify-between items-center">
              <div>
                <div className="font-bold">UI/UX Design Interview</div>
                <div className="text-slate-400">10:30 AM - Room A</div>
              </div>
              <button className="px-2.5 py-1 bg-orange-500 text-white rounded font-medium">Join</button>
            </div>
            <div className="p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg flex justify-between items-center">
              <div>
                <div className="font-bold">Sr. React Developer</div>
                <div className="text-slate-400">02:00 PM - Online</div>
              </div>
              <button className="px-2.5 py-1 bg-orange-500 text-white rounded font-medium">Join</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}