import React, { Component } from 'react';
import Home from "./Home"
import Results from './Results'
import { Container, Header, Icon, Image } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <Container>
        <Header as='h2' icon textAlign='center' style={{paddingTop: '1em'}} >
          <Icon loading name='recycle' circular size='tiny' />
          <Header.Content>
            Searching Sample Responsive screens
         </Header.Content>
        </Header>

        <Home />
        <Results />
      </Container>
    );
  }
}

export default App;
