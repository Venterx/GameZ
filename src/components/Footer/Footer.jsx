import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import logo from '../../assets/common/Logo.jpg';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footer__content}>
          <div className={styles.footer__logo}>
            <Link to="/">
              <img src={logo} alt="GameZ Logo" className={styles.logo__img} />
            </Link>
            <p className={styles.footer__slogan}>
              Ваш портал в мир игровых развлечений
            </p>
          </div>
          
          <div className={styles.footer__links}>
            <div className={styles.footer__column}>
              <h4>О магазине</h4>
              <ul>
                <li><Link to="/">О нас</Link></li>
                <li><Link to="/posts">Контакты</Link></li>
                <li><Link to="/">Доставка и оплата</Link></li>
                <li><Link to="/">Бонусная программа</Link></li>
              </ul>
            </div>
            
            <div className={styles.footer__column}>
              <h4>Каталог</h4>
              <ul>
                <li><Link to="/catalog">Все игры</Link></li>
                <li><Link to="/catalog">Экшн</Link></li>
                <li><Link to="/catalog">Инди</Link></li>
                <li><Link to="/catalog">Симуляторы</Link></li>
              </ul>
            </div>
            
            <div className={styles.footer__column}>
              <h4>Помощь</h4>
              <ul>
                <li><Link to="/">Вопросы и ответы</Link></li>
                <li><Link to="/">Политика возврата</Link></li>
                <li><Link to="/">Политика конфиденциальности</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className={styles.footer__bottom}>
          <p>2025 GameZ. Все права защищены. Да-да, это чистая правда!</p>
        </div>
      </div>
    </footer>
  );
};

