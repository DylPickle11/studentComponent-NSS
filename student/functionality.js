const students = [
    {
        name: "Chris Miller",
        subject: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        subject: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        subject: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        subject: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        subject: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        subject: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        subject: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        subject: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        subject: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        subject: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        subject: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        subject: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
]


const studentContainer = document.querySelector("#container");

/* Practice student Components */
/*
const createStudentComponent = (name, subject, info, score) => {  
  
      if (score >= 60) { 
        return `
  	<div class="student">
            <h1 class='xx-large passing'>${name}</h1>
            <section>${subject}</section>
            <aside class='bordered dashed section--padded'>${info}</aside>
	    <sectioni class='pushRight'>${score}</section>
        </div>`
    } else if (score < 60) {
     return `
        <div class="student">
            <h1 class='xx-large failing'>${name}</h1>
            <section>${subject}</section>
            <aside class='bordered dashed section--padded'>${info}</aside>
	    <sectioni class='pushRight'>${score}</section>
        </div>`    
   }  
 } ;

*/

/* Challenge: One object to rule them all */

/*
const createStudentComponent = (student) => {  
  
      if (student.score >= 60) { 
        return `
  	<div class="student">
            <h1 class='xx-large passing'>${student.name}</h1>
            <section>${student.subject}</section>
            <aside class='bordered dashed section--padded'>${student.info}</aside>
	    <section class='pushRight'>${student.score}</section>
        </div>`
    } else if (student.score < 60) {
     return `
        <div class="student">
            <h1 class='xx-large failing'>${student.name}</h1>
            <section>${student.subject}</section>
            <aside class='bordered dashed section--padded'>${student.info}</aside>
	    <section class='pushRight'>${student.score}</section>
        </div>`    
   }  
 } ;
*/

/* Challenge: Composition of Smaller Components */
/*
const h1 = (student) => {
    if (student.score > 60) {
      return `<h1 class='xx-large passing'>${student.name}</h1>`;
    } else if (student.score < 60) {
      return `<h1 class='xx-large failing'>${student.name}</h1>`; 
    } else {
      return `<h1 class='xx-large'>${student.name}</h1>`; 
    }
  }

const section = (subject) => {
 return `<section>${subject}</section>`;
}

const aside = (info) => {
 return`<aside class='bordered dashed section--padded'>${info}</aside>`;
}

const createStudentComponent = (student) => { 
   return  `
    <div id="student">
        ${h1(student)}
        ${section(student.subject)}
        ${aside(student.info)}
    </div>
    `}
*/
/* Generic HTML Function */ 

const element = (component, content, style) => {
    console.log(component, content)
    
    return `<${component} class=${style}>${content}</${component}>`
  };

const createStudentComponent = (student) => { 
    return `
   <div id="student">
        <p>Hi</p>
        ${element("h1", student.name, "xx-large passing")}
        ${element("section", student.subject, "bordered dashed section--padded")}
        ${element("aside", student.info, "pushRight")}   
    </div> <br> `

}


for (let i = 0; i < students.length; i++) {
      const student = students[i];
      let x = createStudentComponent(student);
      studentContainer.innerHTML += x;
      };







