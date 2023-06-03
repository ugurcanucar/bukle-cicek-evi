import Image from "next/image";
import NavigationBar from "./components/navigation-bar";
import style from "./page.module.scss";
import HeroSection from "./components/hero-section";

export default function Home() {
  return (
    <main className={style.main}>
      <NavigationBar />
      <HeroSection />
    </main>
  );
}
