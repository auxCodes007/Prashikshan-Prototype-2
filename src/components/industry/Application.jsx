import React, { useState, useEffect } from 'react';
import { User, CheckCircle, XCircle } from 'lucide-react';

const Applications = () => {
  const [applications, setApplications] = useState([]);
  const [showQuizModal, setShowQuizModal] = useState(false);

  useEffect(() => {
    setApplications([
      { id: 1, name: "Aarav Sharma", role: "Finance Analyst Intern", status: "Pending", skillsMatch: 85 },
      { id: 2, name: "Neha Kapoor", role: "Marketing Associate Intern", status: "Shortlisted", skillsMatch: 92 },
      { id: 3, name: "Rohit Verma", role: "Finance Analyst Intern", status: "Rejected", skillsMatch: 60 },
    ]);
  }, []);

  const handleApprove = (id) => {
    setApplications(prev => prev.map(app => app.id === id ? { ...app, status: 'Shortlisted' } : app));
    alert('Application approved!');
  };

  const handleReject = (id) => {
    setApplications(prev => prev.map(app => app.id === id ? { ...app, status: 'Rejected' } : app));
    alert('Application rejected!');
  };

  const handleReviewQuiz = () => {
    setShowQuizModal(true);
  };

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
              <th className="pb-3">Skills Match</th>
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
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    app.status === "Pending" ? "bg-yellow-100 text-yellow-600" :
                    app.status === "Shortlisted" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                  }`}>
                    {app.status}
                  </span>
                </td>
                <td className="py-3">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-[#0EA5A4] h-2 rounded-full" style={{ width: `${app.skillsMatch}%` }}></div>
                  </div>
                  <span className="text-xs text-[#6B7280]">{app.skillsMatch}% Match</span>
                </td>
                <td className="py-3 flex gap-2">
                  <button onClick={() => handleApprove(app.id)} className="p-2 rounded hover:bg-green-50">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </button>
                  <button onClick={() => handleReject(app.id)} className="p-2 rounded hover:bg-red-50">
                    <XCircle className="w-4 h-4 text-red-600" />
                  </button>
                  <button onClick={handleReviewQuiz} className="ml-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Review Quiz
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showQuizModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg">
            <h3>Quiz Review</h3>
            <p>Quiz interface here.</p>
            <button onClick={() => setShowQuizModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Applications;