/** @format */

import Catagories from "@/components/Categories";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Info from "@/components/Info";
import Navbar from "@/components/Navbar";
import Offers from "@/components/Offers";
import FeaturedProducts from "@/components/Product";

export default function Home() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex min-h-screen w-full  flex-col items-center justify-between  bg-white dark:bg-black sm:items-start">
                <Navbar />
                <Hero />
                <Offers />
                <Catagories />
                <FeaturedProducts />
                <Info />
                <Footer />
            </main>
        </div>
    );
}
