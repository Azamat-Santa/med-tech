import React from "react";
import "./passwordRecovery.css";
import Title from "../../component/Title/Title";
import "../Authorization/index.css";
import Input from "../../component/Input/Input";
import AuthButton from "../../component/AuthButton/AuthButton";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function PasswordRecovery(props) {
  const [page, setPage] = useState({
    passwordRecovery: true,
    confirmationСode: false,
  });
  const [second, setSecond] = useState(12);
  const [timerActive, setTimerActive] = useState(true);
  useEffect(() => {
    if (second !== 0 && page.confirmationСode) {
      setTimeout(() => {
        setSecond(second - 1);
      }, 1000);
    }
    if (page === 0) {
      setTimerActive(false);
    }
  }, [second, page]);
  const refreshCounter = () => {
    setSecond(12);
    setTimerActive(true);
  };
  const navigate = useNavigate();
  console.log(navigate);
  const confirmCode = () => {
    setPage({
      passwordRecovery: false,
      confirmationСode: true,
    });
  };
  return (
    <div className="auth">
      <div className="white-wave-img"></div>
      <div className="auth-baby-img"></div>

      {page.passwordRecovery && (
        <div className="password-recovery">
          <Title text="Восстановление пароля" />
          <p className="password-recovery-p_bold">Получите код подтверждения</p>
          <p className="password-recovery-p_not-bold">
            Чтобы получить код подтверждения, введите адрес электронной почты
          </p>
          <Input type="text" placeholder="Введите Email" />
          <div onClick={() => confirmCode()}>
            <AuthButton text="Подтвердить" />
          </div>
          <div onClick={() => navigate(-1)}>
            <AuthButton text="Назад" back={true} />
          </div>
        </div>
      )}
      {page.confirmationСode && (
        <div className="password-recovery">
          <Title text="Восстановление пароля" />
          <p className="password-recovery-p_bold">Получите код подтверждения</p>
          <p className="password-recovery-p_not-bold">
            Мы отправили код подтверждения на адрес satybaldiev@gmail.com
          </p>
          <p>Введите код подтверждения</p>
          <div className="confirmation-code">
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </div>
          <AuthButton text="Подтвердить" />
          <div  onClick={()=>navigate(0)}>
          <AuthButton text="Назад"  back={true}/>

          </div>

          {second !== 0 && timerActive ? (
            <div className="password-recovery__timer">Получить новый код можно через {second} секунд</div>
          ) : (
            <div className="password-recovery__timer">
              Не получили код?{" "}
              <span onClick={()=>refreshCounter()}>Получите новый</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
