import './style.css';
import { useState, useEffect } from 'react';
import LikeModel from './like.model';

export function LikeButton({ item }) {
  function loadStorage() {
    const storageData = localStorage['wishListItems'];
    const wishListItems = storageData ? JSON.parse(storageData) : [];
    localStorage['wishListItems'] = JSON.stringify(wishListItems);

    return wishListItems;
  }

  const [isLike, setIsLike] = useState(false);

  useEffect(() => {
    loadStorage();
    const storageData = localStorage['wishListItems'];

    if (storageData.includes(item.id)) {
      setIsLike(true);
    } else {
      setIsLike(false);
    }
  }, []);

  const handleLike = () => {
    const storageData = localStorage['wishListItems'];
    const wishListItems = JSON.parse(storageData) || [];

    if (storageData.includes(item.id)) {
      setIsLike(false);
      const filtered = wishListItems.filter((a) => a.id !== item.id);
      localStorage['wishListItems'] = JSON.stringify(filtered);
    } else {
      setIsLike(true);
      wishListItems.push(new LikeModel(item.id, item.title, true));
      localStorage['wishListItems'] = JSON.stringify(wishListItems);
    }
  };

  return (
    <section className="likebutton">
      <button
        onClick={handleLike}
        aria-hidden="true"
        type="button"
        className={`bt-like like-button ${isLike ? 'liked' : ''}`}
      >
        <svg width="20px" height="20px" viewBox="0 0 32 32">
          <path d="M26.996 12.898c-.064-2.207-1.084-4.021-2.527-5.13-1.856-1.428-4.415-1.69-6.542-.132-.702.516-1.359 1.23-1.927 2.168-.568-.938-1.224-1.652-1.927-2.167-2.127-1.559-4.685-1.297-6.542.132-1.444 1.109-2.463 2.923-2.527 5.13-.035 1.172.145 2.48.788 3.803 1.01 2.077 5.755 6.695 10.171 10.683l.035.038.002-.002.002.002.036-.038c4.415-3.987 9.159-8.605 10.17-10.683.644-1.323.822-2.632.788-3.804z" />
        </svg>
      </button>
    </section>
  );
}