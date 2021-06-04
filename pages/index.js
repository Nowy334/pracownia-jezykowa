import LanguageLab from "../components/HomePage/languageLab";
import Head from "next/head";
import React from "react";

const HomePage = () => {
  return (
    <>
      <LanguageLab />
      <Head>
        <title>Pracownia językowa</title>
        <meta
          name="description"
          content="producent Pracownia Językowa - najtańsze rozwiązane na rynku. Klasopracownia Jezykowa ułatwia naukę języków obcych ułatwiając nauczycielowi prowadzenie zajęć z języka obcego.
Czesc grafiki pochodzi z strony www.tommek.eu"
        />
        <meta
          name="keywords"
          content="pracownia jezykowa klasopracownia pracownia językowa nauka jezyków laboratorium językowe laboratorium jezykowe multimedialna pracownia jezykowa"
        />
      </Head>
    </>
  );
};

export default HomePage;
