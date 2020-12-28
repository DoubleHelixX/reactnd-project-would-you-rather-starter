import logo from '../logo.svg';
import '../styles/App.css';
import * as DataAPI from '../utils/_DATA'
import React, { Component, Fragment } from 'react'
import Nav from './Nav'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import * as Constants from '../utils/Constants'





class App extends Component {
  state = {
    users:{}
  }
  
  componentDidMount() {
    DataAPI._getUsers()
    .then((users) => {
      this.setState(() => ({
        users
      }))
    })
  }

  render() {
    const { users } = this.state;
    const user = users.sarahedo;
    let title = document.getElementsByClassName('title');
    let questionMarks = document.getElementsByClassName('question-marks');

    let signature = document.getElementsByClassName('signature');

    if (title.length>0)
      {
        
        console.log('hello', title);
        
        setTimeout(() => { 
          title[0].style["font-size"]='18px'; 
          title[0].style["color"]='#D38BF0'; 
          title[0].style["font-family"]='game-show2'; 
          
          // questionMarks[0].textContent='¿';
          questionMarks[0].style["font-size"]='18px'; 
          questionMarks[0].style["color"]='#D38BF0'; 
          questionMarks[0].style["font-family"]='game-show'; 
     
        

        }, 250);

        setTimeout(() => { 
          title[1].style["font-size"]='18px'; 
          title[1].style["color"]='#F30C0E'; 
          title[1].style["font-family"]='game-show2'; 


          // questionMarks[1].textContent='¿';
          
          questionMarks[1].style["font-size"]='18px'; 
          questionMarks[1].style["color"]='#F30C0E'; 
          questionMarks[1].style["font-family"]='game-show'; 

     

      
      }, 500);
        
      setTimeout(() => { 
        title[2].style["font-size"]='18px'; 
        title[2].style["color"]='#0EF30C'; 
        title[2].style["font-family"]='game-show2'; 

        
        // questionMarks[2].textContent='¿';
        questionMarks[2].style["color"]='#0EF30C'; 
        questionMarks[2].style["font-family"]='game-show'; 
        questionMarks[2].style["font-size"]='18px'; 


      }, 750);
      
      setTimeout(() => { 
        title[3].style["font-size"]='18px'; 
        title[3].style["color"]='#0EF30C'; 
        title[3].style["font-family"]='game-show';
        
        // questionMarks[0].textContent='¿';
        // questionMarks[1].textContent='¿';
        // questionMarks[2].textContent='¿';

        questionMarks[0].style["animation"]='my-spin 1s'; 
        questionMarks[0].style["moz-animation"]='my-spin 1s';
        questionMarks[1].style["animation"]='my-spin 1s'; 
        questionMarks[1].style["moz-animation"]='my-spin 1s'; 
        questionMarks[2].style["animation"]='my-spin 1s'; 
        questionMarks[2].style["moz-animation"]='my-spin 1s';  
        // console.log(questionMarks[0].style.animation);

        // questionMarks[1].style["animation"]='fadein'; 
        // //questionMarks[2].style["animation"]='-spin'; 

        // questionMarks[2].style["-webkit-animation"]='my-spin infinite 20s linear';


        
        

      
      }, 950);



      
    }
    else console.log('failed');
      
    

  
    return (
      <Router>

        <div className="App">
      
          <div className = "Heading-div"> <span className='title'>Would </span><span className='title'>you </span><span className='title'>Rat</span><span className='title'>her</span> <span className='question-marks'> ?</span> <span className='question-marks'> ?</span> <span className='question-marks'> ? </span>  <span className = 'signature'> (React/Redux App)  Created By: Thomas Rivera </span></div>

        <Nav />


            {console.log('USERS: ', user && Object.keys(user.id))}
            <h1> {`These are the users: ${user && Object.keys(user.id)} `} </h1>
            
        </div>
      </Router>

      );
  }
}

export default App;
