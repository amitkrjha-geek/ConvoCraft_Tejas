import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { addChat } from "../../utils/chatSlice";

export const useChat=() => {
    const dispatch = useDispatch();

    const getChat = async () => {
        const atoken = window.localStorage.getItem("access_token");
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${atoken}`,
            }
        }
        const data = await axios.get(
            "http://localhost:5000/api/v1/chats/",
            config
        );
        // console.log(data.data);
        
        dispatch(addChat(data.data));

    }
    useEffect(()=>{getChat()},[])

}