import Image from "next/image";
import Categories from "@/components/IndexCategories";
import IndexAbout from "@/components/IndexAbout";

export default function Home() {
  return (
    <div>
      <main>
        <Categories/>
        <IndexAbout/>
      </main>
    </div>
  );
}
