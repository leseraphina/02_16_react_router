import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getCourses } from "../api/api";
import ProductItem from "../components/ProductItem";
import './ProductList.css'

function ProductList(){
 
 
  const [searchParam,setSearchParam] = useSearchParams();
  // console.log(searchParam.get('keyword'))
  const initKeyword = searchParam.get('keyword');
  const [keyword,setKeyword] = useState(initKeyword || '');
  const courses = getCourses(initKeyword);
  // 함수 

const handleKeywordChange = (e) => setKeyword(e.target.value);
const handleSubmit = (e) => {
  e.preventDefault();
  setSearchParam( keyword ? {keyword} : {} )
}
  return (
    <div id="product">
      <h1>title</h1> 
      <form onSubmit={handleSubmit}>
      <input 
        name="keyword"
        value={keyword}
        placeholder="검색으로 상품찾기"
        onChange={handleKeywordChange} />
      <button type="submit">검색</button>
      </form>
      <div className="container">
      <p>총 {courses.length} 개가 검색되었습니다.</p>
      { 
      initKeyword && courses.length === 0 ?
      (<div>조건에 맞는 제품이 없습니다.</div>)
        :
      (<div>
        {courses.map((course) => (<ProductItem key={course.id} course={course}/>))}
      </div>)
      }



      </div>
      </div>
  )
}
export default ProductList;