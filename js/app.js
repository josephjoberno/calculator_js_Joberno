let elemTd=document.querySelectorAll('table tr td')
let resultCalcul=document.querySelector('.content h1')
var elemClick=""

elemTd.forEach(element => {
    
   element.addEventListener('click',()=>{
      
      if(element.innerText=="x 2")
         puissance()
      if(element.textContent=="±")
       resultCalcul.textContent=elemClick="-"+elemClick
      if(element.textContent=="←") 
       removeLastElem()
      if(element.textContent=="C")
       clearAll()
      if(element.textContent=="=")
      resultC()
      if(element.textContent!="←" && element.textContent!="=" && element.textContent!="C" &&   element.textContent!="±" &&   element.innerText!="x 2")
      {
        
        elemClick=elemClick+element.textContent;
        addClick(elemClick)
      }
       
      
   }
   
   
   )
 
});

function addClick(elemClick)
{ 
  return resultCalcul.textContent=elemClick
}

function removeLastElem()
{
    if(elemClick.length!=1 && parseInt(resultCalcul.textContent)!=0)
    resultCalcul.textContent=elemClick=elemClick.replace(elemClick.slice(-1),"")
    else
    clearAll()
}

function clearAll()
{
    resultCalcul.textContent=0
    elemClick=""  
}

function resultC() {
    try {
        let calcul=eval(resultCalcul.textContent)
        resultCalcul.textContent=calcul
        elemClick=""+calcul
        return calcul
    } catch (e) {
        if(e instanceof SyntaxError)
        return alert('Veuillez bien entrer votre operation!')
    }
    
}

function puissance()
{
    let cPuissance
    if(resultCalcul.textContent!=0)
    {
          cPuissance=Math.pow(resultC(),2)
          elemClick=""+cPuissance
          resultCalcul.textContent=cPuissance
    }
  
}