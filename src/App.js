import React from 'react';


function Food({name, type}){
  return <h1>I will eat {type} {name}.</h1>
}

function App(){
  return (
  <div>Hello!
    <Food name = "ramen" type = "samyang"/>
  </div>
  )
}

export default App;
