import * as DataAPI from '../utils/_DATA'



export default function dashboard () {
  let questions = DataAPI.questions['8xf0y6ziyjabvozdd253nd'];
  let users = DataAPI.users['sarahedo'];
  let max =0;
  let min =0;


  console.log('Questions ' , questions, '\n', 'Users: ', users);

 
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
      showQuestions.style['display']= 'block';
      showAnswers.style['display']= 'none';

    }
    else if (e.target.className === 'answered') {
      answered[0].style.color='black';
      answered[0].style['box-shadow']='0px 12px 0px -10px rgb(255, 255, 255), 0px 0px 0px 0px #FFFFFF, 0px 5px 10px -10px #ffffff, 0px 5px 10px -10px #FFFFFF,  0px 2px  #020405, 2px 2px 4px 2px rgba(255, 5, 5, 0)';
      unanswered[0].style.color='#b9b9b9';
      unanswered[0].style['box-shadow']='0px 12px 0px -10px rgb(255, 255, 255), 0px 0px 0px 0px #FFFFFF, 0px 5px 10px -10px #ffffff, 0px 5px 10px -10px #FFFFFF,  0px 2px  #f3f3f3, 2px 2px 4px 2px rgba(255, 5, 5, 0)';
      showAnswers.style['display']= 'block';
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


    Object.keys(questionCards).map((i) => {
      userImgs[i].style['animation'] = 'img-shrink 1.5s ease';
      userImgs[i].style['width'] = '115px';
      userImgs[i].style['height'] = '115px';
      userImgs[i].style['border'] = 'solid 2px #b9b9b9'; 
      questions[i].style['width']= 'calc(532px - 168px)';

      questionCards[i].style['border'] = 'solid 2px #f3f3f3'; 

      hidePreviews[i].style['animation'] = 'fadeout 1s'; 
      hidePreviews[i].style['display'] = 'none';
      
      questionHeaders[i].style['animation'] = 'q-text-shrink 1s';
      questionHeaders[i].style['font-size'] = '16px';
      questionHeaders[i].style['padding-bottom'] = '1%';
      questionHeaders[i].style['padding-left'] = '0px';
      
      showQuestions[i].style['animation'] = 'fadein 1s'; 
      showViewBtns[i].style['animation'] = 'fadein 2s'; 
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

    question.style['width']= 'calc(532px - 188px)';

    questionCard.style['border'] = 'inset 2px #1C6EA4'; 

    userImg.style['animation'] = 'img-growth 1.5s ease';
    userImg.style['width'] = '130px';
    userImg.style['height'] = '130px';
    userImg.style['border'] = 'inset 3px #1C6EA4';

  
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


function viewAnswer(e,i){

  let questionHeaders = document.getElementById('show-answers-container').querySelectorAll(`.p-title`);
  let userImgs = document.getElementById('show-answers-container').querySelectorAll(`.question-card-img`);
  let questions = document.getElementById('show-answers-container').querySelectorAll(`.question`);
  let questionCards = document.getElementById('show-answers-container').querySelectorAll(`.question-card`);
  let showQuestions = document.getElementById('show-answers-container').querySelectorAll(`.p-question`);
  let showViewBtns= document.getElementById('show-answers-container').querySelectorAll(`.p-question-btn`);


  Object.keys(questionCards).map((i) => {
    userImgs[i].style['animation'] = 'img-shrink 1.5s ease';
    userImgs[i].style['width'] = '115px';
    userImgs[i].style['height'] = '115px';
    userImgs[i].style['border'] = 'solid 2px #b9b9b9'; 
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

  question.style['width']= 'calc(532px - 188px)';

  questionCard.style['border'] = 'inset 2px #1C6EA4'; 

  userImg.style['animation'] = 'img-growth 1.5s ease';
  userImg.style['width'] = '130px';
  userImg.style['height'] = '130px';
  userImg.style['border'] = 'inset 3px #1C6EA4';


  hidePreview.style['animation'] = 'fadeOut 1s';
  hideViewBtn.style['animation'] = 'fadeOut 1s';
  hidePreview.style.display='none';
  hideViewBtn.style.display='none';

  questionHeader.style['animation'] = 'a-textgrowth 1s';
  questionHeader.textContent = 'Results: ';
  questionHeader.style['font-size'] = '24px';
  questionHeader.style['padding-bottom'] = '5px';
  questionHeader.style['padding-left'] = '100px';

}
 
function findPercentage(question, who){
  let optOneLen = question.optionOne.votes.length >0 ? question.optionOne.votes.length : 0;
  let optTwoLen = question.optionTwo.votes.length >0 ? question.optionTwo.votes.length : 0;

  max = Math.max(optOneLen , optTwoLen); 
  min = Math.min(optOneLen , optTwoLen); 
  // max=2;
  // min=1;

  let result = who ==='self' 
  ? 
  (min ===0 ? '100%' : ((max/(max+min))*100).toFixed(1) + '%') 
  : 
 (min ===0 ? '0%' : ((min/(max+min))*100).toFixed(1) + '%');  
   
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
        {[...Array(20)].map((x, i) =>(
        <div className='question-card' id = {`question-card-${i}`} >
          <div className='who'>
            <p>  {users.name} asks:</p>
          </div>
          
          <div className='question-card-body'>
            <img className ='question-card-img' src={users.avatarURL } alt="Portfolio" id ={`question-card-img-${i}`} />  

            <div className='side-line-break'/>
          
            <div className='question' id ={`question-${i}`}>
              <p className='p-title' id ={`p-title-${i}`}> Would You Rather </p>
              <p className='p-question' id ={`p-question-${i}`}> ...{questions.optionOne.text.substring(0,15)}...</p>
              <button id ={`viewBtn-${i}`} onClick= {(event) => viewQuestion(event, i)} className='p-question-btn'> View Full </button>
              
              <form id ={`form-${i}`} class='answer-form'>

                  <fieldset>

                    <label for="def"><input  id = "optionOne" type="radio" name="group" value="one" />
                    {questions.optionOne.text}
                      </label>
                    <label for="maybe"><input  id = "optionTwo" type="radio" name="group" value="two"/>
                    {questions.optionTwo.text}</label>
                    <input className='submit-answer' type="submit" value="Submit"/>
                </fieldset>
                  
              </form>

            </div>
          </div>
        </div>
          ))}
      </span>

      <span id='show-answers-container'>
        {[...Array(4)].map((x, i) =>(
        <div className='question-card' id = {`answer-card-${i}`} >
          <div className='who'>
            <p>  {users.name} asks:</p>
          </div>
          
          <div className='question-card-body'>
            <img className ='question-card-img' src={users.avatarURL } alt="Portfolio" id ={`answer-card-img-${i}`} />  
            <div className='side-line-break'/>
            <div className='question' id ={`answer-${i}`}>
              <p className='p-title' id ={`p-title-answer-${i}`}> Would You Rather </p>
              <p className='p-question' id ={`p-answer-${i}`}> ...{questions.optionOne.text.substring(0,15)}...</p>
              <button id ={`viewBtn-answer-${i}`} onClick= {(event) => viewAnswer(event, i)} className='p-question-btn'> View Full </button>
              <div className='your-vote'>
                <p>
                  {questions.optionOne.text}
                </p>
                <div className='percentage-bar'>
                  <p>
                    {findPercentage(questions, 'self')}
                  </p>
                </div>
                <p>
                  {`${max} out of ${max+min} votes`}
                </p>
              </div>

              <div className='others-vote'>
                <p>
                  {questions.optionTwo.text}
                </p>
                <div className='percentage-bar'>
                  <p>
                    {findPercentage(questions, 'other')}
                  </p>
                </div>
                <p>
                  {`${min} out of ${max+min} votes`}
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