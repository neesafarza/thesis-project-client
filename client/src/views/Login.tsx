import React from "react";
import { Box, Button, Grommet, Heading } from "grommet";
import AppBar from "../components/AppBar";
import LoginForm from "../components/LoginForm";
import { Home } from "grommet-icons";
import { useHistory } from "react-router-dom";

function Login() {
  let history = useHistory();
  return (
    <Grommet full>
      <Box fill>
        <AppBar>
          Hello There!
          <Heading level="3" margin="none">
            Login Page
          </Heading>
          <Button
            icon={<Home />}
            onClick={() => {
              history.push("/home");
            }}
          />
        </AppBar>

        <Box
          direction="row"
          overflow={{ horizontal: "hidden" }}
          flex
          align="center"
          justify="center"
        >
          <LoginForm />
        </Box>
      </Box>
    </Grommet>
  );
}

export default Login;
