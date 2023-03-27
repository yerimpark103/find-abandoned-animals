import {AnimalCard, AnimalImg, AnimalTag} from "./AnimalCard.styles";

interface AnimalCardProps {
  animal: any;
  convertAnimalSexCdToString: (code: string) => string;
  convertAnimalNeuterYnToString: (code: string) => string;
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
        <AnimalTag>{props.animal.processState}</AnimalTag>
        <h3>{props.animal.kindCd}</h3>
        <div style={{display: "flex", flexDirection: "column"}}>
          <span>
            {props.convertAnimalSexCdToString(props.animal.sexCd)}(
            {props.convertAnimalNeuterYnToString(props.animal.neuterYn)})
          </span>
          <span>{props.animal.happenPlace}</span>
          <span>{props.animal.careNm}</span>
        </div>
      </AnimalCard>
    </>
  );
}
