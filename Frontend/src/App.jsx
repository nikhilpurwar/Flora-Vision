import React from "react";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import SectionTitle from "./components/SectionTitle";
import PlantCard from "./components/PlantCard";
import TestimonialCard from "./components/TestimonialCard";
import FeaturedO2 from "./components/FeaturedO2";
import Footer from "./components/Footer";

// use project assets
import bg from "./assets/nagy-arnold-X_IvVDuHvDQ-unsplash.png";
import pA from "./assets/unsplash__7LbC5J-jw4.png";
import pB from "./assets/unsplash__7LbC5J-jw4-1.png";
import pC from "./assets/unsplash__7LbC5J-jw4-2.png";
import logo from "./assets/image.png";

const trending = [
  { id: 1, title: "For Your Desks Decorations", price: "Rs. 599/-", excerpt: "I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!", img: pA },
  { id: 2, title: "For Your Desks Decorations", price: "Rs. 399/-", excerpt: "The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming", img: pB }
];

const topSelling = [
  { id: 1, name: "Aglaonema plant", price: "Rs. 300/-", desc: "The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care", img: pA },
  { id: 2, name: "Plantain Lilies", price: "Rs. 380/-", desc: "Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes.", img: pB },
  { id: 3, name: "Cactus", price: "Rs. 259/-", desc: "It is known for their ability to thrive in arid environments", img: pC },
  { id: 4, name: "Swiss cheese Plant", price: "Rs. 400/-", desc: "A popular tropical houseplant known for its distinctive, perforated leaves", img: pA },
  { id: 5, name: "Sansevieria plant", price: "Rs. 450/-", desc: "Known for its striking appearance and low-maintenance nature.", img: pB },
  { id: 6, name: "Agave plant", price: "Rs. 359/-", desc: "A genus of succulent plants known for their striking rosette and architectural forms.", img: pC },
];

const testimonials = [
  { id: 1, name: "Shelly Russel", rating: 5, text: "Just got my hands on some absolutely awesome plants, and I couldn’t be happier!", avatar: logo },
  { id: 2, name: "Lula Rolfson", rating: 5, text: "Each one has its own unique charm and personality, they’ve already started brightening up my space.", avatar: logo },
  { id: 3, name: "Carol Huels", rating: 5, text: "It's like bringing a little piece of nature indoors. Definitely worth the investment—my collection has never looked better!", avatar: logo },
];

export default function App() {
  return (
    <>
    <div
          className="absolute top-[-125px] w-full h-[2592px] bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${bg})` }}
        />
    <div className="min-h-screen bg-[linear-gradient(180deg,#09150b_0%,#0f2214_60%)]" >
      
      <Navbar />
      <main>
        <HeroBanner  />
        <section className="container-lg px-6 lg:px-0 mt-12 pb-20">
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
    </>
  );
}
