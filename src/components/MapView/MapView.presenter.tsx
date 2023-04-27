import {Container} from "../Common/common.styles";
import Head from "next/head";
import { KakaoMap } from "./MapView.styles";

export default function AnimalMapUI(props) {
  return (
    <Container>
      <Head>
        <script 
            type="text/javascript"
            src="//dapi.kakao.com/v2/maps/sdk.js?appkey=141b72fe32f28ea40df3efa0ab78ecc4&libraries=services"
        ></script>
      </Head>
      <KakaoMap id="map"></KakaoMap>
    </Container>
  );
}
