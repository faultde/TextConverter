import React from "react";

export default class CharacterPool extends React.Component {
  render() {
    let alphaArray = this.props.alphaArray;

    const characters = alphaArray.map((character, index) => {
      return (
        <div className="col-sm-3">
          <div className="card" style={{display:'inline-block'}}>
            <h5 className="card-header">
              {String.fromCharCode(
                alphaArray.indexOf(character) + 97
              ).toUpperCase()}
            </h5>

            {character.map(element => {
              return (
                <button
                  className="btn btn-sm btn-outline-primary"
                  onClick={this.props.onCharacterClick}
                  value={index}
                  style={{width:50, margin:5, fontSize:"2em"}}

                >
                  {element}
                </button>
              );
            })}

            <button
              href="#"
              className="btn btn-primary"
              style={{ margin: "1em" }}
              onClick={this.props.addNew}
              value={alphaArray.indexOf(character)}
            >
              +
            </button>
          </div>
        </div>
      );
    });

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
            <div className="row">{characters}</div>
          </div>
        </div>
      </div>
    );
  }
}
