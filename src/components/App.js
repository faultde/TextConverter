import React from "react";
import TextInput from "./TextInput";
import CharacterPool from "./CharacterPool";
import "./app.css";

export default class App extends React.Component {
  state = {
    term: "",
    displayTerm: "",
    randomSelect: true,
    preSelect: [
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      []
    ],
    alphaArray: [
      ["𝔸", "Λ", "Δ"],
      ["𝔹", "Ƀ", "β"],
      ["₡", "ℂ", "∁"],
      ["𝔻", "Ɖ", "ↁ"],
      ["𝔼", "ℰ", "Ҿ"],
      ["𝔽", "ƒ", "Ғ"],
      ["𝔾", "൭", "Ǥ"],
      ["ℍ", "Ԋ", "Ȟ"],
      ["𝕀", "ϊ", "ĩ"],
      ["𝕁", "J", "Ɉ"],
      ["𝕂", "Ϗ", "Ӄ"],
      ["𝕃", "ƪ", "£"],
      ["𝕄", "൱", "ʍ"],
      ["ℕ", "Ͷ", "Ƞ"],
      ["𝕆", "Ǿ", "ȯ"],
      ["ℙ", "Ƿ", "ℙ"],
      ["ℚ", "Ɋ", "Ҩ"],
      ["ℝ", "Я", "Ʀ"],
      ["𝕊", "$", "ȿ"],
      ["𝕋", "Ƭ", "Ⱦ"],
      ["𝕌", "Ʉ", "Ц"],
      ["𝕍", "ұ", "Ѵ"],
      ["𝕎", "₩", "Ϣ"],
      ["𝕏", "Ӿ", "Ӽ"],
      ["𝕐", "Ϋ", "ɏ"],
      ["ℤ", "𐌶", "Ƶ"]
    ]
  };

  onInputChange = e => {
    this.setState({
      term: e.target.value
    });
  };
  convertButton = e => {
    //contains converted string
    let convertedArr = [];
    // string to convert
    let str = e.target.value.toLowerCase();
    //array that will hold STC characters
    let arr = [];
    arr = str.split("");
    //loop through arr characters
    for (let i = 0; i < arr.length; i++) {
      //preserve spaces & numbers
      if (arr[i] === " " || !isNaN(arr[i])) {
        convertedArr.push(arr[i]);
      }
      //push new characters to array
      else {
        //get index of alphaArray
        let letterSelection = this.state.alphaArray[arr[i].charCodeAt(0) - 97];
        //get index of preSelect
        let preSelection = this.state.preSelect[arr[i].charCodeAt(0) - 97];
        //push preselected characters
        convertedArr.push(preSelection);
        //Randomize if no preselect
        if (preSelection === undefined || preSelection.length == 0) {
          console.log("empty");
          let newLetter =
            letterSelection[Math.floor(Math.random() * letterSelection.length)];
          convertedArr.push(newLetter);
        }
      }
    }
    this.setState({
      displayTerm: convertedArr.join("")
    });
  };
  addNewButton = e => {
    let tempArray = this.state.alphaArray;
    //prompt for new character
    let newChar = prompt(
      `Please add a new character to the ${
        this.state.alphaArray[e.target.value]
      } array.`
    );
    if (newChar != null) {
      alert(newChar + " was added to " + this.state.alphaArray[e.target.value]);
      tempArray[e.target.value].push(newChar);
      console.log(tempArray);
      this.setState({ alphaArray: tempArray });
    }
  };

  onCharacterClick = e => {
    let character = e.target;
    //delete character
    if (character.hasAttribute("delete")) {
      let deleteConfirm = confirm(
        "Would you like to remove " + character.innerHTML
      );
      if (deleteConfirm) {
        let prevState = this.state.alphaArray;
        //Get character from the innerHTML of btn and index of array from value
        let selectedCharacter = prevState[character.value].indexOf(
          character.innerHTML
        );
        //remove character
        prevState[character.value].splice(selectedCharacter, 1);
        //update state with new array
        let newState = prevState;
        this.setState({ alphaArray: newState });
      }
    }
    // select Character
    else if (character.hasAttribute("select")) {
      //remove preSelect
      if (character.classList.contains("btn-success")) {
        console.log("removed selection");
        character.classList.add("btn-outline-primary");
        character.classList.remove("btn-success");
        let tempArray = this.state.preSelect;
        tempArray.splice(character.value, 1);
      }
      //add preSelect
      else {
        character.classList.remove("btn-outline-primary");
        character.classList.add("btn-success");
        console.log(
          `index is ${character.value} and character is ${character.innerHTML}`
        );
        let tempArray = this.state.preSelect;
        tempArray.splice(character.value, 1, [character.innerHTML]);
        //remove class from siblings
        let siblings = character.parentNode.childNodes;
        siblings.forEach(element => {
          if (!element.hasAttribute("select")) {
            element.classList.add("btn-outline-primary");
            element.classList.remove("btn-success");
          } 
        });
      }
    }
  };

  render() {
    return (
      <div className="container">
        <div className="card app">
          <div className="card-body">
            <h1
              className="card-title"
              style={{ textAlign: "center", padding: 15 }}
            >
              Text Converter
            </h1>
            <h1 className="card-title" style={{ textAlign: "center" }}>
              {this.state.displayTerm}
            </h1>
            <TextInput
              onInputChange={this.onInputChange}
              onClick={this.convertButton}
              btnValue={this.state.term}
            />
            <CharacterPool
              alphaArray={this.state.alphaArray}
              addNew={this.addNewButton}
              onCharacterClick={this.onCharacterClick}
            />
          </div>
        </div>
      </div>
    );
  }
}
