import Button from "../../../components/Button/Button"
import Card from "../Card/Card"
import styles from "./Catalog.module.css"
import { products, product } from "../../../products"
import Search from "../../../components/Search/Search"
import { useState } from "react"
import s from "../../../components/Button/Button.module.css"

export default function Catalog({ cart, setCart }) {
	const [find, setFind] = useState("")
	const [sorting, setSorting] = useState(0)
	const [category, setCategory] = useState("all")
	const isCard = true

	function sortProducts(sorting, filtered) {
		switch (sorting) {
			case "asc":
				return [...filtered].sort((a, b) => a.price - b.price)
			case "desc":
				return [...filtered].sort((a, b) => b.price - a.price)
			default:
				return filtered
		}
	}

	// filter создает новый массив, элементы в котором соответствуют условию
	// includes ищет в строке текст и возвращает true
	const filtered = products.filter(
		(item) =>
			item.name.toLowerCase().includes(find.toLowerCase()) &&
			(item.categoryId == category || category == "all")
	)

	const sortedFiltered = sortProducts(sorting, filtered)

	return (
		<div className={styles.catalog}>
			<h2 className={styles.catalog__title}>Каталог игр</h2>

			<div className={styles["filter-container"]}>
				<Search handleChange={(e) => setFind(e.target.value)} />

				<select
					value={sorting}
					onChange={(e) => setSorting(e.target.value)}
					className={styles.selectSort}
				>
					<option value="0">Сортировать</option>
					<option value="asc">По возрастанию цены</option>
					<option value="desc">По убыванию цены</option>
				</select>
			</div>

			<div className={styles.catalog__line}>
				<p>Категории:</p>
				<div className={styles.category}>
					<button onClick={() => setCategory("all")} className={s.btnPurple}>
						Все игры
					</button>
					<button onClick={() => setCategory(1)} className={s.btnDark}>
						Экшен
					</button>
					<button onClick={() => setCategory(2)} className={s.btnDark}>
						Инди
					</button>
					<button onClick={() => setCategory(3)} className={s.btnDark}>
						Симуляторы
					</button>
				</div>
			</div>

			<div className={styles.gamesContainer}>
				{sortedFiltered.length ? (
					sortedFiltered.map((product) => (
						<Card
							id={product.id}
							key={product.id}
							name={product.name}
							price={product.price}
							imagePath={product.imagePath}
							isCard={isCard}
							addToCart={() => setCart([...cart, product.id])}
							// cart это пустой массив, в который добавляем id карточки при нажатии
						/>
					))
				) : (
					<p className={styles.notFound}>
						По запросу "{find}" ничего не найдено
					</p>
				)}
			</div>
		</div>
	)
}
