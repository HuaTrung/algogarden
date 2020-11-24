import React from "react";
import { Grid, Icon, Header, List, Container } from "semantic-ui-react";
import BoardGame from "./Airplane/BoardGame"
class Airplane extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {

  }
  render() {
    return (
      <Container>
        <Grid celled>
          <Grid.Row>
            <Grid.Column width={12}>
              <BoardGame></BoardGame>
            </Grid.Column>
            <Grid.Column width={4}>
              <List link inverted>
                <List.Item as="a">Link One</List.Item>
                <List.Item as="a">Link Two</List.Item>
                <List.Item as="a">Link Three</List.Item>
                <List.Item as="a">Link Four</List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default Airplane;
