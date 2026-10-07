import React from 'react';
import { 
  Download, Calendar, ChevronDown, TrendingUp, TrendingDown 
} from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell, AreaChart, Area 
} from 'recharts';

// --- MOCK DATA MATCHING EXACT LEADS DASHBOARD PDF ---
const pipelineStagesData = [
  { month: 'Jan', contacted: 50, oppurtunity: 25, notContacted: 12 },
  { month: 'Feb', contacted: 70, oppurtunity: 30, notContacted: 15 },
  { month: 'Mar', contacted: 65, oppurtunity: 35, notContacted: 18 },
  { month: 'Apr', contacted: 80, oppurtunity: 40, notContacted: 20 },
  { month: 'May', contacted: 75, oppurtunity: 38, notContacted: 16 },
  { month: 'Jun', contacted: 90, oppurtunity: 50, notContacted: 22 },
  { month: 'Jul', contacted: 85, oppurtunity: 45, notContacted: 19 },
  { month: 'Aug', contacted: 95, oppurtunity: 55, notContacted: 25 },
  { month: 'Sep', contacted: 70, oppurtunity: 35, notContacted: 15 },
  { month: 'Oct', contacted: 80, oppurtunity: 40, notContacted: 20 },
  { month: 'Nov', contacted: 60, oppurtunity: 30, notContacted: 14 },
  { month: 'Dec', contacted: 75, oppurtunity: 38, notContacted: 17 },
];

const lostLeadsData = [
  { name: 'Generated', val: 80 },
  { name: 'Budget', val: 40 },
  { name: 'Inadequacy', val: 60 },
  { name: 'Timing', val: 40 },
];

const leadsBySourceData = [
  { name: 'Google', value: 40, color: '#033b52' },
  { name: 'Paid', value: 35, color: '#f59e0b' },
  { name: 'Campaign', value: 15, color: '#dc2626' },
  { name: 'Referrals', value: 10, color: '#3b82f6' },
];

// PDF Heatmap exact numbers
const heatmapGrid = [
  [30, 70, 120, 50, 30, 30, 70],
  [20, 60, 40, 60, 20, 20, 60],
  [40, 30, 20, 40, 40, 40, 30],
  [20, 40, 10, 30, 30, 30, 40],
  [10, 20, 10, 20, 20, 20, 20]
];

export default function LeadsDashboard() {
  return (
    <div className="space-y-6 text-slate-800 dark:text-slate-100 font-sans text-sm bg-[#f4f6f9] dark:bg-slate-900 min-h-screen p-3 sm:p-5">
      
      {/* PAGE HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Leads Dashboard</h1>
          <div className="text-xs text-slate-400 font-medium flex items-center space-x-1.5 mt-1">
            <span>🏠</span>
            <span>&gt;</span>
            <span>Dashboard</span>
            <span>&gt;</span>
            <span className="text-slate-600 dark:text-slate-300 font-semibold">Leads Dashboard</span>
          </div>
        </div>

        <div className="flex items-center space-x-2 shrink-0">
          <button className="px-3.5 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-200 flex items-center space-x-2 shadow-sm">
            <Download className="w-4 h-4 text-slate-400" />
            <span>Export</span>
          </button>
          <button className="px-3.5 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-200 flex items-center space-x-2 shadow-sm">
            <Calendar className="w-4 h-4 text-slate-400" />
            <span>10/01/2026 - 10/07/2026</span>
          </button>
        </div>
      </div>

      {/* 5 TOP METRIC CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {[
          { title: 'Total No of Leads', val: '6000', sub: '-4.01% from last week', isDown: true },
          { title: 'No of New Leads', val: '120', sub: '+20.01% from last week', isDown: false },
          { title: 'No of Lost Leads', val: '30', sub: '+55% from last week', isDown: false },
          { title: 'No of Total Customers', val: '9895', sub: '+55% from last week', isDown: false },
          { title: 'New Leads', val: '120', sub: '+55% from last week', isDown: false },
        ].map((card, i) => (
          <div key={i} className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200/80 dark:border-slate-700 shadow-sm flex flex-col justify-between">
            <span className="text-xs text-slate-400 font-medium">{card.title}</span>
            <div className="text-2xl font-bold text-slate-900 dark:text-slate-100 my-2">{card.val}</div>
            <div className={`text-xs font-semibold flex items-center space-x-1 ${card.isDown ? 'text-rose-500' : 'text-emerald-500'}`}>
              {card.isDown ? <TrendingDown className="w-3.5 h-3.5" /> : <TrendingUp className="w-3.5 h-3.5" />}
              <span>{card.sub}</span>
            </div>
          </div>
        ))}
      </div>

      {/* PIPELINE STAGES CHART & HEATMAP GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        
        {/* PIPELINE STAGES (2 COLS) */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200/80 dark:border-slate-700 shadow-sm space-y-4">
          <div className="flex justify-between items-center flex-wrap gap-2">
            <span className="font-bold text-base text-slate-800 dark:text-slate-100">Pipeline Stages</span>
            <div className="flex items-center space-x-3 text-xs">
              <span className="flex items-center space-x-1"><span className="w-2.5 h-2.5 rounded bg-orange-500"></span><span>Contacted (50000)</span></span>
              <span className="flex items-center space-x-1"><span className="w-2.5 h-2.5 rounded bg-amber-500"></span><span>Oppurtunity (25985)</span></span>
              <span className="flex items-center space-x-1"><span className="w-2.5 h-2.5 rounded bg-slate-300"></span><span>Not Contacted (12566)</span></span>
              <span className="text-slate-400 border border-slate-200 dark:border-slate-700 px-2 py-0.5 rounded font-mono">2023-2024</span>
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={pipelineStagesData}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                <XAxis dataKey="month" stroke="#94a3b8" fontSize={11} />
                <YAxis stroke="#94a3b8" fontSize={11} />
                <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }} />
                <Area type="monotone" dataKey="contacted" stackId="1" stroke="#ff6b35" fill="#ff6b35" fillOpacity={0.6} />
                <Area type="monotone" dataKey="oppurtunity" stackId="1" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.4} />
                <Area type="monotone" dataKey="notContacted" stackId="1" stroke="#cbd5e1" fill="#cbd5e1" fillOpacity={0.3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* WEEKLY ACTIVITY HEATMAP (1 COL) */}
        <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200/80 dark:border-slate-700 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-center mb-2">
            <span className="font-bold text-base text-slate-800 dark:text-slate-100">Leads Activity</span>
            <span className="text-xs text-slate-400 border border-slate-200 dark:border-slate-700 px-2 py-0.5 rounded font-medium">This Week</span>
          </div>

          <div className="space-y-1.5 my-auto">
            {heatmapGrid.map((row, rIdx) => (
              <div key={rIdx} className="grid grid-cols-7 gap-1.5 text-center text-[10px] font-bold">
                {row.map((val, cIdx) => (
                  <div 
                    key={cIdx} 
                    className={`p-2.5 rounded-lg flex items-center justify-center text-slate-800 dark:text-slate-100 ${
                      val >= 100 ? 'bg-orange-500 text-white font-extrabold scale-105 shadow-sm' :
                      val >= 60 ? 'bg-orange-200 dark:bg-orange-950/40 text-orange-900 dark:text-orange-300' :
                      val >= 40 ? 'bg-slate-200 dark:bg-slate-700' : 'bg-slate-100 dark:bg-slate-800/80'
                    }`}
                  >
                    {val}
                  </div>
                ))}
              </div>
            ))}
            <div className="grid grid-cols-7 gap-1.5 text-center text-xs text-slate-400 font-semibold pt-2">
              <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
            </div>
          </div>

          <div className="text-center text-xs text-slate-400 font-medium pt-2 border-t border-slate-100 dark:border-slate-700">
            • Active lead interactions during peak hours
          </div>
        </div>

      </div>

      {/* LOST LEADS, LEADS BY SOURCE & LEADS BY COMPANIES */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        
        {/* LOST LEADS BAR CHART */}
        <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200/80 dark:border-slate-700 shadow-sm space-y-4">
          <div className="flex justify-between items-center">
            <span className="font-bold text-base text-slate-800 dark:text-slate-100">Lost Leads</span>
            <span className="text-xs text-slate-400 border border-slate-200 dark:border-slate-700 px-2.5 py-1 rounded font-medium flex items-center gap-1">
              Sales Pipeline <ChevronDown className="w-3.5 h-3.5" />
            </span>
          </div>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={lostLeadsData}>
                <XAxis dataKey="name" stroke="#94a3b8" fontSize={11} />
                <YAxis stroke="#94a3b8" fontSize={11} />
                <Bar dataKey="val" fill="#ff6b35" radius={[8, 8, 0, 0]} barSize={36} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* LEADS BY SOURCE DONUT CHART */}
        <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200/80 dark:border-slate-700 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-center mb-2">
            <span className="font-bold text-base text-slate-800 dark:text-slate-100">Leads by Source</span>
            <span className="text-xs text-slate-400 border border-slate-200 dark:border-slate-700 px-2 py-0.5 rounded font-medium">This Week</span>
          </div>

          <div className="h-44 relative flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={leadsBySourceData} innerRadius={50} outerRadius={70} paddingAngle={3} dataKey="value">
                  {leadsBySourceData.map((e, i) => <Cell key={i} fill={e.color} />)}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute text-center">
              <div className="text-xs text-slate-400">Leads</div>
              <div className="text-xl font-bold text-slate-900 dark:text-slate-100">589</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs pt-2 border-t border-slate-100 dark:border-slate-700">
            <div className="flex items-center space-x-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#033b52]"></span><span>Google (40%)</span></div>
            <div className="flex items-center space-x-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span><span>Paid (35%)</span></div>
            <div className="flex items-center space-x-1.5"><span className="w-2.5 h-2.5 rounded-full bg-rose-600"></span><span>Campaign (15%)</span></div>
            <div className="flex items-center space-x-1.5"><span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span><span>Referrals (10%)</span></div>
          </div>
        </div>

        {/* LEADS BY COMPANIES */}
        <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200/80 dark:border-slate-700 shadow-sm space-y-3">
          <div className="flex justify-between items-center">
            <span className="font-bold text-base text-slate-800 dark:text-slate-100">Leads By Companies</span>
            <span className="text-xs text-orange-500 font-bold cursor-pointer">View All</span>
          </div>
          <div className="space-y-2.5 text-xs">
            {[
              { company: 'Pitch', val: '$45,985', status: 'Not Contacted', color: 'text-rose-500 bg-rose-50 dark:bg-rose-950/40' },
              { company: 'Initech', val: '$21,145', status: 'Contacted', color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40' },
              { company: 'Umbrella Corp', val: '$15,685', status: 'Contacted', color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40' },
              { company: 'Capital Partners', val: '$12,105', status: 'Not Contacted', color: 'text-rose-500 bg-rose-50 dark:bg-rose-950/40' },
              { company: 'Massive Dynamic', val: '$2,546', status: 'Contacted', color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40' },
            ].map((c, i) => (
              <div key={i} className="p-2.5 bg-slate-50 dark:bg-slate-700/40 rounded-xl flex justify-between items-center">
                <div>
                  <div className="font-bold text-sm text-slate-900 dark:text-slate-100">{c.company}</div>
                  <div className="text-xs text-slate-400">Value: <strong className="text-slate-800 dark:text-slate-200 font-bold">{c.val}</strong></div>
                </div>
                <span className={`text-xs font-bold px-2 py-0.5 rounded ${c.color}`}>{c.status}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* RECENT FOLLOW UP, TOP COUNTRIES & RECENT ACTIVITIES (PAGE 2) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        
        {/* RECENT FOLLOW UP */}
        <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200/80 dark:border-slate-700 shadow-sm space-y-4">
          <div className="flex justify-between items-center">
            <span className="font-bold text-base text-slate-800 dark:text-slate-100">Recent Follow Up</span>
            <span className="text-xs text-orange-500 font-bold cursor-pointer">View All</span>
          </div>
          <div className="space-y-2.5 text-xs">
            {[
              { name: 'Alexander Jermai', role: 'UI/UX Designer' },
              { name: 'Doglas Martini', role: 'Product Designer' },
              { name: 'Daniel Esbella', role: 'Team Lead' },
              { name: 'Doglas Martini', role: 'Team Lead' },
            ].map((usr, i) => (
              <div key={i} className="p-2.5 bg-slate-50 dark:bg-slate-700/40 rounded-xl flex justify-between items-center">
                <div className="flex items-center space-x-2.5">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80" className="w-8 h-8 rounded-full" alt="" />
                  <div>
                    <div className="font-bold text-sm text-slate-900 dark:text-slate-100">{usr.name}</div>
                    <div className="text-xs text-slate-400">{usr.role}</div>
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

        {/* TOP COUNTRIES */}
        <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200/80 dark:border-slate-700 shadow-sm space-y-3">
          <div className="flex justify-between items-center">
            <span className="font-bold text-base text-slate-800 dark:text-slate-100">Top Countries</span>
            <span className="text-xs text-orange-500 font-bold cursor-pointer">View All</span>
          </div>
          <div className="space-y-2.5 text-xs">
            {[
              { country: 'Singapore', leads: '236', flag: '🇸🇬' },
              { country: 'France', leads: '589', flag: '🇫🇷' },
              { country: 'Norway', leads: '221', flag: '🇳🇴' },
              { country: 'USA', leads: '350', flag: '🇺🇸' },
              { country: 'UAE', leads: '221', flag: '🇦🇪' },
            ].map((c, i) => (
              <div key={i} className="flex justify-between items-center p-2.5 bg-slate-50 dark:bg-slate-700/40 rounded-xl">
                <div className="flex items-center space-x-2.5">
                  <span className="text-lg">{c.flag}</span>
                  <span className="font-bold text-sm text-slate-900 dark:text-slate-100">{c.country}</span>
                </div>
                <div className="text-right font-mono font-bold text-sm text-slate-900 dark:text-slate-100">
                  Leads: {c.leads}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RECENT ACTIVITIES */}
        <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200/80 dark:border-slate-700 shadow-sm space-y-4">
          <div className="flex justify-between items-center">
            <span className="font-bold text-base text-slate-800 dark:text-slate-100">Recent Activities</span>
            <span className="text-xs text-orange-500 font-bold cursor-pointer">View All</span>
          </div>
          <div className="space-y-3 text-xs">
            {[
              { text: 'Drain responded to your appointment schedule question.', time: '09:25 PM' },
              { text: 'You sent 1 Message to James.', time: '10:25 PM' },
              { text: 'Denwar responded to your appointment on 25 Jan 2025.', time: '09:25 PM' },
              { text: 'Meeting With Abraham', time: '09:25 PM' },
            ].map((act, i) => (
              <div key={i} className="p-2.5 bg-slate-50 dark:bg-slate-700/40 rounded-xl space-y-1">
                <div className="font-semibold text-slate-800 dark:text-slate-200">{act.text}</div>
                <div className="text-xs text-slate-400 font-mono text-right">{act.time}</div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* RECENT LEADS TABLE (PAGE 2) */}
      <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200/80 dark:border-slate-700 shadow-sm overflow-hidden space-y-4">
        <div className="flex justify-between items-center">
          <span className="font-bold text-base text-slate-800 dark:text-slate-100">Recent Leads</span>
          <span className="text-xs text-orange-500 font-bold cursor-pointer">View All</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 dark:bg-slate-700/50 text-slate-500 uppercase font-semibold">
              <tr>
                <th className="p-3">Company Name</th>
                <th className="p-3">Stage</th>
                <th className="p-3">Created Date</th>
                <th className="p-3">Lead Owner</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
              {[
                { name: 'BrightWave', stage: 'Contacted', date: '14 Jan 2024', owner: 'William Parsons' },
                { name: 'Stellar', stage: 'Not Contacted', date: '21 Jan 2024', owner: 'Lucille Tomberlin' },
                { name: 'Quantum', stage: 'Contacted', date: '20 Feb 2024', owner: 'Frederick Johnson' },
                { name: 'EcoVision', stage: 'Not Contacted', date: '15 Mar 2024', owner: 'Sarah Henry' },
                { name: 'Aurora', stage: 'Contacted', date: '12 Apr 2024', owner: 'Thomas Miller' },
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-700/30">
                  <td className="p-3 font-bold text-slate-900 dark:text-slate-100 text-sm">{row.name}</td>
                  <td className="p-3">
                    <span className={`px-2 py-0.5 rounded font-bold ${row.stage === 'Contacted' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300' : 'bg-rose-100 text-rose-800 dark:bg-rose-950/40 dark:text-rose-300'}`}>
                      • {row.stage}
                    </span>
                  </td>
                  <td className="p-3 text-slate-400 font-mono text-xs">{row.date}</td>
                  <td className="p-3 text-slate-600 dark:text-slate-300 font-semibold">{row.owner}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}