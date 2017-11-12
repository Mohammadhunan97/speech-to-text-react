import React, { Component } from 'react';
import SpeechToText from './speechtotextedit';
let that;

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      audioin: 'Start speaking to see your audio...'
    }
  }
  componentDidMount(){
    that = this;
      try {
        const listener = new SpeechToText(this.onAnythingSaid, this.onFinalised,null);
        listener.startListening();

      } catch (error) {
        console.log(error);
        this.setState({audioin: error});
      }
  }
  onAnythingSaid(text){
    console.log(text);
    that.setState({audioin: text});
  }
  onFinalised(text){
    console.log(text);
    that.setState({audioin: text});
  }
  render() {
    return (
      <div className="App">
        <h1 style={{textAlign:'center'}}>{this.state.audioin}</h1>
      </div>
    );
  }
}

export default App;
