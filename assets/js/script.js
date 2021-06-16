
const inputText = document.querySelector('.input-area')

const btnSplit = document.querySelector('.btn-split')

const thread= document.querySelector('.thread')

const randomInt = (min,max) =>{
    return Math.trunc(Math.random() * (max-min+1)) + 1
}


btnSplit.addEventListener('click',function(){
    const noOfCharacters = inputText.value.length

    const contentStr = inputText.value

    const noOfTweets = contentStr.length/288
    console.log(noOfTweets);


    const html = `
     <div class="content bg-${randomInt(1,10)}">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores iure repellendus est optio temporibus maxime, suscipit cupiditate recusandae doloribus sequi aut omnis quas, animi dolores tempore sapiente quis! Quae magni tempora magnam corrupti cumque ea expedita, totam voluptatibus, aa
        </p>
    </div>
    `

    thread.insertAdjacentHTML('beforeend',html)
})