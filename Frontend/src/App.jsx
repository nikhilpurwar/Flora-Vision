import React from "react";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import SectionTitle from "./components/SectionTitle";
import PlantCard from "./components/PlantCard";
import TopSelling from "./components/TopSelling"
import TestimonialCard from "./components/TestimonialCard";
import FeaturedO2 from "./components/FeaturedO2";
import Footer from "./components/Footer";

// use project assets
import bg from "./assets/nagy-arnold-X_IvVDuHvDQ-unsplash.png";
import plantA from "./assets/Rose Gold Feminine Calligraphy Monogram Logo(15) 2.png"
import plantB from "./assets/Rose Gold Feminine Calligraphy Monogram Logo(23).png";
import plantC from "./assets/Rose Gold Feminine Calligraphy Monogram Logo(24).png"
import plantD from "./assets/Rose Gold Feminine Calligraphy Monogram Logo(15) 2-5.png"
import plantE from "./assets/Rose Gold Feminine Calligraphy Monogram Logo(16).png"
import plantF from "./assets/Rose Gold Feminine Calligraphy Monogram Logo(26).png"
import plantG from "./assets/Rose Gold Feminine Calligraphy Monogram Logo(21).png";
// import pC from "./assets/unsplash__7LbC5J-jw4-2.png";

// Testimonials images
import T1 from "./assets/Testimonials/T1.png";
import T2 from "./assets/Testimonials/T2.png";
import T3 from "./assets/Testimonials/T3.jpg";
import T4 from "./assets//Testimonials/T4.png";

const trending = [
  { id: 1, title: "For Your Desks Decorations", price: "Rs. 599/-", excerpt: "I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!", img: plantB },
  { id: 2, title: "For Your Desks Decorations", price: "Rs. 399/-", excerpt: "The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming", img: plantG }
];

const topSelling = [
  { id: 1, name: "Aglaonema plant", price: "Rs. 300/-", desc: "The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care", img: plantA },
  { id: 2, name: "Plantain Lilies", price: "Rs. 380/-", desc: "Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes.", img: plantB },
  { id: 3, name: "Cactus", price: "Rs. 259/-", desc: "It is known for their ability to thrive in arid environments", img: plantC },
  { id: 4, name: "Swiss cheese Plant", price: "Rs. 400/-", desc: "A popular tropical houseplant known for its distinctive, perforated leaves", img: plantD },
  { id: 5, name: "Sansevieria plant", price: "Rs. 450/-", desc: "Known for its striking appearance and low-maintenance nature.", img: plantE },
  { id: 6, name: "Agave plant", price: "Rs. 359/-", desc: "A genus of succulent plants known for their striking rosette and architectural forms.", img: plantF },
];

const testimonials = [
  { id: 1, name: "Shelly Russel", rating: 5, text: "Just got my hands on some absolutely awesome plants, and I couldn’t be happier!", avatar: T2 },
  { id: 2, name: "Lula Rolfson", rating: 5, text: "Each one has its own unique charm and personality, and they’ve already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home.", avatar: T3 },
  { id: 3, name: "Carol Huels", rating: 5, text: "It's like bringing a little piece of nature indoors. Definitely worth the investment—my collection has never looked better!", avatar: T4 },
];

export default function App() {
  return (
    <>
      <div
        className="absolute top-[-125px] w-full h-[2592px] bg-cover bg-center opacity-90"
        style={{ backgroundImage: `url(${bg})` }}
      />
      <div className="min-h-screen bg-[linear-gradient(180deg,#09150b_0%,#0f2214_60%)]" >

        <Navbar />
        <main>
          <HeroBanner />
          <section className="flex flex-col justify-center items-center">
            <SectionTitle title="Our Trendy plants" />
            <div className="grid grid-cols-1 gap-[114px] mt-20">
              {trending.map(p => (
                <div key={p.id}>
                  <PlantCard {...p} />
                </div>
              ))}
            </div>

            <SectionTitle title="Our Top Selling Plants" className="mt-72" />
            <div className="px-4 w-[1660px] justify-self-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-24 mt-16">
              {topSelling.map(p => <TopSelling key={p.id} {...p} />)}
            </div>

            <SectionTitle title="Customer Review" className="mt-72" />
            <div className="px-4 w-[1660px] justify-self-center grid grid-cols-1 md:grid-cols-3 gap-6 mt-40">
              {testimonials.map(t => <TestimonialCard key={t.id} {...t} />)}
            </div>

            <SectionTitle title="Our Best o2" className="mt-52" />
            <FeaturedO2 plant={plantA} className="" />
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
