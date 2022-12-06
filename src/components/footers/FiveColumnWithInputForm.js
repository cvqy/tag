import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

const Container = tw.div`relative text-gray-700 -mb-8 -mx-8 px-8 py-5 lg:pt-16 lg:pb-6`;
const Content = tw.div`max-w-screen-xl mx-auto relative z-10`;

const Divider = tw.div`my-10 border-b-2 border-gray-300 w-full`;

const ThreeColRow = tw.div`text-center`;

const CopywrightNotice = tw.p`text-center text-sm sm:text-base mt-8 md:mt-0 font-medium text-gray-500`;


export default () => {
  return (
    <Container>
      <Content>
        <Divider />
        <ThreeColRow>
          <CopywrightNotice>&copy;2022 JPMorgan Chase &#38; Co. All Rights Reserved.</CopywrightNotice>
        </ThreeColRow>
      </Content>
    </Container>
  );
};
