import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import {
  RiFacebookCircleLine,
  RiInstagramLine,
  RiTwitterLine,
  RiLinkedinBoxLine,
} from "react-icons/ri";
import { MdClose } from "react-icons/md";
import { useTranslation } from 'next-i18next'

const EmailForm = () => {
  const {t} = useTranslation('home');
  const [successModal,setSuccessModal] = useState(false)
  const form = useRef();
  const sendEmail = (e) =>{
    e.preventDefault()
    emailjs.sendForm(process.env.NEXT_PUBLIC_EMAIL_SERVICE, process.env.NEXT_PUBLIC_EMAIL_TEMPLATE, form.current, process.env.NEXT_PUBLIC_KEY)
      .then((result) => {
          setSuccessModal(true)
          form.current.reset();
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }
  return (
    <>
    <form ref={form} className="app_emailForm-container" onSubmit={(e)=>{sendEmail(e)}}>
      <div className="app_emailForm_fields-p1">
        <div className="app_emailForm_inner-fields">
          <label htmlFor="name">
            {t("input-name")} <span>*</span>
          </label>
          <input type="text" name="name" id="name"   required/>
        </div>
        <div className="app_emailForm_inner-fields">
          <label htmlFor="email">
          {t("input-email")}  <span>*</span>
          </label>
          <input type="email" name="email" id="email" required/>
        </div>
        <div className="app_emailForm_inner-fields">
          <label htmlFor="subject">{t("input-service")}</label>
          <select name="subject" id="subject" required >
            <option value=" "  defaultValue ></option>
            <option value="EB3">EB3</option>
            <option value="Imigration PRO SE">{t("input-service-option1")} PRO SE</option>
            <option value="Family Visa">{t("input-service-option2")}</option>
            <option value="Translation">{t("input-service-option3")}</option>
            <option value="Consensual Divorce">{t("input-service-option4")}</option>
            <option value="Consultant">{t("input-service-option5")}</option>
          </select>
        </div>
      </div>
      <div className="app_emailForm_fields-p2">
        <label htmlFor="message">
        {t("input-msg")} <span>*</span>
        </label>
        <textarea name="message" id="message" cols="30" rows="5" required/>
      </div>
      <div className="app_emailForm_fields-p3">
        <div className="app_emailForm_fields-p3-icons">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <RiFacebookCircleLine  />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <RiInstagramLine  />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <RiTwitterLine  />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <RiLinkedinBoxLine  />
          </a>
        </div>
        <div className="app_emailForm_fields-p3-btn">
          <button type="submit" >{t("input-send")}</button>
        </div>
      </div>
    </form>
    {successModal && (
          <div className='app__formSuccess_overlay flex__center slide-bottom' onClick={() => setSuccessModal(false)}>
            <div className="app__success-modal">
              <MdClose fontSize={27} className="overlay__closed" onClick={() => setSuccessModal(false)}/>
              <h3 className="app__success-modal-title">{t("sucess-modal-text")}</h3>
              <p className="app__success-modal-text">{t("sucess-modal-text2")}<br></br> {t("sucess-modal-text3")}</p>
            </div>
          </div>
        )}
    </>
  );
};

export default EmailForm;
