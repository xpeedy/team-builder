import './App.css';
import TeamForm from "./Components/TeamForm"
import {useState} from "react"


const teamMenbers = [{
  name: "hairo",
  email: "hairone240@gmail.com",
  role: "fullstack"
},
{
  name: "joseph",
  email: "joseph@gmail.com",
  role: "frontend"
},
{
  name: "tania",
  email: "tania0@gmail.com",
  role: "designer"
},
]

function App() {

  const [Menbers, setMenbers] = useState([])
  


  return (
   <TeamForm> </TeamForm>
  //  <Menbers></Menbers>
  );
}

export default App;
