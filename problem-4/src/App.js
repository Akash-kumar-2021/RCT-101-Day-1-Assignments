import "../src/style.css"

function Button()
{
  return <button>Hello!</button>
}

const userDetails = {
  name:"Akash kumar" ,
  avatar :"https://images.unsplash.com/photo-1652521887861-5ec257b41e0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60https://i.imgflip.com/6mjbfq.jpg"
}

function App() {
  return (
    <div className="App">
     <Button />
     <img src={userDetails.avatar} alt="" />
     <h3>{userDetails.name}</h3>
    </div>
  );
}

export default App;
