import React, { useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onChangeEmail = (e: React.ChangeEvent<{ value: string }>) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e: React.ChangeEvent<{ value: string }>) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <form>
        <input type="email" value={email} onChange={onChangeEmail} />
        <input type="password" value={password} onChange={onChangePassword} />
        <button type="submit">로그인</button>
      </form>
    </div>
  );
};

export default SignIn;
