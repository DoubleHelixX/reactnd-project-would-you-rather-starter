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
    let hidePreview= document.getElementById(`question-${i}`);
    let showQuestion= document.getElementById(`form-${i}`);
    let hideViewBtn= document.getElementById(`viewBtn-${i}`);
    let questionHeader = document.getElementById(`p-title-${i}`);
    let userImg = document.getElementById(`question-card-img-${i}`);


      userImg.style['width'] = '120px';
      userImg.style['height'] = '120px';

    
      hidePreview.style['animation'] = 'fadeOut 1s';
      hideViewBtn.style['animation'] = 'fadeOut 1s';
      hidePreview.style.display='none';
      hideViewBtn.style.display='none';
      questionHeader.style['animation'] = 'q-textgrowth 1s';
      questionHeader.style['font-size'] = '24px';
      questionHeader.style['padding-bottom'] = '5px';
      questionHeader.style['padding-left'] = '85px';

      showQuestion.style['animation'] = 'fadein 1s';
      showQuestion.style.display='inline-block';
      console.log('asdasas', hidePreview.style['animation'])



      



    







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
      
      <div className='question-card'>
        <div className='who'>
          <p>  {users.name} asks:</p>
        </div>
        
        <div className='question-card-body'>
          <img src={users.avatarURL } alt="Portfolio" id ={`question-card-img-${i}`} />  

          <div className='side-line-break'>
            
            </div>  
        
          <div className='question'>
            <p className='p-title' id ={`p-title-${i}`}> Would You Rather </p>
            <p className='p-question' id ={`question-${i}`}> ...{questions.optionOne.text.substring(0,15)}...</p>
            <button id ={`viewBtn-${i}`} onClick= {(event) => viewQuestion(event, i)} className='p-question-btn'> View Full </button>
             
            <form id ={`form-${i}`} class='answer-form'>

{/* 
                  <input type = "radio"
                        id = "optionOne"
                        checked = "checked" />
                  <label for = "sizeSmall">{questions.optionOne.text}</label>
                  <br/>
                  <input type = "radio"
                        id = "optionTwo"
                        />
                  <label for = "sizeMed">{questions.optionTwo.text}</label>
                  <br/>
                  
                  <input className='submit-answer' type="submit" value="Submit"/>  */}
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