import React from "react";
import Image from "next/image";

const ImageSection = ({ imageUrl }) => {
  return (
    <Image
      src={imageUrl}
      alt={"Credits to Jarrad Wright"}
      layout='responsive'
      width={486}
      height={336}
      meta={"Credits to Jarrad Wright"}
    />
  );
};

export default ImageSection;
