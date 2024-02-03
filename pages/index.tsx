import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

interface CampusTileProps {
  title: string;
  link: string;
}

const CampusTile: React.FC<CampusTileProps> = ({ title, link }) => {
  return (
    <Link href={link}>
      <div className="tile">
        <h3>{title}</h3>
      </div>
    </Link>
  );
};

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center p-24 ${inter.className}`}
    >
      <div className="header">
        <Image
          className="image"
          src="/wasedaLine1.jpg"
          alt="WasedaLine Logo"
          width={175}
          height={175}
        />
        <h1 className="title"></h1>
      </div>

      <div className="tile-layout">
        <div className="camp-tiles">
          <CampusTile title="Main Campus/早稲田キャンパス" link="/honcamp" />
          <CampusTile
            title="NishiWaseda Campus/西早稲田キャンパス"
            link="/nishiwaseda"
          />
          <CampusTile title="Toyama Campus/戸山キャンパス" link="/toyama" />
        </div>
      </div>
    </main>
  );
}
