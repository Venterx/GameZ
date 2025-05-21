import styles from "./PostPage.module.css"
import Button from "../../components/Button/Button"
import { useState, useEffect } from "react"

export default function PostPage() {
	const [message, setMessage] = useState("")
	const [submitted, setSubmitted] = useState(false)


	// Функция отправки формы
	function handleSubmit(e) {
		e.preventDefault()
		const formData = new FormData(e.target)

		fetch("https://jsonplaceholder.typicode.com/users", {
			method: "POST",
			body: formData,
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error("Ошибка сети")
				}
				return response.json()
			})
			.then((data) => {
				console.log("Успешно отправлено:", data)
				setMessage("Форма отправлена")
				setSubmitted(true)
                // очистка полей
				e.target.reset()
			})
			.catch((error) => {
				console.error("Ошибка:", error)
				setMessage("Ошибка при отправке формы")
			})
	}



	return (
		<div className={styles.contacts}>
			<div className={styles.container}>
				<h1 className={styles.title}>Контакты</h1>

				<div className={styles.content}>
					<div className={styles.info}>
						<div className={styles.info__block}>
							<h3>Адрес</h3>
							<p>г. Казань, ул. Звезда деревни, 101</p>
							<p>ТЦ "GameHub", 3 этаж</p>
						</div>

						<div className={styles.info__block}>
							<h3>Время работы</h3>
							<p>Пн-Пт: 10:00 - 22:00</p>
							<p>Сб-Вс: 11:00 - 23:00</p>
						</div>

						<div className={styles.info__block}>
							<h3>Контактная информация</h3>
							<p>Телефон: +7 (843) 555-35-35</p>
							<p>Email: kazan@gamez.ru</p>
							<p>Discord: discord.gg/gamez-kazan</p>
						</div>
					</div>

					<div className={styles.form__container}>
						<h2>Обратная связь</h2>
						{submitted ? (
							<div className={styles.success}>
								<p>
									{message ||
										"Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время."}
								</p>
								<Button
									value="Отправить еще сообщение"
									type="btnPurple"
									onClick={() => setSubmitted(false)}
								/>
							</div>
						) : (
							<form className={styles.form} onSubmit={handleSubmit}>
								<div className={styles.form__group}>
									<label htmlFor="name">Ваше имя</label>
									<input type="text" id="name" name="name" required />
								</div>

								<div className={styles.form__group}>
									<label htmlFor="email">Ваш email</label>
									<input type="email" id="email" name="email" required />
								</div>

								<div className={styles.form__group}>
									<label htmlFor="message">Сообщение</label>
									<textarea
										id="message"
										name="message"
										rows="5"
										required
									></textarea>
								</div>

								<Button value="Отправить" type="btnPurple" />
								{message && !submitted && (
									<p className={styles.message}>{message}</p>
								)}
							</form>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}
