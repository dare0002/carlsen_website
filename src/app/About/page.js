const About = () => {
  return (
    <div>
      <div className="mb-8 text-center spcae-y-2">
        <h2 className="text-lg md:text-xl font-bold mb-2">Hvem er vi</h2>
        <p>Carlsen er en del af Egmont, som er Danmarks største mediekoncern. Egmont er en dansk fond, som hvert år giver 100 millioner kroner til børn og unge, der har det svært. </p>
        <p>Carlsen er en del af Egmont via Lindhart og Ringhof, som også rummer L&G Uddannelse - et af Danmarks førende læringshuse med Alina, Go Tutor, Praxis, Forstå og max is.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <img src="/Group 42.svg" alt="Bøger" className="w-54 max-h-[300px] object-contain mx-auto z-0" />
        <p>Siden 2012 har Carlsen Ekstra leveret gratis undervisningsmateriale til danske litteraturformidlere. Materialet er udviklet af undervisere, bibliotekarer og andre litteraturformidlere. </p>
      </div>
      <div className="mb-8 text-center spcae-y-2">
        <h2 className="text-lg md:text-xl font-bold mb-2">Skal vi arbejde sammen?</h2>
        <p>Er du interesseret i at udvikle et undervisningsforløb til en af vores bøger? Send os en mail med navn, erhverv og hvilken bog du godt kunne tænke dig at arbejde med.</p>
      </div>
    </div>
  );
};
export default About;
