import React from "react";
import {
  Grid,
  Segment,
  Header,
  Image,
  Card,
  Icon
} from "semantic-ui-react";
import CardPortfolio from "./component/CardPortfolio";
function Portfolio() {
  return <DividerExampleHorizontalTable></DividerExampleHorizontalTable>;
}

const DividerExampleHorizontalTable = () => (
  <Grid columns={2} stackable className="fill-content">
    <Grid.Row stretched>
    <Grid.Column width={11}>
      <Segment>
        <div id="app" class="container">
            <CardPortfolio header="Trees" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit." 
            image="https://images.unsplash.com/photo-1479659929431-4342107adfc1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=">
             
            </CardPortfolio>
            <CardPortfolio header="Trees" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit." 
            image="https://images.unsplash.com/photo-1479644025832-60dabb8be2a1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=">
              <h1 slot="header">Trees</h1>
              <p slot="content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </CardPortfolio>
          </div>
        </Segment>
      </Grid.Column>
      <Grid.Column width={1} />
      <Grid.Column width={3}>
        <Segment>
          <Header as="h1">Me</Header>
          <Image
            className="centered"
            src="/images/daniel.jpg"
            size="medium"
            circular
          />
          <Card fluid>
            <Card.Content>
              <Card.Header>Daniel</Card.Header>
              <Card.Meta>Joined in 2016</Card.Meta>
              <Card.Description>
                Daniel is a comedian living in Nashville.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name="user" />
                10 Friends
              </a>
            </Card.Content>
          </Card>
        </Segment>
      </Grid.Column>
    
      <Grid.Column width={1} />
    </Grid.Row>
  </Grid>
);
export default Portfolio;
