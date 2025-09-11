import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Generate from "../components/Generate";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex flex-col">
      <Navbar />
      <Hero />
      <Generate />
      <Footer />
    </main>
  );
}
