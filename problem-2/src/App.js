import "../src/style.css" ;

const myName= {
  name : "Akash kumar",
  photo :"https://i.imgflip.com/6mgjlo.jpg"
}

function App() {
  return (
    <div className="App">
        <img src={myName.photo} alt="pic" />
        <h1>{myName.name}</h1>
    </div>
  );
}

export default App;
