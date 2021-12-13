import React, { useState } from "react";
import Screen from "../components/Screen";
import Title from "../components/Title";
import Subtitle from "../components/Subtitle";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import { inRange } from "../utils/validators";

// TODO Q4
const TwoFactorAuthScreen = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  const [data, updateData] = useState("");
  const reg = /^\d+$/;

  return (
    <Screen>
      <form>
        <Title>Enter verification code</Title>
        <Subtitle>
          A text message with a 7-digit code has been sent to your mobile phone
          number
        </Subtitle>
        <TextInput
          label="Code"
          onChange={(event) => updateData(event.target.value)}
          placeholder="Enter the 7-digit code"
        />
        <Button
          type="primary"
          onClick={onSubmit}
          value="Submit"
          disabled={!(data.length === 7 && reg.test(data))}
        />
      </form>
    </Screen>
  );
};

export default TwoFactorAuthScreen;
