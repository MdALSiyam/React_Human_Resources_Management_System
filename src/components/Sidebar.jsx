import React from 'react';
import { 
  LayoutDashboard, Users, Clock, UserPlus, DollarSign, 
  Package, TrendingUp, Target, LifeBuoy, Server, X, MessageSquare 
} from 'lucide-react';

export default function Sidebar({ activeTab, setActiveTab, sidebarOpen, setSidebarOpen, openAiDrawer }) {
  const navItems = [
    { id: 'admin', label: 'Admin Dashboard', icon: LayoutDashboard },
    { id: 'employee', label: 'Employee Portal', icon: Users },
    { id: 'attendance', label: 'Attendance & Time', icon: Clock },
    { id: 'hr', label: 'HR Dashboard', icon: Users },
    { id: 'recruitment', label: 'Recruitment', icon: UserPlus },
    { id: 'payroll', label: 'Payroll Overview', icon: DollarSign },
    { id: 'finance', label: 'Finance & Budget', icon: DollarSign },
    { id: 'assets', label: 'Asset Management', icon: Package },
    { id: 'deals', label: 'Deals Pipeline', icon: TrendingUp },
    { id: 'leads', label: 'Leads & CRM', icon: Target },
    { id: 'helpdesk', label: 'Help Desk', icon: LifeBuoy },
    { id: 'itadmin', label: 'IT Infrastructure', icon: Server },
  ];

  return (
    <>
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside className={`
        fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700
        transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-200 ease-in-out
        flex flex-col shrink-0
      `}>
        <div className="h-16 flex items-center justify-between px-6 border-b border-slate-200 dark:border-slate-700">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center text-white font-bold text-lg">
              S
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">SmartHR</span>
          </div>
          <button className="lg:hidden" onClick={() => setSidebarOpen(false)}>
            <X className="w-6 h-6 text-slate-500" />
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-3 mb-2">Main Menu</div>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setSidebarOpen(false);
                }}
                className={`
                  w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors
                  ${isActive 
                    ? 'bg-orange-500 text-white shadow-sm' 
                    : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700/60'}
                `}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-200 dark:border-slate-700">
          <div className="p-3 bg-orange-500/10 border border-orange-500/20 rounded-xl">
            <div className="flex items-center space-x-2 text-orange-600 dark:text-orange-400 font-semibold text-xs mb-1">
              <MessageSquare className="w-4 h-4" />
              <span>SmartHR AI Center</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 mb-2">Automate payroll queries & late arrivals analysis.</p>
            <button 
              onClick={openAiDrawer}
              className="w-full py-1.5 bg-orange-500 hover:bg-orange-600 text-white text-xs font-medium rounded-md transition"
            >
              Ask AI Assistant
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}