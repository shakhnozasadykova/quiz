import React, { useEffect, useState, useContext} from "react";
import { Heading } from "../components/UI/Heading";
import { AppButton } from "../components/UI/AppButton";
import { AppInput } from "../components/UI/Appinput";
import { useNavigate } from "react-router-dom";
import {ThemeContext, themes} from "../context/themecontext"

const Welcome = () => {
  const [nameValue, setNameValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");

  const [nameError,setNameError]=useState(false)
  const [phoneError,setPhoneError]=useState(false)

  const navigate = useNavigate()

  const {theme, toggleTheme} = useContext(ThemeContext)

  const goToNextPage=()=>{nameValue&&phoneValue ?navigate("/step-one") : navigate("/")}
  

  const clickHandler= ()=>{
    if(!nameValue){
      setNameError(true)
     }
     else {
      setNameError(false)
     }
     if(!phoneValue){
      setPhoneError(true)
     }
     else {
      setPhoneError(false)
     }
     goToNextPage();

  }

  useEffect(() => {}, [nameValue, phoneValue]);

  return (
    <div className={`container ${theme === themes.dark && "_dark"}`}>
      <div className="wrapper">
        <div className="welcome">
          <Heading headingText="Добро пожаловать в квиз от лучшего учебного центра" />
          <form className="welcome__form">
            <button onClick={toggleTheme}>смена темы</button>
            <AppInput
              hasError={nameError}
              value={nameValue}
              inputLabel="Ваше имя"
              inputType="text"
              id="username"
              inputPlaceholder="Ваш ответ"
              isRequired={true}
              inputError="Введите свое имя"
              onChange={setNameValue}
            />
            <AppInput
              hasError={phoneError}
              inputLabel="Ваш номер"
              inputType="tel"
              id="phone"
              inputPlaceholder="+998 9- --- -- --"
              inputError="Введите свой номер"
              value={phoneValue}
              onChange={setPhoneValue}
            />
            <AppButton
              buttonText="Далее"
              buttonType="submit"
              isDisabled={false}
              onClick={clickHandler}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
