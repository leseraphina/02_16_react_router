// 함수 군단
import courses from './data.json';
// import question from './dataquestion.json';

// import {courses,querystion} from './data.json';

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

