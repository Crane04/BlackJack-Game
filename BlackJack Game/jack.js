let money=20
let newArr=JSON.parse(localStorage.getItem("money"));
let cards=[ ]
let messageEl=document.getElementById("message-el")
let cardsEl=document.getElementById("cards-el")
let sumEl=document.getElementById("sum-el")
let firstCard=randomCard()
let secondCard=randomCard()
let card=" "
let sum=" "
let hasAce=false
let isAlive=true
let moneyEl=document.getElementById("money-el")


function randomCard(){
        let arr=[2,3,4,5,6,7,8,9,10,11]
        let goIndex=Math.floor(Math.random()*10) 
        return arr[goIndex]
}


startEl.addEventListener("click",function(){
    cards=[firstCard,secondCard]
    sum=cards[0]+cards[1]
    goGame()
})


if (newArr){
    money=newArr
    goGame()
}


function goGame(){
    cardsEl.textContent= "Cards: "
    for(let i=0; i<cards.length; i++){
    cardsEl.textContent+= cards[i]+" "
    }
    sumEl.textContent= "Sum: " +sum
    if (sum<=20){
    messageEl.innerText="Start Game."
    document.getElementById("newCard").style.display="block"

    }
    else if(sum===21){

    messageEl.innerText="You won!"
    hasAce=true
    document.getElementById("newCard").style.display="none"
    money=money+2
    document.getElementById("startEl").style.display="none"
    moneyEl.innerHTML=` <input id="money-el" readonly value=${money}>` 

    }
    else if (sum>21) {

    messageEl.innerText="You're out!"
    isAlive=false
    document.getElementById("newCard").style.display="none"
    money=money-1
    moneyEl.innerHTML=` <input id="money-el" readonly value=${money}>` 
    document.getElementById("startEl").style.display="none"
    }
localStorage.setItem("money",JSON.stringify(money))
}


newCard.addEventListener("click",function(){
    if (hasAce===false && isAlive===true){
    card=randomCard()
    cards.push(card)
    sum+=cards[2]
    cardsEl.textContent+=sum+card
    } 
goGame()

})
 


quit.addEventListener("click",function(){
    document.querySelector("body").innerHTML=
    `<h1>Withdraw C${money}.
    <br><br>
    <button onclick="location.reload()">New Game</button>
    `
    localStorage.clear()
})

moneyEl.innerHTML=
`
<input id="money-el" readonly value=${money}>
` 
document.getElementById("newCard").style.display="none"
