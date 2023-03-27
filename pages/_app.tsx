import {AppProps} from "next/app";
import {Global} from "@emotion/react";
import {globalStyles} from "styles/globalStyles";

export default function App({Component}: AppProps) {
  return (
    <>
      <Global styles={globalStyles} />
      <Component />
    </>
  );
}
