import React from "react";
import { Box, Button } from "grommet";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
type Props = {
  isAuthenticated: boolean;
  setIsAuthenticated: (b: boolean) => void;
};

const Logout = ({
  isAuthenticated,
  setIsAuthenticated,
}: Props): JSX.Element => {
  let history = useHistory();

  const handleLogoutClick = () => {
    alert("You are being logged out!");
    removeToken();
    handleAuth();
  };

  const handleLoginClick = () => {
    history.push("/login");
  };

  const removeToken = () => {
    localStorage.removeItem("accessToken");
  };

  const handleAuth = () => {
    setIsAuthenticated(false);
    history.push("/home");
  };

  const showButton = () => {
    if (isAuthenticated) {
      return (
        <Button
          type="reset"
          label="Logout"
          onClick={() => handleLogoutClick()}
          primary
        />
      );
    } else {
      return (
        <Button
          type="reset"
          label="Login"
          onClick={() => handleLoginClick()}
          primary
        />
      );
    }
  };

  return <Box>{showButton()}</Box>;
};

const mapStateToProps = (state: any) => {
  return {
    isAuthenticated: state.isAuthenticated,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    setIsAuthenticated: (boolean: boolean) =>
      dispatch({ type: "AUTHENTICATED", payload: boolean }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Logout);
