import React from "react";
import CardBody from "./body";
import CardHeader from "./header";
import CardFooter from "./footer";

const ProductCard = (props) => {
  return (
    <div className="card mb-3">
      <CardHeader name={props.product.name} platformLogos={props.product.platforms} />
      <CardBody
        firstReleaseDate={props.product.first_release_date}
        genres={props.product.genres}
        summary={props.product.summary}
        cover={props.product.cover.url}
        screenshots={props.product.screenshots}
      />
      <CardFooter slug={props.product.slug} />
    </div>
  );
};

export default ProductCard;
