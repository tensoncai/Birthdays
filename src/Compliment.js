import React from 'react';
import './App.css';
import { Card, CardTitle, CardText } from 'reactstrap';

class Compliment extends React.Component {

  constructor(props) {    
    super(props);    
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  render() {
    return (
      <div className="Compliment">
        <Card body>
          <CardTitle>{this.props.title}</CardTitle>
          <CardText className="cardText">{this.props.text}</CardText>
        </Card>
      </div>
    );
  }
}

export default Compliment;
