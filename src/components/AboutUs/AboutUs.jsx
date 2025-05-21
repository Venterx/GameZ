import React from 'react';
import styles from './AboutUs.module.css';

export default function AboutUs(){
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.about__title}>О нас</h2>
        <div className={styles.about__content}>
          <div className={styles.about__text}>
            <p>Добро пожаловать в GameZ – ваш надежный проводник в мире игровых развлечений!</p>
            <p>Мы – современный магазин игр, который объединяет геймеров всех возрастов и предпочтений. В нашем каталоге вы найдете более 5000 игр различных жанров: от захватывающих экшенов до увлекательных инди-проектов, от реалистичных симуляторов до сложных стратегий.</p>
            <p>Наша миссия – делать качественные игры доступными каждому, открывать новые виртуальные миры и поддерживать культуру гейминга в современном цифровом пространстве.</p>
          </div>
          <div className={styles.about__advantages}>
            <div className={styles.advantage}>
              <h3>Персональные рекомендации</h3>
              <p>Наши эксперты помогут подобрать игры, которые идеально соответствуют вашим интересам и техническим возможностям</p>
            </div>
            <div className={styles.advantage}>
              <h3>Киберспортивные события</h3>
              <p>Регулярные турниры и трансляции киберспортивных соревнований для всех желающих</p>
            </div>
            <div className={styles.advantage}>
              <h3>Программа лояльности</h3>
              <p>Скидки, эксклюзивные релизы и специальные предложения для постоянных клиентов</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
