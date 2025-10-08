import React from 'react';
import { User, CheckCircle, XCircle } from 'lucide-react';

const Applications = () => {
  const applications = [
    { id: 1, name: "Aarav Sharma", role: "Finance Analyst Intern", status: "Pending" },
    { id: 2, name: "Neha Kapoor", role: "Marketing Associate Intern", status: "Shortlisted" },
    { id: 3, name: "Rohit Verma", role: "Finance Analyst Intern", status: "Rejected" },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-[#0F172A]">Applications</h2>
      <div className="bg-white rounded-xl shadow p-6 overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-[#6B7280] text-sm border-b">
              <th className="pb-3">Applicant</th>
              <th className="pb-3">Applied Role</th>
              <th className="pb-3">Status</th>
              <th className="pb-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr key={app.id} className="border-b last:border-0 hover:bg-gray-50">
                <td className="py-3 flex items-center gap-2">
                  <User className="w-5 h-5 text-[#0EA5A4]" /> {app.name}
                </td>
                <td className="py-3">{app.role}</td>
                <td className="py-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      app.status === "Pending"
                        ? "bg-yellow-100 text-yellow-600"
                        : app.status === "Shortlisted"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {app.status}
                  </span>
                </td>
                <td className="py-3 flex gap-2">
                  <button className="p-2 rounded hover:bg-green-50">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </button>
                  <button className="p-2 rounded hover:bg-red-50">
                    <XCircle className="w-4 h-4 text-red-600" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Applications;
