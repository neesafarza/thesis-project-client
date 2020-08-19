import React, { useState, useEffect } from "react";
import UserGalleryProductCard from "./UserGalleryProductCard";
import { Product } from "../models/product";
import { Category } from "../models/category";
import ApiService from "../ApiService/ApiService";
import { Box, Button, Grommet, Heading } from "grommet";
import AppBar from "../components/AppBar";

type CategoryProps = {
  category: Category;
};

export const renderProducts = (productList: Product[]) => {
  let productsResult: JSX.Element[] = [];

  productList.forEach((product, index) => {
    productsResult.push(
      <UserGalleryProductCard product={product} key={index} readonly={true} />
    );
  });
  return productsResult;
};

const CategoryPage = ({ category }: CategoryProps) => {
  // redirect if no category

  const [products, setProducts] = useState([]);

  useEffect(() => {
    ApiService.getProductsForCategory(category).then((res) => {
      setProducts(res.rows);
    });
  }, []);

  const theme = {
    global: {
      colors: {
        brand: "purple",
      },
      font: {
        family: "Roboto",
        size: "18px",
        height: "20px",
      },
    },
  };

  return (
    <Grommet theme={theme}>
      <div className="categoryPage">
        <AppBar>
          <Heading level="3" margin="none" >
            {category.name}
          </Heading>
        </AppBar>

        <div className="category-dashboard">
          {products && products.length > 0
            ? renderProducts(products)
            : "no products"}
        </div>
      </div>
    </Grommet>
  );
};

export default CategoryPage;
