import { useEffect, useState } from 'react';
import { Header } from '../../components/Header/Header';
import '../../App.css';
import './style.css';
import axios from 'axios';
import { LikeButton } from '../../components/LikeButton/LikeButton';

export function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchSearch = async () => {
      const result = await axios(
        'https://run.mocky.io/v3/66063904-d43c-49ed-9329-d69ad44b885e'
      );
      setItems(result.data.products);
    };
    fetchSearch();
  }, [items]);

  return (
    <>
      <Header />
      <div className="container">
        <h1>Home</h1>
        <section className="products">
          {items.map((item) => (
            <div key={item.id} className="products--items">
              <LikeButton item={item} />
              <img src={item.image} />
              <p className="products--items__title">{item.title}</p>
              <p className="products--items__price">R$ {item.price}</p>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}
