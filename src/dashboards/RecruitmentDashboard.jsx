import React from "react";
import {
  CalendarDays,
  BriefcaseBusiness,
  Users,
  Video,
  FileText,
  UserCheck,
  Clock3,
  Bot,
  Send,
  Sparkles,
  ArrowUpRight,
  ChevronRight,
  Download,
  SlidersHorizontal,
} from "lucide-react";

const hiringRows = [
  ["Marketing", "Product Manager", "14", "08", "", "", ""],
  ["Data Analyst", "Jr Data Analyst", "16", "12", "", "", ""],
  ["Project Coordinator", "Jr Level", "24", "06", "", "", ""],
  ["Design Lead", "UI Designer", "12", "08", "06", "05", ""],
  ["Project Manager", "Senior Manager", "22", "20", "16", "12", "04"],
];

const upcoming = [
  ["Mar", "02", "Product Designer", "09:00 AM - 10:30 AM"],
  ["Apr", "22", "Marketing Manager", "01:00 PM - 02:00 PM"],
  ["May", "11", "Sr. Data Science", "11:00 AM - 12:30 PM"],
  ["Jun", "07", "Software Engineer", "02:00 PM - 03:30 PM"],
  ["Aug", "18", "Financial Analyst", "03:00 PM - 04:00 PM"],
];

const stageCards = [
  ["Applied", "1,848", "Overall Progress", "36.3%", "bg-[#ff6425]", BriefcaseBusiness],
  ["Shortlisted", "2,384", "Conversion rate", "37.4%", "bg-[#3b8aa0]", Clock3],
  ["Interviewed", "892", "Conversion rate", "36.3%", "bg-[#263039]", CalendarDays],
  ["Offered", "324", "Conversion rate", "26.5%", "bg-[#168ddd]", FileText],
  ["Hired", "64", "Conversion rate", "41.2%", "bg-[#10b85a]", UserCheck],
];

const jobs = [
  ["JOB-001", "Jan 03, 2026", "Frontend Developer", "Remote", "Engineering", "1452", "High Priority"],
  ["JOB-002", "Jan 02, 2026", "Product Manager", "Office", "Product", "1342", "High Priority"],
  ["JOB-003", "Jan 02, 2026", "UX Designer", "Hybrid", "Design", "1287", "High Priority"],
  ["JOB-004", "Jan 01, 2026", "Sales Executive", "Office", "Sales", "1198", "Medium"],
  ["JOB-005", "Jan 01, 2026", "DevOps Engineer", "Office", "Engineering", "1134", "Medium"],
];

function Card({ children, className = "" }) {
  return <section className={`rounded-lg border border-slate-200 bg-white shadow-sm ${className}`}>{children}</section>;
}

function Header({ title, right }) {
  return <div className="flex items-center justify-between gap-3 px-5 pt-5"><h3 className="text-[15px] font-bold">{title}</h3>{right}</div>;
}

export default function RecruitmentDashboard() {
  return (
    <div className="min-h-screen bg-[#f7f8fa] text-slate-900">
      <div className="mx-auto max-w-[1440px] px-5 py-5">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-[25px] font-bold tracking-tight text-[#233250]">Recruitment Dashboard</h1>
            <div className="mt-1 flex items-center gap-2 text-sm text-slate-500">
              <span>⌂</span><ChevronRight size={14}/><span>Dashboard</span><ChevronRight size={14}/>
              <span className="font-medium text-slate-700">Recruitment Dashboard</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm shadow-sm"><CalendarDays size={15} className="mr-2 inline"/> Dec 2026</button>
            <button className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm shadow-sm"><Download size={15} className="mr-2 inline"/> Download Report <ChevronRight size={13} className="ml-1 inline rotate-90"/></button>
            <button className="rounded-lg bg-[#ff5b1f] px-4 py-2 text-sm font-semibold text-white shadow-sm">+ Add New Job</button>
          </div>
        </div>

        {/* Hiring analysis */}
        <div className="grid gap-5 xl:grid-cols-[minmax(0,2fr)_360px]">
          <Card>
            <Header title="Candidates Hiring Analysis" right={<><button className="mr-2 rounded-full border p-2"><SlidersHorizontal size={14}/></button><span className="text-xs font-semibold">▣ Last 30 Days</span></>}/>
            <div className="overflow-x-auto p-5">
              <div className="min-w-[680px]">
                <div className="grid grid-cols-[1.6fr_repeat(5,1fr)] gap-3 pb-3 text-sm font-medium">
                  <span>Department</span><span>Applicants</span><span>Shortlisted</span><span>Interviewed</span><span>Offered</span><span>Hired</span>
                </div>
                {hiringRows.map((r) => (
                  <div key={r[0]} className="grid grid-cols-[1.6fr_repeat(5,1fr)] items-center gap-3 py-2">
                    <div><div className="text-sm font-medium">{r[0]}</div><div className="text-xs text-slate-500">{r[1]}</div></div>
                    {r.slice(2).map((v, i) => (
                      <div key={i} className={`h-7 rounded-lg text-center text-xs font-semibold leading-7 ${
                        !v ? "bg-slate-50 text-transparent" :
                        i === 0 ? "bg-[#ff6425] text-white" :
                        i === 1 ? "bg-[#0f586c] text-white" :
                        i === 2 ? "bg-[#262d32] text-white" :
                        i === 3 ? "bg-[#168ddd] text-white" : "bg-[#10bd5c] text-white"
                      }`}>{v || "00"}</div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <div className="space-y-5">
            <Card>
              <Header title="Recruitment Overview" right={<span className="text-xs font-semibold">▣ Monthly</span>}/>
              <div className="grid grid-cols-2 p-5">
                <div><p className="text-xs text-slate-500">Offer Acceptance</p><b className="text-xl text-[#233250]">74.4%</b></div>
                <div className="text-right"><p className="text-xs text-slate-500">Overall Hire Rate</p><b className="text-xl text-[#233250]">2.7%</b></div>
              </div>
              <div className="relative mx-auto mb-5 h-36 w-64 overflow-hidden">
                <div className="absolute left-1/2 top-2 h-48 w-48 -translate-x-1/2 rounded-full border-[22px] border-slate-100" />
                <div className="absolute left-1/2 top-2 h-48 w-48 -translate-x-1/2 rounded-full border-[22px] border-transparent border-l-[#ff6425] border-t-[#ff6425] border-r-[#ff6425] -rotate-[38deg]" />
                <div className="absolute inset-x-0 top-16 text-center"><b className="text-2xl text-[#233250]">2,384</b><div className="text-xs text-slate-500">Total Applications</div></div>
              </div>
            </Card>

            <div className="relative overflow-hidden rounded-lg bg-[#0e5b70] p-5 text-white shadow-sm">
              <h3 className="font-bold">Quick Reminder</h3>
              <p className="mt-4 text-lg">You have 21 Interview Schedule Today!</p>
              <p className="mt-2 text-xs text-slate-200">Dont forget to schedule interviews</p>
              <button className="mt-8 rounded-full bg-[#ff6425] px-5 py-2 text-sm font-semibold">Schedule Now　»</button>
              <div className="absolute -bottom-10 -right-4 h-24 w-64 rotate-[-8deg] rounded-[50%] bg-cyan-200/20 blur-sm" />
            </div>
          </div>
        </div>

        {/* Summary stats */}
        <Card className="mt-5">
          <div className="grid grid-cols-2 divide-x md:grid-cols-4">
            {[
              ["47", "Open Positions", BriefcaseBusiness],
              ["2,384", "Total Candidates", Users],
              ["12", "Interviews Today", Video],
              ["28", "Offers Released", FileText],
            ].map(([v,l,Icon]) => (
              <div key={l} className="flex items-center justify-center gap-3 px-5 py-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-orange-300 text-[#ff6425]"><Icon size={21}/></div>
                <div><b className="block text-xl text-[#233250]">{v}</b><span className="text-xs text-slate-500">{l}</span></div>
              </div>
            ))}
          </div>
        </Card>

        {/* AI + hiring time + schedules */}
        <div className="mt-5 grid gap-5 lg:grid-cols-[1.05fr_1.2fr_1fr]">
          <Card className="overflow-hidden">
            <div className="p-5 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-[#ff6425] text-white"><Bot size={28}/></div>
              <h3 className="mt-3 text-lg font-bold text-[#233250]">How can i help you today</h3>
              <p className="mt-1 text-sm text-slate-500">AI Payroll Assistant <span className="ml-1 rounded-full bg-emerald-500 px-2 py-0.5 text-[10px] text-white">● Online</span></p>
              <div className="mt-6 space-y-2 text-left">
                <button className="w-full rounded-full border bg-slate-50 px-4 py-2 text-xs">Analyze top candidates for Senior Developer role</button>
                <button className="rounded-full border bg-slate-50 px-4 py-2 text-xs">Generate hiring report</button>
              </div>
            </div>
            <div className="border-t bg-slate-50 p-5">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#ff6425]"><Sparkles size={15}/> AI Assistant</div>
              <p className="mt-2 text-xs leading-5 text-slate-500">Welcome to your AI Recruitment Assistant! I'm here to help you.</p>
              <div className="mt-4 flex gap-2 rounded-full border bg-white p-2">
                <input className="w-full bg-transparent px-2 text-xs outline-none" placeholder="Ask me anything about Requirement"/>
                <button className="rounded-full bg-[#ff6425] p-2 text-white"><Send size={14}/></button>
              </div>
            </div>
          </Card>

          <Card>
            <Header title="Average Time To Hire" right={<span className="text-xs font-semibold">▣ Last 30 Days</span>}/>
            <div className="h-64 px-6 pb-5 pt-4">
              <div className="flex h-full items-end justify-around gap-6 border-b border-slate-200">
                {[7, 11, 14, 10].map((v,i) => (
                  <div key={i} className="flex h-full w-14 flex-col justify-end">
                    <div className="rounded-t bg-[#0f586c]/80" style={{height:`${v*6}%`}} />
                    <span className="pt-2 text-center text-xs text-slate-500">{["Jan","Feb","Mar","Apr"][i]}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mx-5 mb-5 rounded-lg bg-emerald-50 p-3 text-xs font-medium text-slate-700"><ArrowUpRight size={14} className="mr-1 inline text-emerald-600"/> 12% faster than industry avg</div>
          </Card>

          <Card>
            <Header title="Upcoming Schedules" right={<span className="text-xs font-semibold">▣ Last 30 Days</span>}/>
            <div className="space-y-3 p-5">
              {upcoming.map(([m,d,title,time]) => (
                <div key={title} className="flex items-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-xl border bg-slate-50">
                    <span className="text-[10px] text-slate-500">{m}</span><b className="text-sm">{d}</b>
                  </div>
                  <div className="min-w-0 flex-1"><div className="truncate text-sm font-semibold">{title}</div><div className="text-xs text-slate-500"><Clock3 size={11} className="mr-1 inline"/> {time}</div></div>
                  <div className="h-9 w-9 rounded-full bg-slate-200" />
                </div>
              ))}
              <button className="mt-2 w-full rounded-lg bg-[#ff6425] py-2.5 text-sm font-semibold text-white">View All Schedule</button>
            </div>
          </Card>
        </div>

        {/* Stage performance */}
        <Card className="mt-5">
          <Header title="Stage Performance" right={<><button className="mr-2 rounded-full border p-2"><SlidersHorizontal size={14}/></button><span className="text-xs font-semibold">▣ Last 30 Days</span></>}/>
          <div className="grid gap-3 p-5 md:grid-cols-2 xl:grid-cols-5">
            {stageCards.map(([title,value,label,rate,color,Icon]) => (
              <div key={title} className="rounded-lg border border-slate-200 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-500">{title}</span>
                  <span className={`flex h-10 w-10 items-center justify-center rounded-xl text-white ${color}`}><Icon size={19}/></span>
                </div>
                <b className="mt-5 block text-2xl text-[#233250]">{value}</b>
                <div className="mt-1 flex justify-between text-xs text-slate-500"><span>{label}</span><span>{rate}</span></div>
                <div className="mt-2 h-1.5 rounded-full bg-slate-100"><div className={`h-full rounded-full ${color}`} style={{width:rate}} /></div>
              </div>
            ))}
          </div>
        </Card>

        {/* Applications + jobs */}
        <div className="mt-5 grid gap-5 xl:grid-cols-[360px_minmax(0,1fr)]">
          <Card>
            <Header title="Recent Applications" right={<span className="text-xs text-slate-500">View All</span>}/>
            <div className="space-y-3 p-5">
              {[
                ["Andrew Stuart","Frontend Developer","Interview"],
                ["Jessica Brown","UI/UX Designer","Shortlisted"],
              ].map(([name,role,status]) => (
                <div key={name} className="rounded-xl border bg-slate-50 p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-cyan-200" />
                    <div className="flex-1"><b className="block text-sm">{name}</b><span className="text-xs text-slate-500">{role}</span></div>
                    <span className="rounded bg-cyan-50 px-2 py-1 text-[10px] font-semibold text-cyan-700">● {status}</span>
                  </div>
                  <div className="mt-3 flex justify-between border-t pt-3 text-xs text-slate-500"><span>♙ 7 years exp</span><span>▣ Applied: Dec 27, 2025</span></div>
                </div>
              ))}
              <button className="w-full rounded-lg bg-[#ff6425] py-2.5 text-sm font-semibold text-white">View All Schedule</button>
            </div>
          </Card>

          <Card className="overflow-hidden">
            <Header title="Active Job Openings" right={<button className="rounded-lg border px-3 py-1.5 text-xs">View All</button>}/>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[760px] text-left text-xs">
                <thead className="bg-slate-100 text-slate-700">
                  <tr>{["Job ID","Date","Job Title","Location","Department","Applicants"].map(h=><th key={h} className="px-4 py-3 font-semibold">{h}</th>)}</tr>
                </thead>
                <tbody>
                  {jobs.map(r => (
                    <tr key={r[0]} className="border-b border-slate-200">
                      <td className="px-4 py-3 text-slate-600">{r[0]}</td>
                      <td className="px-4 py-3">▣ {r[1]}</td>
                      <td className="px-4 py-3"><b className="block">{r[2]}</b><span className={`mt-1 inline-block rounded px-2 py-0.5 text-[9px] ${r[6] === "High Priority" ? "bg-red-50 text-red-500" : "bg-blue-50 text-blue-500"}`}>{r[6]}</span></td>
                      <td className="px-4 py-3">⌖ {r[3]}</td>
                      <td className="px-4 py-3 text-slate-500">{r[4]}</td>
                      <td className="px-4 py-3">♙ {r[5]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        <footer className="mt-5 flex justify-between border-t border-slate-200 py-4 text-xs text-slate-500">
          <span>2014 - 2026 © SmartHR.</span><span>Designed & Developed By <b className="text-[#ff6425]">Dreams</b></span>
        </footer>
      </div>
    </div>
  );
}
