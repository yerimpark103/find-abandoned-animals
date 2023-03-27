import {Tag} from "antd";
import {AnimalCard, AnimalImg} from "./AnimalCard.styles";

interface AnimalCardProps {
  animal: any;
  convertAnimalSexCdToString: (code: string) => string;
  convertAnimalNeuterCdToString: (code: string) => string;
  handleClickNavigateToDetailPage: (val: any) => any;
}

export default function AnimalCardUI(props: AnimalCardProps) {
  return (
    <>
      <AnimalCard
        cover={
          <AnimalImg src={props.animal.popfile} alt={props.animal.noticeNo} />
        }
        onClick={() => props.handleClickNavigateToDetailPage(props.animal)}
      >
        <Tag>{props.animal.processState}</Tag>
        <h3>{props.animal.kindCd}</h3>
        <div style={{display: "flex", flexDirection: "column"}}>
          <span>
            {props.convertAnimalSexCdToString(props.animal.sexCd)}(
            {props.convertAnimalNeuterCdToString(props.animal.neuterYn)})
          </span>
          <span>{props.animal.happenPlace}</span>
          <span>{props.animal.careNm}</span>
        </div>
      </AnimalCard>
    </>
  );
}
