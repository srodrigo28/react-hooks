import { useState,useEffect } from "react"

export function App(){
  const [entity, setEntity] = useState("users");
  const [data, setData] = useState([])

  useEffect( () => {
    const fetchResourceType = async () => {
      
      const response = await fetch(
        `http://localhost:3000/${entity}`
      );
      const responseJson = await response.json();

      console.log(responseJson)
      setData(responseJson)
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
       <button onClick={ () => changeEntity("users")}>Usuários</button>
       <button onClick={ () => changeEntity("customers")}>Clientes</button>
       <button onClick={ () => changeEntity("products")}>Produtos</button>
    </div>

    {
      data.map( item => (
        <div key={item.id}>
          <p>{item.id}</p>
          <p>{item.name}</p>
        </div>
      ))
    }
  </div>
}