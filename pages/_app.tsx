import {AppProps} from "next/app";
import {Global} from "@emotion/react";
import {globalStyles} from "styles/globalStyles";
import Layout from "@/commons/layout";

export default function App({Component}: AppProps) {
  return (
    <>
      <Global styles={globalStyles} />
      <Layout>
        <Component />
      </Layout>
    </>
  );
}
