import { useState, useEffect } from 'react';
import { Header } from '../../components/Header/Header';
import '../../App.css';

export function Wishlist() {
  const [likedProducts, setlikedProducts] = useState([]);

  useEffect(() => {
    const getList = localStorage.getItem('wishListItems');

    if (getList) {
      setlikedProducts(JSON.parse(getList));
    }
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <h1>Home / Lista de desejos</h1>

        {likedProducts.map((item) => (
          <div key={item.id}>
            <div>
              <p>{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
