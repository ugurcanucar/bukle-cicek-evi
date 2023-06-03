import Image from "next/image";
import React from "react";

const BlopGroup = () => {
  return (
    <React.Fragment>
      <Image
        src="/lineVector.svg"
        alt="Vector Right Top"
        width={340}
        height={520}
        className="absolute z-10  top-0 right-0 "
        priority
      />
      <Image
        src="/blopVector1.svg"
        alt="Blop Right Top"
        width={400}
        height={500}
        className="absolute top-0  right-0 "
        priority
      />
      <Image
        src="/lineVector2.svg"
        alt="Vector Left Bottom"
        width={340}
        height={520}
        className="absolute z-10   bottom-0 left-0"
        priority
      />{" "}
      <Image
        src="/blopVector2.svg"
        alt="Blop Left Bottom"
        width={500}
        height={500}
        className="absolute bottom-0 left-0"
        priority
      />
      <Image
        src="/blopVector3.svg"
        alt="Blop Bottom Right"
        width={400}
        height={400}
        className="absolute   bottom-0 right-0"
        priority
      />
    </React.Fragment>
  );
};

export default BlopGroup;
