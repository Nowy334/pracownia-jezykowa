import classes from './Digital.module.scss';
import Section from '../UI/Section';

const Digital = () => {
  return (
    <Section title='Cyfrowo czy analogowo?'>
      <p className={classes.section__text}>W przekonaniu wielu osób urządzenie cyfrowe jest nowoczesne a więc lepsze. Rzeczywiście technika cyfrowa w elektronice dokonała rewolucji, to dzięki niej powstała płyta kompaktowa, telewizja satelitarna, cyfrowa fotografia, telefonia stacjonarna i komórkowa, internet, tak można wyliczać jeszcze długo.
      Współczesne urządzenie elektroniczne nie może się  obejść bez techniki cyfrowej ponieważ w wielu z nich bez trudu znajdziemy elementy elektroniki cyfrowej - procesor, pamięć a nierzadko całe komputery.</p>
      <p className={classes.section__text}>Aby elektronika cyfrowa mogła obrabiać wielkości analogowe (np.dźwięk) należy przetworzyć je na postać cyfrową takiego przetwarzania dokonuje się jeśli chcemy uprościć zapis lub przesyłanie.
      Pamiętać trzeba że otaczający nas swiat jest analogowy i  aby cyfrowy zapis był czytelny dla człowieka należy go przetworzyć ponownie na postać analogową bo tylko taka postać jest dla nas czytelna. Takie przetwarzanie tam i spowrotem  jest obarczone stratami jakości, szczególnie kiedy robi się to przetwornikami  z małą częstotliwością próbkowania  uzyskując  jakość dźwięku jak w telefonie.</p>
      <p className={classes.section__text}>W naszej pracowni  sterowaniem zajmuje się specjalnie oprogramowany mikrokomputer umieszczony wewnątrz obudowy modułu głównego.  Unikamy  jednak  przetwarzania dźwięku w postać cyfrową  ponieważ uważamy że w tym rozwiązaniu jest to niekorzystne  bo pogorszy  jakość dźwięku,  podniesie koszt urządzeń  a okablowanie będzie bardzo awaryjne. Jeden "dowcipny" uczeń może unieruchomić całą pracownię, w naszym rozwiązaniu najwyżej jedno stanowisko.</p>
      <p className={classes.section__text}>Nasza pracownia jest urządzeniem cyfrowym, ale nie jet to parametr najważniejszy dziś każde urządzenie elektroniczne jest cyfrowe i nie zawsze to oznacza że  jest lepsze. To mądre połączenie obu technik daje najlepsze efekty.</p>
    </Section>
  );
}

export default Digital;