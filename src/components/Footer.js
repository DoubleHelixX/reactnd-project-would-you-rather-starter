import { LinkedInIcon1, LinkedInIcon2, LinkedInIcon3, GithubIcon1, websiteIcon1} from '../utils/Constants'


export default function Footer () {
// console.log('asdasd',linkedInIcon1)
  return (
    <div className='footer'>
       <ul >
        <li><a href="https://www.linkedin.com/in/tommy-rivera/" target="_blank"><LinkedInIcon3/> My LinkedIn </a></li>
        <li><a href="https://github.com/DoubleHelixX/reactnd-project-would-you-rather-starter" target="_blank"> <GithubIcon1/>  Github Code </a></li>
        <li style={{width:'110.9px' }}><a href="" target="_blank">{websiteIcon1()}  My Porfolio </a> </li> 
       </ul>

      <span className='footer-copyright'>
            <hr className='footer-hr'/>

           &copy; 2020 Copyright: <a href="" target="_blank">  Tommy-Rivera.com</a> 
            
          
     </span>

    </div>
  )
}