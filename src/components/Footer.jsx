import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import "../styles/Footer.css"

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <InstagramIcon/>
            <LinkedInIcon/>
            <GitHubIcon/>
            <MailOutlineIcon/>
        </div>
        <p> &copy; 2022 rehankabir.com</p>
    </div>
  )
}

export default Footer