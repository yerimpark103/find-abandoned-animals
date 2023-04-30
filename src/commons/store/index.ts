import {atom} from "recoil";

export const viewTypeState = atom({
  key: "viewTypeState",
  default: "list",
});

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
})

export const mapState = atom({
  key: "mapState",
  default: "",
})

export const placeName = atom({
  key: "placeName",
  default: "",
})