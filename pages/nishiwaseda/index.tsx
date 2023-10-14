import { useState, useEffect } from "react";
import Link from "next/link";

// replace this with actual data from an API
const mockData = [
  { name: "Building 63", queue: 20 },
  { name: "Building 51", queue: 5 },
];

export default function NishiWaseda() {
  const [cafeterias, setCafeterias] = useState([]);

  useEffect(() => {
    // Fetch data from an API or use mock data
    setCafeterias(mockData);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">NishiWaseda</h1>
      <div className="back-butt">
        <Link href="/">
          <h2>back</h2>
        </Link>
      </div>

      <div className="grid gap-4">
        {cafeterias.map((cafeteria, index) => (
          <div key={index} className="p-4 border rounded shadow-lg">
            <h2 className="text-xl font-semibold">{cafeteria.name}</h2>
            <p className="mt-2">
              Current Waiting Time:{" "}
              <span className="font-bold">{cafeteria.queue}</span> minutes
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
