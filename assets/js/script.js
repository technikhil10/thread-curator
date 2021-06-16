
const inputText = document.querySelector('.input-area')

const btnSplit = document.querySelector('.btn-split')

const thread= document.querySelector('.thread')

const randomInt = (min,max) =>{
    return Math.trunc(Math.random() * (max-min+1)) + 1
}


btnSplit.addEventListener('click',function(){

    thread.classList.add('scroll')

    const noOfCharacters = inputText.value.length

    if(noOfCharacters === 0) return

    const contentStr = inputText.value

    const noOfTweets = contentStr.length/288
    console.log(noOfTweets);


    let lastSplit = 0

   
    while(lastSplit < noOfCharacters)
    {   
        let limit = noOfCharacters - lastSplit > 288 ? 288 : noOfCharacters-lastSplit
        const dividedStr = contentStr.slice(lastSplit,lastSplit + limit)


        lastSplit += limit
        const html = `
        <div class="content bg-${randomInt(1,5)}">
           <p>${dividedStr}</p>
           <p><small>${dividedStr.length}/288</small><p>
       </div>
       `
   
       thread.insertAdjacentHTML('beforeend',html)
    }

   
})