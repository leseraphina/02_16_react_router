

function ProductItem({course}){
  return (
    <figure>
      <img src={course.photoUrl} alt={course.title} />
      <figcaption>
        <dl>
          <dt>{course.title}</dt>
          <dd>{course.summary}</dd>
        </dl>
      </figcaption>

    </figure>
  )
}
export default ProductItem;