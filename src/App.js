import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      let response = await fetch("https://jsonplaceholder.typicode.com/todos");
      console.log(response);
      let data = await response.json();
      console.log(data);
      setUser(data);
    };
    fetchAPI();
  }, []);

  return (
    <>
      {user.map((p) => (
        <>
          <p>{p.userId}</p>

          <p>{p.title}</p>
        </>
      ))}
    </>
  );
}
