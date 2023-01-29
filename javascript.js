const divContainer =document.querySelector(".container")
const slider=document.querySelector(".slider");
const output=document.querySelector(".output")

slider.addEventListener("input",function(element){

    output.textContent=this.value;
    let n= output.textContent;
        reset();
        for(i=0;i<n*n;i++)
        {
            let Div=document.createElement("div");
            Div.setAttribute("class","colorDiv");
            divContainer.appendChild(Div);
        }
        divContainer.style.gridTemplateColumns=`repeat(${n},1fr)`;
        divContainer.style.gridTemplateRows=`repeat(${n},1fr)`;
        
            let divs=document.querySelectorAll(".colorDiv");

                let r=randomRgbValue();
                let g=randomRgbValue();
                let b=randomRgbValue();

                    divs.forEach(element => {
                        element.addEventListener("mouseover",function(){               
                        element.style.backgroundColor=`rgb(${r},${g},${b})`;
        
                        })
                    });
                    divs.forEach(element=>{
                        element.addEventListener("mouseout",function(){
                        element.style.backgroundColor="";
                        })
                    })             
    });

function randomRgbValue(max){
    max=255;    
  return Math.floor((Math.random()* max));
}

function reset(){
  divContainer.textContent="";
}

slider.addEventListener("input",function(element){

    output.textContent=this.value;
    console.log(element);

})