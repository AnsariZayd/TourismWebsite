import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

import "./navbar.css";
import {CgToggleOn,CgToggleOff} from "react-icons/cg"
import { useState , Suspense } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from 'react-i18next';
import { changeLanguage } from "i18next"; 
import { getDirection, getisLangEng, toggleLanguage } from "../../Redux/slice";


const Navbar = () => {
  const isLangEng = useSelector(getisLangEng) ;
  const {t , i18n} = useTranslation() ;
  const dispatch = useDispatch() ;
  const direction = useSelector(getDirection) ;
  
  console.log(isLangEng+"  "+direction) ;  

  

  const changeLang = () => {
    if(isLangEng){
      i18n.changeLanguage('mr');
    }else{
      i18n.changeLanguage('en');
    }
    dispatch(toggleLanguage()) ;
  }

  return (
    <Suspense fallback={<> Loading ....... </>}>
    <>
      <Box
      className="Navigation" 
        sx={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }} 
      >
        <div className="logo">
          <a className="anchor" href="/">
            <h3>
              <span>{t('h')}</span>{t("oliday")}
              <span>{t("e")}</span>{t("xpress")}
            </h3>
          </a>
        </div>
        <Box
          className="nav-control"
          display="flex"
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography className="navItem" fontSize={20}>
            <a className="anchor" href="/tours">{t('navone')}</a>
          </Typography>
          <Typography className="navItem" fontSize={20}>
            <a className="anchor" href="/favourites">{t('navtwo')}</a>{" "}
          </Typography>
          
          { isLangEng ?
            <div className="lang-toggle">
            <Typography fontSize={20} > {t('Marathi')} </Typography>
            <CgToggleOff cursor={"pointer"} size="2rem" color="#EE685F" onClick={changeLang}  />
            <Typography fontSize={20} color="#EE685F" fontWeight={"Bold"}>
              {t('English')}
            </Typography> 
            </div>
            : 
            <div className="lang-toggle">
            <Typography fontSize={20} color="#EE685F" fontWeight={"Bold"} >{t('Marathi')}</Typography>
            <CgToggleOn cursor={"pointer"} size="2rem" color="#EE685F" onClick={changeLang} />
            <Typography fontSize={20}  >
            {t('English')}
            </Typography>
            </div>
            }
          
        </Box>
      </Box>
    </>
    </Suspense>
  );
};

export default Navbar;
