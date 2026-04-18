import { useEffect, useState } from "react";

export default function Github() {
  const [user, setUser] = useState({});
  useEffect(() => {
    fetch("https://api.github.com/users/the2rivage")
      .then((res) => res.json())
      .then((res) => setUser(res));
  }, []);
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github Followers - {user.followers}
      <img src={user.avatar_url} alt="Git Picture" width={300}/>
    </div>
  );
}
