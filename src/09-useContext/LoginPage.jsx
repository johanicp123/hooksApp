import { useContext } from "react";
import { UserContext } from "./context/userContext";

export const LoginPage = () => {
  const {user, setUser} = useContext(UserContext);
 
  return (
    <>
      <h1>LoginPage</h1>
      <hr />
      <pre>
        {JSON.stringify(user,null,3)}
      </pre>
      <button 
      className="btn btn-primary"
      onClick={()=> setUser({ id:123,name:"Alberth",email:"johani@gmail.com"})}
      >
        Establecer Usuario
      </button>
    </>
  );
};
