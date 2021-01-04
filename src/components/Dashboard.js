import * as DataAPI from '../utils/_DATA'



export default function dashboard () {

  let unanswered= document.getElementsByClassName('unanswered');
  let answered= document.getElementsByClassName('answered');
  let questions = DataAPI.questions['8xf0y6ziyjabvozdd253nd'];
  let users = DataAPI.users['sarahedo'];





 
  function QTabChange(e){

    e.preventDefault();
    if (e.target.className === 'unanswered') { 
      unanswered[0].style.color='black';
      unanswered[0].style['box-shadow']='0px 12px 0px -10px rgb(255, 255, 255), 0px 0px 0px 0px #FFFFFF, 0px 5px 10px -10px #ffffff, 0px 5px 10px -10px #FFFFFF,  0px 2px  #020405, 2px 2px 4px 2px rgba(255, 5, 5, 0)';
      answered[0].style.color='#b9b9b9';
      answered[0].style['box-shadow']='0px 12px 0px -10px rgb(255, 255, 255), 0px 0px 0px 0px #FFFFFF, 0px 5px 10px -10px #ffffff, 0px 5px 10px -10px #FFFFFF,  0px 2px  #f3f3f3, 2px 2px 4px 2px rgba(255, 5, 5, 0)';
      
    }
    else if (e.target.className === 'answered') {
      answered[0].style.color='black';
      answered[0].style['box-shadow']='0px 12px 0px -10px rgb(255, 255, 255), 0px 0px 0px 0px #FFFFFF, 0px 5px 10px -10px #ffffff, 0px 5px 10px -10px #FFFFFF,  0px 2px  #020405, 2px 2px 4px 2px rgba(255, 5, 5, 0)';
      unanswered[0].style.color='#b9b9b9';
      unanswered[0].style['box-shadow']='0px 12px 0px -10px rgb(255, 255, 255), 0px 0px 0px 0px #FFFFFF, 0px 5px 10px -10px #ffffff, 0px 5px 10px -10px #FFFFFF,  0px 2px  #f3f3f3, 2px 2px 4px 2px rgba(255, 5, 5, 0)';
      
    }

  }
  
  console.log('Questions ' , questions, '\n', 'Users: ', users);
  function viewQuestion(e,i){

    let questionHeaders = document.getElementsByClassName(`p-title`);
    let userImgs = document.getElementsByClassName(`question-card-img`);
    let questions = document.getElementsByClassName(`question`);
    let questionCards = document.getElementsByClassName(`question-card`);
    let showQuestions = document.getElementsByClassName(`p-question`);
    let hidePreviews = document.getElementsByClassName(`answer-form`);
    let showViewBtns= document.getElementsByClassName(`p-question-btn`);


    Object.keys(questionCards).map((i) => {
      userImgs[i].style['animation'] = 'img-shrink 1.5s ease';
      userImgs[i].style['width'] = '115px';
      userImgs[i].style['height'] = '115px';
      userImgs[i].style['border'] = 'solid 2px #b9b9b9'; 
      questions[i].style['width']= 'calc(532px - 168px)';

      questionCards[i].style['border'] = 'solid 2px #f3f3f3'; 

      hidePreviews[i].style['animation'] = 'fadeout 1s'; 
      hidePreviews[i].style['display'] = 'none'; 
      showQuestions[i].style['animation'] = 'fadein 1s'; 
      showViewBtns[i].style['animation'] = 'fadein 2s'; 
      showViewBtns[i].style['display'] = 'block'; 
      showQuestions[i].style['display'] = 'block'; 


    });

   


    let hidePreview= document.getElementById(`p-question-${i}`);
    let showQuestion= document.getElementById(`form-${i}`);
    let hideViewBtn= document.getElementById(`viewBtn-${i}`);
    let question = document.getElementById(`question-${i}`);
    let questionHeader = document.getElementById(`p-title-${i}`);
    let userImg = document.getElementById(`question-card-img-${i}`);
    let questionCard = document.getElementById(`question-card-${i}`);




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
      {[...Array(20)].map((x, i) =>(
      
      <div className='question-card' id = {`question-card-${i}`} >
        <div className='who'>
          <p>  {users.name} asks:</p>
        </div>
        
        <div className='question-card-body'>
          <img className ='question-card-img' src={users.avatarURL } alt="Portfolio" id ={`question-card-img-${i}`} />  

          <div className='side-line-break'>
            
            </div>  
        
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
      
      
      
      
      
      
      
      {/* <div className='question-card'>
        <div className='who'>
          <p>  {users.name} asks:</p>
        </div>
        
        <img />     
          
        <div className='question'>
        </div>
      </div>

      <div className='question-card'>
        <div className='who'>
          <p>  {users.name} asks:</p>
        </div>
        
        <img />     
          
        <div className='question'>
        
        </div>
      </div> */}
    </div>



  )
}