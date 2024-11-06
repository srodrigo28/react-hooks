import { useState,useEffect } from "react"

export function App(){
  const [entity, setEntity] = useState("users");

  useEffect( () => {
    const fetchResourceType = async () => {
      const response = await fetch(
        `http://localhost:3000/${entity}`
      );
      const responseJson = await response.json();

      console.log(responseJson)
    };

    fetchResourceType();
  }, [entity])

  const changeEntity = (entity) => {
    setEntity(entity);
    console.log(entity);
  }
  return <div>
    <h1>Hello React Hooks</h1>
    <p>Entity: {entity}</p>

    <div style={{ display: "flex", alignItems: "center" }}>
       <button onChange={ () => changeEntity("users")}>Usuários</button>
       <button onChange={ () => changeEntity("customers")}>Clientes</button>
       <button onChange={ () => changeEntity("products")}>Produtos</button>
    </div>
  </div>
}