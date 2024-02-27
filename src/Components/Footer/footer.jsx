import React from 'react'

import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import {FaTelegram , FaTwitterSquare} from 'react-icons/fa'
import {FiFacebook,FiInstagram,FiPhoneCall,FiYoutube} from 'react-icons/fi'
import {SiGmail,SiDiscord} from 'react-icons/si'
import { useTranslation } from 'react-i18next';
const Footer = () => {
    const {t,i18n} = useTranslation();
  return (
    <>
    <Box backgroundColor="#d2d6d3" padding={2}>
       <Box textAlign="center" >
            <Typography padding={1} variant='h5'color="#EE685F"> <span>{t('HolidayExpress')}</span> </Typography>
            <hr
               style={{
                background: 'black',
                color: 'black',
                borderColor: 'black',
              
                width : '65%',
                margin : 'auto'

               }}
               />
               <br/>
             <Typography padding={1} variant='h6'> <span><a href = "https://en.wikipedia.org/wiki/Support" style = {{textDecoration:'none', color: 'black'}}>{t('support')}</a></span></Typography> 
             <Typography variant='h6'>
             <span style={{margin:"25px"}}><a href = "#about" style = {{textDecoration:'none', color: 'black'}}>{t('aboutus')}</a></span>
            <span style={{margin:"25px"}}><a href = "#contact" style = {{textDecoration:'none', color: 'black'}}>{t('contactus')}</a></span>
            </Typography>
            <Typography variant='h6' padding={1}> 
            <span style={{margin:"25px"}}><a href = "#legal" style = {{textDecoration:'none', color: 'black'}}>{t('legalstuff')}</a></span>
            <span style={{margin:"25px"}}><a href = "#privacy" style = {{textDecoration:'none', color: 'black'}}>{t('privacypolicy')}</a></span>
            <span style={{margin:"25px"}}><a href = "#security" style = {{textDecoration:'none', color: 'black'}}>{t('security')}</a></span>
               </Typography><br />
               <hr
               style={{
                background: 'black',
                color: 'black',
                borderColor: 'black',
              
                width : '95%',
                margin : 'auto'

               }}
               />
               <br/>
               </Box>
               <Box backgroundColor="#d2d6d3">
               <Typography>
               <Typography padding={1}> 
               <span> {t('copyright')} </span>
               <span style={{float:'right'}}><span  style={{align:'center'}}>{t('connectus')} </span></span>
               </Typography>
                
                </Typography>
                <span style={{float:'right'}} margin='2px'>
               <span >   <a href = "https://www.facebook.com/"><FiFacebook size={25} color="#EE685F"/></a>   </span>
                    <span >   <a href = "https://telegram.org/"><FaTelegram size={25} color="#EE685F"/></a>   </span>
                    
                    <span >   <a href = "https://twitter.com/?lang=en"><FaTwitterSquare size={25} color="#EE685F"/></a>   </span>
                    <span >   <a href = "#phone"><FiPhoneCall size={25} color="#EE685F"/></a>   </span>
                    <span >   <a href = "https://mail.google.com/mail/"><SiGmail size={25} color="#EE685F"/></a>   </span>
                    
                    </span>
                    <br/>
               </Box>
       </Box> 
       
    </>
  )
}

export default Footer ;