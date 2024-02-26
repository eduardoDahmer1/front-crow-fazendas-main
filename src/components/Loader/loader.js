// components/Loader.js
import React from "react";
import styles from "./loader.module.css";
import Image from "next/image";

const Loader = () => {
  return (
    <div className={styles.carregando}>
      <Image
        src="/loaded.gif"
        alt="Vercel Logo"
        className={styles.LogoFazendas}
        width={200}
        height={200}
        priority
        center
      />
    </div>
  );
};

export default Loader;
