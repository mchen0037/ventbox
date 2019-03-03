import React, { Component } from 'react';
// Make sure you import this in order to use things from semantic
import {Button, Card} from 'semantic-ui-react';
// Import axios for part 5.
import axios from 'axios';
import ReactDOM from 'react-dom';
import '../App.css';



// class Textbox extends Component {
//   submit() {
//     var ref = ReactDOM.findDOMNode(this.refs[this.props.id]);
//     let id = -1
//     if (this.props.id === "textBox1") {
//       id = 1;
//     }
//     else if (this.props.id === "textBox2") {
//       id = 2;
//     }
//     {this.props.submitText(ref.value, id)}
//   }
//   render() {
//     return(
//       <div>
//         <input ref={this.props.id} type="text"/>
//         <button onClick={ (e) => this.submit()}>Submit {this.props.id}</button>
//       </div>
//     );
//   }
// }



// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.changeText = this.changeText.bind(this);
//     this.state = {
//       text1: "Edit me!",
//       text2: "Edit me!"
//     };
//   }

//   changeText(text, id) {
//     if (id === 1) {
//       this.setState( {
//         text1: text
//       })
//     }
//     else if (id === 2) {
//       this.setState( {
//         text2: text
//       })
//     }
//   }

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           {this.state.text1}
//           <Textbox id={"textBox1"} submitText={this.changeText}/>
//           {this.state.text2}
//           <Textbox id={"textBox2"} submitText={this.changeText}/>
//         </header>

//       </div>
//     );
//   }
// }

// export default App;



class Poster extends Component{

  constructor(props){
    super(props);
    this.state={
      value: 'Please write your post here!'
    };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

  }

handleChange(event){
  this.setState({value:event.target.value});
}

handleSubmit(event) {
    alert('A post was submitted: ' + this.state.value);
    event.preventDefault();
  }

  // handleClickSubmit(e) {
  //     console.log('hola');
  // }

  render(){
    return(


      <form onSubmit={this.handleSubmit}>

        <label>
          Post:
          <textarea value= 
          {this.state.value} 
          onChange=
          {this.handleChange} />
        </label>

        <input type ="submit" value="Submit" />
        
      </form>



        
  	

      );
  }
}

export default Poster


  //  <div class="ui big icon input">
        // <input type="text" placeholder="Post..."></input>
        
        // <Button id="Hello!" onClick={this.handleClickSubmit}>Submit</Button>

       //  </div>

