import "./UseReducerBasic.css";
import { useState, useReducer } from "react";
import styled from "styled-components";

const MyModal = styled.div`
  width: 250px;
  height: 80px;
  top: 100px;
  left: calc(50% - 125px);
  position: fixed;
  background-color: ${({ warning }) => (warning ? "red" : "green")};
  color: white;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
`;

const PersonElement = styled.div`
  width: 250px;
  height: 35px;
  border-radius: 5px;
  background-color: cadetblue;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 25px;
  color: white;
  margin: 5px;
  padding: 0 5px;
`;

export default function UseReducerBasic() {
  const [name, setName] = useState("");

  const reducer = (state, action) => {
    console.log(action, state);
    switch (action.type) {
      case "ADD_PERSON":
        const newPeople = [...state.people, action.payload];
        return {
          ...state,
          people: newPeople,
          isModalOpen: true,
          modalContent: "Persona Aggiunta",
          modalBg: false,
        };
      case "NO_VALUE":
        return {
          ...state,
          isModalOpen: true,
          modalContent: "Inserisci valore",
          modalBg: true,
        };
      case "CLOSE_MODAL":
        return {
          ...state,
          isModalOpen: false,
        };
      case "REMOVE_PERSON":
        const peopleUpdate = state.people.filter(
          (person) => action.payload !== person.id
        );
        return {
          ...state,
          people: peopleUpdate,
        };
      default:
        return state;
    }
  };

  const defaultState = {
    people: [],
    isModalOpen: false,
    modalContent: "",
    modalBg: true,
  };

  //   Settaggio useReducer. Abbiamo uno "state" che in questo caso è solo un nome e una funzione "dispatch" (chiamata dispatch come common practice). Quando invochiamo useReducer riceviamo indietro 2 cose: il valore di state e la funzione dispatch, molto simile ad useState. Nel useReducer ciò che passiamo è la funzione reducer e uno stato di default.  La differenza tra useReducer e useState  è che ogni volta che vogliamo manipolare l'intero stato dobbiamo usare il dispatch e lo farà attraverso il reducer. Possiamo pensare alla funzione reducer come qualcosa che prende il vecchio stato e l'azione per restituire un nuovo stato.

  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newPerson = { id: new Date().getTime().toString(), name };
      dispatch({ type: "ADD_PERSON", payload: newPerson });
      setName("");
      setTimeout(() => {
        closeModal();
      }, 2000);
    } else {
      dispatch({ type: "NO_VALUE" });
      setTimeout(() => {
        closeModal();
      }, 2000);
    }
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };
  return (
    <section className="useReducer">
      <h2>Esercitazione con useReducer</h2>

      {state.isModalOpen && (
        <MyModal warning={state.modalBg}>{state.modalContent}</MyModal>
      )}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <button type="submit">Add Name</button>
      </form>

      {state.people.map((person) => {
        return (
          <PersonElement key={person.id}>
            <h4>{person.name}</h4>
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_PERSON", payload: person.id })
              }
            >
              Remove
            </button>
          </PersonElement>
        );
      })}
    </section>
  );
}
