let textArea = document.querySelector('.textarea')
let buttons = document.querySelectorAll('.transform-button')
let uppercaseBtn = document.querySelector('#uppercase')
let lowercaseBtn = document.querySelector('#lowercase')
let sentenceBtn = document.querySelector('#sentence')
let capitalizedBtn = document.querySelector('#capitalized')
let aliasBtn = document.querySelector('#alias')
let copyBtn = document.querySelectorAll('#copy')


// Hover on button
buttons.forEach((button) => {
    button.addEventListener('mousemove', (e) => {
        const { x, y } = button.getBoundingClientRect()
        button.style.setProperty("--x", e.clientX - x)
        button.style.setProperty("--y", e.clientY - y)
    })
})

// Listeners for transforms

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
    insertedText = insertedText.split(/\.|,|'| /).join('-').replaceAll('--', '-')
    if (insertedText.slice(-1) == '-') {
        let result = insertedText.substring(0, insertedText.length - 1)
        textArea.value = result.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "").replace(/\u0142/g, "l")
    } else {
        textArea.value = insertedText.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "").replace(/\u0142/g, "l")
    }
    
})

let copyPopUp = document.querySelector('.copy-popup')

copyBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        let insertedText = textArea.value
        const copyContent = async () => {
            try {
              await navigator.clipboard.writeText(insertedText);
              copyPopUp.classList.toggle("active")
              setTimeout(function(){
                copyPopUp.classList.remove('active');
              },2500)
            } catch (err) {
              console.error('Failed to copy: ', err);
              copyPopUp.innerHTML = "We can't copy this text to your clipboard :("
              setTimeout(function(){
                copyPopUp.classList.remove('active');
              },2500)
            }
        }
        copyContent()
    })
})
