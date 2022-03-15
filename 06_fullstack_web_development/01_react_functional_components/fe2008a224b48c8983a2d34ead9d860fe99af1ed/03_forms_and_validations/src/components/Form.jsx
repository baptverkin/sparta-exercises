import React from "react";

const Form = () => {
  const [space, setSpace] = React.useState(false);

  function validateInput(value) {
    console.log(value);
    value.includes(" ") ? setSpace(!space) : null;
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("You clicked submit.");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">First Name</label>
        <input
          onChange={(e) => validateInput(e.target.value)}
          type="text"
          className="form-control"
          id="exampleFirstName"
        />
        <small id="FirstName Help" className="form-text text-muted"></small>
        {space ? "No Spaces Allowed" : null}
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
