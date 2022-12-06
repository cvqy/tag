import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading } from "components/misc/Headings.js";
import Header from "../headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm";

const Container = tw.div`relative pb-32`;
const TwoColumn = tw.div`flex flex-col lg:flex-row lg:items-center max-w-screen-xl mx-auto py-20 md:py-24`;
const LeftColumn = tw.div`relative lg:w-5/12 text-center max-w-lg mx-auto lg:max-w-none lg:text-left`;

const HeaderContainer = tw.div`w-full flex flex-col items-center`;
const Heading = tw.h1`font-bold text-4xl xl:text-5xl text-gray-900 leading-tight font-black tracking-wide`;
const Actions = styled.div`
 ${tw`relative max-w-full text-center mx-auto lg:mx-0 px-1 py-1 mt-3`}
  input {
    ${tw`sm:pr-48 pl-8 py-4 sm:py-5 text-lg rounded-full border-2 w-full font-medium focus:outline-none transition duration-300  focus:border-primary-500 hover:border-gray-500`}
  }
  button {
    ${tw`w-full sm:absolute right-0 top-0 bottom-0 bg-primary-500 text-gray-100 font-bold mr-2 my-4 sm:my-2 rounded-full py-4 flex items-center justify-center sm:w-40 sm:leading-none focus:outline-none hover:bg-primary-900 transition duration-300`}
  }
`;

export default ({ roundedHeaderButton }) => {
  return (
    <>
      <Header roundedHeaderButton={roundedHeaderButton} />
      <Container>

      <TwoColumn>
        <LeftColumn>
        <ContentWithPaddingXl>
        <HeaderContainer>
          <Heading>Search for help</Heading>
        </HeaderContainer>
        <Actions>
              <input type="text" placeholder="Search for help" />
              <button>Search</button>
            </Actions>
      </ContentWithPaddingXl>
        </LeftColumn>
      </TwoColumn>
      </Container>
    </>
  );
};
