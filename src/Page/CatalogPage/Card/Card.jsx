import Button from "../../../components/Button/Button"
import styles from "./Card.module.css"
import { Link } from "react-router-dom"
import { products } from "../../../products"
import cart from "../../../assets/common/cart.png"
import item1 from "../../../assets/Products/Item1.jpg"
import item2 from "../../../assets/Products/Item2.jpg"
import item3 from "../../../assets/Products/Item3.jpg"
import item4 from "../../../assets/Products/Item4.jpg"
import item5 from "../../../assets/Products/Item5.jpg"
import item6 from "../../../assets/Products/Item6.jpg"
import item7 from "../../../assets/Products/Item7.jpg"
import item8 from "../../../assets/Products/Item8.jpg"
import item9 from "../../../assets/Products/Item9.jpg"

export default function Card({
	id,
	name,
	price,
	imagePath,
	isCard,
	addToCart,
}) {
	function GameInfo() {
		// find возвращает объект из массива, который соответствует условию
		const product = products.find((game) => game.id == id)

		if (!product)
			return {
				description: "Нет описания",
				developer: "Неизвестный разработчик",
				releaseDate: "Нет данных",
				tags: [],
			}

		// Ограничиваем описание до 220 символов и добавляем многоточие
		const shortDescription =
			product.description.length > 220
				? product.description.substring(0, 220) + "..."
				: product.description

		return {
			description: shortDescription,
			developer: product.developer,
			releaseDate: product.releaseDate,
			tags: product.tags || [],
		}
	}

	const gameInfo = GameInfo()

	return (
		<Link to={`/catalog/${id}`} className={styles.gameCardLink}>
			<div className={styles.gameCard}>
				<div className={styles.gameImage}>
					<img src={imagePath} alt={name} />
				</div>
				<div className={styles.gameContent}>
					<h3 className={styles.gameTitle}>{name}</h3>
					<div className={styles.gameDetails}>
						<div className={styles.gameInfo}>
							<p className={styles.gameDeveloper}>
								Разработчик: {gameInfo.developer}
							</p>
							<p className={styles.gameReleaseDate}>
								Дата выхода: {gameInfo.releaseDate}
							</p>
						</div>
						<div className={styles.gameTags}>
							{gameInfo.tags.map((tag, index) => (
								<span key={index} className={styles.tag}>
									{tag}
								</span>
							))}
						</div>
						<div className={styles.gameDescription}>
							{gameInfo.description}
						</div>
					</div>
					<div className={styles.gameFooter}>
						<div className={styles.priceBlock}>
							<h3 className={styles.price}>{price}₽</h3>
						</div>
						<div className={styles.buttons}>
							{isCard && (
								<button
									onClick={(e) => {
										e.preventDefault()
										addToCart()
									}}
									
									className={styles.cartButton}
									title="Добавить в корзину"
								>
									<img src={cart} alt="cart" />
								</button>
							)}

							<span
								className={styles.detailsLink}
								onClick={(e) => e.preventDefault()}
							>
								<Link to={`/catalog/${id}`} className={styles.gameCardLink}>
									<Button value={"Подробнее"} type="btnPurple" />
								</Link>
							</span>
						</div>
					</div>
				</div>
			</div>
		</Link>
	)
}
