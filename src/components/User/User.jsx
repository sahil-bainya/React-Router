import { useParams } from "react-router-dom"
export default function User(){
    const {username} = useParams();
    return (<>
    <h2 className="text-center bg-gray-600 text-white text-3xl p-4">User : {username}</h2>
    </>)
}