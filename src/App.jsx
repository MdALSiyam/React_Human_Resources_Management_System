import React, { useState } from 'react';

// Shared Layout Components
import Sidebar from './components/Sidebar';
import Header from './components/Header';

// Dashboards (12 Modules)
import AdminDashboard from './dashboards/AdminDashboard';
import EmployeeDashboard from './dashboards/EmployeeDashboard';
import AttendanceDashboard from './dashboards/AttendanceDashboard';
import HRDashboard from './dashboards/HRDashboard';
import RecruitmentDashboard from './dashboards/RecruitmentDashboard';
import PayrollDashboard from './dashboards/PayrollDashboard';
import FinanceDashboard from './dashboards/FinanceDashboard';
import AssetDashboard from './dashboards/AssetDashboard';
import DealsDashboard from './dashboards/DealsDashboard';
import LeadsDashboard from './dashboards/LeadsDashboard';
import HelpDeskDashboard from './dashboards/HelpDeskDashboard';
import ITAdminDashboard from './dashboards/ITAdminDashboard';

// Modals & Drawers
import AIAssistantDrawer from './components/AIAssistantDrawer';
import AddEmployeeModal from './components/AddEmployeeModal';
import AddAssetModal from './components/AddAssetModal';

export default function App() {
  // Navigation & UI States
  const [activeTab, setActiveTab] = useState('admin');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Overlay & Modal States
  const [aiDrawerOpen, setAiDrawerOpen] = useState(false);
  const [addEmployeeModal, setAddEmployeeModal] = useState(false);
  const [addAssetModal, setAddAssetModal] = useState(false);

  // Theme Toggle Handler
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen flex ${darkMode ? 'dark bg-slate-900 text-slate-100' : 'bg-slate-50 text-slate-800'}`}>
      
      {/* 1. SIDEBAR COMPONENT */}
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        sidebarOpen={sidebarOpen} 
        setSidebarOpen={setSidebarOpen} 
        openAiDrawer={() => setAiDrawerOpen(true)}
      />

      {/* 2. MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        
        {/* TOP HEADER */}
        <Header 
          setSidebarOpen={setSidebarOpen} 
          darkMode={darkMode} 
          toggleDarkMode={toggleDarkMode} 
          openAddEmployeeModal={() => setAddEmployeeModal(true)}
        />

        {/* DYNAMIC DASHBOARD ROUTER */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-8">
          {activeTab === 'admin' && <AdminDashboard />}
          {activeTab === 'employee' && <EmployeeDashboard />}
          {activeTab === 'attendance' && <AttendanceDashboard />}
          {activeTab === 'hr' && <HRDashboard />}
          {activeTab === 'recruitment' && <RecruitmentDashboard />}
          {activeTab === 'payroll' && <PayrollDashboard />}
          {activeTab === 'finance' && <FinanceDashboard />}
          {activeTab === 'assets' && <AssetDashboard openAddModal={() => setAddAssetModal(true)} />}
          {activeTab === 'deals' && <DealsDashboard />}
          {activeTab === 'leads' && <LeadsDashboard />}
          {activeTab === 'helpdesk' && <HelpDeskDashboard />}
          {activeTab === 'itadmin' && <ITAdminDashboard />}
        </main>
      </div>

      {/* 3. AI ASSISTANT SIDE DRAWER */}
      {aiDrawerOpen && (
        <AIAssistantDrawer onClose={() => setAiDrawerOpen(false)} />
      )}

      {/* 4. QUICK ACTION MODALS */}
      {addEmployeeModal && (
        <AddEmployeeModal onClose={() => setAddEmployeeModal(false)} />
      )}

      {addAssetModal && (
        <AddAssetModal onClose={() => setAddAssetModal(false)} />
      )}

    </div>
  );
}