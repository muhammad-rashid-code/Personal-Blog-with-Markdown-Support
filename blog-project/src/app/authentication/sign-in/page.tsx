"use client";

import ButtonCompFunc from "@/app/components/comp-button";
import { ServiceSignIn } from "@/firebase/2-firebase-auth";
import { useState } from "react";

export default function SignInCompFunc() {
  const [emailSiUs, setEmailSiUs] = useState<string>("");
  const [passwordSiUs, setPasswordSiUs] = useState<string>("");
  return (
    <>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={emailSiUs}
          onChange={(e) => setEmailSiUs(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={passwordSiUs}
          onChange={(e) => setPasswordSiUs(e.target.value)}
        />
        <br />
        <ButtonCompFunc
          btnLabe={"Sign in"}
          btnHandler={() => {
            ServiceSignIn({ email: emailSiUs, password: passwordSiUs });
          }}
        />
      </div>
    </>
  );
}
