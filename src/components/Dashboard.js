
export default function dashboard () {
  let unanswered= document.getElementsByClassName('unanswered');
  let answered= document.getElementsByClassName('answered');

  function QTabChange(e){

    e.preventDefault();
    if (e.target.className === 'unanswered') { 
      unanswered[0].style.color='rgb(255, 255, 255)';
      unanswered[0].style['text-shadow']='2px 2px 0 #000000, 2px -2px 0 #000000, -2px 2px 0 #000000, -2px -2px 0 #000000, 2px 0px 0 #000000, 0px 2px 0 #000000, -2px 0px 0 #000000, 0px -2px 0 #000000'
      answered[0].style.color='black';
      answered[0].style['text-shadow']='none';
    }
    else if (e.target.className === 'answered') {
      answered[0].style.color='rgb(255, 255, 255)';
      answered[0].style['text-shadow']='2px 2px 0 #000000, 2px -2px 0 #000000, -2px 2px 0 #000000, -2px -2px 0 #000000, 2px 0px 0 #000000, 0px 2px 0 #000000, -2px 0px 0 #000000, 0px -2px 0 #000000'
      unanswered[0].style.color='black';
      unanswered[0].style['text-shadow']='none';
    }

  }


  return (
    
    <div className='question-table'>
        <div onClick={(event) => QTabChange(event)} className='unanswered'>
          Unanswered
        </div>

        <div onClick={(event) => QTabChange(event)} className='answered'>
            Answered
        </div>

        <div className='questions'>
            <div className='question'>

                
            </div>
      <div>

      </div>


        </div>
    </div>



  )
}