import React, { useState, useContext } from "react";

const data = [
  {
    id: 1,
    name: "Gianni",
  },
  {
    id: 2,
    name: "Bianca",
  },
  {
    id: 3,
    name: "Berny",
  },
  {
    id: 4,
    name: "Connor",
  },
];

const PersonContext = React.createContext();

// Col context abbiamo accesso a 2 componenti: provider, consumer
// Provider funziona come distributore

const ContextAPI = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <PersonContext.Provider value={{ removePerson, people }}>
      <h3> prop drilling</h3>
      <List />
    </PersonContext.Provider>
  );
};

const List = () => {
  const mainData = useContext(PersonContext);
  return (
    <>
      {mainData.people.map((person) => {
        return (
          <SinglePerson key={person.id} id={person.id} name={person.name} />
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  const { removePerson } = useContext(PersonContext);
  return (
    <div>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default function UseContextBasic() {
  return (
    <section className="page">
      <h1>Use Context Basic exercise</h1>
      <ContextAPI></ContextAPI>
    </section>
  );
}
