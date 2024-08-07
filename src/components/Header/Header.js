import React from "react";
import Button from "../Button/Button";

const Header = () => {
  const tg = window.Telegram.WebApp;
  const onCloseApp = () => {
    tg.close();
  };
  return (
    <div className={"header"}>
      <Button onClick={onCloseApp}>Close</Button>
      <span className={"username"}>{tg.initDataUnSafe?.user?.username}</span>
    </div>
  );
};

export default Header;
