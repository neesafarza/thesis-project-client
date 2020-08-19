import React from "react";
import { Box, Text } from "grommet";
import { AddCircle } from "grommet-icons";
import { useHistory } from "react-router-dom";

function AddNewProduct() {
  let history = useHistory();

  return (
    <Box
      height="small"
      width="small"
      elevation="medium"
      margin="medium"
      pad="medium"
      hoverIndicator="true"
      round="small"
      align="center"
      justify="center"
      onClick={() => {
        history.push("/newproduct");
      }}
    >
      <AddCircle size="xlarge" />
      <Text textAlign="center" margin="small">
        Add a New Product
      </Text>
    </Box>
  );
}

export default AddNewProduct;
