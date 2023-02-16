

function Porduct(){
  return (
    <>
    <div id="productItem">
      <h1>title</h1>
      <p><button type="button">추가하기</button></p>
      <p>설명</p>
    </div>
    <div className="topic">
      {/* 반복문 */}
      <dl>
        <dt>topic title</dt>
        <dd>topic summary</dd>
      </dl>
    </div>
    </>
  )
}
export default Porduct;