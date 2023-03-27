import {HashArray} from "@/types/global.types";
import axios from "axios";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import AnimalCardSectionUI from "./AnimalCardSection.presenter";

const PAGE_NUM = 1;
const NUM_ROWS = 20;
const baseURL = `http://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?serviceKey=${process.env.NEXT_PUBLIC_DATA_GO_KR_API_KEY}&pageNo=${PAGE_NUM}&numOfRows=${NUM_ROWS}&_type=json`;

export default function AnimalCard() {
  const router = useRouter();
  const [selectedAnimal, setSelectedAnimal] = useState(null);
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

  const convertAnimalNeuterCdToString = (code: string): string => {
    const legend: HashArray = {Y: "중성화 O", N: "중성화 X", U: "중성화 불명"};
    return legend[code];
  };

  const handleClickNavigateToDetailPage = (val: any) => {
    console.log("clicked", val);
    setSelectedAnimal(val);
    console.log(selectedAnimal);
    void router.push({
      pathname: "/detail",
      query: val,
    });
  };

  return (
    <>
      <AnimalCardSectionUI
        animalData={animalData}
        convertAnimalSexCdToString={convertAnimalSexCdToString}
        convertAnimalNeuterCdToString={convertAnimalNeuterCdToString}
        handleClickNavigateToDetailPage={handleClickNavigateToDetailPage}
      />
    </>
  );
}
