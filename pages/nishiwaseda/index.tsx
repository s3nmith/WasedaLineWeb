import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./NishiWaseda.module.css";
import Image from "next/image";

// const mockData = [{ name: "Building 56", queue: 5 }];

type Cafeteria = {
  name: string;
  queue: number;
};

export default function NishiWaseda() {
  const [buttonPressCount, setButtonPressCount] = useState<number | null>(null);

  const fetchData = () => {
    fetch("/api/test")
      .then((response) => response.json())
      .then((data) => {
        if (data && data.receivedData) {
          setButtonPressCount(parseInt(data.receivedData));
        } else {
          console.error("Error: receivedData is null");
        }
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  useEffect(() => {
    fetchData();
    const intervalId = setInterval(fetchData, 20000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Nishiwaseda/西早稲田キャンパス</h1>
      <div className={styles.backButt}>
        <Link href="/">
          <h2 className={styles.backText}>Home</h2>
        </Link>
      </div>

      <div className={styles.grid}>
        <div className={styles.cafeteriaCard}>
          <h2 className={styles.cafeteriaName}>Button Press Count</h2>
          <p>
            Total Clicks:{" "}
            <span className={styles.fontBold}>
              {buttonPressCount !== null ? buttonPressCount : "Loading..."}
            </span>
          </p>
        </div>
      </div>

      <div className={styles.mapIm}>
        <Image
          src="/nishiwasedaMap.png"
          width={600}
          height={600}
          alt="nishiMap"
        />
      </div>
    </div>
  );
}
