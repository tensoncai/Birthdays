import React from 'react';
import './App.css';
import lottie from 'lottie-web';
import animationData from './data.json';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Compliment from "./Compliment";

let animObj = null;
var index = -1;
class App extends React.Component {

  constructor(props) {    
    super(props);    
    this.state = {
      displayCompliment: false,
      compliments: []
    };
  }

  componentDidMount() {
    console.log('componentDidMount');
    //call the loadAnimation to start the animation
    animObj = lottie.loadAnimation({
      container: this.animBox, // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: false,
      animationData: animationData // the path to the animation json
    });

    this.handleStop();
    var compliments = 
      ["You give \"nevertheless she persisted\" a whole new meaning.",
       "*makes the Zoe face* \"NOT YOUR DAMSEL IN DISTRESS!\"",
       "Dear Corporate America, Zoe deserves a promotion.  Sincerely, Her Friends",
       "Can I go to the parties with you when you win a Grammy?",
       "Your pop artist name should be \"3Gees\", aka Girl Got Game.",
       "Food coma buddy.  Nuff said.",
       "Roll call: faith, hope, and love--I think you have them all!",
       "In all seriousness, you're a wonderful friend and I'm so thankful to have gotten to know you! <3"];
    
    this.setState({
      compliments: compliments
    });
  }

  hideCompliment = () => {
    this.setState(({
      displayCompliment: false
    }), () => console.log(this.state));
  }

  handleCompliment = () => {
    this.hideCompliment();
    setTimeout(this.displayCompliment, 700);
  }

  displayCompliment = () => {
    this.setState(({
      displayCompliment: true
    }), () => console.log(this.state));
  }

  handleStop = () => {
    // animObj.stop();
    animObj.goToAndStop(35, true);
  }

  handlePlay = () => {
    animObj.setSpeed(0.5);
    animObj.play();
    this.handleCompliment();
    setTimeout(this.handleStop, 2500);

    index++;
    if (index >= this.state.compliments.length) {
      index = 0;
    }

    console.log("index = " + index);
  }

  render() {
    return (
      <div className="App">
        <Zoom>
          <h1>Happy Birthday!!</h1>
        </Zoom>
        {this.state.displayCompliment ? <Zoom><Compliment text={this.state.compliments[index]}/></Zoom> : null}
        {/* <div className="animation">
          <div className="animObj" 
               style={{width: 400, margin: '0 auto'}} 
               ref={ref => this.animBox = ref}>
          </div>
          <div>
            <button className="playButton" onClick={this.handlePlay}>Play</button>
          </div>
        </div> */}
        <div className="animObj" 
             style={{width: 400, margin: '0 auto'}} 
             ref={ref => this.animBox = ref}>
        </div>
        <div>
          <button className="playButton" onClick={this.handlePlay}>Play</button>
        </div>
        
      </div>
    );
  }
}

export default App;
