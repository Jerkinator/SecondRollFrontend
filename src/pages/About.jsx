import AxiosRollDice from "../components/AxiosRollDice";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-box">
        <h2>We are Second Roll!</h2>
        <p>
          Second Roll strävar efter att bli Sveriges ledande marknadsplats för
          begagnade brädspel. Vi ser att intresset för brädspel är högre än
          nånsin, samtidigt ligger miljontals spel hemma och dammar på hyllorna.
          Målet för oss är att bidra till ett hållbart samhälle och göra det
          enkelt för alla att köpa och sälja brädspel online. Second roll är
          skapat av de unga drivna studenterna Mia, Jerker, Oskar, Teis och
          Erik.
        </p>
        <p className="hideme">.</p>
      </div>
      <div className="about-box">
        <h2>F.A.Q.</h2>
        <h4>- Kan jag sälja mina gamla hockeykort här?</h4>
        <p>Nej tack.</p>
        <h4>- Jag gillar inte brädspel, kan jag handla ändå?</h4>
        <p>
          Absolut! Så länge du köper och säljer saker så skiter vi i vilket
          eftersom vi tjänar pengar.
        </p>
        <h4>- Min man eldade upp alla monopolpengar.</h4>
        <p>Det var synd, men det är tyvärr inte en fråga.</p>
      </div>
      <div className="about-box">
        <h2>Kontakt</h2>
        <p>Frågor och funderingar? Kontakta oss på: </p>
        <p>support@secondroll.se</p>
      </div>
    </div>
  );
};

export default About;
