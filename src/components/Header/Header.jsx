import './style.css';
import '../../App.css';
import pinIcon from '/src/assets/pin.svg';
import phoneIcon from '/src/assets/phone.svg';
import heartIcon from '/src/assets/heart.svg';
import searchIcon from '/src/assets/search.svg';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header>
      <div className="container">
        <section className="flexheader">
          <div className="logo">
            <h1>
              <Link to="/">MagaNets</Link>
            </h1>
          </div>

          <div className="menu">
            <ul className="menu--links">
              <li>
                <img src={pinIcon} /> Cidade: São Paulo
              </li>
              <li>
                <img src={phoneIcon} /> Central de Atendimento
              </li>
              <li>
                <img src={heartIcon} />{' '}
                <Link to="/wishlist">Lista de desejos</Link>
              </li>
            </ul>
            <div className="menu--busca">
              <img src={searchIcon} />
              <input type="text" placeholder="Busca" />
            </div>
          </div>
        </section>
      </div>
    </header>
  );
}
