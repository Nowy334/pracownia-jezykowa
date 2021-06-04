import ExampleOfImplementation from '../../components/ExampleOfImplementation/ExampleOfImplementation';
import Head from "next/head";
import React from "react";

const exampleOfImplementation = () => {
  return (
    <>
    <Head>
        <title>Przykladowe zdjęcia wykonych pracowni językowych</title>
        <meta
          name="description"
          content="Strona przedstawia opis klasopracowni językowych produkowanej przez firmę Zubek Electronics. Pracownie te pozwalają na skuteczniejszą i przyjemniejszą naukę językow obcych. Zubek.com.pl Electronics Gierałtowice polska. Wyłącznym dystrybutorem klasopracowni jest firm Bold."
        />
        <meta
          name="keywords"
          content="Zubek, Zabrze, Gliwice, Gierałtowice, Gieraltowice, produkcja, producent, pracownia językowa, klasopracownia, pracownia, słuchawki, uczeń, nauka jezyka, słuchawka, Bold, Jelenia Góra, tablice, sprzęd audiowizualny"
        />
      </Head> 
      <ExampleOfImplementation/>
    </>
  ); 
}

export default exampleOfImplementation;