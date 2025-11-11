import React from 'react';

const Dashboard = ({ userProfile, onEditProfile, notifications, onNotificationClick }) => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-2xl font-bold text-[#0F172A]">Wlcm Back, {userProfile.name}!</h2>
        <p className="text-[#6B7280]">Lead in {userProfile.field}</p> {/* Dynamic field */}
        <button onClick={onEditProfile} className="mt-4 bg-[#0EA5A4] text-white px-4 py-2 rounded">Edit Profile</button>
      </div>

      {/* Quick Actions */}
      <div className="flex gap-4">
        <button onClick={() => alert('Post new internship!')} className="bg-[#0EA5A4] text-white px-4 py-2 rounded">Post a New Internship</button>
        <button onClick={() => onNotificationClick('applications')} className="bg-blue-500 text-white px-4 py-2 rounded">Review Applications</button>
        {/* Notification bar: Render notifications here */}
        {notifications.map(note => (
          <div key={note.id} onClick={() => onNotificationClick(note.section)} className="p-2 bg-yellow-100 rounded cursor-pointer">
            {note.message}
          </div>
        ))}
      </div>

      {/* Bars: High Priority, MOU, Offers */}
      <div className="grid grid-cols-3 gap-4">
        <div onClick={() => alert('View high priority!')} className="bg-red-100 p-4 rounded cursor-pointer">High Priority</div>
        <div onClick={() => alert('Manage MOU!')} className="bg-blue-100 p-4 rounded cursor-pointer">MOU</div>
        <div onClick={() => alert('View offers!')} className="bg-green-100 p-4 rounded cursor-pointer">Offers</div>
      </div>

      {/* Upcoming and Other Sections */}
      <div className="bg-white rounded-xl shadow p-6">
        <h3>Upcoming</h3>
        {/* Add dynamic content */}
      </div>
    </div>
  );
};

export default Dashboard;