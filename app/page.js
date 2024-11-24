import Image from "next/image";
import Amine from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";

export default function Home() {
  return (
    <main className="flex flex-col bg-[#121212]">
        <Amine />
        <About />
    </main >
  );
}
