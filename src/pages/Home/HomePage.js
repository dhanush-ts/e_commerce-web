import { useTitle } from "../../hooks/useTitle";
import { Hero } from "./components/Hero";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { Testimonials } from "./components/Testimonials";
import { Faq } from "./components/Faq";
import { UseCredentials } from "../../context/LoginConext";

export const HomePage = () => {
  useTitle("Access Latest Computer Science eBooks");

  return (
    <main>
        <Hero />
        <FeaturedProducts />
        <Testimonials />
        <Faq />
    </main>
  )
}
