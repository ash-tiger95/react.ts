import React, { ReactEventHandler, useState } from "react";

import { useTranslation } from "react-i18next";

import { EEmailAddress } from "@enum/User";
import { MUser, MLocation } from "@model/User";

const EmailAddress = [
  { key: 1, value: EEmailAddress.PERSONAL },
  { key: 2, value: EEmailAddress.NAVER },
  { key: 3, value: EEmailAddress.DAUM },
  { key: 4, value: EEmailAddress.GOOGLE },
];
const SignUp = () => {
  const { t } = useTranslation(["label"]);

  const [email, setEmail] = useState<string>("");
  const [emailAddress, setEmailAddress] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>();
  const [phone, setPhone] = useState<number>();
  const [location, setLocation] = useState<MLocation>({
    country: "",
    do: "",
    si: "",
    dong: "",
    gu: "",
    ro: "",
    roNo: 0,
    detail: "",
  });

  const onChangeEmailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const onChangeEmailAddressHandler = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setEmailAddress(e.currentTarget.value);
    console.log(e.currentTarget.value);
  };
  const onChangeNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  /*
  const onChangeAgeHandler = (
    e: React.ChangeEventHandler<HTMLInputElement>
  ) => {
    setAge(e.currentTarget.value);
  };
  const onChangePhoneHandler = (
    e: React.ChangeEventHandler<HTMLInputElement>
  ) => {
    setPhone(e.target.value);
  };
  */

  const onSubmitHandler = (e: React.FormEventHandler<HTMLFormElement>) => {};

  return (
    <>
      <form>
        {t("label:user.email")}
        <input
          type="email"
          value={email}
          placeholder={t("label:user.email")}
          onChange={onChangeEmailHandler}
        />{" "}
        @
        <select value={emailAddress} onChange={onChangeEmailAddressHandler}>
          {EmailAddress.map((item) => (
            <option key={item.key} value={item.value}>
              {item.value}
            </option>
          ))}
        </select>
        <br />
        {t("label:user.password")}
        <input
          type="password"
          value={password}
          placeholder={t("label:user.password")}
        />
        <br />
        {t("label:user.name")}
        <input
          type="text"
          value={name}
          placeholder={t("label:user.name")}
          onChange={onChangeNameHandler}
        />
        <br />
        {t("label:user.age")}
        <input
          type="number"
          value={age}
          placeholder={t("label:user.age")}
          //   onChange={onChangeAgeHandler}
        />
        <br />
        {t("label:user.phone")}
        <input
          type="number"
          value={phone}
          placeholder={t("label:user.phone")}
          //   onChange={onChangePhoneHandler}
        />
        <br />
        <button type="submit" />
      </form>
    </>
  );
};

export default SignUp;
