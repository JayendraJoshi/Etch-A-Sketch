const divContainer =document.querySelector(".grid");
const slider=document.querySelector(".slider");
const output=document.querySelector(".output");
const color=document.querySelector(".brush-color");
const resetPainting=document.querySelector(".reset-painting");
const toggleGrid=document.querySelector(".toggle-grid");
const backgroundColor=document.querySelector(".background-color");
const resetBtn=document.querySelector(".reset");

let divsArray;
let div;
let mouseIsDown=false;
let colorValue = color.value;

createGrid();
paint();
slider.addEventListener("input",function(element){
    output.textContent=slider.value;
    removeGrid();
    createGrid();
    paint();
});
function createGrid(){
    output.textContent=slider.value;
    size= output.textContent;
        removeGrid();
        for(i=0;i<size*size;i++)
        {
            div=document.createElement("div");
            div.setAttribute("class","color-div");
            divContainer.setAttribute("draggable",false);
            divContainer.appendChild(div);
        }
        divContainer.style.gridTemplateColumns=`repeat(${size},1fr)`;
        divContainer.style.gridTemplateRows=`repeat(${size},1fr)`;
        
        divsArray=document.querySelectorAll(".color-div");
}
function paint(){
    //colors single div
    divsArray.forEach(element=>{
        element.addEventListener("click",function(){
            if(document.querySelector(".paint").checked===true){
                element.style.backgroundColor=`${colorValue}`;                                 
            }           
            else if(document.querySelector(".remove-color").checked===true){   
                    element.style.backgroundColor="";                                    
            }   
        })
    });
    //colors multiple divsArray
    divsArray.forEach(element => {                        
        element.addEventListener("pointerover",function(){                            
            if(document.querySelector(".paint").checked===true && mouseIsDown===true){
                element.style.backgroundColor=`${colorValue}`;                                 
            }           
            else if(document.querySelector(".remove-color").checked===true &&mouseIsDown===true){
                element.style.backgroundColor="";                                    
            }                                     
        })  
    });     
    //colors first of multiple divsArray
    divsArray.forEach(element=>{
        element.addEventListener("mousedown",function(){
            if(document.querySelector(".paint").checked===true){
                element.style.backgroundColor=`${colorValue}`;                                 
            }           
            else if(document.querySelector(".remove-color").checked===true)
            {
            element.style.backgroundColor="";                                    
            }  
        })
    })
}
slider.addEventListener("input",function(element){
    output.textContent=(this.value)
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
resetPainting.addEventListener("click",function(){
divsArray.forEach(element=>{
element.style.backgroundColor="";
})
})
toggleGrid.addEventListener("change",function(event){
    if(toggleGrid.checked===false)
    {   
        document.querySelectorAll(".color-div").forEach(element => {
            element.style.borderStyle="none";
        });      
    }
    else
    {
        document.querySelectorAll(".color-div").forEach(element => {
            element.style.borderStyle="solid";
        });    
    }
})
backgroundColor.addEventListener("input",function(){
    divContainer.style.backgroundColor=`${backgroundColor.value}`

})
resetBtn.addEventListener("click",function(){
    resetSettings();
})
function removeGrid(){
    divContainer.textContent="";
}
function resetSettings(){
    backgroundColor.value="#F5F5F5";
    color.value="#F5F5F5";
    slider.value="5";
    divContainer.style.backgroundColor="#F5F5F5";
    toggleGrid.checked=true;
    document.querySelector(".brush").checked=true;
    createGrid();
    paint();  
}