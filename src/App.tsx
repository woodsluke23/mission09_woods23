import React from "react";
import "./App.css";
import data from "./CollegeBasketballTeams.json";

interface TeamBlah {
  school: string;
  name: string;
  city: string;
  state: string;
}

function Welcome() {
  return <h1> NCAA Basketball Team Information! </h1>;
}

class Team extends React.Component<TeamBlah> {
  render() {
    const oneTeam = this.props;

    return (
      <div>
        <h2> School Name: {oneTeam.school} </h2>
        <h2> Mascot Name: {oneTeam.name} </h2>
        <h2>
          Location: {oneTeam.city}, {oneTeam.state}
        </h2>
        <br></br>
        <br></br>
      </div>
    );
  }
}

function TeamList() {
  return (
    <div>
      {data.teams.map((teamNum) => (
        <Team {...teamNum} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <TeamList />
    </div>
  );
}

export default App;
