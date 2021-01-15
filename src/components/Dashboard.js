import * as DataAPI from '../utils/_DATA'
import vote from "../images/vote.png"
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {handleAddQuestionAnswer} from '../actions/questions'
import { Link, withRouter } from 'react-router-dom'





class Dashboard extends Component {
  state = {
    unanswered:'',
    answered:''
  }

  
  handleAnswer = (e, q) => {
    e.preventDefault();
    // console.log('e: ' ,e, '\ne.target: ',e.target, '\ne.t.v : ', e.target.value, '\ne.elements: ', e.target.elements, '\ncheck: ', e.target.elements.group.value|| 0 < e.target.elements.group.value.length , '\ne.value ', e.target.elements.group.value);
    if (e.target.elements.group.value|| 0 < e.target.elements.group.value.length){
      const{dispatch, authedUser, questions} = this.props;
      let option = e.target.elements.group.value;
      // console.log('props:', '\ndispatch = ', dispatch, '\nauth = ', authedUser, '\nquestions: ', questions);
      let question='';
       for(let i =0; i<= Object.keys(questions).length-1; i++) {
        // console.log('check', typeof(q.id), typeof((Object.keys(questions)[i])), '\n objy: ', Object.keys(questions)[i], '\n q.id: ', q.id, '\n loop: ',i );

         if (q.id === Object.keys(questions)[i]){
          question = questions[Object.keys(questions)[i]];
          break;
         }
      }
      console.log('omgquestions', questions, '\nqid' , question.id, '\noption ',  option );
      dispatch(handleAddQuestionAnswer(question.id, option));


    }
   
  }
  
  render() {
  let questions = DataAPI.questions['8xf0y6ziyjabvozdd253nd'];
  let users = DataAPI.users['sarahedo'];
  let {unanswered, answered} = this.props;


  function QTabChange(e){
    let unanswered= document.getElementsByClassName('unanswered');
    let answered= document.getElementsByClassName('answered');
    let showQuestions= document.getElementById('show-questions-container');
    let showAnswers= document.getElementById('show-answers-container');




    e.preventDefault();
    if (e.target.className === 'unanswered') { 
      unanswered[0].style.color='black';
      unanswered[0].style['box-shadow']='0px 12px 0px -10px rgb(255, 255, 255), 0px 0px 0px 0px #FFFFFF, 0px 5px 10px -10px #ffffff, 0px 5px 10px -10px #FFFFFF,  0px 2px  #020405, 2px 2px 4px 2px rgba(255, 5, 5, 0)';
      answered[0].style.color='#b9b9b9';
      answered[0].style['box-shadow']='0px 12px 0px -10px rgb(255, 255, 255), 0px 0px 0px 0px #FFFFFF, 0px 5px 10px -10px #ffffff, 0px 5px 10px -10px #FFFFFF,  0px 2px  #f3f3f3, 2px 2px 4px 2px rgba(255, 5, 5, 0)';
      showQuestions.style['animation']= 'fadein 3s';
      showQuestions.style['display']= 'block';
      showAnswers.style['animation']= 'fadeout 3s';
      showAnswers.style['display']= 'none';

    }
    else if (e.target.className === 'answered') {
      answered[0].style.color='black';
      answered[0].style['box-shadow']='0px 12px 0px -10px rgb(255, 255, 255), 0px 0px 0px 0px #FFFFFF, 0px 5px 10px -10px #ffffff, 0px 5px 10px -10px #FFFFFF,  0px 2px  #020405, 2px 2px 4px 2px rgba(255, 5, 5, 0)';
      unanswered[0].style.color='#b9b9b9';
      unanswered[0].style['box-shadow']='0px 12px 0px -10px rgb(255, 255, 255), 0px 0px 0px 0px #FFFFFF, 0px 5px 10px -10px #ffffff, 0px 5px 10px -10px #FFFFFF,  0px 2px  #f3f3f3, 2px 2px 4px 2px rgba(255, 5, 5, 0)';
      showAnswers.style['animation']= 'fadein 3s';
      showAnswers.style['display']= 'block';
      showQuestions.style['animation']= 'fadeOut 3s';
      showQuestions.style['display']= 'none';
    }

  }
  
  function viewQuestion(e,i){

    let questionHeaders = document.getElementById('show-questions-container').querySelectorAll(`.p-title`);
    let userImgs = document.getElementById('show-questions-container').querySelectorAll(`.question-card-img`);
    let questions = document.getElementById('show-questions-container').querySelectorAll(`.question`);
    let questionCards = document.getElementById('show-questions-container').querySelectorAll(`.question-card`);
    let showQuestions = document.getElementById('show-questions-container').querySelectorAll(`.p-question`);
    let hidePreviews = document.getElementById('show-questions-container').querySelectorAll(`.answer-form`);
    let showViewBtns= document.getElementById('show-questions-container').querySelectorAll(`.p-question-btn`);
    let sideLineBreakQs = document.getElementById('show-questions-container').querySelectorAll(`.side-line-break`);

    Object.keys(questionCards).forEach((i) => {
      userImgs[i].style['animation'] = 'img-shrink 1.5s ease';
      userImgs[i].style['width'] = '115px';
      userImgs[i].style['height'] = '115px';
      userImgs[i].style['border'] = 'groove 2px #b9b9b9'; 
      questions[i].style['width']= 'calc(532px - 168px)';

      questionCards[i].style['border'] = 'solid 2px #f3f3f3'; 
      sideLineBreakQs[i].style['border'] = '1.5px solid #f3f3f3';
      sideLineBreakQs[i].style['background-color'] = '#f3f3f3';


      hidePreviews[i].style['animation'] = hidePreviews[i].style['animation'].includes('fadein') 
      ? 'fadeout 1s ease' 
      : ''; 

      hidePreviews[i].style['display'] = 'none';
      
      questionHeaders[i].style['animation'] = questionHeaders[i].style['animation'].includes('q-text-growth') 
      ? 'q-text-shrink 1s' 
      : ''; 

      questionHeaders[i].style['font-size'] = '16px';
      questionHeaders[i].style['padding-bottom'] = '1%';
      questionHeaders[i].style['padding-left'] = '0px';
      
      showQuestions[i].style['animation'] = showQuestions[i].style['animation'].includes('fadeOut') 
      ? 'fadein 1s' 
      : ''; 

      showViewBtns[i].style['animation'] = showQuestions[i].style['animation'].includes('fadeOut') 
      ? 'fadein 2s' 
      : ''; 

      showViewBtns[i].style['display'] = 'block'; 
      showQuestions[i].style['display'] = 'block'; 

      
      
    });

    let hidePreview= document.getElementById('show-questions-container').querySelector(`#p-question-${i}`);
    let showQuestion= document.getElementById('show-questions-container').querySelector(`#form-${i}`);
    let hideViewBtn= document.getElementById('show-questions-container').querySelector(`#viewBtn-${i}`);
    let question = document.getElementById('show-questions-container').querySelector(`#question-${i}`);
    let questionHeader = document.getElementById('show-questions-container').querySelector(`#p-title-${i}`);
    let userImg = document.getElementById('show-questions-container').querySelector(`#question-card-img-${i}`);
    let questionCard = document.getElementById('show-questions-container').querySelector(`#question-card-${i}`);
    let sideLineBreakQ = document.getElementById('show-questions-container').querySelector(`#side-line-break-q-${i}`);

    question.style['width']= 'calc(532px - 188px)';

    questionCard.style['border'] = 'inset 2px #1C6EA4'; 

    userImg.style['animation'] = 'img-growth 1.5s ease';
    userImg.style['width'] = '130px';
    userImg.style['height'] = '130px';
    userImg.style['border'] = 'inset 3px #1C6EA4';

    sideLineBreakQ.style['border'] = '1.2px inset #000000';
    sideLineBreakQ.style['background-color'] = '#0D3550';

  
    hidePreview.style['animation'] = 'fadeOut 1s';
    hideViewBtn.style['animation'] = 'fadeOut 1s';
    hidePreview.style.display='none';
    hideViewBtn.style.display='none';

    questionHeader.style['animation'] = 'q-textgrowth 1s';
    questionHeader.style['font-size'] = '24px';
    questionHeader.style['padding-bottom'] = '5px';
    questionHeader.style['padding-left'] = '55px';

    showQuestion.style['animation'] = 'fadein 1s';
    showQuestion.style.display='inline-block';
  }

  function viewAnswer(e, i, q){

    let questionHeaders = document.getElementById('show-answers-container').querySelectorAll(`.p-title`);
    let userImgs = document.getElementById('show-answers-container').querySelectorAll(`.question-card-img`);
    let questions = document.getElementById('show-answers-container').querySelectorAll(`.question`);
    let questionCards = document.getElementById('show-answers-container').querySelectorAll(`.question-card`);
    let showQuestions = document.getElementById('show-answers-container').querySelectorAll(`.p-question`);
    let showViewBtns= document.getElementById('show-answers-container').querySelectorAll(`.p-question-btn`);
    let yourVotes= document.getElementById('show-answers-container').querySelectorAll(`.your-vote`);
    let othersVotes= document.getElementById('show-answers-container').querySelectorAll(`.others-vote`);
    let sideLineBreaks= document.getElementById('show-answers-container').querySelectorAll(`.side-line-break`);
    // let percentageBars= document.getElementById('show-answers-container').querySelectorAll(`.p-percentage`);





    Object.keys(questionCards).forEach((i) => {
      userImgs[i].style['animation'] = 'img-shrink 1.5s ease';
      userImgs[i].style['width'] = '115px';
      userImgs[i].style['height'] = '115px';
      userImgs[i].style['border'] = 'groove 2px #b9b9b9'; 
      userImgs[i].style['margin-top'] = '20px'; 

    // percentageBars[i].style['width']='0%'
    yourVotes[i].style['display'] ='none';
    othersVotes[i].style['display'] ='none';

    sideLineBreaks[i].style['height']= '115px';
    
    
    console.log(sideLineBreaks[i].style['animation'].includes('side-line-break-growth') );

    sideLineBreaks[i].style['animation'] = sideLineBreaks[i].style['animation'].includes('side-line-break-growth') 
    ? 'side-line-break-shrink 1.5s ease' 
    : ''; 


    questions[i].style['width']= 'calc(532px - 168px)';

    questionCards[i].style['border'] = 'solid 2px #f3f3f3'; 


    
    questionHeaders[i].style['animation'] = 'q-text-shrink 1s';
    questionHeaders[i].textContent = 'Would You Rather';
    questionHeaders[i].style['font-size'] = '16px';
    questionHeaders[i].style['padding-bottom'] = '1%';
    questionHeaders[i].style['padding-left'] = '0px';
    
    showQuestions[i].style['animation'] = 'fadein 1s'; 
    showViewBtns[i].style['animation'] = 'fadein 2s'; 
    showViewBtns[i].style['display'] = 'block'; 
    showQuestions[i].style['display'] = 'block'; 


  });

    let hidePreview= document.getElementById('show-answers-container').querySelector(`#p-answer-${i}`);
    let hideViewBtn= document.getElementById('show-answers-container').querySelector(`#viewBtn-answer-${i}`);
    let question = document.getElementById('show-answers-container').querySelector(`#answer-${i}`);
    let questionHeader = document.getElementById('show-answers-container').querySelector(`#p-title-answer-${i}`);
    let userImg = document.getElementById('show-answers-container').querySelector(`#answer-card-img-${i}`);
    let questionCard = document.getElementById('show-answers-container').querySelector(`#answer-card-${i}`);
    let yourVote = document.getElementById('show-answers-container').querySelector(`#your-vote-${i}`);
    let othersVote = document.getElementById('show-answers-container').querySelector(`#others-vote-${i}`);
    let sideLineBreak = document.getElementById('show-answers-container').querySelector(`#side-line-break-${i}`);
    let percentageBarSelf = document.getElementById('show-answers-container').querySelector(`#p-percentage-self-${i}`);
    let percentageBarOther = document.getElementById('show-answers-container').querySelector(`#p-percentage-other-${i}`);
    let voteImg = document.getElementById('show-answers-container').querySelector(`#vote-img-${i}`);
    



    sideLineBreak.style['height']= '310px';
    sideLineBreak.style['animation']= 'side-line-break-growth 1.5s ease'; 
    


    question.style['width']= 'calc(532px - 188px)';

    questionCard.style['border'] = 'inset 2px #1C6EA4'; 

    userImg.style['animation'] = 'img-growth 1.5s ease';
    userImg.style['width'] = '130px';
    userImg.style['height'] = '130px';
    userImg.style['margin-top'] = '110px';
    userImg.style['border'] = 'inset 3px #1C6EA4';


    hidePreview.style['animation'] = 'fadeOut 1s';
    hideViewBtn.style['animation'] = 'fadeOut 1s';
    hidePreview.style.display='none';
    hideViewBtn.style.display='none';

    questionHeader.style['animation'] = 'a-textgrowth 1s';
    questionHeader.textContent = 'Results: ';
    questionHeader.style['font-size'] = '24px';
    questionHeader.style['padding-bottom'] = '5px';
    questionHeader.style['padding-left'] = '110px';

    voteImg.style['animation']='vote-img-growth 2s'

    percentageBarSelf.style['width']=`${findPercentage(q,'self')}%`
    percentageBarOther.style['width']=`${findPercentage(q,'other') ==='0' ? '10' : findPercentage(q,'other') }%`


    yourVote.style['animation'] = 'display 1s';
    othersVote.style['animation'] = 'display 1s';
    yourVote.style['display'] = 'block';
    othersVote.style['display'] = 'block';

  }

  function getMax(question){
    let optOneLen = question.optionOne.votes.length >0 ? question.optionOne.votes.length : 0;
    let optTwoLen = question.optionTwo.votes.length >0 ? question.optionTwo.votes.length : 0;

    return Math.max(optOneLen , optTwoLen); 
  }

  function getMin(question){
    let optOneLen = question.optionOne.votes.length >0 ? question.optionOne.votes.length : 0;
    let optTwoLen = question.optionTwo.votes.length >0 ? question.optionTwo.votes.length : 0;

    return Math.min(optOneLen , optTwoLen); 
  }

  function getTotal(question){
    return getMin(question) + getMax(question)
  }

  function findPercentage(question, who){

    let max=getMax(question);
    let min=getMin(question);

      let result = who ==='self' 
      ? 
      (min ===0 ? '100' : ((max/(max+min))*100).toFixed(1)) 
      : 
    (min ===0 ? '0' : ((min/(max+min))*100).toFixed(1));  
      
      return result;
  }

  return (
    <div className='question-table'>
      <div className='button-container'>
        <div onClick={(event) => QTabChange(event)} className='unanswered'>
          Unanswered Questions
        </div>

        <div onClick={(event) => QTabChange(event)} className='answered'>
            Answered Questions
            
        </div>
      </div>

      <span id='show-questions-container'>
        {unanswered.map((x, i) =>(
        <div className='question-card' id = {`question-card-${unanswered[i].uId}`} >
          <div className='who'>
            <p>  {unanswered[i].user.name} asks:</p>
          </div>
          
          <div className='question-card-body'>
            <img className ='question-card-img' src={unanswered[i].user.avatarURL } alt="Portfolio" id ={`question-card-img-${unanswered[i].uId}`} />  

            <div className='side-line-break' id={`side-line-break-q-${unanswered[i].uId}`}/>
          
            <div className='question' id ={`question-${unanswered[i].uId}`}>
              <p className='p-title' id ={`p-title-${unanswered[i].uId}`}> Would You Rather </p>
              <p className='p-question' id ={`p-question-${unanswered[i].uId}`}> ...{unanswered[i].optionOne.text.substring(0,20)}...</p>
              <button id ={`viewBtn-${unanswered[i].uId}`} onClick= {(event) => viewQuestion(event, unanswered[i].uId)} className='p-question-btn'> View Full </button>
              
              <form onSubmit={(event) => this.handleAnswer(event, unanswered[i])} id ={`form-${unanswered[i].uId}`} class='answer-form'>

                  <fieldset>

                    <label for="optionOne">
                      <input className='radioBtn' id = "optionOne" type="radio" name="group" value="optionOne" />
                      <span>{unanswered[i].optionOne.text.trim()}</span>
                    </label>
                    <label for="optionTwo">
                      <input className='radioBtn' id = "optionTwo" type="radio" name="group" value="optionTwo"/>
                      <span> {unanswered[i].optionTwo.text.trim()}</span>
                    </label>
                    <input className='submit-answer' type="submit" value="Submit"/>
                </fieldset>
                  
              </form>

            </div>
          </div>
        </div>
          ))}
      </span>

      <span id='show-answers-container'>
        {answered.map((x, i) =>(
        <div className='question-card' id = {`answer-card-${answered[i].uId}`} >
          <div className='who'>
            <p>  {answered[i].user.name} asks:</p>
          </div>
          
          <div className='question-card-body'>
            <img className ='question-card-img' src={answered[i].user.avatarURL } alt="Portfolio" id ={`answer-card-img-${answered[i].uId}`} />  
            <div className='side-line-break' id={`side-line-break-${answered[i].uId}`}/>
            <div className='question' id ={`answer-${answered[i].uId}`}>
              <p className='p-title' id ={`p-title-answer-${answered[i].uId}`}> Would You Rather </p>
              <p className='p-question' id ={`p-answer-${answered[i].uId}`}> ...{answered[i].optionOne.text.substring(0,20)}...</p>
              <button id ={`viewBtn-answer-${answered[i].uId}`} onClick= {(event) => viewAnswer(event, answered[i].uId, answered[i])} className='p-question-btn'> View Full </button>
              <div className='your-vote' id={`your-vote-${answered[i].uId}`}>
                <img className='vote-img' id={`vote-img-${answered[i].uId}`} src={vote} alt="vote" />
                <p className='p-wyr'>
                  {`Would you rather ${answered[i].optionOne.text.trim()} ?`}
                </p>
                <div className='percentage-bar'>
                  <p className={`p-percentage`} id={`p-percentage-self-${answered[i].uId}`}>
                    {`${findPercentage(answered[i], 'self')}%`}
                  </p>
                </div>
                <p className={`p-min-max`}>
                  {`${getMax(answered[i])} out of ${getTotal(answered[i])} votes`}
                </p>
              </div>

              <div className='others-vote' id={`others-vote-${answered[i].uId}`}>
                <p className='p-wyr'>
                {`Would you rather ${answered[i].optionTwo.text.trim()} ?`}
                </p>
                <div className='percentage-bar'>
                  <p className={`p-percentage`} id={`p-percentage-other-${answered[i].uId}`}>
                    {`${findPercentage(answered[i], 'other')}%`}
                  </p>
                </div>
                <p className={`p-min-max`}>
                  {`${getMin(answered[i])} out of ${getTotal(answered[i])} votes`}
                </p>
              </div>
         

            </div>
          </div>
        </div>
          ))}
      </span>
 
    </div>



  )
  }
}


function mapStateToProps ({ questions, users, authedUser }) {
  console.log('PROPS:\n', 'Q: ' , questions, '\nU:', users, '\n auth: ', authedUser)
  let formattedQuestions= [];
  for( let i =0; i<= Object.keys(questions).length-1; i++){
    if (questions[Object.keys(questions)[i]]!== undefined ){
      formattedQuestions.push({...questions[Object.keys(questions)[i]]});
    }
  }
  
  console.log('www', formattedQuestions );

  let sortedQ = formattedQuestions.sort((a,b) => a.timestamp < b.timestamp ? 1: -1);
  // console.log('\n sorted', sortedQ);
  // sortedQ = sortedQ.map((x,i) => {return formattedQuestions[sortedQ[i]]});
  // console.log('\n sorted again', sortedQ);

  sortedQ.forEach((x,i) => {
    // console.log('\n author: ', sortedQ[i].author)
    Object.keys(users).forEach((value, index) => {
      // console.log('\n users: ', users[value])

      if (sortedQ[i].author === users[value].id){
          sortedQ[i] =
          {
            ...sortedQ[i],
            user: users[value],
            uId: (sortedQ[i].timestamp.toString() + sortedQ[i].id)
          }
      }
    });
  });
  console.log('\n sortedQ sorted a third time: ', sortedQ)


  let unanswered = Object.keys(sortedQ).map((x,i) => {
    // console.log('\n sortedQ ', sortedQ[i].user.id, '\nua: ' ,users[authedUser].answers, '\ncheck: ', (sortedQ[i].id in users[authedUser].answers));

    if (!(sortedQ[i].id in users[authedUser].answers))
      return sortedQ[i];
      
  });
  unanswered = unanswered.filter((value, index) => {
    // console.log('filer: ', unanswered[index], unanswered[index] !== undefined)
    return unanswered[index] !== undefined;

  });
  console.log('\n unanswered ', unanswered)

  let answered = Object.keys(sortedQ).map((x,i) => {
    // console.log('\n sortedQ i username: ', sortedQ[i].user.name , 'authuser: ' , authedUser);

    if (sortedQ[i].id in users[authedUser].answers)
      return sortedQ[i];
  });
  answered= answered.filter((value, index) => {
    return answered[index] !== undefined;

  });
  console.log('\n answered ', answered)


  return {
    questions,
    users,
    sortedQ: sortedQ,
    authedUser,
    unanswered: unanswered,
    answered: answered
}
}
export default withRouter(connect(mapStateToProps)(Dashboard))