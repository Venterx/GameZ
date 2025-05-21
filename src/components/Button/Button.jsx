import styles from "./Button.module.css"

export default function Button({ value, type, onClick }) {
	let btn = ""

	switch (type) {
		case "btnBlue":
			btn = styles.btnBlue
			break
		case "btnBlack":
			btn = styles.btnBlack
			break
		case "btnGray":
			btn = styles.btnGray
			break
		case "btnWhite":
			btn = styles.btnWhite
			break
		case "btnBlueSmall":
			btn = styles.btnBlueSmall
			break
		case "btnBlueBig":
			btn = styles.btnBlueBig
			break
		case "btnGrayBig":
			btn = styles.btnGrayBig
			break
		case "btnPurple":
			btn = styles.btnPurple
			break
		case "btnDark":
			btn = styles.btnDark
			break
		case "btnGreen":
			btn = styles.btnGreen
			break
		default:
			btn = styles.btnDark
	}

	return (
		<button className={btn} onClick={onClick}>
			{value}
		</button>
	)
}
