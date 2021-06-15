
const inputText = document.querySelector('.input-area')

const btnSplit = document.querySelector('.btn-split')

const thread= document.querySelector('.thread')

btnSplit.addEventListener('click',function(){
    const noOfCharacters = inputText.value.length

    const contentStr = inputText.value

    const noOfTweets = contentStr.length/288
    console.log(noOfTweets);


    const html = `
     <div class="content">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Iusto dolorum molestias cumque impedit quae esse sapiente unde quam in saepe.
        </p>
    </div>
    `

    thread.insertAdjacentHTML('beforeend',html)
})