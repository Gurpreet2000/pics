import React from "react";

const ImageList = (props) => {
  const images = props.images.map(({ alt_description, id, urls }) => (
    <img src={urls.regular} key={id} alt={alt_description} />
  ));

  return <div>{images}</div>;
};

export default ImageList;
