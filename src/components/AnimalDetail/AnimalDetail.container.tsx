import {message} from "antd";
import {useRouter} from "next/router";
import AnimalDetailUI from "./AnimalDetail.presenter";
import { useEffect } from "react";

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

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=141b72fe32f28ea40df3efa0ab78ecc4&libraries=services"
    document.head.appendChild(script);

    script.onload = async () => {
        window.kakao.maps.load(function() {
            const container = document.getElementById('map');
            const options = {
                center: new window.kakao.maps.LatLng(33.450701, 126.570667),
                level: 3
            };
    
            const map = new window.kakao.maps.Map(container, options);
            const geocoder = new window.kakao.maps.services.Geocoder();
            console.log(animal.careAddr)
            geocoder.addressSearch(`${animal.careAddr}`, function(result: any, status: any) {

                // 정상적으로 검색이 완료됐으면 
                 if (status === window.kakao.maps.services.Status.OK) {
            
                    const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);
            
                    // 결과값으로 받은 위치를 마커로 표시합니다
                    const marker = new window.kakao.maps.Marker({
                        map: map,
                        position: coords
                    });
            
                    // 인포윈도우로 장소에 대한 설명을 표시합니다
                    const infowindow = new window.kakao.maps.InfoWindow({
                        content: `<div style="width:200px;text-align:center;padding:6px 0;">${animal.careNm}</div>`
                    });
                    infowindow.open(map, marker);
            
                    // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
                    map.setCenter(coords);
                } 
              });    
            })
          };
        }, [])
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
