import { BrowserRouter,Routes,Route } from "react-router-dom";

import App from './components/App';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import NotFound from './pages/NotFound';
import WishList from "./pages/WishList";
// import

function Main(){
  return (
   <BrowserRouter>
   <App>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="list"> 
        <Route index element={<ProductList/>} />
        <Route path=":courseSlug" element={<Product />} />
      </Route>
      <Route path="*" element={<NotFound />} />
      <Route path="wishlist" element={<WishList />} />
    </Routes>
   </App>
   </BrowserRouter>
  )
}
export default Main;
// 25  - 35