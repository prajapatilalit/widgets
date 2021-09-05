//https://translation.googleapis.com/language/translate/v2
//AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
import React, { useEffect } from "react";

const Convert = ({ language, text }) => {
  useEffect(() => {
    console.log("new language");
  }, [language, text]);
  return <div />;
};

export default Convert;
