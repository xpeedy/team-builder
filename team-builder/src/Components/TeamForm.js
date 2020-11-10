import React from "react"


function MenberForm (props){
    const {values, update, submit} = props;
    const onChange = (event) => {
      const {name, value} = event.target;
      update(name, value);
    };

    const onSubmit = (event) => {
        event.defaultPrevented(); //prevents the page to reload
        submit();
    }

  return (
    <form className="form-conatiner" onSubmit={onSubmit}>
        <label>Name 
            <input
            type="text"
            name="name"
            onChange={onChange}
            placeholder="Type Here"
            maxLength="30"
            value={values.name}
            ></input>
        </label>
        <br/>
        <label>Email
            <input
            type="email"
            name="email"
            onChange={onChange}
            placeholder="Type Here"
            maxLength="30"
            value={values.email}
            ></input>
        </label>
        <br/>
        <label>Role
            <select name="role" value={values.role} onChange={onChange}>
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