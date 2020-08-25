import React from "react";
import { useHistory } from "react-router-dom";
import CategoriesBar from "../components/CategoriesBar";
import PurchasedProducts from "../components/PurchasedProducts";


type Props = {
  isAuthenticated: boolean;
};

function PurchaseHistory({ isAuthenticated }: Props): any {
  let history = useHistory();

  if (isAuthenticated) {
    return (
      <>
        <CategoriesBar />
        <h1>Your Purchases</h1>
        <PurchasedProducts />
      </>
    )
  } else {
    return history.push("/login");
  }
}

export default PurchaseHistory;
