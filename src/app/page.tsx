"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const launchDate = new Date("2025-06-01T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, mins: 0, secs: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        mins: Math.floor((distance / (1000 * 60)) % 60),
        secs: Math.floor((distance / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-black text-white">
      <img
        src="/deenverse-logo.JPG"
        alt="DeenVerse Logo"
        className="w-32 h-auto mb-6"
      />
      <h1 className="text-4xl sm:text-6xl font-bold mb-4">
  <span className="text-white">Deen</span>
  <span className="text-yellow-400">Verse</span>
</h1>

      <p className="text-lg sm:text-xl mb-6 max-w-xl">
        India&rsquo;s First dedicated Islamic learning platform — app launching on{" "}
        <strong>1st June 2025</strong>.
      </p>

      <div className="flex space-x-4 text-2xl font-semibold mb-6">
        <div className="bg-yellow-400 text-black p-4 rounded shadow">
          {timeLeft.days} <span className="text-sm">Days</span>
        </div>
        <div className="bg-yellow-400 text-black p-4 rounded shadow">
          {timeLeft.hours} <span className="text-sm">Hours</span>
        </div>
        <div className="bg-yellow-400 text-black p-4 rounded shadow">
          {timeLeft.mins} <span className="text-sm">Minutes</span>
        </div>
        <div className="bg-yellow-400 text-black p-4 rounded shadow">
          {timeLeft.secs} <span className="text-sm">Seconds</span>
        </div>
      </div>

      <p className="mb-4 text-gray-600">Stay tuned. Our app is on its way!</p>

      <div className="flex gap-4 mb-10">
        <img
          src="/playstore-placeholder.svg"
          alt="Google Play"
          className="w-32"
        />
        <img src="/appstore-placeholder.png" alt="App Store" className="w-32" />
      </div>

      <footer className="text-sm text-gray-500">
        &copy; {new Date().getFullYear()} DeenVerse. All rights reserved.
      </footer>
    </div>
  );
}
