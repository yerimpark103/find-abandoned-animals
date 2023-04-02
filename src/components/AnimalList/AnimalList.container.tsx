import axios from "axios";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {TableColumnsType} from "antd";
import {IAnimalListDataType} from "./AnimalList.types";
import AnimalListUI from "./AnimalList.presenter";

const PAGE_NUM = 1;
const NUM_ROWS = 20;
const baseURL = `http://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?serviceKey=${process.env.NEXT_PUBLIC_DATA_GO_KR_API_KEY}&pageNo=${PAGE_NUM}&numOfRows=${NUM_ROWS}&_type=json`;

export default function AnimalList() {
  const router = useRouter();
  const [animalData, setAnimalData] = useState<any[]>([]);

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
    },
    {
      title: "상태",
      dataIndex: "processState",
      key: "processState",
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
    },
  ];

  const data: IAnimalListDataType[] = animalData.map((datum) => {
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
      console.log(response.data.response.body.items.item);
      setAnimalData(response.data.response.body.items.item);
    });
  }, []);

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
      />
    </>
  );
}
