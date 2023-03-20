import styled from "styled-components";
import { useState } from "react";
import { useRouter } from "next/router";

export default function FormLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function handler(event) {
    event.preventDefault();
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    if (response.ok) {
      router.push("/transfer");
    }
  }

  return (
    <form>
      <StyledFieldset>
        <StyledLegend>login</StyledLegend>

        <label htmlFor="username" />
        <StyledInput
          onChange={(event) => {
            event.preventDefault();
            setUsername(event.target.value);
          }}
          type="text"
          id="username"
          placeholder="username"
          value={username}
        />

        <label htmlFor="password" />
        <StyledInput
          onChange={(event) => {
            event.preventDefault();
            setPassword(event.target.value);
          }}
          type="password"
          id="password"
          placeholder="password"
          value={password}
        />

        <StyledButton onClick={handler} type="submit">
          Login
        </StyledButton>
      </StyledFieldset>
    </form>
  );
}

export const StyledInput = styled.input`
  margin-top: 0.9em;
  padding: 1em;
  width: 33%;
  font-size: 1rem;
`;
export const StyledLegend = styled.legend`
  text-align: center;
  font-size: 1.3rem;
`;
export const StyledFieldset = styled.fieldset`
  border-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledButton = styled.button`
  margin-top: 0.9em;
  padding: 1em;
  width: 20%;
  font-size: 1rem;
  justify-content: center;
`;
