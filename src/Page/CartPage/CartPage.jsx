import { products } from "../../products"
import Card from "../CatalogPage/Card/Card"
import s from "./CartPage.module.css"
import Button from "../../components/Button/Button"
import { Link } from "react-router-dom"

export default function CartPage({ cart, setCart }) {

	// изначально cart пустой
	// [0, 1, 2] id тех карточек, что выбрали
	const cartProducts = cart.map((id) => products.find((item) => 
		item.id === id)
	)


	const allPrice = cartProducts.reduce((sum, item) => sum + item.price, 0) // 0 это initialValue

	

	function handleRemoveFromCart(itemId)  {
		setCart(cart.filter((id) => id !== itemId))
	}

	return (
		<div className={s.cart}>
			<h1 className={s.cart__title}>Корзина</h1>

			{cartProducts.length === 0 ? (
				<div className={s.cart__empty}>
					<p>Ваша корзина пуста</p>
					<Link to="/catalog">
						<Button value="Перейти в каталог" type="btnPurple" />
					</Link>
				</div>
			) : (
				<>
					<div className={s.cart__items}>
						{cartProducts.map((item) => (
							<div key={item.id} className={s.cart__item}>
								<div className={s.item__image}>
									<img src={`/${item.imagePath}`} alt={item.name} />
								</div>
								<div className={s.item__info}>
									<h3>{item.name}</h3>
									{item.price === 0 ? (
										<p className={`${s.item__price} ${s.free__price}`}>
											Бесплатно
										</p>
									) : (
										<p className={s.item__price}>{item.price}₽</p>
									)}
								</div>
								<Button
									value="Удалить"
									type="btnWhite"
									onClick={() => handleRemoveFromCart(item.id)}
								/>
							</div>
						))}
					</div>

					<div className={s.cart__summary}>
						<div className={s.cart__total}>
							<p>Итого:</p>
							{allPrice === 0 ? (
								<p className={`${s.total__price} ${s.free__price}`}>
									Бесплатно
								</p>
							) : (
								<p className={s.total__price}>{allPrice}₽</p>
							)}
						</div>
						<Button value="Оформить заказ" type="btnPurple" />
					</div>
				</>
			)}
		</div>
	)
}
