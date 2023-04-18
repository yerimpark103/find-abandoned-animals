import {Breadcrumb, Tag, Tooltip} from "antd";
import {faPaw, faPhone} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  AnimalDetailCard,
  AnimalDetailContainer,
  AnimalDetailImg,
  AnimalDetailText,
  AnimalDetailTextContainer,
  KakaoMap,
  PhoneNumber,
} from "./AnimalDetail.styles";
import {Container} from "../Common/common.styles";

import {
  convertDateFormat,
  convertAnimalSexCdToString,
  convertAnimalNeuterYnToString,
} from "@/util/animalDataFormatter";
import Head from "next/head";

interface AnimalDetailUIProps {
  animal: any;
  handleClickPhoneNumber: (phoneNumber: string | any) => void;
  handleClickGoBackRoute: () => void;
}

export default function AnimalDetailUI(props: AnimalDetailUIProps) {
  return (
    <Container>
      <Head>
        <script 
            type="text/javascript"
            src="//dapi.kakao.com/v2/maps/sdk.js?appkey=141b72fe32f28ea40df3efa0ab78ecc4&libraries=services"
        ></script>
      </Head>
      <Breadcrumb
        items={[
          {
            href: "/",
            title: (
              <FontAwesomeIcon
                icon={faPaw}
                onClick={props.handleClickGoBackRoute}
              />
            ),
          },
          {
            title: `${props.animal.chargeNm} : ${props.animal.kindCd}`,
          },
        ]}
      />
      <AnimalDetailCard>
        <AnimalDetailImg
          src={
            Array.isArray(props.animal.popfile)
              ? props.animal.popfile[0]
              : props.animal.popfile
          }
          alt={
            Array.isArray(props.animal.noticeNo)
              ? props.animal.noticeNo[0]
              : props.animal.noticeNo
          }
        />
        <AnimalDetailContainer>
          <h2 style={{marginBottom: "1rem"}}>{props.animal.kindCd}</h2>
          <Tag style={{marginBottom: "1rem"}}>{props.animal.processState}</Tag>
          <AnimalDetailTextContainer>
            <AnimalDetailText>
              {convertDateFormat(props.animal.happenDt)}
            </AnimalDetailText>
            <AnimalDetailText>{props.animal.age}</AnimalDetailText>
            <AnimalDetailText>{props.animal.weight}</AnimalDetailText>
            <AnimalDetailText>
              {convertAnimalSexCdToString(props.animal.sexCd)}
            </AnimalDetailText>
            <AnimalDetailText>
              {convertAnimalNeuterYnToString(props.animal.neuterYn)}
            </AnimalDetailText>
            <AnimalDetailText>{props.animal.happenPlace}</AnimalDetailText>
            <AnimalDetailText>{props.animal.specialMark}</AnimalDetailText>
            <AnimalDetailText>
              {props.animal.careNm}
              <Tooltip title="전화번호를 복사하려면 클릭">
                <PhoneNumber
                  style={{marginLeft: "0.5rem"}}
                  onClick={() => {
                    props.handleClickPhoneNumber(props.animal.careTel);
                  }}
                >
                  <FontAwesomeIcon
                    icon={faPhone}
                    style={{marginRight: "0.25rem"}}
                  />
                  {props.animal.careTel}
                </PhoneNumber>
              </Tooltip>
            </AnimalDetailText>
          </AnimalDetailTextContainer>
        </AnimalDetailContainer>
      </AnimalDetailCard>
      <KakaoMap id="map"></KakaoMap>
    </Container>
  );
}
