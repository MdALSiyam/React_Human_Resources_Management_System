import React from 'react';
import { 
  Users, Calendar, Clock, Video, Plus, CheckCircle2, XCircle, ArrowUpRight, MoreVertical 
} from 'lucide-react';

export default function HRDashboard() {
  return (
    <div className="space-y-6 text-slate-900 dark:text-slate-100 p-2 sm:p-6 bg-slate-50/50 dark:bg-slate-900 min-h-screen">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-800 dark:text-white">HR Dashboard</h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Dashboard &gt; HR Dashboard</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 text-xs px-3 py-2 bg-slate-100 dark:bg-slate-700/60 rounded-lg text-slate-600 dark:text-slate-300 font-medium border border-slate-200 dark:border-slate-600">
            <Calendar size={14} className="text-orange-500" />
            <span>10/02/2026 - 10/08/2026</span>
          </div>
          <button className="px-3 py-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 text-slate-700 dark:text-slate-200 rounded-lg text-xs font-semibold transition-colors">
            Yearly Report
          </button>
          <button className="flex items-center gap-1.5 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-xs font-semibold shadow-sm transition-colors">
            <Plus size={14} /> Add New
          </button>
        </div>
      </div>

      {/* Row 1: Overview Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Total Employees */}
        <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
          <div className="flex justify-between items-center text-xs text-slate-500 font-medium">
            <span>Total Employees</span>
            <span className="text-emerald-600 font-bold bg-emerald-50 dark:bg-emerald-500/10 px-2 py-0.5 rounded-full text-[11px]">+18%</span>
          </div>
          <div className="text-2xl font-bold mt-2 text-slate-800 dark:text-white">1,848</div>
          <div className="text-[11px] text-slate-400 mt-3 flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-700">
            <span>Full-Time: <strong className="text-slate-700 dark:text-slate-200">568</strong></span>
            <span>Contract: <strong className="text-slate-700 dark:text-slate-200">80</strong></span>
            <span>Probation: <strong className="text-slate-700 dark:text-slate-200">1,054</strong></span>
          </div>
        </div>

        {/* New Joinees */}
        <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
          <div className="flex justify-between items-center text-xs text-slate-500 font-medium">
            <span>New Joinees</span>
            <span className="text-emerald-600 font-bold bg-emerald-50 dark:bg-emerald-500/10 px-2 py-0.5 rounded-full text-[11px]">Active</span>
          </div>
          <div className="text-2xl font-bold mt-2 text-slate-800 dark:text-white">1,054</div>
          <div className="text-[11px] text-slate-400 mt-3 flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-700">
            <span>Headcount Overview</span>
            <strong className="text-slate-700 dark:text-slate-200">1,248 All Dept</strong>
          </div>
        </div>

        {/* Late Arrivals Today */}
        <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
          <div className="flex justify-between items-center text-xs text-slate-500 font-medium">
            <span>Late Arrivals Today</span>
            <span className="text-rose-600 font-bold bg-rose-50 dark:bg-rose-500/10 px-2 py-0.5 rounded-full text-[11px]">-16%</span>
          </div>
          <div className="text-2xl font-bold mt-2 text-slate-800 dark:text-white">12</div>
          <div className="text-[11px] text-slate-400 mt-3 flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-700">
            <span>Delayed Logins Today</span>
            <span className="text-amber-500 font-medium">12 Staff</span>
          </div>
        </div>

        {/* Total Payroll Cost */}
        <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
          <div className="flex justify-between items-center text-xs text-slate-500 font-medium">
            <span>Total Payroll Cost</span>
            <span className="text-emerald-600 font-bold bg-emerald-50 dark:bg-emerald-500/10 px-2 py-0.5 rounded-full text-[11px]">+22%</span>
          </div>
          <div className="text-2xl font-bold mt-2 text-slate-800 dark:text-white">$2.4M</div>
          <div className="text-[11px] text-slate-400 mt-3 flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-700">
            <span>Payroll Outflow</span>
            <span className="text-emerald-500 font-medium">On Track</span>
          </div>
        </div>

      </div>

      {/* Row 2: Leave Type Distribution & Attendance Trend */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Leave Type Distribution */}
        <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-sm text-slate-800 dark:text-white">Leave Type Distribution</h3>
            <span className="text-xs px-2.5 py-1 bg-slate-100 dark:bg-slate-700 rounded text-slate-600 dark:text-slate-300 font-medium">Monthly</span>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3.5 bg-slate-50 dark:bg-slate-700/40 rounded-lg">
              <span className="text-xs font-medium text-slate-600 dark:text-slate-300">Sick Leave</span>
              <span className="text-xs font-bold text-rose-500 bg-rose-50 dark:bg-rose-500/10 px-2.5 py-1 rounded">45 Requests</span>
            </div>
            <div className="flex justify-between items-center p-3.5 bg-slate-50 dark:bg-slate-700/40 rounded-lg">
              <span className="text-xs font-medium text-slate-600 dark:text-slate-300">Casual Leave</span>
              <span className="text-xs font-bold text-amber-500 bg-amber-50 dark:bg-amber-500/10 px-2.5 py-1 rounded">68 Requests</span>
            </div>
            <div className="flex justify-between items-center p-3.5 bg-slate-50 dark:bg-slate-700/40 rounded-lg">
              <span className="text-xs font-medium text-slate-600 dark:text-slate-300">Unpaid Leave</span>
              <span className="text-xs font-bold text-slate-500 bg-slate-200/50 dark:bg-slate-600 px-2.5 py-1 rounded">12 Requests</span>
            </div>
          </div>
        </div>

        {/* Attendance Trend (Page 1) */}
        <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 lg:col-span-2 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-sm text-slate-800 dark:text-white">Attendance Trend</h3>
            <div className="flex items-center gap-3 text-xs">
              <span className="flex items-center gap-1 text-slate-500"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span> On-Time (82)</span>
              <span className="flex items-center gap-1 text-slate-500"><span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"></span> Late (11)</span>
              <span className="flex items-center gap-1 text-slate-500"><span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block"></span> Absent (6)</span>
            </div>
          </div>
          {/* Simulated Bar Visual */}
          <div className="grid grid-cols-7 gap-2 h-36 items-end pt-4 pb-2 border-b border-slate-100 dark:border-slate-700">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
              <div key={i} className="flex flex-col items-center gap-2 h-full justify-end">
                <div className="w-full max-w-[32px] bg-emerald-500/20 rounded-t flex flex-col justify-end overflow-hidden h-[85%]">
                  <div className="bg-emerald-500 w-full" style={{ height: `${60 + (i * 4)}%` }}></div>
                </div>
                <span className="text-[11px] text-slate-400 font-medium">{day}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center pt-3 text-xs text-slate-500">
            <span>Weekly Average Attendance: <strong className="text-slate-800 dark:text-white">94.2%</strong></span>
            <span className="text-emerald-500 font-semibold">+16% Increase</span>
          </div>
        </div>

      </div>

      {/* Row 3: Recruitment Pipeline & Top Employees & Benefits (Page 2 Features) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Recruitment Pipeline */}
        <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-sm text-slate-800 dark:text-white">Recruitment Pipeline</h3>
              <span className="text-xs font-bold text-orange-500 bg-orange-50 dark:bg-orange-500/10 px-2.5 py-1 rounded">487 Applicants</span>
            </div>
            <div className="space-y-3.5">
              <div>
                <div className="flex justify-between text-xs mb-1 font-medium text-slate-600 dark:text-slate-300">
                  <span>Screening</span>
                  <span>23% (64 Employees)</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                  <div className="bg-blue-500 h-full rounded-full" style={{ width: '23%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1 font-medium text-slate-600 dark:text-slate-300">
                  <span>Interview Stage</span>
                  <span>40% (57 Employees)</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                  <div className="bg-orange-500 h-full rounded-full" style={{ width: '40%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1 font-medium text-slate-600 dark:text-slate-300">
                  <span>Successfully Hired</span>
                  <span>20% (36 Employees)</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full rounded-full" style={{ width: '20%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 p-3.5 bg-slate-50 dark:bg-slate-700/40 rounded-xl flex items-center justify-between border border-slate-200 dark:border-slate-700">
            <div>
              <div className="text-xs text-slate-500">Employees in Training</div>
              <div className="text-lg font-bold text-slate-800 dark:text-white">80 Candidates</div>
            </div>
            <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-100 text-emerald-700 rounded">Active</span>
          </div>
        </div>

        {/* Top Employees (Page 2 Feature) */}
        <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-sm text-slate-800 dark:text-white">Top Employees</h3>
            <span className="text-xs text-orange-500 font-semibold cursor-pointer hover:underline">View All →</span>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-2.5 bg-slate-50 dark:bg-slate-700/40 rounded-lg">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 font-bold flex items-center justify-center text-xs">JB</div>
                <div>
                  <div className="text-xs font-bold text-slate-800 dark:text-white">Jessica Brown</div>
                  <div className="text-[10px] text-slate-400">Customer Support</div>
                </div>
              </div>
              <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10 px-2 py-0.5 rounded">+45 Min</span>
            </div>

            <div className="flex items-center justify-between p-2.5 bg-slate-50 dark:bg-slate-700/40 rounded-lg">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold flex items-center justify-center text-xs">AL</div>
                <div>
                  <div className="text-xs font-bold text-slate-800 dark:text-white">Amanda Lewis</div>
                  <div className="text-[10px] text-slate-400">HR Admin</div>
                </div>
              </div>
              <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10 px-2 py-0.5 rounded">+55 Min</span>
            </div>

            <div className="flex items-center justify-between p-2.5 bg-slate-50 dark:bg-slate-700/40 rounded-lg">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 font-bold flex items-center justify-center text-xs">JC</div>
                <div>
                  <div className="text-xs font-bold text-slate-800 dark:text-white">James Clark</div>
                  <div className="text-[10px] text-slate-400">Sales</div>
                </div>
              </div>
              <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10 px-2 py-0.5 rounded">+30 Min</span>
            </div>
          </div>
        </div>

        {/* Benefits Deductions */}
        <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-sm text-slate-800 dark:text-white">Benefits Deductions</h3>
              <span className="text-xs text-slate-400">Insurance + 401(k)</span>
            </div>
            <div className="p-4 bg-orange-50 dark:bg-orange-500/10 rounded-xl border border-orange-100 dark:border-orange-500/20 mb-4">
              <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">$56K</div>
              <div className="text-xs text-slate-600 dark:text-slate-300 mt-1">Total monthly corporate insurance and retirement fund deductions.</div>
            </div>
          </div>
          <div className="space-y-2 text-xs">
            <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-700/40 rounded-lg">
              <span className="text-slate-500">Average Interview Time</span>
              <strong className="text-slate-800 dark:text-white">28 days</strong>
            </div>
          </div>
        </div>

      </div>

      {/* Row 4: Pending Approvals & Upcoming Interviews (Page 2) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Pending Approvals */}
        <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-sm text-slate-800 dark:text-white">Pending Approvals</h3>
            <button className="text-xs text-orange-500 font-semibold hover:underline">View All →</button>
          </div>
          <div className="space-y-3">
            <div className="p-3.5 bg-slate-50 dark:bg-slate-700/40 rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-orange-100 text-orange-600 font-bold flex items-center justify-center text-xs">HM</div>
                <div>
                  <div className="font-bold text-xs text-slate-800 dark:text-white">Hendrita Merkel</div>
                  <div className="text-[11px] text-slate-400">Jan 10 - Jan 16 (4 days) • Reason: Family trip</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="px-3 py-1 bg-emerald-500 hover:bg-emerald-600 text-white rounded text-xs font-semibold">Approve</button>
                <button className="px-3 py-1 bg-rose-500 hover:bg-rose-600 text-white rounded text-xs font-semibold">Decline</button>
              </div>
            </div>

            <div className="p-3.5 bg-slate-50 dark:bg-slate-700/40 rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-600 font-bold flex items-center justify-center text-xs">MB</div>
                <div>
                  <div className="font-bold text-xs text-slate-800 dark:text-white">Michael Brown</div>
                  <div className="text-[11px] text-slate-400">Jan 3 - Jan 9 (2 days) • Reason: Medical appointment</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="px-3 py-1 bg-emerald-500 hover:bg-emerald-600 text-white rounded text-xs font-semibold">Approve</button>
                <button className="px-3 py-1 bg-rose-500 hover:bg-rose-600 text-white rounded text-xs font-semibold">Decline</button>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Interviews */}
        <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-sm text-slate-800 dark:text-white">Upcoming Interviews</h3>
            <button className="text-xs text-orange-500 font-semibold hover:underline">View All →</button>
          </div>
          <div className="space-y-3">
            <div className="p-3.5 bg-slate-50 dark:bg-slate-700/40 rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border border-slate-200 dark:border-slate-700">
              <div>
                <div className="font-bold text-xs text-slate-800 dark:text-white">UI/UX Design Interview</div>
                <div className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                  <Clock size={12} /> 12:00 PM - 01:50 PM
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="px-3 py-1 bg-slate-200 dark:bg-slate-600 text-slate-700 rounded text-xs font-medium">Add to Calendar</button>
                <button className="flex items-center gap-1 px-3 py-1 bg-orange-500 hover:bg-orange-600 text-white rounded text-xs font-semibold">
                  <Video size={12} /> Join Now
                </button>
              </div>
            </div>

            <div className="p-3.5 bg-slate-50 dark:bg-slate-700/40 rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border border-slate-200 dark:border-slate-700">
              <div>
                <div className="font-bold text-xs text-slate-800 dark:text-white">Senior Developer React</div>
                <div className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                  <Clock size={12} /> 03:00 PM - 04:00 PM
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="px-3 py-1 bg-slate-200 dark:bg-slate-600 text-slate-700 rounded text-xs font-medium">Add to Calendar</button>
                <button className="flex items-center gap-1 px-3 py-1 bg-orange-500 hover:bg-orange-600 text-white rounded text-xs font-semibold">
                  <Video size={12} /> Join Now
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}