import React, { useState } from "react";
import {
  Box,
  Button,
  Form,
  FormField,
  MaskedInput,
  Text,
  TextInput,
} from "grommet";

import { Hide, View } from "grommet-icons";
import { connect } from "react-redux";
import ApiService from "../ApiService/ApiService";
import { useHistory } from "react-router-dom";

type Props = {
  isAuthenticated: boolean;
  setIsAuthenticated: (b: boolean) => void;
};
const initialState = {
  email: "",
  password: "",
};

const LoginForm = ({
  isAuthenticated,
  setIsAuthenticated,
}: Props): JSX.Element => {
  let history = useHistory();
  const [revealPassword, setRevealPassword] = useState(false);
  const [state, setState] = useState(initialState);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const { email, password } = state;
    const user = { email, password };
    const res = await ApiService.login(user);

    if (res.error) {
      alert(`${res.message}`);
      setState(initialState);
    } else {
      const accessToken = res;
      localStorage.setItem("accessToken", accessToken);
      setIsAuthenticated(true);
      history.push("/usergallery");
    }
  };

  return (
    <Box width="medium">
      <Form
        onChange={(value) => console.log("Change", value)}
        onSubmit={handleSubmit}
      >
        <FormField
          name="email"
          label={
            <Box direction="row">
              <Text>Email</Text>
              <Text color="status-critical"> *</Text>
            </Box>
          }
          required
        >
          <MaskedInput
            name="email"
            mask={[
              { regexp: /^[\w\-_.]+$/, placeholder: "example" },
              { fixed: "@" },
              { regexp: /^[\w]+$/, placeholder: "my" },
              { fixed: "." },
              { regexp: /^[\w]+$/, placeholder: "com" },
            ]}
            value={state.email}
            onChange={handleChange}
          />
        </FormField>
        <FormField
          name="password"
          label={
            <Box direction="row">
              <Text>Password</Text>
              <Text color="status-critical"> *</Text>
            </Box>
          }
          required
        >
          <TextInput
            plain
            name="password"
            type={revealPassword ? "text" : "password"}
            value={state.password}
            onChange={handleChange}
          />
          <Button
            icon={
              revealPassword ? <View size="medium" /> : <Hide size="medium" />
            }
            onClick={() => setRevealPassword(!revealPassword)}
          />
        </FormField>
        <br />
        <Text margin={{ left: "small" }} size="small" color="status-critical">
          * Required Field
        </Text>
        <br></br>
        <Box direction="row" justify="between" margin={{ top: "medium" }}>
          <Button label="Cancel" />
          <Button type="submit" label="Submit" primary />
        </Box>
      </Form>
    </Box>
  );
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
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
