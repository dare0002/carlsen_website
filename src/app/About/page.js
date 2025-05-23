import Button from "../../components/Button";
import Link from "next/link";

const About = () => {
  return (
    <main className="max-w-4xl mt-20 mx-auto">
      <div className="mb-16 text-center space-y-2 max-w-md mx-auto">
        <h2 className="text-lg md:text-xl font-bold mb-2">Hvem er vi?</h2>
        <p>Carlsen er en del af Egmont, som er Danmarks største mediekoncern. Egmont er en dansk fond, som hvert år giver 100 millioner kroner til børn og unge, der har det svært. </p>
        <p>Carlsen er en del af Egmont via Lindhart og Ringhof, som også rummer L&G Uddannelse - et af Danmarks førende læringshuse med Alina, Go Tutor, Praxis, Forstå og max is.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mb-16 text-center">
        <img src="/about.png" alt="Bøger" className="w-54 max-h-[300px] object-contain mx-auto z-0 " />
        <div className="flex items-center">
          <p>Siden 2012 har Carlsen Ekstra leveret gratis undervisningsmateriale til danske litteraturformidlere. Materialet er udviklet af undervisere, bibliotekarer og andre litteraturformidlere. </p>
        </div>
      </div>
      <div className="mb-12 text-center space-y-2">
        <h2 className="text-lg md:text-xl font-bold mb-2">Skal vi arbejde sammen?</h2>
        <p className="max-w-md mx-auto text-center mb-2">Er du interesseret i at udvikle et undervisningsforløb til en af vores bøger? Send os en mail med navn, erhverv og hvilken bog du godt kunne tænke dig at arbejde med.</p>
        <Link href="/Contact">
          <Button className="mt-4">Kontakt</Button>
        </Link>
      </div>
    </main>
  );
};
export default About;
