"use client";

import { useEffect, useRef, useState } from "react";

type ProfileProps = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

type TabId = "profile" | "trips" | "calendar" | "saved" | "settings";

export default function Profile({ isOpen, setIsOpen }: ProfileProps) {
  const [activeTab, setActiveTab] = useState<TabId>("profile");
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsOpen]);

  if (!isOpen) return null;

  const tabs: { id: TabId; label: string }[] = [
    { id: "profile", label: "Profile" },
    { id: "trips", label: "Trips" },
    { id: "calendar", label: "Calendar" },
    { id: "saved", label: "Saved" },
    { id: "settings", label: "Settings" },
  ];

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm" />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
        <div
          ref={modalRef}
          className="w-full max-w-lg rounded-2xl bg-white shadow-2xl overflow-hidden animate-in fade-in zoom-in-95"
        >
          {/* Header */}
          <div className="flex items-center gap-4 px-6 py-5 border-b">
            <div className="h-12 w-12 rounded-full bg-brown/40 flex items-center justify-center text-white font-bold">
              JD
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-900">John Doe</p>
              <p className="text-sm text-gray-500">john@example.com</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600 text-xl transition-colors"
            >
              ×
            </button>
          </div>

          {/* Tabs */}
          <div className="flex border-b bg-gray-50">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-3 text-sm font-medium transition-all duration-200 rounded-none ${
                  activeTab === tab.id
                    ? "bg-green-100 text-gray-900 shadow-sm"
                    : "text-gray-500 hover:text-gray-800 hover:bg-green-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="px-6 py-5 text-sm max-h-96 overflow-y-auto">
            {activeTab === "profile" && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Name</p>
                    <p className="font-medium">John Doe</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Email</p>
                    <p className="font-medium">john@example.com</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Phone</p>
                    <p className="font-medium">+1 (555) 123-4567</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Location</p>
                    <p className="font-medium">New York, USA</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Member Since</p>
                    <p className="font-medium">January 2020</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Preferred Language</p>
                    <p className="font-medium">English</p>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Bio</p>
                  <p className="text-gray-700">
                    Avid traveler with a passion for adventure and cultural experiences. Always planning the next trip!
                  </p>
                </div>
                <button className="w-full rounded-lg bg-brown py-3 text-white font-medium hover:bg-brown/90 transition-colors">
                  Edit Profile
                </button>
              </div>
            )}

            {activeTab === "trips" && (
              <div className="space-y-3">
                <div className="rounded-lg border p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold text-gray-900">Paris, France</p>
                      <p className="text-xs text-gray-500">15 Dec 2025 – 22 Dec 2025</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Visited Eiffel Tower, Louvre Museum, Seine River cruise.
                      </p>
                    </div>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Completed</span>
                  </div>
                </div>
                <div className="rounded-lg border p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold text-gray-900">Tokyo, Japan</p>
                      <p className="text-xs text-gray-500">10 Jan 2026 – 20 Jan 2026</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Explored Shibuya, Mount Fuji, traditional temples.
                      </p>
                    </div>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Upcoming</span>
                  </div>
                </div>
                <div className="rounded-lg border p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold text-gray-900">New York, USA</p>
                      <p className="text-xs text-gray-500">5 Feb 2026 – 12 Feb 2026</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Times Square, Central Park, Broadway shows.
                      </p>
                    </div>
                    <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">Planning</span>
                  </div>
                </div>
                <div className="rounded-lg border p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold text-gray-900">Sydney, Australia</p>
                      <p className="text-xs text-gray-500">20 Mar 2026 – 30 Mar 2026</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Opera House, Bondi Beach, Great Barrier Reef.
                      </p>
                    </div>
                    <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">Booked</span>
                  </div>
                </div>
                <button className="w-full mt-4 rounded-lg bg-brown py-3 text-white font-medium hover:bg-brown/90 transition-colors">
                  Plan New Trip
                </button>
              </div>
            )}

            {activeTab === "calendar" && (
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900">Upcoming Events</h3>
                <div className="space-y-3">
                  <div className="rounded-lg border p-3 bg-blue-50">
                    <p className="font-medium text-gray-900">Flight to Paris</p>
                    <p className="text-xs text-gray-600">15 Dec 2025, 10:00 AM - JFK to CDG</p>
                  </div>
                  <div className="rounded-lg border p-3 bg-green-50">
                    <p className="font-medium text-gray-900">Hotel Check-in Tokyo</p>
                    <p className="text-xs text-gray-600">10 Jan 2026, 2:00 PM - Shinjuku Hotel</p>
                  </div>
                  <div className="rounded-lg border p-3 bg-yellow-50">
                    <p className="font-medium text-gray-900">Meeting in New York</p>
                    <p className="text-xs text-gray-600">7 Feb 2026, 9:00 AM - Conference Room A</p>
                  </div>
                  <div className="rounded-lg border p-3 bg-purple-50">
                    <p className="font-medium text-gray-900">Sydney Opera House Tour</p>
                    <p className="text-xs text-gray-600">22 Mar 2026, 11:00 AM</p>
                  </div>
                </div>
                <button className="w-full rounded-lg bg-brown py-3 text-white font-medium hover:bg-brown/90 transition-colors">
                  View Full Calendar
                </button>
              </div>
            )}

            {activeTab === "saved" && (
              <div className="space-y-3">
                <div className="rounded-lg border p-4 hover:shadow-md transition-shadow">
                  <p className="font-semibold text-gray-900">🌍 Iceland Adventure</p>
                  <p className="text-sm text-gray-600">
                    Northern lights, glaciers, hot springs. Perfect for winter escape.
                  </p>
                </div>
                <div className="rounded-lg border p-4 hover:shadow-md transition-shadow">
                  <p className="font-semibold text-gray-900">🏜 Sahara Safari</p>
                  <p className="text-sm text-gray-600">
                    Camel treks, desert camps, star gazing. Ultimate adventure.
                  </p>
                </div>
                <div className="rounded-lg border p-4 hover:shadow-md transition-shadow">
                  <p className="font-semibold text-gray-900">🏔 Himalayas Trek</p>
                  <p className="text-sm text-gray-600">
                    Mountain views, local culture, spiritual journey.
                  </p>
                </div>
                <div className="rounded-lg border p-4 hover:shadow-md transition-shadow">
                  <p className="font-semibold text-gray-900">🏖 Maldives Retreat</p>
                  <p className="text-sm text-gray-600">
                    Overwater bungalows, snorkeling, relaxation paradise.
                  </p>
                </div>
                <div className="rounded-lg border p-4 hover:shadow-md transition-shadow">
                  <p className="font-semibold text-gray-900">🏰 Kyoto Temples</p>
                  <p className="text-sm text-gray-600">
                    Ancient shrines, cherry blossoms, traditional tea ceremonies.
                  </p>
                </div>
                <button className="w-full mt-4 rounded-lg bg-brown py-3 text-white font-medium hover:bg-brown/90 transition-colors">
                  Explore More Destinations
                </button>
              </div>
            )}

            {activeTab === "settings" && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-2">
                  <button className="text-left px-3 py-3 rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-3">
                    <span>🗺️</span> Travel Preferences
                  </button>
                  <button className="text-left px-3 py-3 rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-3">
                    <span>🔒</span> Security & Privacy
                  </button>
                  <button className="text-left px-3 py-3 rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-3">
                    <span>💳</span> Payment Methods
                  </button>
                  <button className="text-left px-3 py-3 rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-3">
                    <span>📞</span> Support & Help
                  </button>
                </div>
                <div className="pt-4 border-t">
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => setIsOpen(false)}
                      className="px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
                    >
                      Close
                    </button>
                    <button className="px-4 py-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition-colors">
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}