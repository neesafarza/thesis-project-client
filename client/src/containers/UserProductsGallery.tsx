import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Box, Text } from "grommet";
import UserGalleryProductCard from "../components/UserGalleryProductCard";
import AddNewProduct from "../components/AddNewProduct";
import { RootState } from "../models/rootstate";
import ApiService from "../ApiService/ApiService";
import "../styles/UserProductsGallery.scss";

type Props = {
  id: number;
};

function UserProductsGallery({ id }: Props): JSX.Element {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ApiService.getProductsForUser(id).then((res) => {
      console.log("res.rows in UserProductsGallery", res.rows);
      setProducts(res.rows);
    });
  }, []);
  console.log("products", products);

  const productList = () => {
    if (products.length === 0) {
      return (
        <Box>
          <Text> Add products to your gallery to start to sell! </Text>
          <AddNewProduct />;
        </Box>
      );
    } else {
      return (
        <Box
          direction="row"
          overflow="hidden"
          wrap={true}
          flex
          align="center"
          justify="center"
        >
          <AddNewProduct />
          {products.map((product: any) => {
            if (product.quantity === 0) {
              return (
                <div className="soldProduct">
                  <Text size="large" color="red" className="soldProductText">
                    SOLD
                  </Text>
                  <UserGalleryProductCard
                    key={product.item_id}
                    product={product}
                  />
                </div>
              );
            } else {
              return (
                <UserGalleryProductCard
                  key={product.item_id}
                  product={product}
                />
              );
            }
          })}
        </Box>
      );
    }
  };

  return (
    <Box direction="column" flex align="center" justify="center">
      {productList()}
    </Box>
  );
}

const mapStateToProps = (state: RootState) => {
  console.log("state", state);
  return {
    id: state.id,
  };
};

export default connect(mapStateToProps, {})(UserProductsGallery);
