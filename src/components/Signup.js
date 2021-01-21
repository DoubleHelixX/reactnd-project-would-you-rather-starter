import { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Dropdown, DropdownButton } from 'react-bootstrap';
import woman from "../images/woman.png"
import burglar from "../images/burglar.png"
import girl from "../images/girl.png"
import student from "../images/student.png"
import bussinessman from "../images/bussinessman.png"



// import {handleAddQuestion} from '../actions/questions'


class Signup extends Component {
    state = {
        givenUsers : {
            'woman': woman,
            'burglar': burglar,
            'girl': girl,
            'student': student,
            'bussinessman': bussinessman
        }
    }
    
    
    handleQuestion = (e) => {
        e.preventDefault();
        // console.log('e: ' ,e, '\ne.target: ',e.target, '\ne.t.v : ', e.target.value, '\ne.elements: ', e.target.elements[0], '\ncheck: ');
        let optionOneText= document.getElementsByClassName('signup-Q1')[0];
        let optionTwoText= document.getElementsByClassName('signup-Q2')[0];
        let {dispatch} = this.props;
        let optionOneCheck = optionOneText.value.trim().length < 1 || optionOneText.value.trim() === '' || !optionOneText.value.trim();
        let optionTwoCheck = optionTwoText.value.trim().length < 1 || optionTwoText.value.trim() === '' || !optionTwoText.value.trim();

        if (optionOneCheck){
            console.log('OPTION ONE INPUT is an Empty Field');
            optionOneText.style.border='solid 2px #cc0000';
        }
        else
            optionOneText.style.border='solid 2px #b9b9b9';

        if (optionTwoCheck){
            console.log('OPTION TWO INPUT is an Empty Field');
            optionTwoText.style.border='solid 2px #cc0000';
        }
        else
            optionTwoText.style.border='solid 2px #b9b9b9';

        // if( !optionOneCheck && !optionTwoCheck){
        //     console.log('option one and option two are validated',);
        //     dispatch(handleAddQuestion(optionOneText.value.trim(), optionTwoText.value.trim()));
        //     optionOneText.value='';
        //     optionTwoText.value='';
        //     // optionOneText.placeholder='Enter Option One Here';
        //     // optionTwoText.placeholder='Enter Option One Here';
        // }
       
      }

    render() {
    // let container = document.getElementsByClassName('new-question-container');
    // console.log('wtf', container)
    // if (container.length>0) 
    //     container[0].style['overflow-y']='auto';
    let {givenUsers} = this.state;    
    console.log(Object.keys(givenUsers))

    
    function selectUser(e,id){
        console.log(e.target.id);
        let dropdownBtn = document.getElementById('signup-dropdown-basic-button');
        let imageTextfield = document.getElementsByClassName('signup-Q2')
        imageTextfield.textContent = e.target.id;
        dropdownBtn.style.color='black';
        dropdownBtn.setAttribute('data-user', id);
    }
        return (
            <div className='signup-container'>
                <h1 className='signup-header'>
                    Create Your Own User !
                </h1>
                
                <p className='signup-hint'>
                    Complete the form below:
                </p>

                <h2 className='signup-label1'>
                    What would you like to be called?
                </h2>
                <form onSubmit={(event) => this.handleQuestion(event)} className='signup-form'>
                    <input className='signup-Q1' placeholder='Enter a Username'/>
                    <h4 className='signup-hr'>AND</h4> 
                    <h2 className='signup-label2'>
                    What image would you like as your avatar?
                    </h2>
                    <input className='signup-Q2' placeholder='Paste Image Link or Click      to Choose'/> 
                    <DropdownButton className='signin-dropdown-basic-button' id="signin-dropdown-basic-button" title="">
                        {Object.keys(givenUsers).map((x, i) =>(
                            <Dropdown.Item className="signup-dropdown-item" onClick={(event) => selectUser(event, (Object.keys(givenUsers)[i].toString()))} id={Object.keys(givenUsers)[i].toString()}>
                                <img src={givenUsers[Object.keys(givenUsers)[i]]} alt={Object.keys(givenUsers)[i].toString()} />
                                {Object.keys(givenUsers)[i].toString()}</Dropdown.Item>
                        // console.log('IN THIS LOOP  - \ni: ' , i , '\n data: ', Object.keys(givenUsers)[i].toString())
                            
                        ))}
                    </DropdownButton>
                    <input className='signup-submit' type='submit' value='Submit'/>
                </form>


            </div>
        )
    }
}

function mapStateToProps ({ authedUser }) {
   
  
    return {
    authedUser
  }
  }

export default withRouter(connect(mapStateToProps)(Signup))