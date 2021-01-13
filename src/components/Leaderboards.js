import * as DataAPI from '../utils/_DATA';




export default function Leaderboards () {

    let users = DataAPI.users['sarahedo'];

      

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

