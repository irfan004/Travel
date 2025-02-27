"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./components/ui/button";
import { ChevronLeft, ChevronRight, Menu, Star } from "lucide-react";
import { useState } from "react";
// import { motion } from "framer-motion";

export default function LuxuryHotel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  // const [date, setDate] = useState<Date>();

  const slides = [
    {
      image: "/images/Best-Time-to-visit-Kashmir.jpg?height=800&width=1920",
      title: "Welcome to Paradise",
      subtitle: "Experience Luxury in the Heart of Kashmir",
    },
    {
      image: "/images/istockphoto-532959840-612x612.jpg?height=300&width=1400",
      title: "Breathtaking Views",
      subtitle: "Where Nature Meets Luxury",
    },
    {
      image: "/images/kashmir-796614.webp?height=300&width=1400",
      title: "Ultimate Comfort",
      subtitle: "Indulge in Premium Hospitality",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="text-2xl font-bold">
              ABAAD Tours & Travels
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="#about" className="text-sm hover:text-primary">
                About
              </Link>
              <Link href="#rooms" className="text-sm hover:text-primary">
                Rooms
              </Link>
              <Link href="#amenities" className="text-sm hover:text-primary">
                Amenities
              </Link>
              <Link
                href="https://wa.me/9018840159"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-primary"
              >
                Contact Us
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                className="hidden md:inline-flex"
                onClick={() =>
                  window.open(
                    "https://wa.me/9018840159?text=Hello!%20I'm%20interested%20in%20booking%20a%20stay.%20Can%20you%20help%20me%20with%20the%20details?",
                    "_blank"
                  )
                }
              >
                Book Now
              </Button>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </header>
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src={
              slides[currentSlide].image ||
              "/images/istockphoto-532959840-612x612.jpg"
            }
            alt="Hotel view"
            fill
            className="object-cover transition-opacity duration-500"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl text-white space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold">
                {slides[currentSlide].title}
              </h1>
              <p className="text-xl md:text-2xl">
                {slides[currentSlide].subtitle}
              </p>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90"
                onClick={() =>
                  window.open(
                    "https://wa.me/9018840159?text=Hello!%20I'm%20interested%20in%20booking%20a%20stay.%20Can%20you%20help%20me%20with%20the%20details?",
                    "_blank"
                  )
                }
              >
                Book Your Stay
              </Button>
            </div>
          </div>
        </div>

        {/* Slider Controls */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentSlide === index ? "bg-white w-8" : "bg-white/50"
              }`}
            />
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-sm transition-all"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-sm transition-all"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>
      </section>
      {/* Travel Plans */}
      <section className="relative z-10 -mt-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex space-x-6 overflow-x-auto pb-8 pt-4 scrollbar-hide">
            {[
              {
                title: "Kashmir Adventure",
                duration: "5 Days / 4 Nights",
                price: "₹45,000",
                features: [
                  "Luxury Suite Stay",
                  "Shikara Ride",
                  "Local Sightseeing",
                  "Gulmarg Trip",
                ],
                image:
                  "/images/istockphoto-532959840-612x612.jpg?height=300&width=400",
              },
              {
                title: "Royal Retreat",
                duration: "7 Days / 6 Nights",
                price: "₹75,000",
                features: [
                  "Presidential Suite",
                  "Private Lake Tour",
                  "Pahalgam Visit",
                  "Spa Treatment",
                ],
                image:
                  "/images/wooden-shikara-boat-dal-lake-traditional-kashmir-india-showcasing-local-watercraft-gener-design-background-instagram-323140631.webp?height=300&width=400",
              },
              {
                title: "Honeymoon Special",
                duration: "6 Days / 5 Nights",
                price: "₹65,000",
                features: [
                  "Lake View Room",
                  "Romantic Dinner",
                  "Gondola Ride",
                  "Couple Spa",
                ],
                image: "/images/64930.webp?height=300&width=400",
              },
              {
                title: "Weekend Getaway",
                duration: "3 Days / 2 Nights",
                price: "₹25,000",
                features: [
                  "Deluxe Room",
                  "Breakfast Included",
                  "City Tour",
                  "Airport Transfer",
                ],
                image:
                  "/images/istockphoto-665366534-612x612.jpg?height=300&width=400",
              },
            ].map((plan, index) => (
              <div
                key={index}
                className="flex-none w-[300px] md:w-[350px] bg-white rounded-lg shadow-xl overflow-hidden transform transition-transform hover:scale-105"
              >
                <div className="relative h-[200px]">
                  <Image
                    src={plan.image || "/placeholder.svg"}
                    alt={plan.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">{plan.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {plan.duration}
                    </p>
                    <p className="text-2xl font-bold text-primary">
                      {plan.price}
                    </p>
                  </div>
                  <ul className="space-y-2">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <Star className="h-4 w-4 text-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full bg-primary hover:bg-primary/90"
                    onClick={() =>
                      window.open(
                        "https://wa.me/9018840159?text=Hello!%20I'm%20interested%20in%20booking%20a%20stay.%20Can%20you%20help%20me%20with%20the%20details?",
                        "_blank"
                      )
                    }
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* //new code */}
      {/* //newcode */}
      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Experience Paradise in Kashmir
              </h2>
              <p className="text-muted-foreground mb-6">
                Nestled in the heart of Kashmir&apos;s breathtaking landscape,
                our luxury hotel offers an unparalleled blend of traditional
                hospitality and modern comfort. With panoramic views of the
                Himalayas and world-class amenities, we provide an unforgettable
                escape into serenity.
              </p>

              <Button variant="outline">Discover More</Button>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/images/as-the-spring-has-set.jpg?height=400&width=600"
                alt="Hotel interior"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Amenities Section */}
      <section id="amenities" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Luxury Amenities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "24/7 Concierge Service",
              "Spa & Wellness Center",
              "Fine Dining Restaurant",
              "Private Lake Access",
              "Mountain View Rooms",
              "Traditional Shikara Rides",
            ].map((amenity, index) => (
              <div
                key={index}
                className="bg-background p-6 rounded-lg text-center"
              >
                <div className="h-12 w-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{amenity}</h3>
                <p className="text-sm text-muted-foreground">
                  Experience luxury and comfort with our premium amenities.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Guest Experiences
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((testimonial) => (
              <div key={testimonial} className="bg-muted p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-4 w-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  &quot;An absolutely magical experience. The service was
                  impeccable, and the views were breathtaking. We&apos;ll
                  definitely be coming back!&quot;
                </p>

                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/10 mr-3" />
                  <div>
                    <p className="font-semibold">John Doe</p>
                    <p className="text-sm text-muted-foreground">
                      Luxury Traveler
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-muted">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Kashmir Palace</h3>
              <p className="text-sm text-muted-foreground">
                Luxury redefined in the heart of Kashmir.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#about">About Us</Link>
                </li>
                <li>
                  <Link href="#rooms">Rooms</Link>
                </li>
                <li>
                  <Link href="#amenities">Amenities</Link>
                </li>
                <li>
                  <Link href="#contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Dal Lake, Srinagar</li>
                <li>Kashmir, India</li>
                <li>+91 123 456 7890</li>
                <li>info@kashmirpalace.com</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(
                      "https://www.facebook.com/share/1A7iQdzcaM/",
                      "_blank"
                    );
                  }}
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </Link>

                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(
                      "https://www.instagram.com/explorewithabaad?igsh=eXN6YzByNXp1emkz",
                      "_blank"
                    );
                  }}
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border">
            <p className="text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} Kashmir Palace. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
