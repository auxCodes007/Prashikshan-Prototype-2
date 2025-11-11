import React, { useState, useEffect } from 'react';
import { FileText, Download } from 'lucide-react';

const Reports = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    setReports([
      { id: 1, title: "Q1 Hiring Report", date: "March 2025", summary: "120 Applications | 25 Hires" },
      { id: 2, title: "NEP Compliance Report", date: "April 2025", summary: "Internship Credits Verified" },
    ]);
  }, []);

  const handleDownload = (id) => {
    alert(`Downloading report ${id}!`);
  };

  const handleCreateCompliance = () => {
    alert('Creating compliance report!');
  };

  const handleDigitalSignature = () => {
    alert('Applying digital signature!');
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-[#0F172A]">Reports & Compliance</h2>
      <div className="flex gap-4 mb-4">
        <button onClick={handleCreateCompliance} className="bg-[#0EA5A4] text-white px-4 py-2 rounded">Create Compliance</button>
        <button onClick={handleDigitalSignature} className="bg-blue-500 text-white px-4 py-2 rounded">Digital Signature</button>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {reports.map((report) => (
          <div key={report.id} className="bg-white rounded-xl shadow p-5 hover:shadow-lg transition">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-[#0F172A] flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#0EA5A4]" />
                  {report.title}
                </h3>
                <p className="text-sm text-[#6B7280]">{report.date}</p>
                <p className="text-sm text-[#0F172A] mt-2">{report.summary}</p>
              </div>
              <button onClick={() => handleDownload(report.id)} className="bg-[#0EA5A4] text-white px-3 py-1 rounded-lg hover:bg-[#06B6D4] flex items-center gap-1 ml-4">
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