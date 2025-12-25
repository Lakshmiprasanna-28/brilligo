"use client";

import { useUser } from "../context/UserContext";
import Avatar from "../components/Avatar";
import { useState } from "react";

export default function ProfilePage() {
  const { user, updateUser } = useUser();
  const [form, setForm] = useState(user);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const saveProfile = () => {
    updateUser(form);
    alert("Profile updated successfully!");
  };

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-10">Your Profile</h1>

      <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-lg p-8 space-y-6">

        {/* Avatar */}
        <div className="flex items-center gap-6">
          <Avatar name={form.name} avatar={form.avatar} size={80} />
          <input
            name="avatar"
            placeholder="Profile image URL"
            value={form.avatar}
            onChange={handleChange}
            className="input"
          />
        </div>

        {/* Name */}
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          className="input"
          placeholder="Full Name"
        />

        {/* Email */}
        <input
          name="email"
          value={form.email}
          disabled
          className="input bg-slate-100 cursor-not-allowed"
        />

        {/* Role */}
        <input
          name="role"
          value={form.role}
          onChange={handleChange}
          className="input"
          placeholder="Role"
        />

        {/* Bio */}
        <textarea
          name="bio"
          value={form.bio}
          onChange={handleChange}
          className="input h-28"
          placeholder="Short bio"
        />

        <button
          onClick={saveProfile}
          className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700"
        >
          Save Changes
        </button>
      </div>
    </main>
  );
}
