const courses = [

{
subject:"WDD",
number:130,
title:"Web Fundamentals",
credits:2,
completed:true
},

{
subject:"WDD",
number:131,
title:"Dynamic Web Fundamentals",
credits:2,
completed:true
},

{
subject:"WDD",
number:231,
title:"Web Frontend Development I",
credits:2,
completed:false
},

{
subject:"CSE",
number:110,
title:"Programming Building Blocks",
credits:2,
completed:true
},

{
subject:"CSE",
number:111,
title:"Programming with Functions",
credits:2,
completed:true
}

];

const container=document.querySelector("#course-container");
const credits=document.querySelector("#credits");

function displayCourses(list){

container.innerHTML="";

list.forEach(course=>{

const card=document.createElement("div");

card.classList.add("course");

if(course.completed){
card.classList.add("completed");
}

card.innerHTML=`
<h3>${course.subject} ${course.number}</h3>
<p>${course.title}</p>
<p>${course.credits} Credits</p>
`;

container.appendChild(card);

});

credits.textContent=`Total Credits: ${
list.reduce((sum,item)=>sum+item.credits,0)
}`;

}

displayCourses(courses);

document.querySelector("#all").addEventListener("click",()=>{
displayCourses(courses);
});

document.querySelector("#wdd").addEventListener("click",()=>{
displayCourses(courses.filter(c=>c.subject==="WDD"));
});

document.querySelector("#cse").addEventListener("click",()=>{
displayCourses(courses.filter(c=>c.subject==="CSE"));
});