import { useAuth } from "@/commons/hooks/useAuth";
import SignupForm from "@/components/SignUpForm/SignUpForm.container";
import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";

export const FETCH_USER_LOGGED_IN = gql`
    query fetchUserLoggedIn {
        fetchUserLoggedIn {
            email
            name
        }
    }
`

export default function MyPage() {
    useAuth();
    const { data } = useQuery(FETCH_USER_LOGGED_IN);

    return (
        <SignupForm isEdit={true} data={data}/>
    )
}