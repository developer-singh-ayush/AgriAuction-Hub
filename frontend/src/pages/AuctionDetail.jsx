import React, { useState, useEffect } from "react";

const History = () => {
  const [timeLeft, setTimeLeft] = useState(330);
  const [timeLeftCorn, setTimeLeftCorn] = useState(500);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft((prev) => prev - 1);
      }
      if (timeLeftCorn > 0) {
        setTimeLeftCorn((prev) => prev - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft, timeLeftCorn]);

  const formatTime = (time) => {
    const min = String(Math.floor(time / 60)).padStart(2, "0");
    const sec = String(time % 60).padStart(2, "0");
    return `${min}:${sec}`;
  };

  return (
    <div className="bg-[#E5F4E3] font-poppins">
      <header className="text-center py-5 bg-green-500 text-white">
        <h1 className="text-3xl font-semibold">Transaction History</h1>
        <p>View past and ongoing auction records.</p>
      </header>

      <section id="history" className="mt-6">
        <div className="history-item bg-white p-4 rounded-lg shadow-md mx-auto my-5 w-11/12 md:w-4/5 text-center border-l-4 border-green-600">
          <img src="wheat.webp" alt="Fresh Wheat" className="w-36 h-36 rounded-full mx-auto my-3" />
          <h2 className="text-xl font-semibold">Fresh Wheat</h2>
          <p><strong>Winning Bid:</strong> $180</p>
          <p><strong>Winner:</strong> John Doe</p>
          <p><strong>Status:</strong> ✅ Completed</p>
          <p><strong>Timestamp:</strong> 22 April 2025, 10:45 AM</p>
        </div>

        <div className="history-item bg-white p-4 rounded-lg shadow-md mx-auto my-5 w-11/12 md:w-4/5 text-center border-l-4 border-yellow-500">
          <img src="tamato1.jpg" alt="Organic Tomatoes" className="w-36 h-36 rounded-full mx-auto my-3" />
          <h2 className="text-xl font-semibold">Organic Tomatoes</h2>
          <p><strong>Current Highest Bid:</strong> $130</p>
          <p><strong>Status:</strong> 🔄 Ongoing</p>
          <p><strong>Ends In:</strong> <span>{formatTime(timeLeft)}</span></p>
        </div>

        <div className="history-item bg-white p-4 rounded-lg shadow-md mx-auto my-5 w-11/12 md:w-4/5 text-center border-l-4 border-green-600">
          <img src="rice.jpeg" alt="Premium Basmati Rice" className="w-36 h-36 rounded-full mx-auto my-3" />
          <h2 className="text-xl font-semibold">Premium Basmati Rice</h2>
          <p><strong>Winning Bid:</strong> $250</p>
          <p><strong>Winner:</strong> Jane Smith</p>
          <p><strong>Status:</strong> ✅ Completed</p>
          <p><strong>Timestamp:</strong> 20 April 2025, 03:15 PM</p>
        </div>

        <div className="history-item bg-white p-4 rounded-lg shadow-md mx-auto my-5 w-11/12 md:w-4/5 text-center border-l-4 border-yellow-500">
          <img src="corn.jpg" alt="Sweet Corn" className="w-36 h-36 rounded-full mx-auto my-3" />
          <h2 className="text-xl font-semibold">Sweet Corn</h2>
          <p><strong>Current Highest Bid:</strong> $75</p>
          <p><strong>Status:</strong> 🔄 Ongoing</p>
          <p><strong>Ends In:</strong> <span>{formatTime(timeLeftCorn)}</span></p>
        </div>

        <div className="history-item bg-white p-4 rounded-lg shadow-md mx-auto my-5 w-11/12 md:w-4/5 text-center border-l-4 border-green-600">
          <img src="potato.jpg" alt="Golden Potatoes" className="w-36 h-36 rounded-full mx-auto my-3" />
          <h2 className="text-xl font-semibold">Golden Potatoes</h2>
          <p><strong>Winning Bid:</strong> $95</p>
          <p><strong>Winner:</strong> Alex Brown</p>
          <p><strong>Status:</strong> ✅ Completed</p>
          <p><strong>Timestamp:</strong> 19 April 2025, 04:10 PM</p>
        </div>
      </section>
    </div>
  );
};

export default History;