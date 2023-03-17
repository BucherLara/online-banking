import {
  StyledButton,
  StyledInput,
  StyledFieldset,
  StyledLegend,
} from "../FormLogin/index.js";
import { useState } from "react";
import { Headline, StyledGiPiggyBank } from "@/pages/index.js";


export default function Transfer() {
  const [name, setName] = useState();
  const [iban, setIban] = useState();
  const [amount, setAmount] = useState();

  async function handler(event) {
    event.preventDefault();
    const response = await fetch("/api/transfer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, iban, amount }),
    });
    const data = await response.json();
    
    console.log(data)
  }

  return (
    <form>
      <StyledFieldset>
        <Headline>
          <StyledGiPiggyBank /> money transfer
        </Headline>

        <label htmlFor="name" />
        <StyledInput
          onChange={(event) => {
            event.preventDefault();
            setName(event.target.value);
          }}
          type="text"
          id="name"
          placeholder="Name"
          value={name}
        />

        <label htmlFor="iban" />
        <StyledInput
          onChange={(event) => {
            event.preventDefault();
            setIban(event.target.value);
          }}
          type="text"
          id="iban"
          placeholder="IBAN"
          value={iban}
        />

        <label htmlFor="amount" />
        <StyledInput
          onChange={(event) => {
            event.preventDefault();
            setAmount(event.target.value);
          }}
          type="number"
          id="amount"
          placeholder="Amount"
          value={amount}
        />

        <StyledButton type="submit" onClick={handler}>Send</StyledButton>
      </StyledFieldset>
    </form>
  );
}
