
import { useState } from 'react'
import { useEffect } from 'react'
import { gFetch } from '../../utils/gFetch'
import { Link, useParams } from 'react-router-dom';
import '../ItemListContainer/ItemListContainer.css'


export const ItemListContainer = ({ greeting, subGreeting }) => {
  
  const [ productos, setProductos ] = useState([])
  const [ loading, setLoading ] = useState(true)

  const { idCategoria } = useParams()
  // Uso este hook para capturar el parametro categoria cuando presion el boton de categoria
  // console.log({idCategoria})  // Colocar la variable entre corchetes, cuando esta se llama igual que al contenido, esto sirve para ver lo que contiene


  useEffect(() => {
    if(idCategoria) {
      gFetch()
        .then(res => {
          setProductos(res.filter(producto => producto.categoria == idCategoria))
        })
        .catch(error => console.log(error))
        .finally(() => setLoading(false))    
   
      } else {
      gFetch()
        .then(res => {
          setProductos(res)
        })
        .catch(error => console.log(error))
        .finally(() => setLoading(false))    
    }
  }, [idCategoria])

  // Coloco el parametro para que no se vuelva a renderizar
  
  // console.log(productos)

  return (
    // <div className='greeting'>
    
        loading 
        ? 
          <h2 className='cargando'>Cargando productos...</h2>
        :
      <div className='listContainer'>
        { productos.map(producto => <div key={producto.id} className='card w-25 mt-2 m-2'>
                                      <div className='card-header'>
                                       <h4>
                                        {producto.nombre}
                                       </h4>
                                      </div>
                                      <div className='card-body'>
                                        <img src={producto.imagen} alt='foto' className='w-100'/>  
                                        <h5>
                                          Categoria: {producto.categoria}<br/>
                                        </h5>
                                        <h5> 
                                          Precio: ${producto.precio}<br/>
                                        </h5>
                                      </div>
                                      <div className='card-footer'>
                                      <Link to={`/detalle/${producto.id}`}>
                                        <button className='btn btn-outline-primary w-100' >Detalle</button>
                                      </Link>
                                      </div>
                                    </div>) }
    </div>
 
 
 )
}

export default ItemListContainer