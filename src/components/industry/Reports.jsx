import React from 'react';
import { FileText, Download } from 'lucide-react';

const Reports = () => {
  const reports = [
    { id: 1, title: "Q1 Hiring Report", date: "March 2025", summary: "120 Applications | 25 Hires" },
    { id: 2, title: "NEP Compliance Report", date: "April 2025", summary: "Internship Credits Verified" },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-[#0F172A]">Reports & Compliance</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {reports.map((report) => (
          <div key={report.id} className="bg-white rounded-xl shadow p-5 hover:shadow-lg transition">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-[#0F172A] flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#0EA5A4]" />
                  {report.title}
                </h3>
                <p className="text-sm text-[#6B7280]">{report.date}</p>
                <p className="text-sm text-[#0F172A] mt-2">{report.summary}</p>
              </div>
              <button className="bg-[#0EA5A4] text-white px-3 py-1 rounded-lg hover:bg-[#06B6D4] flex items-center gap-1">
                <Download className="w-4 h-4" /> Download
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reports;
