import {Col, Row} from "antd";

import AnimalListUI from "./AnimalList.presenter";

interface AnimalListSectionProps {
  animalData: any;
  convertAnimalSexCdToString: (code: string) => string;
  convertAnimalNeuterYnToString: (code: string) => string;
  handleClickNavigateToDetailPage: (val: any) => any;
}

export default function AnimalListSectionUI(props: AnimalListSectionProps) {
  return (
    <>
      <Row gutter={[16, 16]}>
        {props.animalData?.map((animal: any) => (
          <Col key={animal.noticeNo} className="gutter-row" span={12}>
            <AnimalListUI
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
    </>
  );
}