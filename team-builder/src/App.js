import './App.css';
import TeamForm from "./Components/TeamForm"
import Member from "./Components/Member"
import { useEffect, useState } from "react"
import axios from "./axios";



// const teamMembers = [{
//   name: "hairo",
//   email: "hairone240@gmail.com",
//   role: "fullstack"
// },
// {
//   name: "joseph",
//   email: "joseph@gmail.com",
//   role: "frontend"
// },
// {
//   name: "tania",
//   email: "tania0@gmail.com",
//   role: "designer"
// },
// ];

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
    // console.log(formValues)
  };

  const submitForm = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    };
    if (!newMember.name || !newMember.email || !newMember.role) return;

    axios
    .post("fakeapi.com", newMember)
    .then((res) =>{
      setMenbers([newMember, ...members])
      setFormValues(initialFormValues)
    })
    
    // console.log(newMember)

  }
  // console.log(members)

  useEffect(() => {
    axios
    .get("fakeapi.com")
    .then((res) => 
      setMenbers(res.data)
    )
  },[])
  
  return (
    <div >
    <TeamForm
    values={formValues}
    update={updateForm}
    submit={submitForm}
    />
    {members.map((member) => {
      return <Member key={member.id} details={member}
      // {...console.log(members)} key={member.id}
      />;
    })}
   </div>
  );
}

export default App;
