// 함수 군단
import courses from './data.json';

 export function getCourses(keyword){
  if(!keyword) return courses;
  return filterByKeyword(courses, keyword)
 }

function filterByKeyword(items,keyword){
  const lowered = keyword.toLowerCase();
  return items.filter(({title}) => title.toLowerCase().includes(lowered))
}

export function getCourseBySlug(courseSlug){
  return courses.find((course) => course.slug === courseSlug)
}

//  검증 이름, 속성값
// WISHLIST_KEY
const WISHLIST_KEY ='wishlist';
const wishlist = JSON.parse(localStorage.getItem(WISHLIST_KEY) || '{}')


export function getWishList(){
  return courses.filter((course) => wishlist[course.slug])
}
export function addWishList(courseSlug){
wishlist[courseSlug] = true;
localStorage.setItem(WISHLIST_KEY,JSON.stringify(wishlist))
}
export function deleteWishList(courseSlug){
  delete wishlist[courseSlug]
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist))
}