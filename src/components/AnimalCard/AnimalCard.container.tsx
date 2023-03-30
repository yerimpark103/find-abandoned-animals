import axios from "axios";
import {useRouter} from "next/router";
import {MouseEvent, useEffect, useState} from "react";
import {Empty} from "antd";
import AnimalCardSectionUI from "./AnimalCardSection.presenter";
import {
  convertAnimalSexCdToString,
  convertAnimalNeuterYnToString,
} from "@/util/animalDataFormatter";

const NUM_ROWS = 20;

export default function AnimalCard() {
  const router = useRouter();
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [animalData, setAnimalData] = useState<any[]>([]);
  const [startPage, setStartPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [isPrevPageButtonActive, setIsPrevPageButtonActive] = useState(false);
  const [isNextPageButtonActive, setIsNextPageButtonActive] = useState(true);
  const baseURL = `http://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?serviceKey=${process.env.NEXT_PUBLIC_DATA_GO_KR_API_KEY}&pageNo=${currentPage}&numOfRows=${NUM_ROWS}&_type=json`;
  const [totalPageCount, setTotalPageCount] = useState(1);

  const lastPage = totalPageCount ? Math.ceil(totalPageCount / 20) : 0;

  useEffect(() => {
    void axios.get(baseURL).then((response) => {
      setTotalPageCount(response.data.response?.body.totalCount);
      console.log(response.data.response.body.items.item);
      setAnimalData(response.data.response.body.items.item);
    });
  }, [currentPage]);

  const handleClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    setCurrentPage(Number(event.currentTarget.id));
  };

  const handleClickPrevPage = () => {
    if (startPage === 1) {
      setIsPrevPageButtonActive(false);
    } else {
      if (startPage - 10 === 1) setIsPrevPageButtonActive(false);
      else setIsPrevPageButtonActive(true);
      setCurrentPage(startPage - 10);
      setStartPage(startPage - 10);
    }
  };

  const handleClickNextPage = () => {
    setIsPrevPageButtonActive(true);
    if (startPage + 10 <= lastPage) {
      if (startPage + 20 > lastPage) setIsNextPageButtonActive(false);
      else setIsNextPageButtonActive(true);
      setCurrentPage(startPage + 10);
      setStartPage(startPage + 10);
    }
  };

  const handleClickNavigateToDetailPage = (val: any) => {
    setSelectedAnimal(val);
    console.log(selectedAnimal);
    void router.push({
      pathname: "/detail",
      query: val,
    });
  };

  return (
    <>
      {animalData.length > 0 ? (
        <AnimalCardSectionUI
          animalData={animalData}
          convertAnimalSexCdToString={convertAnimalSexCdToString}
          convertAnimalNeuterYnToString={convertAnimalNeuterYnToString}
          handleClickNavigateToDetailPage={handleClickNavigateToDetailPage}
          totalPageCount={totalPageCount}
          currentPage={currentPage}
          startPage={startPage}
          lastPage={lastPage}
          handleClickPage={handleClickPage}
          handleClickPrevPage={handleClickPrevPage}
          handleClickNextPage={handleClickNextPage}
          isPrevPageButtonActive={isPrevPageButtonActive}
          isNextPageButtonActive={isNextPageButtonActive}
        />
      ) : (
        <Empty />
      )}
    </>
  );
}
