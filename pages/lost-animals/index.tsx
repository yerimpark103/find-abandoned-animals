import {Radio} from "antd";

import AnimalCard from "@/components/AnimalsView/AnimalCard/AnimalCard.container";
import AnimalList from "@/components/AnimalsView/AnimalList/AnimalList.container";
import {useRecoilState} from "recoil";
import {viewTypeState} from "@/commons/store";
import {faBorderAll, faList} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useState} from "react";
import Filter from "@/components/Common/Filter/Filter.container";

export default function LostAnimalsPage() {
  const [defaultView, setDefaultView] = useRecoilState(viewTypeState);
  const [appliedFilter, setAppliedFilter] = useState("");

  const handleChangeViewType = (e: any) => {
    setDefaultView(e.target.value);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "1.5rem",
        }}
      >
        <h3>유기동물 리스트</h3>
        <span style={{display: "flex", gap: "0.5rem"}}>
          <Filter setAppliedFilter={setAppliedFilter} />
          <Radio.Group value={defaultView} onChange={handleChangeViewType}>
            <Radio.Button value="list">
              <FontAwesomeIcon icon={faList} />
            </Radio.Button>
            <Radio.Button value="card">
              <FontAwesomeIcon icon={faBorderAll} />
            </Radio.Button>
          </Radio.Group>
        </span>
      </div>
      {defaultView === "list" ? (
        <AnimalList appliedFilter={appliedFilter} />
      ) : (
        <AnimalCard appliedFilter={appliedFilter} />
      )}
    </>
  );
}
