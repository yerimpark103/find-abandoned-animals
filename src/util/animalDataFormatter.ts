import {HashArray} from "@/types/global.types";

export const convertAnimalSexCdToString = (code: string | any): string => {
  const legend: HashArray = {M: "수컷", F: "암컷", Q: "성별 불명"};
  return legend[code];
};

export const convertAnimalNeuterYnToString = (code: string | any): string => {
  const legend: HashArray = {Y: "중성화 O", N: "중성화 X", U: "중성화 불명"};
  return legend[code];
};

export const convertDateFormat = (date: any) => {
  if (date) return `${date.slice(0, 4)}-${date.slice(4, 6)}-${date.slice(6)}`;
};