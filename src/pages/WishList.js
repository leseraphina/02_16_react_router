import { useEffect, useState } from "react";
import ProductItem from "../components/ProductItem";
import {deleteWishList,getWishList } from "../api/api";

function WishList(){

  const [courses,setCourses] = useState([]);

  const handleDelete = (courseSlug) => {
    deleteWishList(courseSlug);
    const nextCourses = getWishList();
    setCourses(nextCourses);
  }

  useEffect(() => {
    const NestCourses = getWishList();
    setCourses(NestCourses);
  },[])



  return (
    <div className="wishlist">
      <h1> 나의 저장소</h1>
      <ul>
        {courses.map((course) => (<li key={course.slug}>
        <ProductItem course={course}/>
        <p>
          <button 
           onClick={() => handleDelete(course.slug)}  type="button"> 버리기</button></p>
        </li>))
        }
      </ul>
      </div>
  )
}
export default WishList;