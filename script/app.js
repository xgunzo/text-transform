let textArea = document.querySelector('.textarea')
let uppercaseBtn = document.querySelector('#uppercase')
let lowercaseBtn = document.querySelector('#lowercase')
let sentenceBtn = document.querySelector('#sentence')
let capitalizedBtn = document.querySelector('#capitalized')
let aliasBtn = document.querySelector('#alias')

uppercaseBtn.addEventListener('click', () => {
    let insertedText = textArea.value
    insertedText = insertedText.toUpperCase()
    textArea.value = insertedText
})

lowercaseBtn.addEventListener('click', () => {
    let insertedText = textArea.value
    insertedText = insertedText.toLowerCase()
    textArea.value = insertedText
})

sentenceBtn.addEventListener('click', () => {
    let insertedText = textArea.value
    insertedText = insertedText.split('. ')
    let result = insertedText.map(word => {
        let firstChar = word.charAt(0).toUpperCase() 
        let rest = word.slice(1).toLowerCase()
        let result = firstChar + rest
        return result
    })
    console.log(result)
    textArea.value = result.join('. ')
})

capitalizedBtn.addEventListener('click', () => {
    let insertedText = textArea.value
    insertedText = insertedText.split(' ')
    let result = insertedText.map(word => {
        let firstChar = word.charAt(0).toUpperCase() 
        let rest = word.slice(1).toLowerCase()
        let result = firstChar + rest
        return result
    })
    textArea.value = result.join(' ')
})

aliasBtn.addEventListener('click', () => {
    let insertedText = textArea.value
    insertedText = insertedText.split(' ').join('-')
    textArea.value = insertedText.toLowerCase()
})