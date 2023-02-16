import { useState } from "react";
import { getCourses } from "../api/api";
import ProductItem from "../components/ProductItem";
import './ProductList.css'

function ProductList(){
  const [keyword,setKeyword] = useState('');
  const courses = getCourses();

  return (
    <div id="product">
      <h1>title</h1> 
      <form>
      <input 
        name="keyword"
        placeholder="검색으로 상품찾기" />
      <button type="submit">검색</button>
      </form>
      <div className="container">
      <p>총 {courses.length} 개가 검색되었습니다.</p>
      <div>
        {courses.map((course) => (<ProductItem key={course.id} course={course}/>))}
      </div>
      </div>
      </div>
  )
}
export default ProductList;