import React from 'react';
import { 
  Download, Plus, Clock, Calendar, Search, ChevronDown, 
  ChevronUp, Edit2, MoreVertical, Send, CheckSquare 
} from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell 
} from 'recharts';

// --- MOCK DATA MATCHING EXACT SMARTHR ADMIN PDF ---
const incomeExpenseData = [
  { month: 'Jan', income: 40, expense: 60 },
  { month: 'Feb', income: 30, expense: 70 },
  { month: 'Mar', income: 45, expense: 55 },
  { month: 'Apr', income: 80, expense: 20 },
  { month: 'May', income: 85, expense: 15 },
  { month: 'Jun', income: 90, expense: 10 },
  { month: 'Jul', income: 80, expense: 20 },
  { month: 'Aug', income: 80, expense: 20 },
  { month: 'Sep', income: 80, expense: 20 },
  { month: 'Oct', income: 85, expense: 15 },
  { month: 'Nov', income: 20, expense: 80 },
  { month: 'Dec', income: 80, expense: 20 },
];

const attendanceDonutData = [
  { name: 'Present', value: 59, color: '#059669' },
  { name: 'Late', value: 21, color: '#f59e0b' },
  { name: 'Permission', value: 2, color: '#3b82f6' },
  { name: 'Absent', value: 15, color: '#dc2626' },
];

const taskGaugeData = [
  { name: 'Ongoing', value: 24, color: '#f59e0b' },
  { name: 'On Hold', value: 10, color: '#3b82f6' },
  { name: 'Overdue', value: 16, color: '#dc2626' },
  { name: 'Completed', value: 40, color: '#059669' },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-5 text-slate-800 dark:text-slate-100 font-sans text-xs bg-[#f4f6f9] dark:bg-slate-900 min-h-screen p-2 sm:p-4">
      
      {/* ========================================================================= */}
      {/* EXACT TOP HEADER & WELCOME CARD BANNER (SCREENSHOT 9)                       */}
      {/* ========================================================================= */}
      
      {/* 1. TOP TITLE ROW WITH EXPORT & YEAR FILTER */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Admin Dashboard</h1>
          <div className="text-xs text-slate-400 font-medium flex items-center space-x-1 mt-0.5">
            <span>🏠</span>
            <span>&gt;</span>
            <span>Dashboard</span>
            <span>&gt;</span>
            <span className="text-slate-600 dark:text-slate-300 font-semibold">Admin Dashboard</span>
          </div>
        </div>

        <div className="flex items-center space-x-2 shrink-0">
          <button className="px-3 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-200 flex items-center space-x-1.5 shadow-sm">
            <Download className="w-3.5 h-3.5" />
            <span>Export</span>
            <ChevronDown className="w-3 h-3 text-slate-400" />
          </button>
          <button className="px-3 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-200 flex items-center space-x-1.5 shadow-sm">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            <span>2025</span>
          </button>
          <button className="p-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-500 shadow-sm">
            <ChevronUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 2. WELCOME BANNER CARD WITH ADRIAN AVATAR & ACTION BUTTONS */}
      <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200/80 dark:border-slate-700 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" 
              alt="Adrian" 
              className="w-12 h-12 rounded-full object-cover ring-2 ring-orange-500/20"
            />
          </div>
          <div>
            <div className="flex items-center space-x-1.5">
              <h2 className="text-base font-bold text-slate-900 dark:text-slate-100">Welcome Back, Adrian</h2>
              <Edit2 className="w-3.5 h-3.5 text-slate-400 cursor-pointer hover:text-orange-500" />
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              You have <span className="text-orange-500 font-semibold underline cursor-pointer">21</span> Pending Approvals & <span className="text-orange-500 font-semibold underline cursor-pointer">14</span> Leave Requests
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2 shrink-0">
          <button className="px-3.5 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 text-slate-700 dark:text-slate-200 rounded-lg text-xs font-semibold flex items-center space-x-1.5 shadow-sm">
            <Plus className="w-3.5 h-3.5" />
            <span>Add Schedule</span>
          </button>
          <button className="px-4 py-2 bg-[#f97316] hover:bg-orange-600 text-white rounded-lg text-xs font-semibold flex items-center space-x-1.5 shadow-sm">
            <Plus className="w-3.5 h-3.5" />
            <span>Add Requests</span>
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* PART 1: 8 METRIC CARDS & EMPLOYEES BY DEPARTMENT                          */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        
        {/* LEFT 2/3 COLUMN: 8 METRIC CARDS GRID (4x2) */}
        <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { title: 'Attendance Overview', val: '120/154', sub: 'View Details', iconBg: 'bg-orange-500', icon: '📋' },
            { title: "Total No of Project's", val: '90/125', sub: 'View All', iconBg: 'bg-teal-700', icon: '💻' },
            { title: 'Total No of Clients', val: '69/86', sub: 'View All', iconBg: 'bg-blue-600', icon: '👥' },
            { title: 'Total No of Tasks', val: '96/100', sub: 'View All', iconBg: 'bg-pink-600', icon: '📝' },
            { title: 'Earnings', val: '$21,445', sub: 'View All', iconBg: 'bg-purple-600', icon: '💰' },
            { title: 'Profit This Week', val: '$5,544', sub: 'View All', iconBg: 'bg-red-600', icon: '📊' },
            { title: 'Job Applicants', val: '98', sub: 'View All', iconBg: 'bg-emerald-500', icon: '👤' },
            { title: 'New Hire', val: '45/48', sub: 'View All', iconBg: 'bg-slate-800', icon: '👔' },
          ].map((card, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-800 p-3.5 rounded-lg border border-slate-200/80 dark:border-slate-700 shadow-sm flex flex-col justify-between h-28">
              <div className="flex items-center space-x-2">
                <div className={`w-6 h-6 rounded-full ${card.iconBg} text-white flex items-center justify-center text-[10px] shrink-0`}>
                  {card.icon}
                </div>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium truncate">{card.title}</span>
              </div>
              <div className="text-xl font-bold text-slate-900 dark:text-slate-100 my-1">{card.val}</div>
              <div className="text-[11px] text-slate-400 hover:text-orange-500 cursor-pointer">{card.sub}</div>
            </div>
          ))}
        </div>

        {/* RIGHT 1/3 COLUMN: EMPLOYEES BY DEPARTMENT */}
        <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200/80 dark:border-slate-700 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-3">
              <span className="font-bold text-sm text-slate-800 dark:text-slate-100">Employees By Department</span>
              <span className="text-[11px] text-slate-400 border border-slate-200 dark:border-slate-700 px-2 py-0.5 rounded flex items-center gap-1">
                <Calendar className="w-3 h-3" /> This Week
              </span>
            </div>

            <div className="space-y-2.5 my-2">
              {[
                { dept: 'UI/UX', pct: '75%' },
                { dept: 'Development', pct: '95%' },
                { dept: 'Management', pct: '72%' },
                { dept: 'HR', pct: '20%' },
                { dept: 'Testing', pct: '55%' },
                { dept: 'Marketing', pct: '80%' },
              ].map((item, i) => (
                <div key={i} className="flex items-center text-[11px]">
                  <span className="w-20 text-slate-500 dark:text-slate-400 text-right pr-3 shrink-0">{item.dept}</span>
                  <div className="flex-1 h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-[#f97316] rounded-full" style={{ width: item.pct }}></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-between pl-20 text-[9px] text-slate-400 mt-2 font-mono">
              <span>0</span><span>20</span><span>40</span><span>60</span><span>80</span><span>100</span><span>120</span>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 dark:border-slate-700 text-[10px] text-slate-400 mt-2">
            • No of Employees increased by <span className="text-emerald-500 font-bold">+20%</span> from last Week
          </div>
        </div>

      </div>

      {/* EMPLOYEE STATUS, ATTENDANCE OVERVIEW & CLOCK-IN/OUT */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* CARD 1: EMPLOYEE STATUS */}
        <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200/80 dark:border-slate-700 shadow-sm flex flex-col justify-between overflow-hidden">
          <div className="p-4 space-y-3">
            <div className="flex justify-between items-center">
              <span className="font-bold text-sm text-slate-800 dark:text-slate-100">Employee Status</span>
              <span className="text-[11px] text-slate-400 border border-slate-200 dark:border-slate-700 px-2 py-0.5 rounded flex items-center gap-1">
                <Calendar className="w-3 h-3" /> This Week
              </span>
            </div>

            <div className="flex justify-between items-center text-xs text-slate-400">
              <span>Total Employee</span>
              <span className="font-bold text-slate-900 dark:text-slate-100 text-sm">154</span>
            </div>

            <div className="w-full h-3 rounded-md overflow-hidden flex bg-slate-100 dark:bg-slate-700">
              <div className="bg-[#eab308] h-full w-[48%]"></div>
              <div className="bg-[#0f172a] h-full w-[20%]"></div>
              <div className="bg-[#dc2626] h-full w-[22%]"></div>
              <div className="bg-[#ec4899] h-full w-[10%]"></div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2 border-b border-slate-100 dark:border-slate-700 pb-3">
              <div>
                <div className="text-[11px] text-slate-400 flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#eab308]"></span> Fulltime (48%)</div>
                <div className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-1">112</div>
              </div>
              <div className="border-l border-slate-100 dark:border-slate-700 pl-4">
                <div className="text-[11px] text-slate-400 flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#0f172a]"></span> Contract (20%)</div>
                <div className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-1">112</div>
              </div>
              <div>
                <div className="text-[11px] text-slate-400 flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#dc2626]"></span> Probation (22%)</div>
                <div className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-1">12</div>
              </div>
              <div className="border-l border-slate-100 dark:border-slate-700 pl-4">
                <div className="text-[11px] text-slate-400 flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#ec4899]"></span> WFH (20%)</div>
                <div className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-1">04</div>
              </div>
            </div>

            <div className="text-[11px] font-semibold text-slate-500">Top Performer</div>
            <div className="p-2.5 bg-[#fef3c7]/60 dark:bg-amber-950/30 rounded-lg border border-amber-200/60 dark:border-amber-800/40 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80" alt="Top" className="w-7 h-7 rounded-full object-cover" />
                <div>
                  <div className="font-bold text-xs text-slate-900 dark:text-slate-100">Daniel Esbella</div>
                  <div className="text-[10px] text-slate-400">IOS Developer</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-[9px] text-slate-400">Performance</div>
                <div className="text-xs font-bold text-rose-500">99%</div>
              </div>
            </div>
          </div>

          <button className="w-full py-2 bg-slate-50 dark:bg-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-medium text-center border-t border-slate-100 dark:border-slate-700">
            View All Employees
          </button>
        </div>

        {/* CARD 2: ATTENDANCE OVERVIEW */}
        <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200/80 dark:border-slate-700 shadow-sm flex flex-col justify-between overflow-hidden">
          <div className="p-4 space-y-3">
            <div className="flex justify-between items-center">
              <span className="font-bold text-sm text-slate-800 dark:text-slate-100">Attendance Overview</span>
              <span className="text-[11px] text-slate-400 border border-slate-200 dark:border-slate-700 px-2 py-0.5 rounded flex items-center gap-1">
                <Calendar className="w-3 h-3" /> Today
              </span>
            </div>

            <div className="h-36 relative flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={attendanceDonutData} startAngle={180} endAngle={0} innerRadius={50} outerRadius={68} paddingAngle={3} dataKey="value">
                    {attendanceDonutData.map((e, i) => <Cell key={i} fill={e.color} />)}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute text-center mt-6">
                <div className="text-[10px] text-slate-400">Total Attendance</div>
                <div className="text-lg font-bold text-slate-900 dark:text-slate-100">120</div>
              </div>
            </div>

            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between items-center"><span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#059669]"></span> Status</span><span className="font-bold"></span></div>
              <div className="flex justify-between items-center"><span className="flex items-center gap-2 text-slate-500"><span className="w-2 h-2 rounded-full bg-[#059669]"></span> Present</span><span className="font-bold">59%</span></div>
              <div className="flex justify-between items-center"><span className="flex items-center gap-2 text-slate-500"><span className="w-2 h-2 rounded-full bg-[#f59e0b]"></span> Late</span><span className="font-bold">21%</span></div>
              <div className="flex justify-between items-center"><span className="flex items-center gap-2 text-slate-500"><span className="w-2 h-2 rounded-full bg-[#3b82f6]"></span> Permission</span><span className="font-bold">2%</span></div>
              <div className="flex justify-between items-center"><span className="flex items-center gap-2 text-slate-500"><span className="w-2 h-2 rounded-full bg-[#dc2626]"></span> Absent</span><span className="font-bold">15%</span></div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-700">
              <span className="text-[11px] text-slate-400">Total Absenties</span>
              <div className="flex items-center -space-x-1.5">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80" className="w-5 h-5 rounded-full ring-2 ring-white dark:ring-slate-800" alt="" />
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&auto=format&fit=crop&q=80" className="w-5 h-5 rounded-full ring-2 ring-white dark:ring-slate-800" alt="" />
                <span className="w-5 h-5 rounded-full bg-orange-500 text-white text-[9px] font-bold flex items-center justify-center ring-2 ring-white dark:ring-slate-800">+1</span>
              </div>
            </div>
          </div>

          <button className="w-full py-2 bg-slate-50 dark:bg-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-700 text-orange-500 text-xs font-medium text-center border-t border-slate-100 dark:border-slate-700">
            View Details
          </button>
        </div>

        {/* CARD 3: CLOCK-IN/OUT */}
        <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200/80 dark:border-slate-700 shadow-sm flex flex-col justify-between overflow-hidden">
          <div className="p-4 space-y-3">
            <div className="flex justify-between items-center">
              <span className="font-bold text-sm text-slate-800 dark:text-slate-100">Clock-In/Out</span>
              <div className="flex items-center space-x-2">
                <span className="text-[11px] text-slate-400 border border-slate-200 dark:border-slate-700 px-2 py-0.5 rounded flex items-center gap-1">
                  All Departments <ChevronDown className="w-3 h-3" />
                </span>
                <span className="text-[11px] text-slate-400 border border-slate-200 dark:border-slate-700 px-2 py-0.5 rounded flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> Today
                </span>
              </div>
            </div>

            <div className="space-y-3 text-xs">
              {[
                { name: 'Daniel Esbella', role: 'UI/UX Designer', time: '09:15' },
                { name: 'Doglas Martini', role: 'Project Manager', time: '09:36' },
                { name: 'Brian Villalobos', role: 'PHP Developer', time: '09:15' },
              ].map((usr, idx) => (
                <div key={idx} className="flex justify-between items-center border-b border-slate-100 dark:border-slate-700/60 pb-2.5">
                  <div className="flex items-center space-x-2">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80" className="w-7 h-7 rounded-full object-cover" alt="" />
                    <div>
                      <div className="font-bold text-slate-900 dark:text-slate-100">{usr.name}</div>
                      <div className="text-[10px] text-slate-400">{usr.role}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Search className="w-3.5 h-3.5 text-slate-400" />
                    <span className="bg-emerald-500 text-white text-[10px] font-mono px-2 py-0.5 rounded font-bold">⏱ {usr.time}</span>
                  </div>
                </div>
              ))}

              <div className="grid grid-cols-3 gap-1 text-[10px] bg-slate-50 dark:bg-slate-700/40 p-2 rounded-lg text-slate-500">
                <div>• Clock In <div className="font-bold text-slate-800 dark:text-slate-200">10:30 AM</div></div>
                <div>• Clock Out <div className="font-bold text-slate-800 dark:text-slate-200">09:45 AM</div></div>
                <div>• Production <div className="font-bold text-slate-800 dark:text-slate-200">09:21 Hrs</div></div>
              </div>

              <div className="pt-1">
                <div className="text-[10px] text-slate-400 font-semibold mb-1">Late</div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80" className="w-7 h-7 rounded-full object-cover" alt="" />
                    <div>
                      <div className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                        Anthony Lewis <span className="bg-rose-500 text-white text-[9px] px-1.5 py-0.2 rounded font-bold">⏱ 30 Min</span>
                      </div>
                      <div className="text-[10px] text-slate-400">Marketing Head</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Search className="w-3.5 h-3.5 text-slate-400" />
                    <span className="bg-emerald-500 text-white text-[10px] font-mono px-2 py-0.5 rounded font-bold">⏱ 08:35</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button className="w-full py-2 bg-slate-50 dark:bg-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-medium text-center border-t border-slate-100 dark:border-slate-700">
            View All Attendance
          </button>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* PART 2: JOBS APPLICANTS, EMPLOYEES, TODO, SALES & INVOICES               */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        
        {/* Jobs Applicants */}
        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200/80 dark:border-slate-700 shadow-sm space-y-3">
          <div className="flex justify-between items-center">
            <span className="font-bold text-sm text-slate-800 dark:text-slate-100">Jobs Applicants</span>
            <span className="text-xs text-orange-500 cursor-pointer font-semibold">View All</span>
          </div>
          <div className="space-y-2 text-xs">
            {[
              { name: 'Brian Villalobos', exp: 'Exp: 5+ Years • USA', tag: 'UI/UX Designer', bg: 'bg-slate-800' },
              { name: 'Anthony Lewis', exp: 'Exp: 4+ Years • USA', tag: 'Python Developer', bg: 'bg-blue-600' },
              { name: 'Stephan Peralt', exp: 'Exp: 6+ Years • USA', tag: 'Android Developer', bg: 'bg-pink-600' },
              { name: 'Doglas Martini', exp: 'Exp: 2+ Years • USA', tag: 'React Developer', bg: 'bg-purple-600' },
            ].map((app, i) => (
              <div key={i} className="p-2 bg-slate-50 dark:bg-slate-700/40 rounded-lg flex justify-between items-center">
                <div>
                  <div className="font-bold text-slate-900 dark:text-slate-100">{app.name}</div>
                  <div className="text-[10px] text-slate-400">{app.exp}</div>
                </div>
                <span className={`text-[10px] text-white px-2 py-0.5 rounded font-bold ${app.bg}`}>{app.tag}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Employees Directory */}
        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200/80 dark:border-slate-700 shadow-sm space-y-3">
          <div className="flex justify-between items-center">
            <span className="font-bold text-sm text-slate-800 dark:text-slate-100">Employees</span>
            <span className="text-xs text-orange-500 cursor-pointer font-semibold">View All</span>
          </div>
          <div className="space-y-2 text-xs">
            {[
              { name: 'Anthony Lewis', role: 'Finance', dept: 'Finance', color: 'text-teal-600 bg-teal-50 dark:bg-teal-950/40' },
              { name: 'Brian Villalobos', role: 'PHP Developer', dept: 'Development', color: 'text-rose-600 bg-rose-50 dark:bg-rose-950/40' },
              { name: 'Stephan Peralt', role: 'Executive', dept: 'Marketing', color: 'text-blue-600 bg-blue-50 dark:bg-blue-950/40' },
              { name: 'Doglas Martini', role: 'Project Manager', dept: 'Manager', color: 'text-purple-600 bg-purple-50 dark:bg-purple-950/40' },
            ].map((emp, i) => (
              <div key={i} className="p-2 bg-slate-50 dark:bg-slate-700/40 rounded-lg flex justify-between items-center">
                <div>
                  <div className="font-bold text-slate-900 dark:text-slate-100">{emp.name}</div>
                  <div className="text-[10px] text-slate-400">{emp.role}</div>
                </div>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${emp.color}`}>{emp.dept}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Todo List Widget */}
        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200/80 dark:border-slate-700 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-3">
              <span className="font-bold text-sm text-slate-800 dark:text-slate-100">Todo</span>
              <span className="text-xs text-slate-400 border border-slate-200 dark:border-slate-700 px-2 py-0.5 rounded">Today</span>
            </div>
            <div className="space-y-2 text-xs">
              {[
                { task: 'Add Holidays', color: 'bg-slate-100 dark:bg-slate-700' },
                { task: 'Add Meeting to Client', color: 'bg-orange-50 dark:bg-orange-950/30 text-orange-800 dark:text-orange-300' },
                { task: 'Chat with Adrian', color: 'bg-rose-50 dark:bg-rose-950/30 text-rose-800 dark:text-rose-300' },
                { task: 'Management Call', color: 'bg-purple-50 dark:bg-purple-950/30 text-purple-800 dark:text-purple-300' },
                { task: 'Add Payroll', color: 'bg-blue-50 dark:bg-blue-950/30 text-blue-800 dark:text-blue-300' },
                { task: 'Add Policy for Increment', color: 'bg-amber-50 dark:bg-amber-950/30 text-amber-800 dark:text-amber-300' },
              ].map((t, idx) => (
                <div key={idx} className={`p-2 rounded-lg font-medium flex items-center space-x-2 ${t.color}`}>
                  <input type="checkbox" className="rounded text-orange-500" />
                  <span>{t.task}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* SALES OVERVIEW & INVOICES */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        
        {/* Sales Overview Stacked Bar Chart */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200/80 dark:border-slate-700 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-sm text-slate-800 dark:text-slate-100">Sales Overview</h3>
            <div className="flex items-center space-x-3 text-xs">
              <span className="flex items-center space-x-1"><span className="w-2.5 h-2.5 rounded bg-orange-500"></span><span>Income</span></span>
              <span className="flex items-center space-x-1"><span className="w-2.5 h-2.5 rounded bg-slate-200 dark:bg-slate-600"></span><span>Expenses</span></span>
            </div>
          </div>
          <div className="h-60">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={incomeExpenseData}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                <XAxis dataKey="month" stroke="#94a3b8" fontSize={11} />
                <YAxis stroke="#94a3b8" fontSize={11} />
                <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }} />
                <Bar dataKey="income" stackId="a" fill="#ff6b35" radius={[3, 3, 0, 0]} />
                <Bar dataKey="expense" stackId="a" fill="#e2e8f0" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Invoices List */}
        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200/80 dark:border-slate-700 shadow-sm space-y-3">
          <div className="flex justify-between items-center">
            <span className="font-bold text-sm text-slate-800 dark:text-slate-100">Invoices</span>
            <span className="text-xs text-slate-400 border border-slate-200 dark:border-slate-700 px-2 py-0.5 rounded">This Week</span>
          </div>
          <div className="space-y-2 text-xs">
            {[
              { title: 'Redesign Website', inv: '#INV002 • Logistics', amt: '$3560', status: 'Unpaid', color: 'text-rose-500' },
              { title: 'Module Completion', inv: '#INV005 • Yip Corp', amt: '$4175', status: 'Unpaid', color: 'text-rose-500' },
              { title: 'Change on Emp Module', inv: '#INV003 • Ignis LLP', amt: '$6985', status: 'Unpaid', color: 'text-rose-500' },
              { title: 'Changes on the Board', inv: '#INV002 • Ignis LLP', amt: '$1457', status: 'Unpaid', color: 'text-rose-500' },
              { title: 'Hospital Management', inv: '#INV006 • HCL Corp', amt: '$6458', status: 'Paid', color: 'text-emerald-500' },
            ].map((inv, idx) => (
              <div key={idx} className="p-2 bg-slate-50 dark:bg-slate-700/40 rounded-lg flex justify-between items-center">
                <div>
                  <div className="font-bold text-slate-900 dark:text-slate-100">{inv.title}</div>
                  <div className="text-[10px] text-slate-400">{inv.inv}</div>
                </div>
                <div className="text-right">
                  <div className="font-bold font-mono">{inv.amt}</div>
                  <div className={`text-[10px] font-bold ${inv.color}`}>{inv.status}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* PART 3: PROJECTS, TASKS GAUGE, SCHEDULES & ACTIVITIES                    */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        
        {/* Projects Table (2 COLS) */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200/80 dark:border-slate-700 shadow-sm overflow-hidden">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-sm text-slate-800 dark:text-slate-100">Projects</h3>
            <span className="text-xs text-slate-400 border border-slate-200 dark:border-slate-700 px-2 py-0.5 rounded">September</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 dark:bg-slate-700/50 text-slate-500 uppercase font-semibold">
                <tr>
                  <th className="p-2">ID</th>
                  <th className="p-2">Name</th>
                  <th className="p-2">Hours</th>
                  <th className="p-2">Priority</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                {[
                  { id: 'PRO-001', name: 'Office Management App', hrs: '15/255 Hrs', priority: 'High', pColor: 'bg-rose-500 text-white' },
                  { id: 'PRO-002', name: 'Clinic Management', hrs: '15/255 Hrs', priority: 'Low', pColor: 'bg-emerald-500 text-white' },
                  { id: 'PRO-003', name: 'Educational Platform', hrs: '40/255 Hrs', priority: 'Medium', pColor: 'bg-pink-500 text-white' },
                  { id: 'PRO-004', name: 'Chat & Call Mobile App', hrs: '35/155 Hrs', priority: 'High', pColor: 'bg-rose-500 text-white' },
                  { id: 'PRO-005', name: 'Travel Planning Website', hrs: '50/235 Hrs', priority: 'Medium', pColor: 'bg-pink-500 text-white' },
                  { id: 'PRO-006', name: 'Service Booking Software', hrs: '40/255 Hrs', priority: 'Low', pColor: 'bg-emerald-500 text-white' },
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-700/30">
                    <td className="p-2 font-mono text-slate-400">{row.id}</td>
                    <td className="p-2 font-semibold text-slate-900 dark:text-slate-100">{row.name}</td>
                    <td className="p-2 text-slate-500">{row.hrs}</td>
                    <td className="p-2">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${row.pColor}`}>{row.priority}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Tasks Statistics Gauge Chart */}
        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200/80 dark:border-slate-700 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-sm text-slate-800 dark:text-slate-100">Tasks Statistics</h3>
              <span className="text-xs text-slate-400 border border-slate-200 dark:border-slate-700 px-2 py-0.5 rounded">This Week</span>
            </div>
            <div className="h-36 relative flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={taskGaugeData} startAngle={180} endAngle={0} innerRadius={48} outerRadius={65} paddingAngle={2} dataKey="value">
                    {taskGaugeData.map((e, i) => <Cell key={i} fill={e.color} />)}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute text-center mt-5">
                <div className="text-[10px] text-slate-400">Total Tasks</div>
                <div className="text-base font-bold text-slate-900 dark:text-slate-100">124/165</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="flex items-center space-x-1.5"><span className="w-2 h-2 rounded-full bg-amber-500"></span><span>Ongoing (24%)</span></div>
              <div className="flex items-center space-x-1.5"><span className="w-2 h-2 rounded-full bg-blue-500"></span><span>On Hold (10%)</span></div>
              <div className="flex items-center space-x-1.5"><span className="w-2 h-2 rounded-full bg-rose-500"></span><span>Overdue (16%)</span></div>
              <div className="flex items-center space-x-1.5"><span className="w-2 h-2 rounded-full bg-emerald-500"></span><span>Completed (40%)</span></div>
            </div>
          </div>

          <div className="p-3 bg-slate-900 text-white rounded-xl text-xs flex justify-between items-center mt-4">
            <div>
              <div className="text-emerald-400 font-bold text-sm">389/689 hrs</div>
              <div className="text-[10px] text-slate-400">Spent on Overall Tasks This Week</div>
            </div>
          </div>
        </div>

      </div>

      {/* SCHEDULES, RECENT ACTIVITIES & BIRTHDAYS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        
        {/* Schedules */}
        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200/80 dark:border-slate-700 shadow-sm space-y-3">
          <div className="flex justify-between items-center">
            <span className="font-bold text-sm text-slate-800 dark:text-slate-100">Schedules</span>
            <span className="text-xs text-orange-500 cursor-pointer font-semibold">View All</span>
          </div>
          <div className="space-y-3 text-xs">
            <div className="p-2.5 bg-slate-50 dark:bg-slate-700/40 rounded-lg space-y-2">
              <span className="bg-slate-800 text-white text-[10px] px-2 py-0.5 rounded font-bold">UI/UX Designer</span>
              <div className="font-bold text-slate-900 dark:text-slate-100">Interview Candidates - UI/UX Designer</div>
              <div className="text-slate-400 text-[10px]">Thu, 15 Feb 2025 • 01:00 PM - 02:20 PM</div>
              <button className="w-full py-1.5 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 font-bold rounded">Join Meeting</button>
            </div>
            <div className="p-2.5 bg-slate-50 dark:bg-slate-700/40 rounded-lg space-y-2">
              <span className="bg-slate-800 text-white text-[10px] px-2 py-0.5 rounded font-bold">IOS Developer</span>
              <div className="font-bold text-slate-900 dark:text-slate-100">Interview Candidates - IOS Developer</div>
              <div className="text-slate-400 text-[10px]">Thu, 15 Feb 2025 • 02:00 PM - 04:20 PM</div>
              <button className="w-full py-1.5 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 font-bold rounded">Join Meeting</button>
            </div>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200/80 dark:border-slate-700 shadow-sm space-y-3">
          <div className="flex justify-between items-center">
            <span className="font-bold text-sm text-slate-800 dark:text-slate-100">Recent Activities</span>
            <span className="text-xs text-orange-500 cursor-pointer font-semibold">View All</span>
          </div>
          <div className="space-y-2 text-xs">
            {[
              { name: 'Matt Morgan', act: 'Added New Project HRMS Dashboard', time: '05:30 PM' },
              { name: 'Jay Ze', act: 'Commented on Uploaded Document', time: '05:00 PM' },
              { name: 'Mary Donald', act: 'Approved Task Projects', time: '05:30 PM' },
              { name: 'George David', act: 'Requesting Access to Module Tickets', time: '06:00 PM' },
              { name: 'Aaron Zeen', act: 'Downloaded App Reports', time: '06:30 PM' },
            ].map((act, i) => (
              <div key={i} className="p-2 bg-slate-50 dark:bg-slate-700/40 rounded-lg flex justify-between items-start">
                <div>
                  <div className="font-bold text-slate-900 dark:text-slate-100">{act.name}</div>
                  <div className="text-[10px] text-slate-400">{act.act}</div>
                </div>
                <span className="text-[10px] text-slate-400 font-mono">{act.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Birthdays */}
        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200/80 dark:border-slate-700 shadow-sm space-y-3">
          <div className="flex justify-between items-center">
            <span className="font-bold text-sm text-slate-800 dark:text-slate-100">Birthdays</span>
            <span className="text-xs text-orange-500 cursor-pointer font-semibold">View All</span>
          </div>
          <div className="space-y-2 text-xs">
            <div className="text-slate-400 font-semibold text-[10px]">Today</div>
            <div className="p-2.5 bg-slate-900 text-white rounded-lg flex justify-between items-center">
              <div>
                <div className="font-bold">Andrew Jermia</div>
                <div className="text-[10px] text-slate-400">IOS Developer</div>
              </div>
              <button className="px-3 py-1 bg-white text-slate-900 text-[10px] font-bold rounded">Send</button>
            </div>

            <div className="text-slate-400 font-semibold text-[10px] pt-1">Tomorrow</div>
            {[
              { name: 'Mary Zeen', role: 'UI/UX Designer' },
              { name: 'Antony Lewis', role: 'Android Developer' },
            ].map((b, i) => (
              <div key={i} className="p-2 bg-slate-50 dark:bg-slate-700/40 rounded-lg flex justify-between items-center">
                <div>
                  <div className="font-bold text-slate-900 dark:text-slate-100">{b.name}</div>
                  <div className="text-[10px] text-slate-400">{b.role}</div>
                </div>
                <button className="px-3 py-1 bg-slate-200 dark:bg-slate-600 text-[10px] font-bold rounded">Send</button>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}