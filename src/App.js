import React from 'react';

class App extends React.Component{

  constructor(props){
    super(props);
    console.log("constructor!");
  }

  state = {
    count : 0,
  };

  plus = () => this.setState(current => ({
    count: current.count + 1,
  }))
  
  minus = () => this.setState(current => ({
    count: current.count - 1,
  }))

  componentDidMount(){
    console.log("component did mount!");
  }

  componentDidUpdate(){
    console.log("component did update!");
  }

  componentWillUnmount(){
    console.log("bye..");
  }

  render(){
    console.log("render!");
    return (
      <div>
        <h1>The number is : {this.state.count}</h1>
        <button onClick={this.plus}>PLUS</button>
        <button onClick={this.minus}>MINUS</button>
      </div>
    );
  }

}


export default App;