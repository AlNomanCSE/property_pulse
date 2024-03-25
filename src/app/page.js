import Hero from "@/components/app/main/Hero";
import styles from "./page.module.css";
import InfoBoxes from "@/components/app/main/InfoBoxes";
import HomePage from "@/components/app/main/HomePage";
export default async function Home() {
  return (
    <main>
      <Hero />
      <InfoBoxes />
      <HomePage />
    </main>
  );
}
