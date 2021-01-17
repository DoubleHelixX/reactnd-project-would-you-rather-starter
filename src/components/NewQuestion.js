import { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {handleAddQuestion} from '../actions/questions'


class NewQuestion extends Component {


    handleQuestion = (e) => {
        e.preventDefault();
        // console.log('e: ' ,e, '\ne.target: ',e.target, '\ne.t.v : ', e.target.value, '\ne.elements: ', e.target.elements[0], '\ncheck: ');
        let optionOneText= document.getElementsByClassName('n-q-c-Q1')[0];
        let optionTwoText= document.getElementsByClassName('n-q-c-Q2')[0];
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

        if( !optionOneCheck && !optionTwoCheck){
            console.log('option one and option two are validated',);
            dispatch(handleAddQuestion(optionOneText.value.trim(), optionTwoText.value.trim()));
            optionOneText.value='';
            optionTwoText.value='';
            // optionOneText.placeholder='Enter Option One Here';
            // optionTwoText.placeholder='Enter Option One Here';
        }
       
      }

    render() {
        return (
            <div className='new-question-container'>
                <h1 className='n-q-c-header'>
                    Create New Question
                </h1>
                
                <p className='n-q-c-hint'>
                    Complete the question below:
                </p>

                <h2 className='n-q-c-phrase'>
                    Would you Rather ..
                </h2>
                <form onSubmit={(event) => this.handleQuestion(event)} className='n-q-c-form'>
                    <input className='n-q-c-Q1' placeholder='Enter Option One Here'/>
                    <h4 className='n-q-c-hr'>OR</h4> 
                    <input className='n-q-c-Q2' placeholder='Enter Option Two Here'/> 
                    <input className='n-q-c-submit' type='submit' value='Submit'/>
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

export default withRouter(connect(mapStateToProps)(NewQuestion))
