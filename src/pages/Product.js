import { useParams } from 'react-router-dom';
import {getCourseBySlug} from '../api/api';
import './Product.css';
function Product(){
  // const data = useParams();
  const {courseSlug} = useParams();
  const course = getCourseBySlug(courseSlug);
  // console.log(data);
  return (
    <>
    <div id="productItem">
      <h1>{course.title}</h1>
      <p><button type="button">추가하기</button></p>
      <p>{course.summary}</p>
    </div>
    <div className="topic">
    {course.topics.map(({topic}) => (<dl key={topic.slug}>
        <dt>{topic.title}</dt>
        <dd>{topic.summary}</dd>
      </dl>))}
</div>
    </>
  )
}
export default Product;