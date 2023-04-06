import axios from "axios";
import {useRouter} from "next/router";
import {MouseEvent, useEffect, useState} from "react";
import {TableColumnsType} from "antd";
import {IAnimalListDataType} from "./AnimalList.types";
import AnimalListUI from "./AnimalList.presenter";
import {IAnimalFilterProps} from "../AnimalsView.types";

const NUM_ROWS = 10;

export default function AnimalList(props: IAnimalFilterProps) {
  const router = useRouter();
  const [animalData, setAnimalData] = useState<any[]>([]);
  const [startPage, setStartPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [isPrevPageButtonActive, setIsPrevPageButtonActive] = useState(false);
  const [isNextPageButtonActive, setIsNextPageButtonActive] = useState(true);
  const [totalPageCount, setTotalPageCount] = useState(1);
  const lastPage = totalPageCount ? Math.ceil(totalPageCount / 20) : 0;
  const baseURL = `http://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?serviceKey=${process.env.NEXT_PUBLIC_DATA_GO_KR_API_KEY}&pageNo=${currentPage}&numOfRows=${NUM_ROWS}${props.appliedFilter}&_type=json`;
  // const baseURL = `http://apis.data.go.kr/1543061/abandonmentPublicSrvc/sigungu?serviceKey=${process.env.NEXT_PUBLIC_DATA_GO_KR_API_KEY}&upr_cd=6480000&numOfRows=1000${props.appliedFilter}&_type=json`;

  const columns: TableColumnsType<IAnimalListDataType> = [
    {
      title: "사진",
      dataIndex: "popfile",
      key: "popfile",
      render: (text: string | undefined) => (
        <img
          src={text}
          alt={text}
          style={{
            borderRadius: "10%",
            width: "5rem",
            height: "5rem",
            objectFit: "cover",
          }}
        />
      ),
    },
    {
      title: "동물 종류",
      dataIndex: "kindCd",
      key: "kindCd",
      width: 100,
    },
    {
      title: "상태",
      dataIndex: "processState",
      key: "processState",
      width: 100,
    },
    {
      title: "상세설명",
      dataIndex: "specialMark",
      key: "specialMark",
    },
    {
      title: "발견장소",
      dataIndex: "happenPlace",
      key: "happenPlace",
    },
    {
      title: "발견날짜",
      dataIndex: "happenDt",
      key: "happenDt",
      render: (text: string | undefined) => (
        <span>
          {`${text?.substring(0, 4)}.${text?.substring(4, 6)}.${text?.substring(
            6,
            8
          )}`}
        </span>
      ),
    },
  ];

  const data: IAnimalListDataType[] = animalData?.map((datum) => {
    return (({
      desertionNo,
      popfile,
      kindCd,
      processState,
      specialMark,
      happenPlace,
      happenDt,
    }) => ({
      desertionNo,
      popfile,
      kindCd,
      processState,
      specialMark,
      happenPlace,
      happenDt,
    }))(datum);
  });

  useEffect(() => {
    void axios.get(baseURL).then((response) => {
      setTotalPageCount(response.data.response?.body?.totalCount);
      console.log(response.data.response?.body?.items.item);
      setAnimalData(response.data.response?.body?.items.item);
    });
    window.scrollTo(0, 0);
  }, [currentPage, props.appliedFilter]);

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
    const animalVal = animalData.find((animal) => animal.desertionNo === val);
    void router.push({
      pathname: "/detail",
      query: animalVal,
    });
  };

  return (
    <>
      <AnimalListUI
        columns={columns}
        data={data}
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
    </>
  );
}
