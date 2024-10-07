"use client";

import ButtonCompFunc from "@/app/components/comp-button";
import { ServiceSignUp } from "@/firebase/2-firebase-auth";
import { useState } from "react";

export default function SignUpCompFunc() {
  const [emailSuUs, setEmailSuUs] = useState<string>("");
  const [passwordSuUs, setPasswordSuUs] = useState<string>("");
  const [] = useState<string>("");
  return (
    <>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={emailSuUs}
          onChange={(e) => setEmailSuUs(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={passwordSuUs}
          onChange={(e) => setPasswordSuUs(e.target.value)}
        />
        <br />
        <br />
        <ButtonCompFunc
          btnLabe={"Sign up"}
          btnHandler={() => {
            ServiceSignUp({ email: emailSuUs, password: passwordSuUs });
          }}
        />
      </div>
    </>
  );
}
