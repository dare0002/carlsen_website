import Categories from "@/components/IndexCategories";
import IndexAbout from "@/components/IndexAbout";
import Hero from "@/components/HeroIndex";

export default function Home() {
  return (
    <>
      <Hero/>
      <main className=" px-4 md:px-8 max-w-4xl mx-auto">
        <Categories/>
        <IndexAbout/>
      </main>
    </>
  );
}
