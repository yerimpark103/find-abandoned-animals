import { Tag } from "antd";
import { AnimalWrapper, TableWrapper, ImgWrapper, NameWrapper, ContentsWrapper } from "./AnimalList.styles";

interface AnimalListProps {
  animal: any;
  convertAnimalSexCdToString: (code: string) => string;
  convertAnimalNeuterYnToString: (code: string) => string;
  handleClickNavigateToDetailPage: (val: any) => any;
}

export default function AnimalListUI(props: AnimalListProps) {
  return (
    <>
      <AnimalWrapper>
        <TableWrapper>  
          <ImgWrapper>
            <img
              src={props.animal.popfile}
              alt={props.animal.noticeNo}
              width={200}
              height={150}
              style={{borderRadius:"10%"}}
            />
          </ImgWrapper>
          <NameWrapper>
            <Tag >{props.animal.processState}</Tag>
            <h4 style={{marginTop:"10px"}}>{props.animal.kindCd}</h4>
          </NameWrapper>
          <ContentsWrapper>
              <span>
                {props.convertAnimalSexCdToString(props.animal.sexCd)}(
                {props.convertAnimalNeuterYnToString(props.animal.neuterYn)})
              </span>
          </ContentsWrapper>
          <ContentsWrapper>
              <span>{props.animal.happenPlace}</span>
              <span>{props.animal.careNm}</span>
          </ContentsWrapper>
        </TableWrapper>
      </AnimalWrapper>
    </>
  );
}
