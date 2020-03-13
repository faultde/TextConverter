import React from 'react';

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