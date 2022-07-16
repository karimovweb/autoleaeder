
for(var i=1;i<=Math.ceil(S.length/7);i++){
document.querySelector('.pages11').innerHTML +=`
<li class="page-item" style="letter-spacing:13px;><a onclick='my(${i})' class="page-link" href="#cards12">${i}</a></li>`
}
 var e=1
plus12=()=>{
if(Math.ceil(S.length/7)>=e-1){
  e++
}
my(e)
}

minus12=()=>{
  if(0<e-1){
  e--
  } 
  my(e)
}

function my(x){
  e=x
  document.querySelector('.pages11').innerHTML =" "
    document.querySelector('.cards12').innerHTML=" " 
    for(var j=x*6-6;j<x*6;j++){
        document.querySelector('.cards12').innerHTML+= ` 
        <div class="card" id="cards12">
        <div class="item-1">
            <a><img style="height:285px;width:100%" src="${S[j].img}" alt="Image2" class="img-fluid img-fluid1"></a>
            <div class="item-1-contents">
              <div class="text-center">
              <h3><a class"a">${S[j].name}</a></h3>
              <div class="rating">
                <span class="icon-star text-warning"></span>
                <span class="icon-star text-warning"></span>
                <span class="icon-star text-warning"></span>
                <span class="icon-star text-warning"></span>
                <span class="icon-star text-warning"></span>
              </div>
              <div class="rent-price"><span>${S[j].sena}</span></div>
              </div>
              <ul class="specs">
                <li>
                  <span>Выпуск:</span>
                  <span class="spec">${S[j].age}</span>
                </li>
                <li>
                  <span>Пробег:</span>
                  <span class="spec">${S[j].seat}</span>
                </li>
                <li>
                  <span>Объём двигателя</span>
                  <span class="spec">${S[j].transmision}</span>
                </li>
                <li>
                  <span>Мощность:</span>
                  <span class="spec">${S[j].door}</span>
                </li>
                <li>
                  <span>Цена:</span>
                  <span class="spec">${S[j].sena}</span>
                </li>
              </ul>
              <div class="d-flex action">
                <a href="contact.html#contact-section" class="btn btn-primary">Куить сейчас</a>
              </div>
            </div>
          </div>
      </div>
        `
    }
    for(var i=1;i<=Math.ceil(S.length/6);i++){
      if(x==i){
        document.querySelector('.pages11').innerHTML +=`
        <li class="page-item"><a onclick='my(${i})' style="color:white; background:#777 ; "   class="page-link" href="#cards12">${i}</a></li>`
      }else{
      document.querySelector('.pages11').innerHTML +=`
      <li class="page-item"><a onclick='my(${i})' style="color:black;" class="page-link" href="#cards12">${i}</a></li>`}
      }

}
my(e)