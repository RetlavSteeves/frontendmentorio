const playContainer = document.querySelector('.play');
const played = document.querySelector('.played');
let choise = '';

playContainer.addEventListener('click', (event)=>{
    let arrayOfPaths = event.path;
    arrayOfPaths.forEach(element =>{
        if(element.id !== undefined && element.id !== '')
           choise = element.id;
    });
    if(choise !== '')
        addChoise(choise) 
})

function addChoise(choise){
    playContainer.innerHTML = '';
    let button = document.createElement('button');
    button.setAttribute('id',choise)
    button.classList.add(`btn-${choise}`,'btn');
    let p = document.createElement('p');
    p.classList.add('btn-container')
    let img = document.createElement('img')
    img.setAttribute('src',`./images/icon-${choise}.svg`)
    p.appendChild(img);
    button.appendChild(p);
    played.append(button)
}
