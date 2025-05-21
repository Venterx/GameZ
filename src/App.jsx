import Header from "./components/Header/Header"
import { Route, Routes } from "react-router-dom"
import HomePage from "./Page/HomePage/HomePage"
import Catalog from "./Page/CatalogPage/Catalog/Catalog"
import ProductPage from "./Page/ProductPage/ProductPage" 
import PostPage from "./Page/PostPage/PostPage"
import { useState } from "react"
import CartPage from "./Page/CartPage/CartPage"
import Footer from "./components/Footer/Footer"
import Scroll from "./components/Scroll/Scroll"

function App() {

	const [cart, setCart] = useState([]);

	return (
		<>
			<Header />
			<main>
				<Scroll/>
				<Routes>
					<Route path="/" element={<HomePage/>}></Route>
					<Route path="/catalog" element={<Catalog cart={cart} setCart={setCart}/>}></Route>
					<Route path="/catalog/:id" element={<ProductPage cart={cart} setCart={setCart}/>}></Route>
					<Route path="/posts" element={<PostPage/>}></Route>
					<Route path="/cart" element={<CartPage cart={cart} setCart={setCart}/>}></Route>
				</Routes>
			</main>
			<Footer />
		</>
	)
}

export default App
