const menu = document.querySelector('.no')
const navb = document.querySelector('.dashboard')
const card = document.querySelector('.games')

menu.addEventListener( "click" ,
(eo) => {
    card.style.opacity = "0"
   navb.classList.toggle('active')
   eo.preventDefault()
}  

) 

const btn = document.querySelector('.add')
const con = document.querySelector('.cards')
const input = document.querySelector('input')
btn.addEventListener( "click" ,
(eo) => {
    
card.style.opacity = "1"
   navb.classList.remove('active')

   const nn =` <div class="card">
   <div class="card-info">
     <h2>${input.value}</h2>
     <button class="done">DONE</button>
     <button class="top">IMPRTANT</button>
     <button class="remove">REMOVE</button>
   </div>
   </div>
`
  con.innerHTML+= nn;
  input.value=" "
  eo.preventDefault()
}  

) 

const back = document.querySelector('.back')
back.addEventListener( "click" ,
(eo) => {
    card.style.opacity = "1"

   navb.classList.remove('active')
   eo.preventDefault()
})





con.addEventListener("click",(eo) => {
    if (eo.target.className =="remove"){
        eo.target.parentElement.parentElement.remove()
    }
    else if (eo.target.className =="done" ){
       
        eo.target.parentElement.classList.toggle('line')
    }
    else if(eo.target.className =="top"){
        eo.target.classList.toggle('imp')
        con.prepend(eo.target.parentElement.parentElement)
    }
     else if (eo.target.className =="top imp"){
        eo.target.classList.remove('imp')
     }
}



)



