import Main from "@/components/Main";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Job_list from "@/components/job.list";
import Image from "next/image";

export default function Home() {
  return (
    <main className="isolate h-full w-full">
      <Header />
      <Hero />

      <Main />

      <Job_list />

      <Footer />
    </main>
  );
}
