import {message} from "antd";
import {useRouter} from "next/router";
import AnimalDetailUI from "./AnimalDetail.presenter";

export default function AnimalDetail() {
  const router = useRouter();
  const animal = {...router.query};

  const handleClickPhoneNumber = (phoneNumber: string | any) => {
    if (typeof window !== "undefined") {
      void navigator.clipboard.writeText(phoneNumber);
      void message.success("전화번호를 복사했습니다.");
    }
  };

  const handleClickGoBackRoute = () => {
    router.back();
  };

  return (
    <>
      <AnimalDetailUI
        animal={animal}
        handleClickPhoneNumber={handleClickPhoneNumber}
        handleClickGoBackRoute={handleClickGoBackRoute}
      />
    </>
  );
}
