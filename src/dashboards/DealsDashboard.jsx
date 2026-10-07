import React from 'react';
import { 
  Download, Calendar, ChevronDown, TrendingUp, TrendingDown, 
  MoreVertical, Phone, Mail, MessageSquare, Globe 
} from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  LineChart, Line 
} from 'recharts';

// --- MOCK DATA MATCHING DEALS DASHBOARD PDF ---
const dealsByStageData = [
  { name: 'Inpipeline', val: 80 },
  { name: 'Follow Up', val: 40 },
  { name: 'Schedule', val: 100 },
  { name: 'Conversion', val: 20 },
];

const countrySparklines = {
  USA: [{ v: 10 }, { v: 25 }, { v: 18 }, { v: 30 }, { v: 22 }, { v: 35 }],
  UAE: [{ v: 15 }, { v: 20 }, { v: 12 }, { v: 28 }, { v: 18 }, { v: 25 }],
  Singapore: [{ v: 20 }, { v: 10 }, { v: 25 }, { v: 15 }, { v: 30 }, { v: 22 }],
  France: [{ v: 12 }, { v: 22 }, { v: 15 }, { v: 25 }, { v: 20 }, { v: 30 }],
  Norway: [{ v: 18 }, { v: 28 }, { v: 14 }, { v: 22 }, { v: 16 }, { v: 26 }],
};

export default function DealsDashboard() {
  return (
    <div className="space-y-6 text-slate-800 dark:text-slate-100 font-sans text-sm bg-[#f4f6f9] dark:bg-slate-900 min-h-screen p-3 sm:p-5">
      
      {/* PAGE HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Deals Dashboard</h1>
          <div className="text-xs text-slate-400 font-medium flex items-center space-x-1.5 mt-1">
            <span>🏠</span>
            <span>&gt;</span>
            <span>Dashboard</span>
            <span>&gt;</span>
            <span className="text-slate-600 dark:text-slate-300 font-semibold">Deals Dashboard</span>
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
          { title: 'Total Deals', val: '$45,221.45', sub: '-4.01% from last week', isDown: true },
          { title: 'Total Customers', val: '9895', sub: '+55% from last week', isDown: false },
          { title: 'Deal Value', val: '$12,545.68', sub: '-0.01% from last week', isDown: true },
          { title: 'Conversion Rate', val: '51.96%', sub: '-6.01% from last week', isDown: true },
          { title: 'Revenue this month', val: '$46,548.48', sub: '+55% from last week', isDown: false },
        ].map((card, i) => (
          <div key={i} className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200/80 dark:border-slate-700 shadow-sm flex flex-col justify-between">
            <span className="text-xs text-slate-400 font-medium">{card.title}</span>
            <div className="text-xl font-bold text-slate-900 dark:text-slate-100 my-2">{card.val}</div>
            <div className={`text-xs font-semibold flex items-center space-x-1 ${card.isDown ? 'text-rose-500' : 'text-emerald-500'}`}>
              {card.isDown ? <TrendingDown className="w-3.5 h-3.5" /> : <TrendingUp className="w-3.5 h-3.5" />}
              <span>{card.sub}</span>
            </div>
          </div>
        ))}
      </div>

      {/* PIPELINE STAGES & LEADS VALUES */}
      <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200/80 dark:border-slate-700 shadow-sm space-y-5">
        <div className="flex justify-between items-center">
          <span className="font-bold text-base text-slate-800 dark:text-slate-100">Pipeline Stages</span>
          <span className="text-xs text-slate-400 border border-slate-200 dark:border-slate-700 px-2.5 py-1 rounded font-medium flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" /> This Week
          </span>
        </div>

        {/* Funnel Visual Stack */}
        <div className="max-w-2xl mx-auto space-y-2 py-2">
          {[
            { stage: 'Marketing - 7,398', w: 'w-full', bg: 'bg-orange-500' },
            { stage: 'Sales - 4,058', w: 'w-[85%]', bg: 'bg-orange-400' },
            { stage: 'Email - 2,800', w: 'w-[70%]', bg: 'bg-orange-400/90' },
            { stage: 'Chat - 780', w: 'w-[55%]', bg: 'bg-orange-300' },
            { stage: 'Operational - 525', w: 'w-[42%]', bg: 'bg-orange-300/80' },
            { stage: 'Calls - 425', w: 'w-[32%]', bg: 'bg-orange-200 text-slate-800' },
          ].map((f, i) => (
            <div key={i} className={`mx-auto ${f.w} py-2 rounded-xl text-center text-white font-bold text-xs shadow-sm transition-all ${f.bg}`}>
              {f.stage}
            </div>
          ))}
        </div>

        {/* Leads Values By Stages Row */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-700 grid grid-cols-2 sm:grid-cols-5 gap-4 text-xs">
          <div><div className="text-slate-400">• Marketing</div><div className="font-bold text-base mt-0.5">$5,221.45</div></div>
          <div><div className="text-slate-400">• Sales</div><div className="font-bold text-base mt-0.5">$30,424</div></div>
          <div><div className="text-slate-400">• Email</div><div className="font-bold text-base mt-0.5">$21,135</div></div>
          <div><div className="text-slate-400">• Chat</div><div className="font-bold text-base mt-0.5">$15,235</div></div>
          <div><div className="text-slate-400">• Operational</div><div className="font-bold text-base mt-0.5">$10,557</div></div>
        </div>
      </div>

      {/* DEALS BY STAGE, WON DEALS STAGE & DEALS BY COUNTRY */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        
        {/* DEALS BY STAGE BAR CHART */}
        <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200/80 dark:border-slate-700 shadow-sm space-y-3">
          <div className="flex justify-between items-center">
            <span className="font-bold text-base text-slate-800 dark:text-slate-100">Deals by Stage</span>
            <span className="text-xs text-slate-400 border border-slate-200 dark:border-slate-700 px-2 py-0.5 rounded font-medium">This Week</span>
          </div>
          <div>
            <div className="text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <span>$20,245</span>
              <span className="text-xs bg-emerald-100 text-emerald-600 px-2 py-0.5 rounded-full font-bold">+12% vs last year</span>
            </div>
          </div>
          <div className="h-52">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dealsByStageData}>
                <XAxis dataKey="name" stroke="#94a3b8" fontSize={11} />
                <YAxis stroke="#94a3b8" fontSize={11} />
                <Bar dataKey="val" fill="#f97316" radius={[12, 12, 12, 12]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* WON DEALS STAGE (OVERLAPPING BUBBLES VISUALIZATION) */}
        <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200/80 dark:border-slate-700 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-center mb-1">
            <span className="font-bold text-base text-slate-800 dark:text-slate-100">Won Deals Stage</span>
            <span className="text-xs text-slate-400 border border-slate-200 dark:border-slate-700 px-2 py-0.5 rounded font-medium">This Week</span>
          </div>
          
          <div className="text-center my-1">
            <div className="text-xs text-slate-400">Stages Won This Year</div>
            <div className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center justify-center gap-2 mt-0.5">
              <span>$45,899.79</span>
              <span className="text-xs bg-rose-100 text-rose-600 px-2 py-0.5 rounded-full font-bold">+12%</span>
            </div>
          </div>

          {/* PDF Exact Bubble Diagram */}
          <div className="relative h-44 my-2 flex items-center justify-center">
            {/* Dark Blue: Conversion 48% */}
            <div className="absolute left-4 w-28 h-28 rounded-full bg-[#033b52] text-white flex flex-col items-center justify-center font-bold text-xs shadow-md z-10">
              <span>Conversion</span>
              <span>48%</span>
            </div>
            {/* Red: Calls 24% */}
            <div className="absolute top-1 right-20 w-16 h-16 rounded-full bg-[#dc2626] text-white flex flex-col items-center justify-center font-bold text-[10px] shadow-md z-20">
              <span>Calls</span>
              <span>24%</span>
            </div>
            {/* Yellow: Email 19% */}
            <div className="absolute right-4 w-24 h-24 rounded-full bg-[#f59e0b] text-slate-900 flex flex-col items-center justify-center font-bold text-xs shadow-md z-10">
              <span>Email</span>
              <span>19%</span>
            </div>
            {/* Green: Chat 20% */}
            <div className="absolute bottom-2 left-24 w-18 h-18 rounded-full bg-[#10b981] text-white flex flex-col items-center justify-center font-bold text-[10px] shadow-md z-30">
              <span>Chat</span>
              <span>20%</span>
            </div>
          </div>

          <div className="text-center text-xs text-slate-400 font-medium pt-2 border-t border-slate-100 dark:border-slate-700">
            • Conversion • Calls • Email • Chat
          </div>
        </div>

        {/* DEALS BY COUNTRY WITH SPARKLINE GRAPHS */}
        <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200/80 dark:border-slate-700 shadow-sm space-y-3">
          <div className="flex justify-between items-center">
            <span className="font-bold text-base text-slate-800 dark:text-slate-100">Deals By Country</span>
            <span className="text-xs text-orange-500 font-bold cursor-pointer">View All</span>
          </div>
          <div className="space-y-2.5 text-xs">
            {[
              { country: 'USA', deals: '356', val: '$1065.00', flag: '🇺🇸', color: '#10b981' },
              { country: 'UAE', deals: '221', val: '$966.00', flag: '🇦🇪', color: '#10b981' },
              { country: 'Singapore', deals: '236', val: '$959.00', flag: '🇸🇬', color: '#f43f5e' },
              { country: 'France', deals: '589', val: '$879.00', flag: '🇫🇷', color: '#10b981' },
              { country: 'Norway', deals: '221', val: '$632.00', flag: '🇳🇴', color: '#f43f5e' },
            ].map((c, i) => (
              <div key={i} className="flex justify-between items-center p-2 bg-slate-50 dark:bg-slate-700/40 rounded-lg">
                <div className="flex items-center space-x-2.5 w-28">
                  <span className="text-lg">{c.flag}</span>
                  <div>
                    <div className="font-bold text-sm text-slate-900 dark:text-slate-100">{c.country}</div>
                    <div className="text-[10px] text-slate-400">Deals: {c.deals}</div>
                  </div>
                </div>

                {/* Inline Sparkline Chart matching PDF */}
                <div className="w-20 h-8">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={countrySparklines[c.country]}>
                      <Line type="monotone" dataKey="v" stroke={c.color} strokeWidth={2} dot={false} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                <div className="text-right w-24">
                  <div className="text-[10px] text-slate-400">Total Value</div>
                  <div className="font-bold text-sm font-mono text-slate-900 dark:text-slate-100">{c.val}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* TOP DEALS & RECENT FOLLOW UP */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        
        {/* TOP DEALS */}
        <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200/80 dark:border-slate-700 shadow-sm space-y-4">
          <div className="flex justify-between items-center">
            <span className="font-bold text-base text-slate-800 dark:text-slate-100">Top Deals</span>
            <span className="text-xs text-slate-400 border border-slate-200 dark:border-slate-700 px-2 py-0.5 rounded font-medium">This Week</span>
          </div>
          <div className="space-y-2.5 text-xs">
            {[
              { company: 'Pitch', val: '$3655', date: 'Closing Deal date 05 April, 2025', stage: 'Marketing' },
              { company: 'Initech', val: '$2185', date: 'Closing Deal date 05 May, 2025', stage: 'Chat' },
              { company: 'Umbrella Corp', val: '$1583', date: 'Closing Deal date 29 April, 2025', stage: 'Email' },
              { company: 'Capital Partners', val: '$6584', date: 'Closing Deal date 23 Mar, 2025', stage: 'Status' },
              { company: 'Massive Dynamic', val: '$2153', date: 'Closing Deal date 23 Feb, 2025', stage: 'Email' },
            ].map((d, i) => (
              <div key={i} className="p-3 bg-slate-50 dark:bg-slate-700/40 rounded-xl flex justify-between items-center">
                <div>
                  <div className="font-bold text-sm text-slate-900 dark:text-slate-100">{d.company}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{d.date}</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-sm font-mono text-slate-900 dark:text-slate-100">{d.val}</div>
                  <span className="text-xs bg-slate-200 dark:bg-slate-600 px-2 py-0.5 rounded font-semibold text-slate-700 dark:text-slate-300 mt-1 inline-block">{d.stage}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RECENT FOLLOW UP */}
        <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200/80 dark:border-slate-700 shadow-sm space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <span className="font-bold text-base text-slate-800 dark:text-slate-100">Recent Follow Up</span>
              <div className="text-xs text-slate-400 mt-0.5">Active Customers: <strong className="text-slate-800 dark:text-slate-200 font-bold">8987</strong> (+3.22% from last week)</div>
            </div>
            <span className="text-xs text-slate-400 border border-slate-200 dark:border-slate-700 px-2 py-0.5 rounded font-medium">This Week</span>
          </div>
          <div className="space-y-2.5 text-xs">
            {[
              { name: 'Alexander Jermai', role: 'UI/UX Designer', amt: '$5,69,877' },
              { name: 'Doglas Martini', role: 'Product Designer', amt: '$4,84,575' },
              { name: 'Daniel Esbella', role: 'Project Manager', amt: '$1,84,575' },
              { name: 'Daniel Esbella', role: 'Team Lead', amt: '$1,84,575' },
            ].map((usr, i) => (
              <div key={i} className="p-3 bg-slate-50 dark:bg-slate-700/40 rounded-xl flex justify-between items-center">
                <div className="flex items-center space-x-2.5">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80" className="w-8 h-8 rounded-full" alt="" />
                  <div>
                    <div className="font-bold text-sm text-slate-900 dark:text-slate-100">{usr.name}</div>
                    <div className="text-xs text-slate-400">{usr.role}</div>
                  </div>
                </div>
                <div className="font-bold text-sm font-mono text-emerald-600 dark:text-emerald-400">{usr.amt}</div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* RECENT DEALS TABLE & RECENT ACTIVITIES (PAGE 2) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        
        {/* RECENT DEALS TABLE (2 COLS) */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200/80 dark:border-slate-700 shadow-sm overflow-hidden space-y-4">
          <div className="flex justify-between items-center">
            <span className="font-bold text-base text-slate-800 dark:text-slate-100">Recent Deals</span>
            <span className="text-xs text-orange-500 font-bold cursor-pointer">View All</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 dark:bg-slate-700/50 text-slate-500 uppercase font-semibold">
                <tr>
                  <th className="p-3">Deal Name</th>
                  <th className="p-3">Stage</th>
                  <th className="p-3">Deal Value</th>
                  <th className="p-3">Owner</th>
                  <th className="p-3">Closed Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                {[
                  { name: 'Collins', stage: 'Quality To Buy', val: '$4,50,000', owner: 'Anthony Lewis', date: '14 Jan 2024' },
                  { name: 'Konopelski', stage: 'Proposal Made', val: '$3,15,000', owner: 'Brian Villalobos', date: '21 Jan 2024' },
                  { name: 'Adams', stage: 'Contact Made', val: '$8,40,000', owner: 'Harvey Smith', date: '20 Feb 2024' },
                  { name: 'Schumm', stage: 'Quality To Buy', val: '$6,10,000', owner: 'Stephan Peralt', date: '15 Mar 2024' },
                  { name: 'Wisozk', stage: 'Presentation', val: '$4,70,000', owner: 'Doglas Martini', date: '12 Apr 2024' },
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-700/30">
                    <td className="p-3 font-bold text-slate-900 dark:text-slate-100 text-sm">{row.name}</td>
                    <td className="p-3"><span className="bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded font-medium">{row.stage}</span></td>
                    <td className="p-3 font-bold font-mono text-sm">{row.val}</td>
                    <td className="p-3 text-slate-500 font-medium">{row.owner}</td>
                    <td className="p-3 text-slate-400 font-mono">{row.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
              <div key={i} className="p-3 bg-slate-50 dark:bg-slate-700/40 rounded-xl space-y-1">
                <div className="font-semibold text-slate-800 dark:text-slate-200">{act.text}</div>
                <div className="text-xs text-slate-400 font-mono text-right">{act.time}</div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}