import React from "react";
import { Box, Button, Grommet, Heading } from "grommet";
import AppBar from "../components/AppBar";
import { Cart, Home } from "grommet-icons";
import Logout from "../components/Logout";
import UserProductsGallery from "../containers/UserProductsGallery";
import { connect } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";

type Props = {
  isAuthenticated: boolean;
};

const UserGallery = ({ isAuthenticated }: Props): JSX.Element => {
  let history = useHistory();

  if (isAuthenticated) {
    return (
      <Grommet>
        <Box fill>
          <AppBar>
            Hello There!
            <Heading level="3" margin="none">
              User Gallery
            </Heading>
            <Logout />
            <Button
              icon={<Home />}
              onClick={() => {
                history.push("/home");
              }}
            />
            <Button
              icon={<Cart />}
              onClick={() => {
                history.push("/");
              }}
            />
          </AppBar>
          <Box>
            <h1> Gallery</h1>
            <UserProductsGallery />
          </Box>
        </Box>
      </Grommet>
    );
  } else {
    return <Redirect to={{ pathname: "/login" }} />;
  }
};

const mapStateToProps = (state: any) => {
  return {
    isAuthenticated: state.isAuthenticated,
  };
};

export default connect(mapStateToProps, null)(UserGallery);
