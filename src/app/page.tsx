
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import RecentPost from "@/components/RecentPost";
import ThirdSection from "@/components/ThirdSection";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div className="h-screen w-full">
      <Navbar/>
       <Hero/>
       <RecentPost/>
       <ThirdSection/>
       <Footer/>
    </div>
  );
}
