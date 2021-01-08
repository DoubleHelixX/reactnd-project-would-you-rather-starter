
export default function NewQuestion () {

  return (
    <div className='new-question-container'>
        <h1 className='n-q-c-header'>
            Create New Question
        </h1>
        
        <p className='n-q-c-hint'>
            Complete the question below:
        </p>

        <h2 className='n-q-c-phrase'>
            Would you Rather ..
        </h2>
        <form className='n-q-c-form'>
            <input className='n-q-c-Q1' placeholder='Enter Option One Here'>
            
            </input>
            <h4 className='n-q-c-hr'>OR</h4> 
            <input className='n-q-c-Q2' placeholder='Enter Option Two Here'> 
            
            </input>

            <input className='n-q-c-submit' type='submit' value='Submit'>


            </input>
        </form>


    </div>
    
  )
}