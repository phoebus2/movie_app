import React from 'react';

const food = [
  {
    id : 1,
    name : "newyork cheeze",
    image : "https://cdn.dominos.co.kr/admin/upload/goods/20200305_djh7347I.jpg"
  },
  {
    id : 2,
    name : "chikesand",
    image : "https://cdn.dominos.co.kr/admin/upload/goods/20200119_Dzj9GV1R.jpg"
  },
  {
    id : 3,
    name : "meetmeetmeet",
    image : "https://cdn.dominos.co.kr/admin/upload/goods/20200119_h150V2hn.jpg"
  },
  {
    id : 4,
    name : "oct",
    image : "https://cdn.dominos.co.kr/admin/upload/goods/20200119_6NVSk5po.jpg"
  }
]

// function renderFood(dish){
//   return <Food key={dish.id} name={dish.name} picture={dish.image} />
// }

function Food({name, picture}) {
  return <div>
      <h1>I Love {name}!!!</h1>
      <img src={picture} alt={name} />
  </div>
}

function App() {
  return (
  <div>
      {food.map(dish => 
        <Food key={dish.id} name={dish.name} picture={dish.image}/>
      )}}
      {/* {console.log(food.map(renderFood))}
      {food.map(renderFood)} */}
  </div>
  );
}

export default App;
