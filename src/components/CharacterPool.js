import React from "react";
import CharacterCard from "./CharacterCard";

export default class CharacterPool extends React.Component {
  render() {
    return (
      <div className="container-lg">
        <div className="card" style={{ marginTop: 20, textAlign: "center" }}>
          <h5 className="card-header">
            Character Pool
            <button
              className="btn-sm btn-outline-primary float-right"
              onClick={this.props.toggleButton}
            >
              Toggle
            </button>
          </h5>
          
          <div
            className="container"
            style={{ padding: 20, display: `${this.props.toggleDisplay}` }}
          >
          <nav className="navbar navbar-light bg-light">
            <button className="btn btn-outline-success" type="button">
              PreSelect
            </button>
            <button className="btn btn-outline-danger" onClick={this.props.toggleDelete}>
              Delete
            </button>
          </nav>
            <div className="row">
            <CharacterCard 
            onCharacterClick={this.props.onCharacterClick}
            alphaArray={this.props.alphaArray}
            addNew={this.props.addNew} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
