const divContainer =document.querySelector(".grid")
const slider=document.querySelector(".slider");
const output=document.querySelector(".output");
const color=document.querySelector(".color");
const resetBtn=document.querySelector(".reset");
const toggleGrid=document.querySelector(".toggleGrid")

let divsArray;
let div;
let mouseIsDown=false;
let colorValue = color.value;
let size=10;

createGrid();
paint();
slider.addEventListener("input",function(element){
    output.textContent=slider.value;
    reset();
    createGrid();
    paint();
});
function createGrid(){
    output.textContent=slider.value;
    size= output.textContent;
        reset();
        for(i=0;i<size*size;i++)
        {
            div=document.createElement("div");
            div.setAttribute("class","colorDiv");
            divContainer.setAttribute("draggable",false);
            divContainer.appendChild(div);
        }
        divContainer.style.gridTemplateColumns=`repeat(${size},1fr)`;
        divContainer.style.gridTemplateRows=`repeat(${size},1fr)`;
        
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
toggleGrid.addEventListener("change",function(event){
    if(toggleGrid.checked===false)
    {   
        document.querySelectorAll(".colorDiv").forEach(element => {
            element.style.borderStyle="none";
        });      
    }
    else
    {
        document.querySelectorAll(".colorDiv").forEach(element => {
            element.style.borderStyle="solid";
        });    
    }
})
function reset(){
  divContainer.textContent="";
}