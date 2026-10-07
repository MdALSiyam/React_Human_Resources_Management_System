import React, { useState } from 'react';
import { 
  Calendar, Clock, Phone, Mail, UserCheck, Award, Plus, 
  CheckSquare, FileText, Bell, ChevronDown, CheckCircle2, X, Send
} from 'lucide-react';
import { 
  PieChart, Pie, Cell, ResponsiveContainer, 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip 
} from 'recharts';

// --- MOCK DATA MATCHING EXACT SMARTHR PDF ---
const leaveDonutData = [
  { name: 'On Time', value: 1254, color: '#059669' },
  { name: 'Late Attendance', value: 32, color: '#3b82f6' },
  { name: 'Work From Home', value: 658, color: '#f59e0b' },
  { name: 'Absent', value: 14, color: '#dc2626' },
  { name: 'Sick Leave', value: 68, color: '#ec4899' },
];

const performanceData = [
  { month: 'Jan', val: 25 },
  { month: 'Feb', val: 25 },
  { month: 'Mar', val: 35 },
  { month: 'Apr', val: 35 },
  { month: 'May', val: 40 },
  { month: 'Jun', val: 60 },
  { month: 'Jul', val: 60 },
];

export default function EmployeeDashboard() {
  const [showAlert, setShowAlert] = useState(true);

  return (
    <div className="space-y-6 text-slate-800 dark:text-slate-100 font-sans text-sm bg-[#f4f6f9] dark:bg-slate-900 min-h-screen p-3 sm:p-5">
      
      {/* PAGE TITLE HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Employee Dashboard</h1>
          <div className="text-xs text-slate-400 font-medium flex items-center space-x-1.5 mt-1">
            <span>🏠</span>
            <span>&gt;</span>
            <span>Dashboard</span>
            <span>&gt;</span>
            <span className="text-slate-600 dark:text-slate-300 font-semibold">Employee Dashboard</span>
          </div>
        </div>

        <div className="flex items-center space-x-2 shrink-0">
          <button className="px-3.5 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-200 flex items-center space-x-2 shadow-sm">
            <Calendar className="w-4 h-4 text-slate-400" />
            <span>15-04-2025</span>
          </button>
          <button className="px-3.5 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-200 flex items-center space-x-2 shadow-sm">
            <Calendar className="w-4 h-4 text-slate-400" />
            <span>2026</span>
          </button>
        </div>
      </div>

      {/* ALERT BANNER */}
      {showAlert && (
        <div className="bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 p-3.5 rounded-xl flex items-center justify-between text-emerald-800 dark:text-emerald-300">
          <div className="flex items-center space-x-2.5">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span className="font-semibold text-sm">Your Leave Request on "24th April 2024" has been Approved!!!</span>
          </div>
          <button onClick={() => setShowAlert(false)} className="text-emerald-600 hover:text-emerald-800 dark:text-emerald-400 p-1">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* TOP SECTION: PROFILE, LEAVE DETAILS & LEAVE SUMMARY */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        
        {/* CARD 1: EMPLOYEE PROFILE CARD */}
        <div className="bg-[#1e293b] text-white p-5 rounded-xl shadow-sm flex flex-col justify-between space-y-4">
          <div className="flex items-center space-x-3.5">
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" 
              alt="Stephan Peralt" 
              className="w-14 h-14 rounded-full object-cover ring-2 ring-orange-500/40"
            />
            <div>
              <h2 className="text-lg font-bold">Stephan Peralt</h2>
              <div className="text-xs text-slate-300 font-medium">Senior Product Designer • UI/UX Design</div>
            </div>
          </div>

          <div className="space-y-2.5 text-xs text-slate-300 border-t border-slate-700/60 pt-4">
            <div className="flex items-center space-x-2.5">
              <Phone className="w-4 h-4 text-orange-400 shrink-0" />
              <span className="font-medium">+1 324 3453 545</span>
            </div>
            <div className="flex items-center space-x-2.5">
              <Mail className="w-4 h-4 text-orange-400 shrink-0" />
              <span className="font-medium">steperde124@example.com</span>
            </div>
            <div className="flex justify-between items-center pt-2">
              <div>
                <div className="text-xs text-slate-400">Report Office</div>
                <div className="font-bold text-sm text-white">Doglas Martini</div>
              </div>
              <div className="text-right">
                <div className="text-xs text-slate-400">Joined on</div>
                <div className="font-bold text-sm text-white">15 Jan 2024</div>
              </div>
            </div>
          </div>
        </div>

        {/* CARD 2: LEAVE DETAILS GAUGES */}
        <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200/80 dark:border-slate-700 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-3">
              <span className="font-bold text-base text-slate-800 dark:text-slate-100">Leave Details</span>
              <span className="text-xs text-slate-400 border border-slate-200 dark:border-slate-700 px-2 py-0.5 rounded font-mono">2026</span>
            </div>

            <div className="grid grid-cols-2 gap-2 items-center">
              <div className="space-y-2 text-xs">
                <div className="flex items-center space-x-2"><span className="w-2.5 h-2.5 rounded-full bg-[#059669]"></span><span className="font-bold text-sm">1254</span><span className="text-slate-400">on time</span></div>
                <div className="flex items-center space-x-2"><span className="w-2.5 h-2.5 rounded-full bg-[#3b82f6]"></span><span className="font-bold text-sm">32</span><span className="text-slate-400">Late Attendance</span></div>
                <div className="flex items-center space-x-2"><span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]"></span><span className="font-bold text-sm">658</span><span className="text-slate-400">Work From Home</span></div>
                <div className="flex items-center space-x-2"><span className="w-2.5 h-2.5 rounded-full bg-[#dc2626]"></span><span className="font-bold text-sm">14</span><span className="text-slate-400">Absent</span></div>
                <div className="flex items-center space-x-2"><span className="w-2.5 h-2.5 rounded-full bg-[#ec4899]"></span><span className="font-bold text-sm">68</span><span className="text-slate-400">Sick Leave</span></div>
              </div>

              <div className="h-32 relative flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={leaveDonutData} innerRadius={40} outerRadius={58} paddingAngle={2} dataKey="value">
                      {leaveDonutData.map((e, i) => <Cell key={i} fill={e.color} />)}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 dark:border-slate-700 text-xs text-orange-500 font-bold">
            Better than 85% of Employees
          </div>
        </div>

        {/* CARD 3: LEAVE SUMMARY */}
        <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200/80 dark:border-slate-700 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-4">
              <span className="font-bold text-base text-slate-800 dark:text-slate-100">Leave Details</span>
              <span className="text-xs text-slate-400 border border-slate-200 dark:border-slate-700 px-2 py-0.5 rounded font-mono">2026</span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs mb-4">
              <div className="p-2.5 bg-slate-50 dark:bg-slate-700/40 rounded-lg">
                <div className="text-slate-400 text-xs">Total Leaves</div>
                <div className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-0.5">16</div>
              </div>
              <div className="p-2.5 bg-slate-50 dark:bg-slate-700/40 rounded-lg">
                <div className="text-slate-400 text-xs">Taken</div>
                <div className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-0.5">10</div>
              </div>
              <div className="p-2.5 bg-slate-50 dark:bg-slate-700/40 rounded-lg">
                <div className="text-slate-400 text-xs">Absent</div>
                <div className="text-xl font-bold text-rose-500 mt-0.5">2</div>
              </div>
              <div className="p-2.5 bg-slate-50 dark:bg-slate-700/40 rounded-lg">
                <div className="text-slate-400 text-xs">Request</div>
                <div className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-0.5">0</div>
              </div>
            </div>

            <div className="flex justify-between text-xs pt-1">
              <div><span className="text-slate-400">Worked Days:</span> <strong className="font-bold text-sm">240</strong></div>
              <div><span className="text-slate-400">Loss of Pay:</span> <strong className="font-bold text-sm text-rose-500">2</strong></div>
            </div>
          </div>

          <button className="w-full mt-4 py-2.5 bg-[#1e293b] hover:bg-slate-800 text-white rounded-lg text-xs font-bold shadow-sm transition">
            Apply New Leave
          </button>
        </div>

      </div>

      {/* MIDDLE SECTION: ATTENDANCE PUNCH, HOURS CARDS & TIMELINE BAR */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        
        {/* ATTENDANCE PUNCH CARD */}
        <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200/80 dark:border-slate-700 shadow-sm space-y-4 text-center flex flex-col justify-between">
          <div>
            <div className="text-xs text-slate-400">Attendance</div>
            <div className="text-base font-bold text-slate-900 dark:text-slate-100 mt-0.5">08:35 AM, 11 Mar 2025</div>
          </div>

          <div className="w-28 h-28 mx-auto rounded-full border-4 border-emerald-500 flex flex-col items-center justify-center p-2 shadow-inner">
            <div className="text-xs text-slate-400">Total Hours</div>
            <div className="text-base font-bold font-mono text-emerald-600">5:45:32</div>
          </div>

          <div className="space-y-1.5">
            <span className="bg-slate-900 text-white text-xs font-mono px-2.5 py-1 rounded font-bold inline-block">Production: 3.45 hrs</span>
            <div className="text-xs text-slate-400 font-medium">• Punch In at 10.00 AM</div>
          </div>

          <button className="w-full py-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-xs font-bold shadow-sm">
            Punch Out
          </button>
        </div>

        {/* METRIC CARDS & WORKING HOURS TIMELINE */}
        <div className="lg:col-span-3 space-y-5">
          
          {/* 4 HOURS CARDS */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
            {[
              { title: 'Total Hours Today', val: '8.36 / 9', pct: '5% This Week', bg: 'bg-emerald-500' },
              { title: 'Total Hours Week', val: '10 / 40', pct: '7% Last Week', bg: 'bg-emerald-500' },
              { title: 'Total Hours Month', val: '75 / 98', pct: '8% Last Month', bg: 'bg-emerald-500' },
              { title: 'Overtime this Month', val: '16 / 28', pct: '6% Last Month', bg: 'bg-rose-500' },
            ].map((m, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-800 p-3.5 rounded-xl border border-slate-200/80 dark:border-slate-700 shadow-sm flex flex-col justify-between">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-slate-400 font-semibold">{m.title}</span>
                  <span className={`w-2.5 h-2.5 rounded-full ${m.bg}`}></span>
                </div>
                <div className="text-lg font-bold text-slate-900 dark:text-slate-100 my-1.5">{m.val}</div>
                <div className="text-xs text-emerald-500 font-bold">{m.pct}</div>
              </div>
            ))}
          </div>

          {/* TIMELINE PROGRESS BREAKDOWN BAR */}
          <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200/80 dark:border-slate-700 shadow-sm space-y-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div>
                <div className="text-slate-400 text-xs">• Total Working hours</div>
                <div className="font-bold text-base mt-0.5">12h 36m</div>
              </div>
              <div>
                <div className="text-slate-400 text-xs">• Productive Hours</div>
                <div className="font-bold text-base text-emerald-500 mt-0.5">08h 36m</div>
              </div>
              <div>
                <div className="text-slate-400 text-xs">• Break hours</div>
                <div className="font-bold text-base text-amber-500 mt-0.5">22m 15s</div>
              </div>
              <div>
                <div className="text-slate-400 text-xs">• Overtime</div>
                <div className="font-bold text-base text-blue-500 mt-0.5">02h 15m</div>
              </div>
            </div>

            {/* Daily Hours Timeline Bar Scale */}
            <div className="w-full h-3.5 rounded-md overflow-hidden flex bg-slate-100 dark:bg-slate-700">
              <div className="bg-emerald-500 h-full w-[60%]"></div>
              <div className="bg-amber-400 h-full w-[15%]"></div>
              <div className="bg-blue-500 h-full w-[15%]"></div>
              <div className="bg-emerald-500 h-full w-[10%]"></div>
            </div>

            <div className="flex justify-between text-xs text-slate-400 font-mono overflow-x-auto pt-1">
              <span>06:00</span><span>07:00</span><span>08:00</span><span>09:00</span><span>10:00</span><span>11:00</span><span>12:00</span><span>01:00</span><span>02:00</span><span>03:00</span><span>04:00</span><span>05:00</span><span>06:00</span><span>07:00</span><span>08:00</span><span>09:00</span><span>10:00</span><span>11:00</span>
            </div>
          </div>

        </div>

      </div>

      {/* PROJECTS & TASKS SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        
        {/* PROJECTS CARDS */}
        <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200/80 dark:border-slate-700 shadow-sm space-y-4">
          <div className="flex justify-between items-center">
            <span className="font-bold text-base text-slate-800 dark:text-slate-100">Projects</span>
            <span className="text-xs text-slate-400 border border-slate-200 dark:border-slate-700 px-2.5 py-1 rounded flex items-center gap-1 font-medium">
              Ongoing Projects <ChevronDown className="w-3.5 h-3.5" />
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {[1, 2].map((p) => (
              <div key={p} className="p-3.5 bg-slate-50 dark:bg-slate-700/40 rounded-xl border border-slate-100 dark:border-slate-700 space-y-2.5">
                <div className="font-bold text-sm text-slate-900 dark:text-slate-100">Office Management</div>
                <div className="flex items-center space-x-2.5 text-xs">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80" className="w-7 h-7 rounded-full" alt="" />
                  <div>
                    <div className="font-bold text-sm">Anthony Lewis</div>
                    <div className="text-xs text-slate-400">Project Leader</div>
                  </div>
                </div>
                <div className="text-xs text-slate-400 font-medium">14 Jan 2024 Deadline • Tasks: 6/10</div>
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-semibold">
                    <span>Time Spent</span>
                    <span className="text-emerald-500 font-mono">65/120 Hrs</span>
                  </div>
                  <div className="w-full h-2 bg-slate-200 dark:bg-slate-600 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 w-[55%]"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TASKS CHECKLIST */}
        <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200/80 dark:border-slate-700 shadow-sm space-y-4">
          <div className="flex justify-between items-center">
            <span className="font-bold text-base text-slate-800 dark:text-slate-100">Tasks</span>
            <span className="text-xs text-slate-400 border border-slate-200 dark:border-slate-700 px-2.5 py-1 rounded flex items-center gap-1 font-medium">
              All Projects <ChevronDown className="w-3.5 h-3.5" />
            </span>
          </div>

          <div className="space-y-2.5 text-xs">
            {[
              { task: 'Patient appointment booking', status: 'Onhold', sColor: 'bg-amber-100 text-amber-800' },
              { task: 'Appointment booking with payment', status: 'Inprogress', sColor: 'bg-purple-100 text-purple-800' },
              { task: 'Patient and Doctor video conferencing', status: 'Completed', sColor: 'bg-emerald-100 text-emerald-800' },
              { task: 'Private chat module', status: 'Pending', sColor: 'bg-orange-100 text-orange-800' },
              { task: 'Go-Live and Post-Implementation Support', status: 'Inprogress', sColor: 'bg-purple-100 text-purple-800' },
            ].map((t, idx) => (
              <div key={idx} className="p-2.5 bg-slate-50 dark:bg-slate-700/40 rounded-lg flex justify-between items-center">
                <div className="flex items-center space-x-2.5">
                  <input type="checkbox" className="w-4 h-4 rounded text-orange-500 cursor-pointer" />
                  <span className="font-medium text-sm text-slate-800 dark:text-slate-200">{t.task}</span>
                </div>
                <span className={`text-xs font-bold px-2.5 py-0.5 rounded ${t.sColor}`}>• {t.status}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* LOWER SECTION: PERFORMANCE CHART, SKILLS & TEAM BIRTHDAY */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        
        {/* PERFORMANCE CHART */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200/80 dark:border-slate-700 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <div>
              <span className="font-bold text-base text-slate-800 dark:text-slate-100">Performance</span>
              <div className="text-xs text-emerald-500 font-bold mt-0.5">98% (+20%) vs last year</div>
            </div>
            <span className="text-xs text-slate-400 border border-slate-200 dark:border-slate-700 px-2 py-0.5 rounded font-mono">2026</span>
          </div>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} />
                <YAxis stroke="#94a3b8" fontSize={12} />
                <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }} />
                <Area type="monotone" dataKey="val" stroke="#10b981" fill="#10b981" fillOpacity={0.2} strokeWidth={2.5} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* MY SKILLS */}
        <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200/80 dark:border-slate-700 shadow-sm space-y-4">
          <div className="flex justify-between items-center">
            <span className="font-bold text-base text-slate-800 dark:text-slate-100">My Skills</span>
            <span className="text-xs text-slate-400 border border-slate-200 dark:border-slate-700 px-2 py-0.5 rounded font-mono">2026</span>
          </div>
          
          <div className="space-y-3 text-xs">
            {[
              { skill: 'Figma', updated: '15 May 2025', pct: '95%' },
              { skill: 'HTML', updated: '12 May 2025', pct: '85%' },
              { skill: 'CSS', updated: '12 May 2025', pct: '70%' },
              { skill: 'Wordpress', updated: '15 May 2025', pct: '61%' },
              { skill: 'Javascript', updated: '13 May 2025', pct: '58%' },
            ].map((s, i) => (
              <div key={i} className="space-y-1">
                <div className="flex justify-between text-xs">
                  <div>
                    <span className="font-bold text-sm text-slate-900 dark:text-slate-100">{s.skill}</span>
                    <span className="text-xs text-slate-400 ml-2">Updated: {s.updated}</span>
                  </div>
                  <span className="font-bold text-sm text-emerald-500">{s.pct}</span>
                </div>
                <div className="w-full h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: s.pct }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* MEETINGS, NOTIFICATIONS, TEAM MEMBERS & WIDGETS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        
        {/* MEETINGS SCHEDULE */}
        <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200/80 dark:border-slate-700 shadow-sm space-y-4">
          <div className="flex justify-between items-center">
            <span className="font-bold text-base text-slate-800 dark:text-slate-100">Meetings Schedule</span>
            <span className="text-xs text-orange-500 font-bold cursor-pointer">View All</span>
          </div>
          <div className="space-y-2.5 text-xs">
            {[
              { time: '09:25 AM', title: 'Marketing Strategy Presentation', tag: 'Marketing' },
              { time: '09:20 AM', title: 'Design Review Hospital, doctors Management', tag: 'Review' },
              { time: '09:18 AM', title: 'Birthday Celebration of Employee', tag: 'Celebration' },
              { time: '09:10 AM', title: 'Update of Project Flow', tag: 'Development' },
            ].map((m, i) => (
              <div key={i} className="p-2.5 bg-slate-50 dark:bg-slate-700/40 rounded-lg flex justify-between items-start">
                <div>
                  <div className="font-bold text-sm text-slate-900 dark:text-slate-100">{m.title}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{m.time}</div>
                </div>
                <span className="text-xs bg-slate-200 dark:bg-slate-600 px-2 py-0.5 rounded font-semibold shrink-0 ml-1.5">{m.tag}</span>
              </div>
            ))}
          </div>
        </div>

        {/* NOTIFICATIONS */}
        <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200/80 dark:border-slate-700 shadow-sm space-y-4">
          <div className="flex justify-between items-center">
            <span className="font-bold text-base text-slate-800 dark:text-slate-100">Notifications</span>
            <span className="text-xs text-orange-500 font-bold cursor-pointer">View All</span>
          </div>
          <div className="space-y-2.5 text-xs">
            {[
              { text: 'Lex Murphy requested access to UNIX', time: 'Today at 9:42 AM' },
              { text: 'EY_review.pdf uploaded', time: 'Today at 10:00 AM' },
              { text: 'Lex Murphy requested access to UNIX', time: 'Today at 10:50 AM' },
              { text: 'Lex Murphy requested access to UNIX', time: 'Today at 12:00 PM' },
            ].map((n, i) => (
              <div key={i} className="p-2.5 bg-slate-50 dark:bg-slate-700/40 rounded-lg space-y-1">
                <div className="font-bold text-sm text-slate-900 dark:text-slate-100">{n.text}</div>
                <div className="text-xs text-slate-400">{n.time}</div>
              </div>
            ))}
          </div>
        </div>

        {/* TEAM MEMBERS & BIRTHDAY */}
        <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200/80 dark:border-slate-700 shadow-sm space-y-4">
          <div className="flex justify-between items-center">
            <span className="font-bold text-base text-slate-800 dark:text-slate-100">Team Members</span>
            <span className="text-xs text-orange-500 font-bold cursor-pointer">View All</span>
          </div>
          <div className="space-y-2.5 text-xs">
            {[
              { name: 'Alexander Jermai', role: 'UI/UX Designer' },
              { name: 'Doglas Martini', role: 'Product Designer' },
              { name: 'Daniel Esbella', role: 'Project Manager' },
              { name: 'Stephan Peralt', role: 'Team Lead' },
            ].map((tm, i) => (
              <div key={i} className="p-2.5 bg-slate-50 dark:bg-slate-700/40 rounded-lg flex justify-between items-center">
                <div className="flex items-center space-x-2.5">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80" className="w-8 h-8 rounded-full" alt="" />
                  <div>
                    <div className="font-bold text-sm text-slate-900 dark:text-slate-100">{tm.name}</div>
                    <div className="text-xs text-slate-400">{tm.role}</div>
                  </div>
                </div>
                <div className="flex space-x-1.5">
                  <button className="px-2.5 py-1 bg-emerald-500 text-white text-xs font-bold rounded">Approve</button>
                  <button className="px-2.5 py-1 bg-slate-200 text-slate-700 text-xs font-bold rounded">Decline</button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}