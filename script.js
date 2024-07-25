let cards = document.querySelector(".cards")

let writer = ""
fetch("http://localhost:3000/workers")

async function getData(Api){
    let res = await fetch(`${Api}`)
    let data = await res.json()
    // console.log(data);
    data.forEach(element => {
      writer +=`
              <div class="box  col-sm-12 col-md-6 col-lg-4">
                  <div class="inner col">
                      <div class="img  overflow-hidden justify-content-center align-items-center">
                          <img src=${element.image} class="object-fit-cover w-100 h-100 mh-100 border rounded col-12 alt="">
                      </div>
                      <div class="content">
                          <h2 class="name m-1 text-center">${element.name}</h2>
                          <p class="age  text-center">${element.age}</p>
                          <p class="salary  text-center">${element.salary}</p>
                      </div>
                  </div>
              </div>
              `
     
      cards.innerHTML = writer
  });
}



getData('http://localhost:3000/workers')


// .then(res=>{
//     return res.json()
// })
// .then(data2=>{
//     console.log(data2);
//      data2.forEach(element => {
//         writer +=`
//         <div class="box  col-sm-12 col-md-6 col-lg-4">
//             <div class="inner col">
//                 <div class="img  overflow-hidden justify-content-center align-items-center">
//                     <img src=${element.image} class="object-fit-cover w-100 h-100 mh-100 border rounded col-12 alt="">
//                 </div>
//                 <div class="content">
//                     <h2 class="name m-1 text-center">${element.name}</h2>
//                     <p class="age  text-center">${element.age}</p>
//                     <p class="salary  text-center">${element.salary}</p>
//                 </div>
//             </div>
//         </div>
//         `
//     });

//     cards.innerHTML=writer
//  })






 let button = document.querySelector(".btn");
let body = document.querySelector("body");

let darkMode = ()=>{
  body.classList.toggle("dark-mode")
}


button.addEventListener("click",()=>{

  setDarkMode = localStorage.getItem("dark");
  if(setDarkMode !== "off"){
    darkMode();
    setDarkMode = localStorage.setItem("dark", "off");
  }else {
    darkMode()
    setDarkMode = localStorage.setItem("dark", "on")
  }
   
});

let setDarkMode = localStorage.getItem("dark");
if(setDarkMode == "off"){
  darkMode();
}
