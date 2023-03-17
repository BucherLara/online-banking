import Head from "next/head";
import { GiPiggyBank } from "react-icons/gi";
import styled from "styled-components";
import FormLogin from "components/FormLogin";

export default function Home() {
  return (
    <>
      <Head>
        <title>Online-Banking</title>

        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <Headline>
            <StyledGiPiggyBank />
            Online-Banking
          </Headline>
        </div>
        <FormLogin />
      </main>
    </>
  );
}

export const Headline = styled.h1`
  text-align: start;
  padding: 1em;
  background-color: var(--third-color);
  width: 100%;
`;

export const StyledGiPiggyBank = styled(GiPiggyBank)`
  margin-right: 0.5em;
`;
