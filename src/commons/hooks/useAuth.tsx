import { useEffect } from "react";
import { useRouter } from "next/router";

export function useAuth() {
    const router = useRouter();

    useEffect(() => {
        if(!localStorage.getItem("accessToken")) {
            alert("로그인 후 이용 가능합니다.");
            void router.push("/");
        }; 
    }, []);
}