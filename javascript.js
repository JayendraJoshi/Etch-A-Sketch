const divContainer =document.querySelector(".container")
const slider=document.querySelector(".slider");
const output=document.querySelector(".output");
const color=document.querySelector(".color");
const resetBtn=document.querySelector(".reset");

let divsArray;
let div;
let mouseIsDown=false;
let colorValue = color.value;

slider.addEventListener("input",function(element){
    createGrid();
    paint();
});
function reset(){
  divContainer.textContent="";
}
function createGrid(){
    output.textContent=slider.value;
    let n= output.textContent;
        reset();
        for(i=0;i<n*n;i++)
        {
            div=document.createElement("div");
            div.setAttribute("class","colorDiv");
            divContainer.setAttribute("draggable",false);
            divContainer.appendChild(div);
        }
        divContainer.style.gridTemplateColumns=`repeat(${n},1fr)`;
        divContainer.style.gridTemplateRows=`repeat(${n},1fr)`;
        
             divsArray=document.querySelectorAll(".colorDiv");
}
function paint(){
    //colors single div
    divsArray.forEach(element=>{
        element.addEventListener("click",function(){
            if(document.querySelector(".brush").checked===true){
                element.style.backgroundColor=`${colorValue}`;                                 
            }           
            else if(document.querySelector(".erase").checked===true){   
                    element.style.backgroundColor="";                                    
            }   
        })
    });
    //colors multiple divsArray
    divsArray.forEach(element => {                        
        element.addEventListener("pointerover",function(){                            
            if(document.querySelector(".brush").checked===true && mouseIsDown===true){
                element.style.backgroundColor=`${colorValue}`;                                 
            }           
            else if(document.querySelector(".erase").checked===true &&mouseIsDown===true){
                element.style.backgroundColor="";                                    
            }                                     
        })  
    });     
    //colors first of multiple divsArray
    divsArray.forEach(element=>{
        element.addEventListener("mousedown",function(){
            if(document.querySelector(".brush").checked===true){
                element.style.backgroundColor=`${colorValue}`;                                 
            }           
            else if(document.querySelector(".erase").checked===true)
            {
            element.style.backgroundColor="";                                    
            }  
        })
    })
}
slider.addEventListener("input",function(element){
    output.textContent=(this.value + "*" + this.value)
})
document.body.addEventListener("pointerdown",function(){
    mouseIsDown=true;
})
document.body.addEventListener("pointerup",function(){
    mouseIsDown=false;
})
color.addEventListener("input",function(){
colorValue=color.value;
})
resetBtn.addEventListener("click",function(){
divsArray.forEach(element=>{
element.style.backgroundColor="";
})
})