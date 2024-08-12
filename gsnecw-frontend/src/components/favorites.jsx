
import React,{useEffect,useState} from 'react';
import axios from "axios"

export function Favorites ()  {
  const[favourites,setFavourites]=useState([])

  useEffect(() => {
    const fetchFavourites = async () => {
      try {
        const token = localStorage.getItem('token'); 
        const response = await axios.get('http://127.0.0.1:5000/favourites', {
          headers: {
            "Authorization": `Bearer ${token}`  
          }
        });
        setFavourites(response.data); 
      } catch (error) {
        // setError('Error fetching favourites :(');
        console.error('Error fetching favourites :( ', error);
      }
    };

    fetchFavourites(); 
  }, []);

  if (favourites.length === 0) {
    return <div>No favourites found</div>;
  }

  let fav_list=[]
  for (let product of favourites)
    fav_list.push(
      <li key={product.id}>
       <h3> {product.name} </h3>
       <p>{product.description}</p>
       <h3>{product.price}</h3>
       <h3>{product.stock}</h3>
       <img src={product.image_url} alt={product.name} style={{ width: '100px', height: '100px' }} />

      </li>
    );
    
 
  return (

    <div>
    <ol>
    {fav_list}
    </ol>
    </div>
  )
}


export function Addfavourites({ productId }) {
  const [newfavourites, setNewFavourites] = useState([]);

  useEffect(() => {
    const addFavourite = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.post(`http://127.0.0.1:5000/favourites/add`,
          { product_id: productId },
          {
            headers: {
              "Authorization": `Bearer ${token}`,
              // "Content-Type": "application/json" // Ensure Content-Type is set correctly
            }
          }
        );
        setNewFavourites(prevFavourites => [...prevFavourites, response.data]);

      } catch (error) {
        console.error('Error adding to favourites :( ', error);
      }
    };

    addFavourite();
  }, [productId]);

  return (
    <div>
      {error ? <p>{error}</p> : <h2>Added to Favourites</h2>}
    </div>
  );
}









