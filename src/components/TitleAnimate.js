import * as Constants from '../utils/Constants'


export default function TitleAnimate () {

    let title = document.getElementsByClassName('title-animate');
    let questionMarks = document.getElementsByClassName('question-marks-animate');
    let signature = document.getElementsByClassName('signature-animate');

    console.log('hello', title);
    if (title.length>0)
    { setTimeout(() => { 
            title[0].style["font-size"]='28px'; 
            title[0].style["color"]='rgb(91, 228, 240)'; 
            title[0].style["font-family"]='game-show2'; 

            // questionMarks[0].textContent='¿';
            questionMarks[0].style["font-size"]='28px'; 
            questionMarks[0].style["color"]='rgb(91, 228, 240)'; 
            questionMarks[0].style["font-family"]='game-show'; 
        }, 250);

        setTimeout(() => { 
            title[1].style["font-size"]='28px'; 
            title[1].style["color"]='rgb(252, 107, 87)'; 
            title[1].style["font-family"]='game-show2'; 

            // questionMarks[1].textContent='¿';
            questionMarks[1].style["font-size"]='28px'; 
            questionMarks[1].style["color"]='rgb(252, 107, 87)'; 
            questionMarks[1].style["font-family"]='game-show'; 
        }, 500);
        
        setTimeout(() => { 
        title[2].style["font-size"]='28px'; 
        title[2].style["color"]='rgb(126, 80, 168)'; 
        title[2].style["font-family"]='game-show2'; 

        // questionMarks[2].textContent='¿';
        questionMarks[2].style["color"]='rgb(126, 80, 168)'; 
        questionMarks[2].style["font-family"]='game-show'; 
        questionMarks[2].style["font-size"]='28px'; 
        }, 750);
        
        setTimeout(() => { 
        title[3].style["font-size"]='28px'; 
        title[3].style["color"]='rgb(126, 80, 168)'; 
        title[3].style["font-family"]='game-show';

        // questionMarks[0].textContent='¿';
        // questionMarks[1].textContent='¿';
        // questionMarks[2].textContent='¿';
        questionMarks[0].style["animation"]='my-spin 1s'; 
        questionMarks[0].style["moz-animation"]='my-spin 1s';
        questionMarks[1].style["animation"]='my-spin 1s'; 
        questionMarks[1].style["moz-animation"]='my-spin 1s'; 
        questionMarks[2].style["animation"]='my-spin 1s'; 
        questionMarks[2].style["moz-animation"]='my-spin 1s '; 
        
        signature[0].style["moz-animation"]='fadein 1s'; 
        signature[0].style["animation"]='fadein 1s'; 
        signature[0].textContent=' (React/Redux App)  Created By: Thomas Rivera '; 
        
        }, 950);
    }


    function changeColor(){
        if(title.length>0)
        {
            console.log('yupppppppppppppppppp', Constants.getRandomColor(),  title[0].style["color"])

            title[0].style["color"]=Constants.getRandomColor();
            title[1].style["color"]=Constants.getRandomColor();
            title[2].style["color"]=Constants.getRandomColor();
            title[3].style["color"]= title[2].style["color"];

            questionMarks[0].style["color"]=title[0].style["color"];
            questionMarks[1].style["color"]=title[1].style["color"];
            questionMarks[2].style["color"]=title[2].style["color"];
        }

    }

  return (
      
        <div onClick={(event) => changeColor()}  className = "Heading-div"> 
            <span className='title-animate'>Would </span>
            <span className='title-animate'>you </span>
            <span className='title-animate'>Rat</span>
            <span className='title-animate'>her     </span> 
            <span > </span>

            <span className='question-marks-animate'> ?</span>
            <span className='question-marks-animate'> ?</span>
            <span className='question-marks-animate'> ? </span> 
            <span className = 'signature-animate'> </span>
        </div>



  )
}
