import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <header className="h-screen flex items-center">
        <section className="my-20 text-center flex justify-center items-center gap-5">
          <section>
            <Image src={'undraw_adventure_9my9.svg'} width={500} height={500} alt="image" />
          </section>
          <section className="w-1/2">
            <h1 className="text-3xl font-bold">See the World, Find Yourself</h1>
            <p className="text-lg">"Travel is more than just visiting new places — it’s about discovering new perspectives, connecting with different cultures, and finding yourself along the way. At [Your Agency Name], we believe traveling opens hearts and minds, turning ordinary moments into lifelong memories. Whether it’s exploring distant lands, tasting new flavors, or simply taking a break from the everyday routine, we make sure every journey inspires you to see the world — and yourself — differently."</p>
            <Button className="my-3 text-lg py-5 bg-indigo-500 hover:bg-indigo-700 dark:hover:bg-indigo-300">Get Started</Button>
          </section>
        </section>
      </header>
      <Footer />
    </>
  );
}
