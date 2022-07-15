import "./App.css";
import Myimg from './Profile/Photo';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { Component } from 'react';
import FullName from './Profile/FullName';
import Address from './Profile/Address';

import { Autocomplete } from '@lob/react-address-autocomplete';



function App(){
  return(

<Card style={{ marginLeft:'50px' , width: '18rem'  }}>
      <Myimg></Myimg>
      <Card.Body>
        <Card.Title>My Identity</Card.Title>
        <Card.Text>
          Hacker space
        </Card.Text>
        <FullName></FullName>
      <Address></Address>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    
    


  );
  
}
export default App;



















/*class App extends Component {
  render(){
    return(
      <div className="App">   
      <FullName></FullName>
      </div>
        );
      }
      }
      export default App ;*/

  /*function BasicExample() {
  return (
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Myimg} alt='photo' />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    

    


    );
  
}
export default BasicExample;*/

/*<Card.Img variant="top" src={Myimg} />*/
