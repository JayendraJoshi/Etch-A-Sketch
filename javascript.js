const divContainer =document.querySelector(".container")
const slider=document.querySelector(".slider");
const output=document.querySelector(".output")
let mouseIsDown=false;

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

                            //colors single div
                    divs.forEach(element=>{
                        element.addEventListener("click",function(){
                             if(document.querySelector(".color").checked===true){
                                    element.style.backgroundColor=`rgb(${r},${g},${b})`;                                 
                                }           
                                else if(document.querySelector(".erase").checked===true)
                                        {   
                                            element.style.backgroundColor="";                                    
                                        }   
                        })
                    });
                        //colors multiple divs
                    divs.forEach(element => {                        
                        element.addEventListener("pointerover",function(){                            
                                if(document.querySelector(".color").checked===true && mouseIsDown===true){
                                    element.style.backgroundColor=`rgb(${r},${g},${b})`;                                 
                                    }           
                                else if(document.querySelector(".erase").checked===true &&mouseIsDown===true)
                                        {
                                            element.style.backgroundColor="";                                    
                                        }                                     
                        })  
                    });     
                    //colors first of multiple divs
                    divs.forEach(element=>{
                        element.addEventListener("mousedown",function(){
                            if(document.querySelector(".color").checked===true){
                                    element.style.backgroundColor=`rgb(${r},${g},${b})`;                                 
                                }           
                            else if(document.querySelector(".erase").checked===true)
                                    {
                                        element.style.backgroundColor="";                                    
                                    }  
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

divContainer.addEventListener("pointerdown",function(){
    mouseIsDown=true;
})
divContainer.addEventListener("pointerup",function(){
    mouseIsDown=false;
})

