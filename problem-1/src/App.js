import "../src/style.css" ;
const user = {
  image :"https://i.imgflip.com/n3tju.jpg",
  funny:"When I wrote this, only God and I understood what I was doing"
}
function App() {
  return (
    <div className="App">
      <h1>My First React Assignments</h1>
     <img src={user.image} alt="icon" />
  <h2>{user.funny}</h2>
    </div>
  );
}

export default App;
