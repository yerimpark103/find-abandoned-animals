import {Breadcrumb, message, Tag} from "antd";
import {useRouter} from "next/router";
import {faPaw, faPhone} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  AnimalDetailCard,
  AnimalDetailContainer,
  AnimalDetailImg,
  AnimalDetailText,
  AnimalDetailTextContainer,
  PhoneNumber,
} from "./AnimalDetail.styles";
import {Container} from "../Common/common.styles";
import {
  convertDateFormat,
  convertAnimalSexCdToString,
  convertAnimalNeuterYnToString,
} from "@/util/animalDataFormatter";

export default function AnimalDetail() {
  const router = useRouter();
  const animal = {...router.query};
  console.log(animal);

  const handleClickPhoneNumber = (phoneNumber: string | any) => {
    if (typeof window !== "undefined") {
      void navigator.clipboard.writeText(phoneNumber);
      void message.success("전화번호를 복사했습니다.");
    }
  };

  /*
    age:"2015(년생)"
    careAddr:"경상남도 함안군 가야읍 함안대로 755 "
    careNm:"함안군유기동물보호소"
    careTel:"010-6248-2131"
    chargeNm:"함안군"
    colorCd:"하양 , 찐갈색"
    desertionNo:"448540202300109"
    filename:"http://www.animal.go.kr/files/shelter/2023/03/202303270903131_s.jpg"
    happenDt:"20230327"
    happenPlace:"칠원읍 구성길 186, 종가 돼지국밥"
    kindCd:"[개] 치와와"
    neuterYn:"U"
    noticeEdt:"20230406"
    noticeNo:"경남-함안-2023-00108"
    noticeSdt:"20230327"
    officetel:"055-580-4394"
    orgNm:"경상남도 함안군"
    popfile:"http://www.animal.go.kr/files/shelter/2023/03/202303270903131.jpg"
    processState:"보호중"
    sexCd:"M"
    specialMark:"신고지역에 일주일 정도 배회 , 고의유기 추정 "
    weight:"5.0(Kg)"
   */

  return (
    <>
      <Container>
        <Breadcrumb
          items={[
            {
              href: "/",
              title: <FontAwesomeIcon icon={faPaw} />,
            },
            {
              title: `${animal.chargeNm} : ${animal.kindCd}`,
            },
          ]}
        />
        <AnimalDetailCard>
          <AnimalDetailImg
            src={
              Array.isArray(animal.popfile) ? animal.popfile[0] : animal.popfile
            }
            alt={
              Array.isArray(animal.noticeNo)
                ? animal.noticeNo[0]
                : animal.noticeNo
            }
          />
          <AnimalDetailContainer>
            <h2 style={{marginBottom: "1rem"}}>{animal.kindCd}</h2>
            <Tag style={{marginBottom: "1rem"}}>{animal.processState}</Tag>
            <AnimalDetailTextContainer>
              <AnimalDetailText>
                {convertDateFormat(animal.happenDt)}
              </AnimalDetailText>
              <AnimalDetailText>{animal.age}</AnimalDetailText>
              <AnimalDetailText>{animal.weight}</AnimalDetailText>
              <AnimalDetailText>
                {convertAnimalSexCdToString(animal.sexCd)}
              </AnimalDetailText>
              <AnimalDetailText>
                {convertAnimalNeuterYnToString(animal.neuterYn)}
              </AnimalDetailText>
              <AnimalDetailText>{animal.happenPlace}</AnimalDetailText>
              <AnimalDetailText>{animal.specialMark}</AnimalDetailText>
              <AnimalDetailText>
                {animal.careNm}
                <PhoneNumber
                  style={{marginLeft: "0.5rem"}}
                  onClick={() => {
                    handleClickPhoneNumber(animal.careTel);
                  }}
                >
                  <FontAwesomeIcon
                    icon={faPhone}
                    style={{marginRight: "0.25rem"}}
                  />
                  {animal.careTel}
                </PhoneNumber>
              </AnimalDetailText>
            </AnimalDetailTextContainer>
          </AnimalDetailContainer>
        </AnimalDetailCard>
      </Container>
    </>
  );
}
