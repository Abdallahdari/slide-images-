const images=document.querySelectorAll('.images')
const btnright=document.getElementById('btnright')
console.log(images) ;

images.forEach((img,i)=>img.style.transform=`translateX(${100*i}%)`)
console.log(btnright) ;
let current=0
const max_slide=images.length
console.log(`bismillah`) ;
btnright.addEventListener('click',function(e){
    if(current==max_slide-1){
        current=0
    }
    else{ 
           current++
    }
    images.forEach((img,i)=>img.style.transform=`translateX(${100*(i-current)}%)`)

})