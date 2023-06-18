import React from "react";
import { carsList } from "./listItem";
import ProductItem from "./ProductItem";

export default function ProductList() {
  return (
    <div>
      <div className="container mt-5 mb-5">
        <div className="row">
          {carsList.map((c, i) => (
            <ProductItem key={i} props={c} />
          ))}
        </div>
      </div>
    </div>
  );
}
