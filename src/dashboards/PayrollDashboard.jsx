import React from 'react';
import { 
  DollarSign, FileText, ShieldAlert, Calendar, Plus, MoreVertical, ArrowUpRight, CheckCircle2, Clock, AlertCircle 
} from 'lucide-react';

export default function PayrollDashboard() {
  return (
    <div className="space-y-6 text-slate-900 dark:text-slate-100 p-2 sm:p-6 bg-slate-50/50 dark:bg-slate-900 min-h-screen font-sans">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-800 dark:text-white">Payroll Dashboard</h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Dashboard &gt; Payroll Dashboard</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 text-xs px-3 py-2 bg-slate-100 dark:bg-slate-700/60 rounded-lg text-slate-600 dark:text-slate-300 font-medium border border-slate-200 dark:border-slate-600">
            <Calendar size={14} className="text-orange-500" />
            <span>Dec 2024</span>
          </div>
          <button className="px-3 py-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 text-slate-700 dark:text-slate-200 rounded-lg text-xs font-semibold transition-colors">
            Monthly Report
          </button>
          <button className="flex items-center gap-1.5 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-xs font-semibold shadow-sm transition-colors">
            <Plus size={14} /> Run Payroll
          </button>
        </div>
      </div>

      {/* Payroll Status Bar */}
      <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Payroll Status:</span>
          <span className="text-xs font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-500/20">Processing</span>
        </div>
        <div className="flex items-center gap-6 text-xs text-slate-500 dark:text-slate-400">
          <span>Cut-off: <strong className="text-slate-700 dark:text-slate-200">Dec 25, 2024</strong></span>
          <span>Payment Date: <strong className="text-slate-700 dark:text-slate-200">Dec 31, 2024</strong></span>
        </div>
      </div>

      {/* Row 1: Overview & Salary Range Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Overview Box */}
        <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm lg:col-span-2 flex flex-col justify-between">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-sm text-slate-800 dark:text-white">Overview</h3>
            <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"><MoreVertical size={16} /></button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            <div className="p-4 bg-slate-900 text-white rounded-xl relative overflow-hidden flex flex-col justify-between shadow-sm">
              <div>
                <div className="text-xs text-slate-400">Total Gross Payroll</div>
                <div className="text-2xl font-bold mt-1 text-white">$2,458,320</div>
              </div>
              <div className="mt-4 text-[11px] text-emerald-400 font-medium flex items-center gap-1">
                <ArrowUpRight size={12} /> +18% vs last month
              </div>
            </div>

            <div className="p-4 bg-white dark:bg-slate-700/40 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-col justify-between shadow-sm">
              <div>
                <div className="text-xs text-slate-500 dark:text-slate-400">Net Payable Amount</div>
                <div className="text-2xl font-bold mt-1 text-emerald-600 dark:text-emerald-400">$1,987,450</div>
              </div>
              <div className="mt-4 text-[11px] text-slate-400">
                After all standard deductions
              </div>
            </div>

            <div className="p-4 bg-white dark:bg-slate-700/40 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-col justify-between shadow-sm">
              <div>
                <div className="text-xs text-slate-500 dark:text-slate-400">Total Deductions</div>
                <div className="text-2xl font-bold mt-1 text-rose-500">$470,870</div>
              </div>
              <div className="mt-4 text-[11px] text-slate-400">
                Tax + Insurance + 401(k)
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="p-3 bg-slate-50 dark:bg-slate-700/40 rounded-lg text-center border border-slate-100 dark:border-slate-700">
              <div className="text-[11px] text-slate-400">Total Gross Payroll</div>
              <div className="text-base font-bold text-slate-800 dark:text-white mt-0.5">$2,458,320</div>
            </div>
            <div className="p-3 bg-slate-50 dark:bg-slate-700/40 rounded-lg text-center border border-slate-100 dark:border-slate-700">
              <div className="text-[11px] text-slate-400">Pending Approvals</div>
              <div className="text-base font-bold text-amber-500 mt-0.5">12</div>
            </div>
            <div className="p-3 bg-slate-50 dark:bg-slate-700/40 rounded-lg text-center border border-slate-100 dark:border-slate-700">
              <div className="text-[11px] text-slate-400">Total Payroll Errors</div>
              <div className="text-base font-bold text-rose-500 mt-0.5">24</div>
            </div>
          </div>
        </div>

        {/* Salary Range Distribution */}
        <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-1">
              <h3 className="font-bold text-sm text-slate-800 dark:text-white">Salary Range Distribution</h3>
              <span className="text-xs text-orange-500 font-semibold">Salary Range</span>
            </div>
            <div className="text-xs text-slate-400 mb-4">Average Salary: <strong className="text-slate-800 dark:text-white">$78,450</strong></div>
            
            {/* Visual Bars */}
            <div className="flex items-end justify-between gap-2 h-32 pt-4 pb-2 border-b border-slate-100 dark:border-slate-700 mb-4">
              {['$30k', '$50k', '$80k', '$120k', '$150k', '$180k'].map((val, i) => (
                <div key={i} className="flex flex-col items-center gap-1.5 h-full justify-end w-full">
                  <div className="w-full bg-orange-500/15 rounded-t h-[85%] flex items-end">
                    <div className="bg-orange-500 w-full rounded-t" style={{ height: `${35 + (i * 12)}%` }}></div>
                  </div>
                  <span className="text-[10px] text-slate-400">{val}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2 text-xs">
            <div className="flex justify-between items-center p-2 bg-slate-50 dark:bg-slate-700/30 rounded">
              <span className="text-slate-500">$30k - $50k Range</span>
              <strong className="text-slate-800 dark:text-white">285 Employees</strong>
            </div>
            <div className="flex justify-between items-center p-2 bg-slate-50 dark:bg-slate-700/30 rounded">
              <span className="text-slate-500">$50k - $80k Range</span>
              <strong className="text-slate-800 dark:text-white">478 Employees</strong>
            </div>
          </div>
        </div>

      </div>

      {/* Row 2: Sub-Metrics Cards (Screenshot 3 exact items) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
          <div className="flex justify-between items-center text-xs text-slate-500 font-medium">
            <span>Highest Salary</span>
            <span className="text-emerald-600 font-bold bg-emerald-50 dark:bg-emerald-500/10 px-2 py-0.5 rounded-full text-[11px]">+18%</span>
          </div>
          <div className="text-xl font-bold mt-2 text-slate-800 dark:text-white">$24,500</div>
          <div className="text-[11px] text-slate-400 mt-2">CTO - Engineering</div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
          <div className="flex justify-between items-center text-xs text-slate-500 font-medium">
            <span>Variable Pay</span>
            <span className="text-emerald-600 font-bold bg-emerald-50 dark:bg-emerald-500/10 px-2 py-0.5 rounded-full text-[11px]">+18%</span>
          </div>
          <div className="text-xl font-bold mt-2 text-slate-800 dark:text-white">$284K</div>
          <div className="text-[11px] text-slate-400 mt-2">Bonuses + Commissions</div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
          <div className="flex justify-between items-center text-xs text-slate-500 font-medium">
            <span>After Deduction</span>
            <span className="text-rose-600 font-bold bg-rose-50 dark:bg-rose-500/10 px-2 py-0.5 rounded-full text-[11px]">-16%</span>
          </div>
          <div className="text-xl font-bold mt-2 text-slate-800 dark:text-white">$1.99M</div>
          <div className="text-[11px] text-slate-400 mt-2">Employee take-home</div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
          <div className="flex justify-between items-center text-xs text-slate-500 font-medium">
            <span>Average Salary</span>
            <span className="text-emerald-600 font-bold bg-emerald-50 dark:bg-emerald-500/10 px-2 py-0.5 rounded-full text-[11px]">+18%</span>
          </div>
          <div className="text-xl font-bold mt-2 text-slate-800 dark:text-white">$78,450</div>
          <div className="text-[11px] text-slate-400 mt-2">Median: $72,000</div>
        </div>

      </div>

      {/* Row 3: 6 Months Tax & Deduction Trend & Batch Processing Status */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* 6 Months Tax & Deduction Trend (Screenshot 4) */}
        <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-sm text-slate-800 dark:text-white">6 Months Tax &amp; Deduction Trend</h3>
              <div className="flex items-center gap-3 text-xs">
                <span className="flex items-center gap-1 text-slate-500"><span className="w-2.5 h-2.5 rounded-full bg-blue-500 inline-block"></span> Federal Tax</span>
                <span className="flex items-center gap-1 text-slate-500"><span className="w-2.5 h-2.5 rounded-full bg-orange-500 inline-block"></span> Deductions</span>
              </div>
            </div>

            {/* Visual Bars for 6 Months */}
            <div className="grid grid-cols-6 gap-3 h-36 items-end pt-4 pb-2 border-b border-slate-100 dark:border-slate-700 mb-4">
              {['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, i) => (
                <div key={i} className="flex flex-col items-center gap-2 h-full justify-end">
                  <div className="w-full bg-blue-500/15 rounded-t flex flex-col justify-end overflow-hidden h-[85%]">
                    <div className="bg-blue-500 w-full" style={{ height: `${50 + (i * 6)}%` }}></div>
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium">{month}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center text-xs text-slate-500 pt-1">
            <span>Federal Tax Deductions: <strong className="text-slate-800 dark:text-white">$1.71M</strong></span>
            <span className="text-emerald-500 font-semibold">Stable Flow</span>
          </div>
        </div>

        {/* Batch Processing Status */}
        <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-sm text-slate-800 dark:text-white">Batch Processing Status</h3>
              <span className="text-xs px-2.5 py-1 bg-slate-100 dark:bg-slate-700 rounded text-slate-600 dark:text-slate-300 font-medium">Monthly</span>
            </div>
            
            <div className="p-4 bg-orange-50 dark:bg-orange-500/10 rounded-xl border border-orange-100 dark:border-orange-500/20 mb-4 flex items-center justify-between">
              <div>
                <div className="text-xs text-slate-500">Combined Total Payroll</div>
                <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">$2,459,320</div>
              </div>
              <span className="text-xs font-bold px-3 py-1 bg-orange-500 text-white rounded-full shadow-sm">3 Batches</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 text-center text-xs">
            <div className="p-3 bg-slate-50 dark:bg-slate-700/40 rounded-lg border border-slate-100 dark:border-slate-700">
              <strong className="block text-slate-800 dark:text-white text-sm">1,120</strong>
              <span className="text-slate-400">Batch A (Full-Time)</span>
            </div>
            <div className="p-3 bg-slate-50 dark:bg-slate-700/40 rounded-lg border border-slate-100 dark:border-slate-700">
              <strong className="block text-slate-800 dark:text-white text-sm">60</strong>
              <span className="text-slate-400">Batch B (Contract)</span>
            </div>
            <div className="p-3 bg-slate-50 dark:bg-slate-700/40 rounded-lg border border-slate-100 dark:border-slate-700">
              <strong className="block text-slate-800 dark:text-white text-sm">63</strong>
              <span className="text-slate-400">Batch C (Interns)</span>
            </div>
          </div>
        </div>

      </div>

      {/* Row 4: Payroll Processing Pipeline (Screenshot 4 item) */}
      <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-sm text-slate-800 dark:text-white">Payroll Processing Pipeline</h3>
          <span className="text-xs font-bold text-blue-600 bg-blue-50 dark:bg-blue-500/10 px-2.5 py-1 rounded">Overall Progress (40%)</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="p-3.5 bg-slate-50 dark:bg-slate-700/40 rounded-xl flex items-center justify-between border border-slate-200 dark:border-slate-700">
            <div>
              <div className="font-bold text-xs text-slate-800 dark:text-white">1. Data Validation</div>
              <div className="text-[11px] text-slate-400">All employee records validated</div>
            </div>
            <span className="text-[11px] font-semibold px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded">Completed (2 Min)</span>
          </div>

          <div className="p-3.5 bg-slate-50 dark:bg-slate-700/40 rounded-xl flex items-center justify-between border border-slate-200 dark:border-slate-700">
            <div>
              <div className="font-bold text-xs text-slate-800 dark:text-white">2. Attendance Calculation</div>
              <div className="text-[11px] text-slate-400">Working days &amp; hours calculated</div>
            </div>
            <span className="text-[11px] font-semibold px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded">Completed (4 Min)</span>
          </div>

          <div className="p-3.5 bg-slate-50 dark:bg-slate-700/40 rounded-xl flex items-center justify-between border border-slate-200 dark:border-slate-700">
            <div>
              <div className="font-bold text-xs text-slate-800 dark:text-white">3. Deductions Processing</div>
              <div className="text-[11px] text-slate-400">Tax, PF, and other deductions</div>
            </div>
            <span className="text-[11px] font-semibold px-2 py-0.5 bg-amber-100 text-amber-700 rounded">Running</span>
          </div>
        </div>
      </div>

    </div>
  );
}