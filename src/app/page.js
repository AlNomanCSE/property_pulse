import Hero from "@/components/app/main/Hero";
import styles from "./page.module.css";
import InfoBoxes from "@/components/app/main/InfoBoxes";

export default function Home() {
  return (
    <main>
      <Hero />
      <InfoBoxes />
    </main>
  );
}
