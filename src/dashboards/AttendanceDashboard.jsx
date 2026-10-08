import React from "react";
import {
  CalendarDays,
  ChevronDown,
  ChevronRight,
  Clock3,
  Users,
  UserCheck,
  UserX,
  ClipboardList,
  AlertTriangle,
  Bot,
  Send,
  Sparkles,
  Settings2,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

const lateArrivals = [
  { name: "Michael Johnson", role: "Administration Head", time: "09:45 AM", bars: 6 },
  { name: "Emily Davis", role: "Frontend Developer", time: "09:30 AM", bars: 5 },
  { name: "Robert Martinez", role: "Finance Manager", time: "09:25 AM", bars: 4 },
  { name: "Megan Walker", role: "SEO Analyst", time: "09:10 AM", bars: 3 },
];

const months = [
  ["Jan", 40], ["Feb", 22], ["Mar", 53], ["Apr", 25], ["May", 56],
  ["Jun", 90], ["Jul", 43], ["Aug", 25], ["Sep", 68], ["Oct", 44],
];

const navItems = [
  "Admin Dashboard",
  "Employee Dashboard",
  "Deals Dashboard",
  "Leads Dashboard",
  "HR Dashboard",
  "Payroll Dashboard",
  "Recruitment Dashboard",
  "Attendance Dashboard",
  "Finance Dashboard",
  "IT Admin Dashboard",
  "Asset Dashboard",
  "Help Desk Dashboard",
];

function MetricCard({ label, value, change, icon: Icon, tone = "orange", down = false }) {
  const tones = {
    orange: "bg-orange-500",
    teal: "bg-cyan-800",
    yellow: "bg-amber-400",
    blue: "bg-blue-500",
    purple: "bg-fuchsia-500",
    red: "bg-red-500",
  };

  return (
    <div className="rounded-lg border border-slate-200 bg-slate-50/70 px-4 py-4">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-slate-500">{label}</p>
          <div className="mt-1.5 flex items-center gap-2">
            <span className="text-[22px] font-bold tracking-tight text-slate-800">{value}</span>
            <span className={`inline-flex items-center gap-1 rounded px-1.5 py-0.5 text-[10px] font-semibold text-white ${down ? "bg-red-500" : "bg-emerald-500"}`}>
              {down ? <ArrowDownRight size={11} /> : <ArrowUpRight size={11} />}
              {change}
            </span>
            <span className="text-xs text-slate-500">vs yesterday</span>
          </div>
        </div>
        <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white ${tones[tone]}`}>
          <Icon size={21} />
        </div>
      </div>
    </div>
  );
}

function Card({ children, className = "" }) {
  return (
    <section className={`rounded-lg border border-slate-200 bg-white shadow-sm ${className}`}>
      {children}
    </section>
  );
}

function SectionHeader({ title, right }) {
  return (
    <div className="flex items-center justify-between gap-3 px-5 pt-5">
      <h3 className="text-[15px] font-bold text-slate-900">{title}</h3>
      {right}
    </div>
  );
}

export default function AttendanceDashboard() {
  return (
    <div className="min-h-screen bg-[#f7f8fa] text-slate-900">
      <div className="mx-auto max-w-[1440px] px-5 py-5">
        {/* Page header */}
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-[25px] font-bold tracking-tight text-[#233250]">Attendance Dashboard</h1>
            <div className="mt-1 flex items-center gap-2 text-sm text-slate-500">
              <span>⌂</span><ChevronRight size={14} />
              <span>Dashboard</span><ChevronRight size={14} />
              <span className="font-medium text-slate-700">Attendance Dashboard</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium shadow-sm">
              <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-orange-500" />
              <b>06</b> Total Leaves
            </div>
            <button className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm shadow-sm">
              <CalendarDays size={15} className="mr-2 inline-block" /> Dec 2026
            </button>
            <button className="rounded-lg bg-[#ff5b1f] px-4 py-2 text-sm font-semibold text-white shadow-sm">
              + Apply Leave
            </button>
          </div>
        </div>

        {/* Overview */}
        <Card className="mb-5">
          <SectionHeader
            title="Overview Statistics"
            right={
              <button className="rounded-full border border-slate-200 px-3 py-1.5 text-xs font-semibold">
                <CalendarDays size={13} className="mr-1 inline" /> Today
              </button>
            }
          />
          <div className="grid gap-4 p-5 md:grid-cols-2 xl:grid-cols-3">
            <MetricCard label="Total Employees" value="2,847" change="12%" icon={Users} tone="orange" />
            <MetricCard label="Present Today" value="2,458" change="3.2%" icon={UserCheck} tone="teal" down />
            <MetricCard label="Absent Today" value="124" change="1.4%" icon={UserX} tone="yellow" down />
            <MetricCard label="Late Arrivals" value="89" change="12%" icon={Clock3} tone="blue" />
            <MetricCard label="Attendance Rate" value="86.3%" change="2.5%" icon={CalendarDays} tone="purple" />
            <MetricCard label="Pending Regularizations" value="42" change="7%" icon={ClipboardList} tone="red" down />
          </div>
        </Card>

        {/* Trends + status */}
        <div className="grid gap-5 xl:grid-cols-[minmax(0,2fr)_360px]">
          <Card className="overflow-hidden">
            <SectionHeader
              title="Attendance Trends"
              right={
                <div className="flex overflow-hidden rounded-full border border-slate-200 text-xs font-semibold">
                  {["1D", "7D", "1M"].map(x => <button key={x} className="px-3 py-1.5 text-slate-500">{x}</button>)}
                  <button className="bg-slate-800 px-3 py-1.5 text-white">1Y</button>
                </div>
              }
            />
            <div className="px-5 pb-5 pt-4">
              <div className="relative h-[320px] border-b border-slate-200">
                <div className="absolute inset-0 flex flex-col justify-between">
                  {[100, 80, 60, 40, 20, 0].map(v => (
                    <div key={v} className="flex items-center gap-3">
                      <span className="w-8 text-xs text-slate-500">{v}%</span>
                      <div className="h-px flex-1 border-t border-dashed border-slate-200" />
                    </div>
                  ))}
                </div>
                <div className="absolute inset-y-0 left-11 right-0 flex items-end justify-around gap-3">
                  {months.map(([month, value]) => (
                    <div key={month} className="flex h-full w-full max-w-12 flex-col justify-end">
                      <div
                        className={`rounded-t-md ${month === "Jun" ? "bg-red-500" : "bg-[#f4caca]"}`}
                        style={{ height: `${value}%` }}
                      >
                        {month === "Jun" && (
                          <span className="relative -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-slate-800 px-1.5 py-0.5 text-[10px] text-white">90%</span>
                        )}
                      </div>
                      <span className="pt-2 text-center text-xs text-slate-600">{month}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          <Card className="overflow-hidden bg-[#22262a] text-white">
            <div className="relative p-5">
              <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-[70px] bg-slate-900/80" />
              <div className="relative flex items-center justify-between">
                <h3 className="text-[15px] font-bold">Attendance Status</h3>
                <button className="rounded-full bg-white p-2 text-slate-800"><CalendarDays size={16} /></button>
              </div>
              <p className="mt-7 text-sm text-slate-300">Total Working Days</p>
              <div className="mt-1 text-2xl font-bold">300</div>
              <div className="mt-5 flex overflow-hidden rounded-xl">
                {["w-[42%]", "w-[23%]", "w-[12%]", "w-[12%]", "w-[11%]"].map((w, i) => (
                  <div key={i} className={`h-9 ${w} border-r-2 border-[#22262a] ${["bg-[#ff5b1f]","bg-[#ff8651]","bg-[#f99b6e]","bg-[#f4a37e]","bg-[#f3b08e]"][i]}`} />
                ))}
              </div>
              <div className="mt-4 space-y-3">
                {[
                  ["Present", "2458"], ["WFH", "187"], ["Late", "89"], ["On Leave", "78"], ["Absent", "124"]
                ].map(([k, v]) => (
                  <div key={k} className="flex items-center justify-between rounded-full bg-[#2c3034] px-2 py-1.5 text-sm">
                    <span><i className="mr-2 inline-block h-2 w-2 rounded-full bg-[#ff8b5b]" />{k}</span>
                    <b>{v}</b>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* Lower charts */}
        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          <Card>
            <SectionHeader title="Office Vs Remote" right={<span className="text-xs text-slate-500">● Office &nbsp; ● Remote</span>} />
            <div className="h-52 px-6 pb-5 pt-4">
              <div className="flex h-full items-end justify-between gap-4">
                {[60, 75, 55, 82, 68, 90, 76].map((v, i) => (
                  <div key={i} className="flex h-full w-full flex-col justify-end">
                    <div className="mx-auto w-5 rounded-t bg-[#ff7040]" style={{height:`${v}%`}} />
                    <span className="mt-2 text-center text-xs text-slate-500">{["Mon","Tue","Wed","Thu","Fri","Sat","Sun"][i]}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <Card>
            <SectionHeader title="Attendance Summary" right={<button className="rounded-lg border px-3 py-1.5 text-xs">Today</button>} />
            <div className="grid grid-cols-3 gap-3 p-5 text-center">
              {[
                ["2,458", "Check-in Count"],
                ["2,201", "Check-out Count"],
                ["9:12 AM", "Check-in Time"],
              ].map(([v,l]) => (
                <div key={l} className="rounded-lg border border-slate-200 py-5">
                  <div className="text-2xl font-bold text-[#233250]">{v}</div>
                  <div className="mt-1 text-xs text-slate-500">{l}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-3">
          <Card className="relative overflow-hidden">
            <SectionHeader title="Frequent Late Arrivals" right={<button className="rounded-lg border px-3 py-1.5 text-xs">Today</button>} />
            <div className="p-5">
              <p className="text-sm text-slate-500">No of Employees</p>
              <div className="mt-1 flex items-center gap-2">
                <b className="text-2xl text-[#233250]">22</b>
                <span className="rounded bg-fuchsia-100 px-2 py-1 text-[10px] font-semibold text-fuchsia-600">Warnings</span>
              </div>
              <div className="mt-10 flex items-center justify-between">
                <div className="flex -space-x-2">
                  {[1,2,3,4,5].map(i => <div key={i} className="h-7 w-7 rounded-full border-2 border-white bg-slate-300" />)}
                  <span className="ml-2 rounded-full bg-slate-100 px-2 py-1 text-[10px]">+9</span>
                </div>
                <span className="rounded-full border px-3 py-2 text-xs">+15.5% <ArrowDownRight size={12} className="inline text-red-500" /></span>
              </div>
            </div>
          </Card>

          <Card>
            <SectionHeader title="Missing Punches" right={<button className="rounded-lg border px-3 py-1.5 text-xs">Today</button>} />
            <div className="p-5">
              <p className="text-sm text-slate-500">Total Number of Missing Punches</p>
              <div className="mt-1 flex items-center gap-2">
                <b className="text-2xl text-[#233250]">09</b>
                <span className="rounded bg-red-100 px-2 py-1 text-[10px] font-semibold text-red-600">Critical</span>
              </div>
              <div className="mt-10 flex items-center justify-between">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => <div key={i} className="h-7 w-7 rounded-full border-2 border-white bg-slate-300" />)}
                  <span className="ml-2 rounded-full bg-slate-100 px-2 py-1 text-[10px]">+6</span>
                </div>
                <span className="rounded-full border px-3 py-2 text-xs">+18.5% <ArrowUpRight size={12} className="inline text-emerald-500" /></span>
              </div>
            </div>
          </Card>

          <Card>
            <SectionHeader title="Violations Statistics" right={<button className="rounded-lg border px-3 py-1.5 text-xs">Today</button>} />
            <div className="flex h-44 items-end gap-5 px-6 pb-5 pt-2">
              {[["Late Arrivals","90%","bg-[#ff6425]"],["Missing Punches","50%","bg-[#14556a]"],["Attendance Below 75%","75%","bg-[#70b18a]"]].map(([l,v,c]) => (
                <div key={l} className="flex flex-1 flex-col items-center justify-end">
                  <b className="text-xs">{v}</b>
                  <div className={`mt-1 w-8 rounded-t-md ${c}`} style={{height:`${parseInt(v)}%`}} />
                  <span className="mt-2 text-center text-[10px] text-slate-600">{l}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Alerts + AI */}
        <div className="mt-5 grid gap-5 xl:grid-cols-[minmax(0,2fr)_1.2fr]">
          <Card>
            <SectionHeader title="Late Arrivals & Alerts" right={<button className="rounded-lg border px-3 py-1.5 text-xs">Today</button>} />
            <div className="space-y-3 p-5">
              {lateArrivals.map((row, idx) => (
                <div key={row.name} className="grid grid-cols-[1fr_180px_90px] items-center gap-4 rounded-lg border border-slate-200 p-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 text-xs font-bold text-slate-600">
                      {row.name.split(" ").map(x => x[0]).join("")}
                    </div>
                    <div>
                      <div className="text-sm font-bold">{row.name}</div>
                      <div className="text-xs text-slate-500">{row.role}</div>
                    </div>
                  </div>
                  <div className="text-sm text-slate-600">Check-in: <b className="text-slate-800">{row.time}</b></div>
                  <div className="flex justify-end gap-1">
                    {Array.from({length:7}).map((_,i)=><span key={i} className={`h-7 w-1 rounded ${i < row.bars ? "bg-[#ff6b35]" : "bg-slate-100"}`} />)}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="overflow-hidden">
            <div className="bg-[#22262a] p-5 text-white">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate-800"><Sparkles size={22}/></div>
                <div><h3 className="font-bold">AI Assistant</h3><p className="text-xs text-slate-300">Always here to help</p></div>
                <span className="ml-auto rounded-full bg-emerald-500 px-2 py-1 text-[10px] font-semibold">● Online</span>
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2 text-sm font-semibold text-cyan-800"><Bot size={16}/> AI Assistant</div>
              <p className="mt-3 text-sm leading-6 text-slate-500">
                Hello! I'm your AI Attendance Assistant. I can help you analyze attendance patterns, generate reports, and provide insights. How can I assist you today?
              </p>
              <div className="mt-5 border-t pt-4">
                <p className="text-sm font-medium">Suggested Questions</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <button className="rounded-full border bg-slate-50 px-3 py-2 text-xs">Show me today's attendance summary</button>
                  <button className="rounded-full border bg-slate-50 px-3 py-2 text-xs">Why is attendance low on Fridays?</button>
                </div>
              </div>
              <div className="mt-5 flex items-center gap-2 rounded-lg border p-2">
                <input className="w-full bg-transparent px-2 text-sm outline-none" placeholder="Ask me anything about payroll" />
                <button className="rounded-md bg-cyan-800 p-2 text-white"><Send size={17}/></button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
