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

      <div className='question-card'>
        <div className='who'>
          <p>  {users.name} asks:</p>
        </div>
        
        {/* <div className='question-card-body'> */}
          <img src={users.avatarURL } alt="Portfolio" />  

          <div className='side-line-break'>
            
            </div>  
        
          <div className='question'>
            <p className='p-title'> Would You Rather </p>
             <p className='p-question'> ...{questions.optionOne.text.substring(0,15)}...</p>
          </div>
        {/* </div> */}

      </div>

      
      
      
      
      
      
      
      <div className='question-card'>
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
      </div>
    </div>



  )
}