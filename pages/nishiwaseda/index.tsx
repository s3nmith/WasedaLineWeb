import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./NishiWaseda.module.css";
import Image from "next/image";

export default function NishiWaseda() {
  const [queueTime57, setQueueTime57] = useState(0);

  // Function to fetch queue time from API
  const fetchQueueTime57 = async () => {
    try {
      const response = await fetch("/api/test"); // Assuming your API route is at '/api/route'
      const data = await response.json();
      setQueueTime57(data.receivedData);
    } catch (error) {
      console.error("Error fetching queue time:", error);
    }
  };

  // Fetch queue time on component mount
  useEffect(() => {
    const interval = setInterval(fetchQueueTime57, 7000); // Fetch every 7 seconds
    fetchQueueTime57(); // Fetch initial value
    return () => clearInterval(interval);
  }, []);

  const maxQueueTime = 20;
  const progressBarWidth57 = (queueTime57 / maxQueueTime) * 100;
  const progressBarColor57 =
    queueTime57 <= 5 ? "#4CAF50" : queueTime57 <= 14 ? "#FFC107" : "#ff0718";

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Nishiwaseda/西早稲田キャンパス</h1>
      <div className={styles.backButt}>
        <Link href="/">
          <h2>Home</h2>
        </Link>
      </div>
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <h2>Building 57</h2>
          <strong>{queueTime57} minutes</strong>
          <div className={styles.progressBarBackground}>
            <div
              className={styles.progressBarFill}
              style={{
                width: `${progressBarWidth57}%`,
                backgroundColor: progressBarColor57,
              }}
            ></div>
          </div>
        </div>
        <div className={styles.card}>
          <h2>Building 63</h2>
          <strong>4 minutes</strong>{" "}
          {/* Hardcoded queue time for Building 63 */}
          <div className={styles.progressBarBackground}>
            <div
              className={styles.progressBarFill}
              style={{
                width: `${(4 / maxQueueTime) * 100}%`,
                backgroundColor:
                  4 <= 5 ? "#4CAF50" : 4 <= 14 ? "#FFC107" : "#ff0718",
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className={styles.mapIm}>
        <Image
          src="/nishiwasedaMap.jpg"
          width={600}
          height={600}
          alt="nishiMap"
        />
      </div>
    </div>
  );
}
