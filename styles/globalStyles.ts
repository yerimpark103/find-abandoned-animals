import {css} from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    font-family: "SCore";
  }

  @font-face {
    font-family: "SCore";
    src: url("/fonts/SCDream1.woff") format("woff");
    font-weight: 100;
    font-style: normal;
  }

  @font-face {
    font-family: "SCore";
    src: url("/fonts/SCDream4.woff") format("woff");
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: "SCore";
    src: url("/fonts/SCDream7.woff") format("woff");
    font-weight: 700;
    font-style: normal;
  }
`;
