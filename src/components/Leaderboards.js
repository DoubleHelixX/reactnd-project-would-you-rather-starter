import * as DataAPI from '../utils/_DATA'





export default function Leaderboards () {
    let questions = DataAPI.questions['8xf0y6ziyjabvozdd253nd'];
    let users = DataAPI.users['sarahedo'];
    return (
      <div className='leaderboards-container' >
          
        <div className = 'l-card'>
            <img className='l-img' src ={users.avatarURL } alt='leaderboard-user-avatar'>
            </img>
            <div className='l-body'>
                <p className='l-user'></p>
                <p className='l-answered'></p>
                <p className='l-created'></p>

            </div>
            <div className='l-score-card'>
                <p className='l-header'>

                </p>
                <p className='l-tally' >
                    
                </p>
            </div>


        </div>
  
      </div>
      
    )
  }

