import Navbar from "@/components/Navbar";
import HomePage from "@/pages/HomePage";

export default function Home() {
  return (
    <div className="w-screen min-h-screen flex flex-col items-center">
      <Navbar />
      <HomePage />
    </div>
  );
}
