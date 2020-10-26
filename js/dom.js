
/*const conatainer = document.getElementById('container');
console.log(conatainer);

const pQuerySelector = document.querySelectorAll('p');
const body = document.querySelector('body');
pQuerySelector[0].onclick = function()
{
    pQuerySelector[0].innerHTML = 'texte modifié'
}
console.log(pQuerySelector);

conatainer.addEventListener('click', function(){
    alert('toto');
})

console.log('hello world');

setTimeout(function()
{
    x = 20
    console.log(x);
}, 1000)

function addTox()
{
    x = 10;
    console.log(x)
}*/



/*function helloAsync(name, callback)
{
    return callback("hello " + name);
}

function helloSync(name)
{
    return "hello " + name;
}

console.log(helloSync("toto"));
helloAsync("titi", function(result){
    console.log(result)
})*/

window.onload = function()
{
    const container = document.getElementById('container');
    const childrenContainer = container.childNodes;
    const cards = document.querySelectorAll('.card');
    const imgs = document.querySelectorAll('img');
    const input = document.querySelectorAll('#search');

    imgs.forEach(function(img){
        img.addEventListener('click', function(){
            this.src = "img/cielg.jpg"
            
        })
    })

   


    /*cards.forEach(function(card, index){
        console.log('cards ', cards);
        card.addEventListener('click', function(){
            if (this.style.background === "blue")
            {
                this.style.background = "#ccc"
            }

            else
            {
                this.style.background = "blue"
            }
            
        })
    })*/

    /*childrenContainer.forEach(function(value, index){
        console.log('value', value);

        
    });*/
}