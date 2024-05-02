import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from "semantic-ui-react";

const LoginForm = () => (
  <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as="h2" color="orange" textAlign="center">
        Logga in
      </Header>
      <Form size="large">
        <Segment stacked>
          <Form.Input
            fluid
            icon="user"
            iconPosition="left"
            placeholder="Username"
          />
          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Lösenord"
            type="password"
          />

          <Button color="orange" fluid size="large">
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
        Ny användare? <a href="#">Skapa konto</a>
      </Message>
    </Grid.Column>
  </Grid>
);

export default LoginForm;
