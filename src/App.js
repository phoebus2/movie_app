import React from 'react';

function Food({fav}) {
  console.log(fav)
  return <h3>I Love {fav}!!!!</h3>
}

function App() {
  return (
  <div>
    <h1>Hello!!!!asdfadf</h1>
    <Food fav="kimchi" />
    <Food fav="samgupsal" />
    <Food fav="chuggumi" />
    <Food fav="ramen" />
  </div>
  );
}

export default App;
