import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface CampusTileProps {
  title: string;
}

const CampusTile: React.FC<CampusTileProps> = ({ title }) => {
  return (
    <div className="cursor-pointer border p-5 m-4 hover:bg-gray-100 transition duration-300 ease-in-out rounded shadow-lg">
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
  );
};

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="flex items-center">
        <Image
          src="/wasedaLine1.png"
          alt="WasedaLine Logo"
          width={100}
          height={100}
        />
        <h1 className="ml-4">WasedaLine</h1>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
        <div className="camp-tiles">
          <CampusTile title="Main Campus/早稲田キャンパス" />
          <CampusTile title="NishiWaseda Campus/西早稲田キャンパス" />
          <CampusTile title="Toyama Campus/戸山キャンパス" />
        </div>
      </div>
    </main>
  );
}
