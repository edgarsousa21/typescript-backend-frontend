import { useState, useEffect } from 'react'
import api from './services/api'


function App() {
  const [products, setProducts] = useState<IProducts[]>([])

  enum States{
    "MG" = "Minas Gerais",
    "SP" = "São Paulo",
    "RJ" = "Rio de Janeiro",
    "GO" = "Goiás",
    "SC" = "Santa Catarina",
    "PR" = "Paraná",
    "AM" = "Amazonas"

}

interface IAddress{
    street: String;
    number: number;
    state: States;
}

interface IProducts {
    id: number;
    name: string;
    price: number;
    description?: string; // ? -> Siginica que não é obrigatório colocar.
    address: IAddress;

}

  useEffect(() => {
    async function getProducts(){
      const response = await api.get<IProducts[]>('/produtos')
      setProducts(response.data)
      // console.log(response.data)
    }
    getProducts()
  }, [])

  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          <p>{product.name}</p>
          <p>{product.price}</p>
          <p>{product.description}</p>         

        </div>
      ))}
    </div>
  )
}

export default App
