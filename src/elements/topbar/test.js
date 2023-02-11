import React, { useState } from "react";

const CompanyForm = () => {
  const [state, setState] = useState({
    name: "",
    industry: "",
    short_desc: "",
    desc: "",
    link: "",
    status: "",
  });
  const handleInputChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setState({ ...state, name: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("company name" + state.name);
    fetch("http://127.0.0.1:8080/addcompany", {
      method: "post",
      mode: "cors",
      body: {
        name: state.name,
        industry: state.industry,
        short_desc: state.short_desc,
        desc: state.desc,
        link: state.link,
        status: state.status,
      },
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Company Name:
        <input
          name="name"
          type="text"
          value={state.name}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Industry:
        <input
          name="industry"
          type="text"
          value={state.industry}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Short Description:
        <input
          name="short_desc"
          type="text"
          value={state.short_desc}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Description:
        <input
          name="desc"
          type="text"
          value={state.desc}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Link:
        <input
          name="link"
          type="text"
          value={state.link}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Status:
        <input
          name="status"
          type="text"
          value={state.status}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default CompanyForm;
