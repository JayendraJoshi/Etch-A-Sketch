const divContainer =document.querySelector(".container")

    document.querySelector("button").addEventListener("click",function(){
    let n=prompt("Enter a number to apply grid size (example: 64 = 64x64)")

    for(i=0;i<n*n;i++)
    {
        let Div=document.createElement("div");
        Div.setAttribute("class","colorDiv");
        divContainer.appendChild(Div);
    }
    divContainer.style.gridTemplateColumns=`repeat(${n},1fr)`;
    divContainer.style.gridTemplateRows=`repeat(${n},1fr)`;

})

