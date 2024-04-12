import Header from "@/src/FE/components/home/Header";
import Section1 from "@/src/FE/components/home/Section1";
import Section2 from "@/src/FE/components/home/Section2";
import Vectors from "@/src/FE/components/utils/Vectors";
import React from "react";

const page = () => {
  return (
    <section>
      {/* <Vectors /> */}
      <Header />
      <main>
     <Section1 />
     <Section2 />

    
      </main>
    </section>
  );
};

export default page;
