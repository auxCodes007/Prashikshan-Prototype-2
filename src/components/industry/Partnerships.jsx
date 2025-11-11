import React, { useState, useEffect } from 'react';
import { User, CheckCircle, XCircle } from 'lucide-react';

const Partnerships = () => {
  const [partnerships, setPartnerships] = useState([]); // Dynamic data

  useEffect(() => {
    // Fetch partnerships data
    setPartnerships([
      { id: 1, name: "ABC College", status: "Pending", actions: ['Invite', 'Upload'] },
      { id: 2, name: "XYZ University", status: "Approved", actions: [] },
    ]);
  }, []);

  const handleAction = (id, action) => {
    if (action === 'Invite') alert('Invite sent!');
    if (action === 'Upload') alert('Upload initiated!');
    // Update status dynamically
    setPartnerships(prev => prev.map(p => p.id === id ? { ...p, status: action === 'Invite' ? 'Invited' : 'Uploaded' } : p));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-[#0F172A]">Partnerships</h2>
      <div className="bg-white rounded-xl shadow p-6 overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-[#6B7280] text-sm border-b">
              <th className="pb-3">Partner</th>
              <th className="pb-3">Status</th>
              <th className="pb-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {partnerships.map((partner) => (
              <tr key={partner.id} className="border-b last:border-0 hover:bg-gray-50">
                <td className="py-3 flex items-center gap-2">
                  <User className="w-5 h-5 text-[#0EA5A4]" /> {partner.name}
                </td>
                <td className="py-3">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    partner.status === "Pending" ? "bg-yellow-100 text-yellow-600" :
                    partner.status === "Approved" ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-600"
                  }`}>
                    {partner.status}
                  </span>
                </td>
                <td className="py-3 flex gap-2">
                  {partner.actions.map(action => (
                    <button key={action} onClick={() => handleAction(partner.id, action)} className="px-3 py-1 bg-[#0EA5A4] text-white rounded hover:bg-[#06B6D4]">
                      {action}
                    </button>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Partnerships;