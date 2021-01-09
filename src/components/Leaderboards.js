import * as DataAPI from '../utils/_DATA';
import first from "../images/first-place.png";
import second from "../images/second-place.png";
import third from "../images/third-place.png";



export default function Leaderboards () {
    let questions = DataAPI.questions['8xf0y6ziyjabvozdd253nd'];
    let users = DataAPI.users['sarahedo'];
    let lImgs = document.querySelectorAll(`.l-img-prize`);

    // Object.keys(lImgs).map((i) => {
    // // console.log('asdas', lCards[i].style['border']);

    //  switch(i){

    //   case '0':  
    //     lImgs[i].src=first;
    //     lImgs[i].style['display']='inline-block';
    //     break;

    //   case '1':
    //     lImgs[i].src=second;
    //     lImgs[i].style['display']='inline-block';
    //     break;

    //   case '2':
    //     lImgs[i].src=third;
    //     lImgs[i].style['display']='inline-block';
    //     break;

    //   default:
    //     lImgs[i].src='';
    //     lImgs[i].style['display']='none';
    //     break;

    //  }
    // });
      

    return (
      <div className='leaderboards-container' >
        {[...Array(20)].map((x, i) =>(  
        <div className = 'l-card' key={`l-card-${i}`} attr ={users.id}>
            <img className='l-img' src ={users.avatarURL } alt='leaderboard-user-avatar' key={`l-img-${i}`}/>

            <img className='l-img-prize'  alt='leaderboard-user-prize' key={`l-img-prize-${i}`}/>
            <div className='side-line-break'/>

            <span className='l-body'>
                <h2 className='l-user'> {users.name}</h2>
                <span className='l-answered'>
                  <p className='l-answered-left'>Answered Questions:</p>
                  <p className='l-answered-right'>{Object.keys(users.answers).length === undefined ? 0 : Object.keys(users.answers).length}</p>
                </span>
                <hr/>
                <span className='l-created'> 
                  <p className='l-created-left'>Created Questions:</p>
                  <p className='l-created-right'> {Object.keys(users.questions).length === undefined ? 0 : Object.keys(users.questions).length}</p>
                </span>
            </span>
            <div className='side-line-break'/>

            <div className='l-score-card'>
                <p className='l-header'>
                  Score
                </p>
                <p className='l-tally' >
                {(Object.keys(users.questions).length === undefined ? 0 : Object.keys(users.questions).length) +
                 (Object.keys(users.answers).length === undefined ? 0 : Object.keys(users.answers).length)}
                </p>
            </div>


        </div>
        ))}
      </div>
      
    )
  }

