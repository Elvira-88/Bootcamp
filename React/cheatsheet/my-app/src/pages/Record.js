import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

export default function Record(props) {

    const [UserData, setUserData] = useState({});

    const {user} = useParams();

    const USERS_URL = "https://reqres.in/api/users/";
    
    useEffect(() => {
        fetch(`${USERS_URL}${user}`)
        .then(response => response.json())
        .then(data => setUserData(data))
    }, [user])

    return (
        <div>
            <h2>Record of user{user}</h2>
            <ul>
                <li>{UserData.data?.email}</li>
                <li>{UserData.data?.first_name}</li>
                <li>{UserData.data?.last_name}</li>
                <img src={UserData.data?.avatar} alt="Profile"/>
            </ul>
            
        </div>
    )
}
