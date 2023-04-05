import {AppProps} from "next/app";
import {Global} from "@emotion/react";
import {globalStyles} from "styles/globalStyles";
import Layout from "@/commons/layout";
import ApolloSetting from "@/commons/apollo";

export default function App({Component}: AppProps) {
  return (
    <ApolloSetting>
      <>
        <Global styles={globalStyles} />
        <Layout>
          <Component />
        </Layout>
      </>
    </ApolloSetting>
  );
}
