import {Col, Row} from "antd";
import PaginationUI from "../Pagination/Pagination.presenter";

import AnimalCardUI from "./AnimalCard.presenter";

interface AnimalCardSectionProps {
  animalData: any;
  convertAnimalSexCdToString: (code: string) => string;
  convertAnimalNeuterYnToString: (code: string) => string;
  handleClickNavigateToDetailPage: (val: any) => any;
  totalPageCount: number;
  currentPage: number;
  startPage: number;
  lastPage: number;
  // TODO: change to mouseevent type
  handleClickPage: any;
  handleClickPrevPage: any;
  handleClickNextPage: any;
  isPrevPageButtonActive: boolean;
  isNextPageButtonActive: boolean;
}

export default function AnimalCardSectionUI(props: AnimalCardSectionProps) {
  return (
    <>
      <Row gutter={[16, 16]}>
        {props.animalData?.map((animal: any) => (
          <Col key={animal.noticeNo} className="gutter-row" span={6}>
            <AnimalCardUI
              animal={animal}
              convertAnimalSexCdToString={props.convertAnimalSexCdToString}
              convertAnimalNeuterYnToString={
                props.convertAnimalNeuterYnToString
              }
              handleClickNavigateToDetailPage={
                props.handleClickNavigateToDetailPage
              }
            />
          </Col>
        ))}
      </Row>
      <PaginationUI
        currentPage={props.currentPage}
        startPage={props.startPage}
        lastPage={props.lastPage}
        isPrevPageButtonActive={props.isPrevPageButtonActive}
        handleClickPage={props.handleClickPage}
        handleClickPrevPage={props.handleClickPrevPage}
        isNextPageButtonActive={props.isNextPageButtonActive}
        handleClickNextPage={props.handleClickNextPage}
      />
    </>
  );
}
