import img from "../../assets/common/Banner.jpg"
import styles from "./Banner.module.css"
import Button from "../Button/Button"
import { Link } from "react-router-dom"

export default function Banner() {
	const banner = {
		height: "100vh",
		backgroundImage: `url(${img})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-start",
	}

	return (
		<div style={banner}>
			<div className={styles.banner__inner}>
				<h1 className={styles.banner__title}>GameZ</h1>
				<p className={styles.banner__slogan}>Ваш портал в мир игровых развлечений</p>
				<Link to="/catalog">
					<Button value="Смотреть каталог" type="btnPurple" />
				</Link>
			</div>
		</div>
	)
}
