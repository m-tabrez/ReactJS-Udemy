import React, { useReducer, useRef } from "react";
import Input from "../UI/Input";
import Container from "../UI/Container";
import Button from "../UI/Button";
import Card from "../UI/Card";

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "Delete":
      const filtered = state.filter((curEle) => curEle.id !== action.payload);
      return [...filtered];
    default:
      throw new Error();
  }
};

const ContextAndReducer = () => {
  const name = useRef();
  const city = useRef();

  const [state, dispatch] = useReducer(reducer, initialState);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const user = {
      name: name.current.value,
      city: city.current.value,
      id: Math.random(),
    };
    dispatch({ type: "ADD", payload: user });
  };

  const onDelete = (delId) => {
    console.log("del clicked", delId);
    dispatch({ type: "Delete", payload: delId });
  };

  console.log(state);

  return (
    <>
      <Container>
        <form onSubmit={onSubmitHandler}>
          <Input
            input={{
              type: "text",
              className: "form-control",
              placeholder: "Enter Name",
              label: "Name",
              ref: name,
            }}
          />
          <Input
            input={{
              type: "text",
              className: "form-control",
              placeholder: "Enter City",
              label: "City",
              ref: city,
            }}
          />
          <br />
          <Button
            type="submit"
            className="btn btn-primary"
            value="Submit"
            onSubmit={onSubmitHandler}
          />
        </form>
        <br />
        {state.map((curEle) => (
          <Card key={curEle.id} onClick={onDelete} id={curEle.id}>
            {curEle.name}
          </Card>
        ))}
      </Container>
    </>
  );
};

export default ContextAndReducer;
