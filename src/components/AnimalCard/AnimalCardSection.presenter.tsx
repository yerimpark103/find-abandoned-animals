import {Col, Row} from "antd";

import AnimalCardUI from "./AnimalCard.presenter";

interface AnimalCardSectionProps {
  animalData: any;
  convertAnimalSexCdToString: (code: string) => string;
  convertAnimalNeuterCdToString: (code: string) => string;
  handleClickNavigateToDetailPage: (val: any) => any;
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
              convertAnimalNeuterCdToString={
                props.convertAnimalNeuterCdToString
              }
              handleClickNavigateToDetailPage={
                props.handleClickNavigateToDetailPage
              }
            />
          </Col>
        ))}
      </Row>
    </>
  );
}
