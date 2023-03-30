import {HashArray} from "@/types/global.types";
import axios from "axios";
import {useEffect, useState} from "react";

const PAGE_NUM = 1;
const NUM_ROWS = 20;
const baseURL = `http://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?serviceKey=${process.env.NEXT_PUBLIC_DATA_GO_KR_API_KEY}&pageNo=${PAGE_NUM}&numOfRows=${NUM_ROWS}&_type=json`;

export default function APITestPage() {
  const [animalData, setAnimalData] = useState<any[]>([]);

  useEffect(() => {
    void axios.get(baseURL).then((response) => {
      console.log(response.data.response.body.items.item);
      setAnimalData(response.data.response.body.items.item);
    });
  }, []);

  const convertAnimalSexCdToString = (code: string): string => {
    const legend: HashArray = {M: "수컷", F: "암컷", Q: "성별 불명"};
    return legend[code];
  };

  const convertAnimalNeuterYnToString = (code: string): string => {
    const legend: HashArray = {Y: "중성화 O", N: "중성화 X", U: "중성화 불명"};
    return legend[code];
  };

  return (
    <>
      <h1>API Testing</h1>
      {animalData?.map((animal) => (
        <div key={animal.noticeNo}>
          <img src={animal.filename} alt={animal.noticeNo} />
          <span>{animal.noticeNo}</span>
          <span>{animal.happenPlace}</span>
          <span>{animal.kindCd}</span>
          <span>{animal.colorCd}</span>
          <span>{animal.age}</span>
          <span>
            {convertAnimalSexCdToString(animal.sexCd)}(
            {convertAnimalNeuterYnToString(animal.neuterYn)})
          </span>
          <span>{animal.careNm}</span>
        </div>
      ))}
    </>
  );
}
