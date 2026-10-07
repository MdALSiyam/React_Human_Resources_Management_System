import React from 'react';
import { Plus } from 'lucide-react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const categoryAssetsData = [
  { name: 'Laptops', value: 450, color: '#3b82f6' },
  { name: 'Mouse/Kb', value: 300, color: '#10b981' },
  { name: 'Monitors', value: 200, color: '#f59e0b' },
  { name: 'Headsets', value: 150, color: '#8b5cf6' },
  { name: 'Chairs', value: 147, color: '#ec4899' },
];

export default function AssetDashboard({ openAddModal }) {
  return (
    <div className="space-y-6 text-slate-900 dark:text-slate-100">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold">Asset Management</h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">Track company hardware, laptops and depreciation.</p>
        </div>
        <button 
          onClick={openAddModal}
          className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-xs font-semibold flex items-center space-x-1"
        >
          <Plus className="w-4 h-4" />
          <span>Add Asset</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
          <div className="text-xs text-slate-500 dark:text-slate-400">Total Assets</div>
          <div className="text-2xl font-bold mt-1">1,247</div>
        </div>
        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
          <div className="text-xs text-slate-500 dark:text-slate-400">Assigned Assets</div>
          <div className="text-2xl font-bold text-emerald-500 mt-1">892</div>
        </div>
        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
          <div className="text-xs text-slate-500 dark:text-slate-400">Assets Available</div>
          <div className="text-2xl font-bold text-orange-500 mt-1">287</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700">
          <h3 className="font-bold text-base mb-2">Assets By Category</h3>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={categoryAssetsData} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                  {categoryAssetsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-col justify-between">
          <h3 className="font-bold text-base mb-2">Asset Financial Summary</h3>
          <div className="space-y-4">
            <div className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
              <div className="text-xs text-slate-500 dark:text-slate-400">Total Asset Value</div>
              <div className="text-2xl font-bold">$2.4M</div>
            </div>
            <div className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
              <div className="text-xs text-slate-500 dark:text-slate-400">Depreciated Value</div>
              <div className="text-2xl font-bold text-rose-500">$1.8M</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}