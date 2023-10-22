import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./NishiWaseda.module.css";
import Image from "next/image";

const mockData = [{ name: "Building 56", queue: 5 }];

type Cafeteria = {
  name: string;
  queue: number;
};

export default function NishiWaseda() {
  const [cafeterias, setCafeterias] = useState<Cafeteria[]>([]);

  const fetchData = () => {
    fetch("/api/test")
      .then((response) => response.json())
      .then((data) => {
        if (data && data.receivedData) {
          let updatedData = [...mockData];
          updatedData[0] = {
            name: "Button Press Count",
            queue: parseInt(data.receivedData),
          };
          setCafeterias(updatedData);
        } else {
          console.error("Error: receivedData is null");
          setCafeterias(mockData);
        }
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setCafeterias(mockData); // mock data used if error
      });
  };

  useEffect(() => {
    fetchData(); // Fetch data immediately
    const intervalId = setInterval(fetchData, 120000); // Fetch data every 2 minutes

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
        {cafeterias.map((cafeteria, index) => (
          <div key={index} className={styles.cafeteriaCard}>
            <h2 className={styles.cafeteriaName}>{cafeteria.name}</h2>
            <p>
              Current Waiting Time:{" "}
              <span className={styles.fontBold}>{cafeteria.queue}</span> minutes
            </p>
          </div>
        ))}
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
