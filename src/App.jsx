import { Route, Router, Routes } from "react-router-dom"
import { Home } from "./pages/home/home"
import { MainLayout } from "./layout/main-layout"
import { ShopSingle } from "./pages/shop-single/shop-single"
import { Shop } from "./pages/shop/shop"
import { AboutUs } from "./pages/about-us/about-us"




function App() {

  return (
    <>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="shopsingle/:id" element={<ShopSingle />} />
            <Route path="shop" element={<Shop />} />
            <Route path="about" element={<AboutUs />} />
          </Route>
        </Routes>
    </>
  )
}

export default App
