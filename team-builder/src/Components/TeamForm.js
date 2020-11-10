import React from "react"


function MenberForm (){


  return (
    <form className="form-conatiner">
        <label>Name 
            <input
            type="text"
            name="name"
            placeholder="Type Here"
            maxLength="30"
            ></input>
        </label>
        <br/>
        <label>Email
            <input
            type="email"
            name="email"
            placeholder="Type Here"
            maxLength="30"
            ></input>
        </label>
        <br/>
        <label>Role
            <select name="role" >
                <option value="">- - - - - - -</option>
                <option value="frontend">Frontend</option>
                <option value="backend">Backend</option>
                <option value="designer">Designer</option>
                <option value="fullstack">Fullstack</option>
            </select>
        </label>
        <div className="submit">
          <button>submit</button>
        </div>
    </form>


  )          
}

export default MenberForm;