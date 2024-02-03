// const btn = document.querySelectorAll('.show')
// btn.textContent = "SHOW"
// const showText = document.querySelectorAll('#showText')


// btn.addEventListener('click', function() {
//     if(showText.style.display === 'block'){
//         showText.style.display = 'none'
//         btn.textContent = 'SHOW'
//     } else{
//         showText.style.display = 'block'
//         btn.textContent = "HIDE"
//     }
// })


const btns = document.querySelectorAll('.show');
const showTexts = document.querySelectorAll('#showText');

btns.forEach((btn, index) => {
    btn.textContent = "SHOW";
    showTexts[index].style.display = "none";

    btn.addEventListener('click', function() {
        if (showTexts[index].style.display === 'block') {
            showTexts[index].style.display = 'none';
            btn.textContent = 'SHOW';
        } else {
            showTexts[index].style.display = 'block';
            btn.textContent = "HIDE";
        }
    });
});