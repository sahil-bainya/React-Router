import { useLoaderData } from "react-router-dom";

export default function Github() {
  // useLoaderData() React Router ka hook hai
  // Ye data automatically provide karta hai jo route ke loader function se aata hai
  // 👉 Matlab: fetch logic yaha nahi likhna padta, wo already loader me hota hai
  const user = useLoaderData();

  // 👇 Ye traditional way tha (manual fetch using useEffect)
  // Ab iski need nahi hai kyunki loader use ho raha hai
  //   const [user, setUser] = useState({});
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/the2rivage")
  //       .then((res) => res.json())
  //       .then((res) => setUser(res));
  //   }, []);

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github Followers - {user.followers}
      <img src={user.avatar_url} alt="Git Picture" width={300} />
    </div>
  );
}
