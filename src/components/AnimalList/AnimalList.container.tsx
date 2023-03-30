import axios from "axios";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import AnimalListSectionUI from "./AnimalListSection.presenter";
import {
  convertAnimalSexCdToString,
  convertAnimalNeuterYnToString,
} from "@/util/animalDataFormatter";

const PAGE_NUM = 1;
const NUM_ROWS = 20;
const baseURL = `http://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?serviceKey=${process.env.NEXT_PUBLIC_DATA_GO_KR_API_KEY}&pageNo=${PAGE_NUM}&numOfRows=${NUM_ROWS}&_type=json`;

export default function AnimalList() {
  const router = useRouter();
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [animalData, setAnimalData] = useState<any[]>([]);

  useEffect(() => {
    void axios.get(baseURL).then((response) => {
      console.log(response.data.response.body.items.item);
      setAnimalData(response.data.response.body.items.item);
    });
  }, []);

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
      <AnimalListSectionUI
        animalData={animalData}
        convertAnimalSexCdToString={convertAnimalSexCdToString}
        convertAnimalNeuterYnToString={convertAnimalNeuterYnToString}
        handleClickNavigateToDetailPage={handleClickNavigateToDetailPage}
      />
    </>
  );
}