import React from 'react'

export default function TitleAnimate () {

    let title = document.getElementsByClassName('title-animate');
    let questionMarks = document.getElementsByClassName('question-marks-animate');
    let signature = document.getElementsByClassName('signature-animate');

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
    questionMarks[2].style["moz-animation"]='my-spin 1s '; 
    
    signature[0].style["moz-animation"]='fadein 1s'; 
    signature[0].style["animation"]='fadein 1s'; 
    signature[0].textContent=' (React/Redux App)  Created By: Thomas Rivera '; 
    
    }, 950);

  return (
      
        <div className = "Heading-div"> 
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
