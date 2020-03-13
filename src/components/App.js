import React from "react";
import TextInput from './TextInput';
import CharacterPool from './CharacterPool';
import './app.css';


let convertedArr = [];

export default class App extends React.Component {
    state = {
        term: '',
        displayTerm: '',
        toggleDisplay: 'inline-block',
        randomSelect: true,
        toggleDelete: false,
        preSelect: [],
        alphaArray: [
            ['𝔸', 'Λ', 'Δ'],
            ['𝔹', 'Ƀ', 'β'],
            ['₡', 'ℂ', '∁'],
            ['𝔻', 'Ɖ', 'ↁ'],
            ['𝔼', 'ℰ', 'Ҿ'],
            ['𝔽', 'ƒ', 'Ғ'],
            ['𝔾', '൭', 'Ǥ'],
            ['ℍ', 'Ԋ', 'Ȟ'],
            ['𝕀', 'ϊ', 'ĩ'],
            ['𝕁', 'J', 'Ɉ'],
            ['𝕂', 'Ϗ', 'Ӄ'],
            ['𝕃', 'ƪ', '£'],
            ['𝕄', '൱', 'ʍ'],
            ['ℕ', 'Ͷ', 'Ƞ'],
            ['𝕆', 'Ǿ', 'ȯ'],
            ['ℙ', 'Ƿ', 'ℙ'],
            ['ℚ', 'Ɋ', 'Ҩ'],
            ['ℝ', 'Я', 'Ʀ'],
            ['𝕊', '$', 'ȿ'],
            ['𝕋', 'Ƭ', 'Ⱦ'],
            ['𝕌', 'Ʉ', 'Ц'],
            ['𝕍', 'ұ', 'Ѵ'],
            ['𝕎', '₩', 'Ϣ'],
            ['𝕏', 'Ӿ', 'Ӽ'],
            ['𝕐', 'Ϋ', 'ɏ'],
            ['ℤ', '𐌶', 'Ƶ']
        ]
    }

    onInputChange = (e) => {
        this.setState({
            term: e.target.value
        })
    }
    convertButton = () => {
            convertedArr = [];
            let str = this.state.term.toLowerCase();
            let arr = [];
            let newArr = [];
            arr = str.split('');
            arr.forEach(elem => { newArr.push(elem) })
            for (let i = 0; i < newArr.length; i++) {
                if (newArr[i] === " " || !isNaN(newArr[i])){
                    convertedArr.push(newArr[i]);
                } else {

                    let letterSelection = this.state.alphaArray[newArr[i].charCodeAt(0) - 97];
                    if(this.state.randomSelect){
                    let newLetter = letterSelection[Math.floor(Math.random() * letterSelection.length)];
                    convertedArr.push(newLetter);
                    }
                }
            }
        this.setState({
            displayTerm: convertedArr.join('')
        })
    }
    addNewButton = (e) => {
        let tempArray = this.state.alphaArray;
            //prompt for new character
            let newChar = prompt(`Please add a new character to the ${this.state.alphaArray[e.target.value]} array.`);
            if (newChar != null) {
                alert(newChar + " was added to " + this.state.alphaArray[e.target.value])
                tempArray[e.target.value].push(newChar)
                console.log(tempArray)
                this.setState({alphaArray : tempArray})
             
        }
    }
    toggleButton = () => {
      if(this.state.toggleDisplay === 'none'){
        console.log('toggle off')
        this.setState({toggleDisplay: "inline"})
      }else{
        console.log('toggle on')
        this.setState({toggleDisplay: "none"})
      }
    }
    toggleDelete = () =>{
      if(!this.state.toggleDelete){
        this.setState({toggleDelete:true})
        console.log(this.state.toggleDelete)
      }else{
      this.setState({toggleDelete:false})
      console.log(this.state.toggleDelete)
      }
    }
    onCharacterClick = (e) => {

      //delete character
      if(this.state.toggleDelete){
      let deleteConfirm = confirm("Would you like to remove " + e.target.innerHTML)
      if(deleteConfirm){
      let prevState = this.state.alphaArray;
      //Get character from the innerHTML of btn and index of array from value
      let selectedCharacter = prevState[e.target.value].indexOf(e.target.innerHTML);
      //remove character
      prevState[e.target.value].splice(selectedCharacter,1)
      //update state with new array
      let newState = prevState;
      this.setState({alphaArray:newState})
      }
      }
    }
    render() {
        return (
            <div className="container">
            <div className="card app">
                <div className="card-body">
                        <h1 className="card-title" style={{ textAlign: "center",padding:15 }}>Text Converter</h1>
                        <h1 className="card-title" style={{ textAlign: "center" }}>{this.state.displayTerm}</h1>
                        <TextInput onInputChange={this.onInputChange} onClick={this.convertButton} btnValue={this.state.term} />
                        <CharacterPool 
                        alphaArray={this.state.alphaArray} 
                        addNew={this.addNewButton} 
                        toggleDisplay={this.state.toggleDisplay} 
                        toggleButton={this.toggleButton}
                        onCharacterClick={this.onCharacterClick}
                        toggleDelete = {this.toggleDelete}/>
                        
                    </div>
                </div>
            </div>

        )
    }
}

