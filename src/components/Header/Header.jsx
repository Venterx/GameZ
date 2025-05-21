import { NavLink } from "react-router-dom"
import logo from "../../assets/common/Logo.jpg"
import Button from "../Button/Button"
import s from "./Header.module.css"

export default function Header() {
	return (
		<header className={s.header}>
			<div className={s.header__inner}>
				<div className={s.logo__container}>
					<NavLink to="/">
						<img src={logo} alt="GameZ logo" className={s.logo__img} />
						<div className={s.logo__text}>GameZ</div>
					</NavLink>
				</div>
				<div className={s.nav}>
					<NavLink to="/" className={`${s.nav__item} nav__item`}>О нас</NavLink>
					<NavLink to="/catalog" className={`${s.nav__item} nav__item`}>Каталог</NavLink>
					<NavLink to="/posts" className={`${s.nav__item} nav__item`}>Контакты</NavLink>
					<NavLink to="/cart" className={`${s.nav__item} nav__item`}>Корзина</NavLink>
				</div>
				<div className={s.buttons}>
					<Button value="Регистрация" type="btnDark"></Button>
					<Button value="Вход" type="btnPurple"></Button>
				</div>
			</div>
		</header>
	)
}
