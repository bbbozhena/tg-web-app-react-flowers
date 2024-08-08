import React, { useCallback, useEffect, useState } from "react";
import "./Form.css";
import { useTelegram } from "../../hooks/useTelegram";

const Form = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const { tg } = useTelegram();

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const onSendData = useCallback(() => {
    const data = {
      name,
      phone,
    };
    console.log("Sending data:", data);
    tg.sendData(JSON.stringify(data));
  }, [tg, name, phone]);

  useEffect(() => {
    tg.onEvent("mainButtonClicked", onSendData);
    return () => {
      tg.offEvent("mainButtonClicked", onSendData);
    };
  }, [tg, onSendData]);

  useEffect(() => {
    tg.MainButton.setParams({
      text: "Send details",
    });
  }, [tg]);

  useEffect(() => {
    if (!name || !phone) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  }, [tg, name, phone]);

  return (
    <div className={"form"}>
      <h3>Enter your details</h3>
      <input
        type="text"
        className={"input"}
        value={name}
        onChange={onChangeName}
        placeholder="Name"
      ></input>
      <input
        type="text"
        className={"input"}
        value={phone}
        onChange={onChangePhone}
        placeholder="Phone number"
      ></input>
    </div>
  );
};

export default Form;
