import Head from "next/head";
import styled from "styled-components";
import { cssVars } from "../../styles/cssVars";
import { fontSize } from "../../styles/TypografiNyttDesign";
import Footer from "./Footer";
import Header from "./Header";

const Style = styled.div`
  min-height: 100vh;
  padding: 4vmin 4vmin 30vmin;
  ${cssVars.contentMaxWidth}: 30rem;
  ${cssVars.layoutMaxWidth}: 50rem;
  max-width: var(${cssVars.layoutMaxWidth});
  margin: 0 auto;

  > * {
    margin-left: auto;
    margin-right: auto;
  }
`;

const H1 = styled.h1`
  margin-top: calc(2rem + 3vmin);
  margin-bottom: calc(1.5rem + 2vmin);
  ${fontSize.s2}
`;

export const H2 = styled.h2`
  margin-top: calc(2rem + 3vmin);
  margin-bottom: calc(1.5rem + 2vmin);
  font-size: clamp(1.25rem, 8vmin, 2.15rem);
`;

const Ingress = styled.p`
  width: 100%;
  //max-width: var(${cssVars.contentMaxWidth});
  font-size: 1.1rem;
  margin-bottom: calc(2rem + 3vmin);
`;

interface Props {
  tittel: string;
  undertittel?: string;
  ingress: string;
  children: React.ReactNode;
}

export const ArtikkelLayout = (props: Props) => {
  const { tittel, undertittel, ingress, children } = props;
  return (
    <Style>
      <Head>
        <title>{tittel}</title>
      </Head>
      <Header />
      <main>
        <H1>{tittel}</H1>
        {undertittel && <H2>{undertittel}</H2>}
        <Ingress>{ingress}</Ingress>
        {children}
      </main>
      <Footer />
    </Style>
  );
};
