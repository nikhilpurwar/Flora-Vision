import React from "react";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import SectionTitle from "./components/SectionTitle";
import PlantCard from "./components/PlantCard";
import TestimonialCard from "./components/TestimonialCard";
import FeaturedO2 from "./components/FeaturedO2";
import Footer from "./components/Footer";

/* sample data — replace images with actual assets */
const trending = [
  { id: 1, title: "For Your Desks Decorations", price: "Rs. 599/-", excerpt: "I recently added a beautiful desk decoration plant...", img: "/images/plant1.jpg" },
  { id: 2, title: "For Your Desks Decorations", price: "Rs. 399/-", excerpt: "The greenery adds a touch of nature...", img: "/images/plant2.jpg" }
];

const topSelling = [
  { id: 1, name: "Aglaonema plant", price: "Rs. 300/-", desc: "Attractive foliage...", img: "/images/p1.jpg" },
  { id: 2, name: "Plantain Lilies", price: "Rs. 380/-", desc: "Wide variety of sizes.", img: "/images/p2.jpg" },
  { id: 3, name: "Cactus", price: "Rs. 259/-", desc: "Great for arid spaces.", img: "/images/p3.jpg" },
  { id: 4, name: "Swiss cheese Plant", price: "Rs. 400/-", desc: "Unique perforated leaves", img: "/images/p4.jpg" },
  { id: 5, name: "Sansevieria plant", price: "Rs. 450/-", desc: "Low maintenance", img: "/images/p5.jpg" },
  { id: 6, name: "Agave plant", price: "Rs. 359/-", desc: "Succulent variety", img: "/images/p6.jpg" },
];

const testimonials = [
  { id: 1, name: "Shelly Russel", rating: 5, text: "Just got my hands on some beautiful indoor plants...", avatar: "/images/avatar1.jpg" },
  { id: 2, name: "Lula Rolfson", rating: 5, text: "Each one has its own charm and personality...", avatar: "/images/avatar2.jpg" },
  { id: 3, name: "Carol Huels", rating: 5, text: "It's like bringing a little piece of nature indoors...", avatar: "/images/avatar3.jpg" },
];

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroBanner />
        <section className="container-lg px-6 lg:px-0 mt-12">
          <SectionTitle title="Our Trendy plants" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {trending.map(p => (
              <div key={p.id}>
                <PlantCard variant="large" {...p} />
              </div>
            ))}
          </div>

          <SectionTitle title="Our Top Selling Plants" className="mt-16" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
            {topSelling.map(p => <PlantCard key={p.id} {...p} />)}
          </div>

          <SectionTitle title="Customer Review" className="mt-16" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {testimonials.map(t => <TestimonialCard key={t.id} {...t} />)}
          </div>

          <SectionTitle title="Our Best o2" className="mt-16" />
          <FeaturedO2 />

        </section>
      </main>

      <Footer />
    </div>
  );
}
