import './App.css';
import TeamForm from "./Components/TeamForm"
import {useState} from "react"


const teamMembers = [{
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
];

const initialFormValues = {
  name: "",
  email: "",
  role: "",
}

function App() {

  const [members, setMenbers] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues,
      [inputName] : inputValue
    });
  };

  const submitForm = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    };
    setMenbers([...teamMembers, newMember]);
    setFormValues(initialFormValues)
  }
  
  return (
    <div >
    <TeamForm
    values={formValues}
    update={updateForm}
    submit={submitForm}
    />
    {members.map((member) => {
      return member;
    })}
   </div>
  );
}

export default App;
