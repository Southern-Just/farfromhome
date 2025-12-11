"use client";

import { useState, useRef, useEffect } from "react";

type ProfileProps = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

export default function Profile({ isOpen, setIsOpen }: ProfileProps) {
  const [activeTab, setActiveTab] = useState("profile");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setIsOpen]);

  if (!isOpen) return null;

  const tabs = [
    { id: "profile", label: "Profile" },
    { id: "trips", label: "Trips" },
    { id: "calendar", label: "Calendar" },
    { id: "settings", label: "Settings" },
  ];

  return (
    <div
      ref={dropdownRef}
      className="absolute -right-1/2 top-12 mt-2 w-85 bg-transparent p-2 rounded-xl shadow-lg border border-gray-200 z-50"
    >
      <div className="rounded-t-xl flex overflow-hidden">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 px-4 py-3 text-sm font-semibold text-center rounded-none transition-colors ${
              activeTab === tab.id
                ? "bg-btn-bg/60 text-white"
                : "text-gray-500 "
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4 w-full text-sm border-t border-gray-200">
        {activeTab === "profile" && (
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-gray-800">John Doe</p>
            <p className="text-gray-500">john@example.com</p>
            <button className="mt-2 px-3 bg-brown/55 text-xl text-white py-1 rounded ">
              Edit Profile
            </button>
          </div>
        )}
        {activeTab === "trips" && (
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>Paris - 15 Dec 2025 to 22 Dec 2025</li>
            <li>Tokyo - 10 Jan 2026 to 20 Jan 2026</li>
          </ul>
        )}
        {activeTab === "calendar" && (
          <p className="text-gray-700">Calendar placeholder</p>
        )}
        {activeTab === "settings" && (
          <>
            {" "}
            <p className="text-gray-700">Travel preferences, logout...</p>
            <div className="w-full flex gap-2 justify-end">
                              <button className="mt-2 p-1 rounded bg-transparent shadow-sm  text-gray-500 font-semibold text-sm">
                 close
              </button>
              <button className="mt-2 px-3 py-1 rounded bg-red-200 text-red-400 shadow-lg shadow-white text-sm">
                 Logout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
