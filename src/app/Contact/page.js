import Button from "../../components/Button";

const Contact = () => {
  return (
    <div className="max-w-4xl mt-20 text-center mx-auto p-4">
      <div className="mb-8 text-center space-y-2">
        <h2 className="text-lg md:text-xl font-bold mb-2">Kontakt</h2>
        <p className="text-base">carlsenekstra@egmont.com</p>
        <p className="text-base">+ 42 45 00 09</p>
      </div>
      <div className="mb-8 text-center space-y-2">
        <h3 className="text-lg md:text-xl font-bold mb-2">Åbningstider</h3>
        <p className="text-base">Man - fre 09.00 - 16. 00</p>
      </div>
      <div className="mb-8 text-center space-y-2">
        <h2 className="text-lg md:text-xl font-bold mb-2">Skal vi arbejde sammen?</h2>
        <p className="max-w-md mx-auto text-center text-base pb-4">Er du interesseret i at udvikle et undervisningsforløb til en af vores bøger? Send os en mail med navn, erhverv og hvilken bog du godt kunne tænke dig at arbejde med.</p>
        <Button className="mt-4">Kontakt os</Button>
      </div>
    </div>
  );
};
export default Contact;
