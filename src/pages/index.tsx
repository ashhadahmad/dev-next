import {
  About,
  CTALarge,
  Courses,
  Gradient,
  Header,
  Hero,
} from "../components";

export default function Home() {
  return (
    <div className="selection:bg-yellow-300/20">
      <Gradient />
      <Header />
      <Hero />
      <About />
      <Courses />
      <CTALarge />
    </div>
  );
}
