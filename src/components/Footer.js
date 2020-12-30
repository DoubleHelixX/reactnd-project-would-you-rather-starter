import { LinkedInIcon1, LinkedInIcon2, LinkedInIcon3} from '../utils/Constants'

export default function Footer () {
// console.log('asdasd',linkedInIcon1)

  return (
    <div className='footer'>
       <ul >
       <li><LinkedInIcon1/></li>
        <li><LinkedInIcon2/></li>
        <li><LinkedInIcon3/></li>
       </ul>

      <span className='footer-copyright'>
            <hr className='footer-hr'/>

           &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com">  Tommy.com</a>
          
     </span>

    </div>
  )
}