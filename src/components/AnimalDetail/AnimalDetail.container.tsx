import {Breadcrumb} from "antd";
import {useRouter} from "next/router";
import {faPaw} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {AnimalDetailImg} from "./AnimalDetail.styles";

export default function AnimalDetail() {
  const router = useRouter();
  const animal = {...router.query};
  console.log(animal);
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
      <h2>상세정보</h2>
      <AnimalDetailImg
        src={Array.isArray(animal.popfile) ? animal.popfile[0] : animal.popfile}
        alt={
          Array.isArray(animal.noticeNo) ? animal.noticeNo[0] : animal.noticeNo
        }
      />
    </>
  );
}
