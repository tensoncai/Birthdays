import React from 'react';
import './App.css';
import lottie from 'lottie-web';
import animationData from './data.json';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Compliment from "./Compliment";

let animObj = null;
var index = -1;
var name = 0;
class App extends React.Component {

  constructor(props) {    
    super(props);
    this.state = {
      displayCompliment: false,
      disablePlayButton: false,
      compliments: 
      [
        [
          "You give \"nevertheless she persisted\" a whole new meaning.",
          "*makes the Zoe face* \"NOT YOUR DAMSEL IN DISTRESS!\"",
          "Dear Corporate America, Zoe deserves a promotion.  Sincerely, Her Friends",
          "Can I go to the parties with you when you win a Grammy?",
          "Your pop artist name should be \"3Gees\", aka Girl Got Game.",
          "Food coma buddy.  Nuff said.",
          "Roll call: faith, hope, and love--I think you have them all!",
          "In all seriousness, you're a wonderful friend and I'm so thankful to have gotten to know you! <3"
        ], 
        [
          "You're a great sport.  Thanks for passing me the basketball in IM bball...I think that was the first time in 10+ years lol",
          "David Dang, you're a real softie.  But that's OK.  I think that's one of your best qualities XD",
          "The next time my watch breaks, can you fix it?  Bc you're always timely!",
          "There are 5.8 million people in Wisconsin.  But I think there's really only one person I'd go there to see!  (sorry this totally sounds like a pick-up line lol)",
          "You really take-after Michelle Obama--everyone seems to be \"becoming\" like you (in quarantine)! :)",
          "David Dang puts Parma on the map.",
          "Roll call: faith, hope, and love--I think you have them all!",
          "In all seriousness, you're a wonderful friend and I'm so thankful to have gotten to know you! <3"
        ],
        [
          "Rev. Shiau, thank you for all of your wisdom.  Really.",
          "Thanks for being a positive person, for the most part!  NG doesn't always have to stand for \"no good\", it can also be \"never give-up.\" :)",
          "Nobody's a stranger when you're around Sam Shaiu :)",
          "Whenever I want to talk to my profs about something deep and a maybe a little too personal, I try think of how you did it so smoothly :D",
          "You're a real warm person...I wonder if the rosy red coat has something to do with it?",
          "When are you going to lead Bstudy again?  The world needs your guidance.",
          "Roll call: faith, hope, and love--I think you have them all!",
          "In all seriousness, you're a wonderful friend and I'm so thankful to have gotten to know you! <3"
        ]
      ],
      persons: ["Zoe", "David", "Sam"],
      color: ['#e200e2', "#3b3bff", "#00bbbb"]
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
  }

  hideCompliment = () => {
    this.setState(({
      displayCompliment: false
    }), () => console.log(this.state));
  }

  displayCompliment = () => {
    this.setState(({
      displayCompliment: true
    }), () => console.log(this.state));
  }

  handleCompliment = () => {
    this.hideCompliment();
    setTimeout(this.displayCompliment, 700);
  }

  handleStop = () => {
    // animObj.stop();
    animObj.goToAndStop(35, true);
    this.handlePlayButton(false);
  }

  handlePlayButton = (value) => {
    this.setState({
      disablePlayButton: value
    });
  }

  handlePlay = () => {
    this.handlePlayButton(true);
    animObj.setSpeed(0.5);
    animObj.play();
    this.handleCompliment();
    setTimeout(this.handleStop, 2500);

    index++;
    if (index >= this.state.compliments[0].length) {
      index = 0;
      if (name < this.state.persons.length - 1) {
        name++;
      }
      else {
        name = 0;
      }
    }

    console.log("index = " + index);
  }

  render() {
    return (
      <div className="App">
        <Zoom>
          <h1 className="title" style={{color: this.state.color[name]}}>Happy Birthday {this.state.persons[name]}!!</h1>
        </Zoom>
        <Fade when={this.state.displayCompliment}>
          <Compliment text={this.state.compliments[name][index]}/>
        </Fade>
        <div className="animObj" 
             style={{width: 400, margin: '0 auto'}} 
             ref={ref => this.animBox = ref}>
        </div>
        <div>
          <button disabled={this.state.disablePlayButton} className="playButton" onClick={this.handlePlay}>Play</button>
        </div>
        
      </div>
    );
  }
}

export default App;
