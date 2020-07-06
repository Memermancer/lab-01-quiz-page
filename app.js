import isYes from '../is-yes.js';


const quizButton = document.getElementById('button1');
const result = document.getElementById('quiz-result');

quizButton.addEventListener('click', () => {

    const name = prompt('What is your Name?');
    const really = confirm('Are you sure you want to take the quiz?');
    if (!really) return;

    const answer1 = prompt('Is the Riddler green?');
    const answer2 = prompt('Does the Riddler enjoy asking questions?');
    const answer3 = prompt('Does the Batsignal summon the Riddler?');

    let score = 0;

    if (isYes(answer1)) {
        score++
    }

    if (isYes(answer2)) {
        score++
    }

    if (!isYes(answer3)) {
        score++
    }
    console.log(score);
    
});