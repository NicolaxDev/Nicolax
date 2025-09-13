import Currently from "./home/Currently.jsx";
import Hero from "./home/Hero.jsx";
import MyStack from "./home/MyStack.jsx";
import SliderStack from "./home/SliderStack.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <SliderStack /> */}
      <MyStack />
      <Currently />
    </>
  );
}
