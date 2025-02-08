// src/app/page.tsx
import React from 'react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-primary text-white py-6 text-center">
        <h1 className="text-3xl font-bold">Swan Household</h1>
      </header>

      {/* Navigation Bar */}
      <nav className="bg-secondary py-4">
        <ul className="flex justify-center space-x-8 text-white font-semibold">
          <li className="cursor-pointer hover:text-gray-200">Tasks</li>
          <li className="cursor-pointer hover:text-gray-200">Home</li>
          <li className="cursor-pointer hover:text-gray-200">Info</li>
          <li className="cursor-pointer hover:text-gray-200">Media</li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="p-8">
        <section className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Welcome to Swan Household</h2>
          <p className="text-gray-700">
            This is your one-stop hub to manage your tasks (ToDo and Calendar), control your home devices,
            access important information, and enjoy your media. Select a panel above to get started.
          </p>
        </section>
      </main>
    </div>
  );
}
