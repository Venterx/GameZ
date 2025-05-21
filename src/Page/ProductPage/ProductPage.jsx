import { useParams } from "react-router-dom"
import Button from "../../components/Button/Button"
import { products } from "../../products"
import style from "../ProductPage/ProductPage.module.css"
import { useState, useEffect } from "react"

export default function ProductPage({ cart = [], setCart }) {
	const { id } = useParams()
	const product = products.find((product) => product.id == id)
	const [isInCart, setIsInCart] = useState(false)

	useEffect(() => {
		if (cart && cart.includes(Number(id))) {
			setIsInCart(true)
		} else {
			setIsInCart(false)
		}
	}, [cart, id])

	const handleAddToCart = () => {
		if (setCart) {
			setCart([...cart, Number(id)])
			setIsInCart(true)
		}
	}

	const handleRemoveFromCart = () => {
		if (setCart) {
			setCart(cart.filter((itemId) => itemId !== Number(id)))
			setIsInCart(false)
		}
	}

	if (!product) {
		return <div className={style.product}>Товар не найден</div>
	}

	return (
		<div className={style.product}>
			<div className={style.product__img}>
				<img src={`/${product.imagePath}`} alt={product.name} />
			</div>
			<div className={style.product__about}>
				<h2 className={style.product__name}>{product.name}</h2>

				<div className={style.product__info}>
					<div className={style["product__info-item"]}>
						<span className={style["product__info-label"]}>Разработчик:</span>
						<span className={style["product__info-value"]}>
							{product.developer}
						</span>
					</div>
					<div className={style["product__info-item"]}>
						<span className={style["product__info-label"]}>Дата выхода:</span>
						<span className={style["product__info-value"]}>
							{product.releaseDate}
						</span>
					</div>
					<div className={style["product__info-item"]}>
						<span className={style["product__info-label"]}>Теги:</span>
						<div className={style.tags}>
							{product.tags.map((tag, index) => (
								<span key={index} className={style.tag}>
									{tag}
								</span>
							))}
						</div>
					</div>
				</div>

				<div className={style.description}>{product.description}</div>

				{product.price === 0 ? (
					<p className={`${style.product__price} ${style.free}`}>Бесплатно</p>
				) : (
					<p className={style.product__price}>{product.price}₽</p>
				)}

				{isInCart ? (
					<Button
						value="Удалить из корзины"
						type="btnWhite"
						onClick={handleRemoveFromCart}
					/>
				) : (
					<Button value="В корзину" type="btnPurple" onClick={handleAddToCart} />
				)}
			</div>
		</div>
	)
}
