import {AppProps} from "next/app";
import {RecoilRoot} from "recoil";
import {Global} from "@emotion/react";
import {globalStyles} from "styles/globalStyles";
import Layout from "@/commons/layout";
import {config} from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export default function App({Component}: AppProps) {
  return (
    <>
      <RecoilRoot>
        <Global styles={globalStyles} />
        <Layout>
          <Component />
        </Layout>
      </RecoilRoot>
    </>
  );
}
