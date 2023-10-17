document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.button');
    const body = document.querySelector('body');
    console.log("kdhchsgv");

    buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            console.log("check1");
            console.log(e);
            console.log(e.target);
            if (e.target.id === 'grey') {
                body.style.backgroundColor = 'grey';
            }
            if (e.target.id === 'white') {
                body.style.backgroundColor = 'white';
            }
            if (e.target.id === 'blue') {
                body.style.backgroundColor = 'blue';
            }
            if (e.target.id === 'yellow') {
                body.style.backgroundColor = 'yellow';
            }
        });
    });
    const form = document.querySelector('form');
    form.addEventListener('submit', function (a) {
        a.preventDefault();
        const height = parseInt(document.querySelector('#height').value);
        const weight = parseInt(document.querySelector('#weight').value);
        //const results = document.querySelector('#results');
        const results = document.querySelector('#result');

        if (height === '' || height < 0 || isNaN(height)) {
            results.innerHTML = `Please provide a valid height ${height}`;
        }
        else if (weight === '' || weight < 0 || isNaN(weight)) {
            results.innerHTML = `Please provide a valid weight ${weight}`;
        }
        else {
            // Adjusted BMI calculation for height in centimeters
            const BMI = (weight / ((height / 100) * (height / 100))).toFixed(2);
            results.innerHTML = `Your BMI: ${BMI}`;
            const name = prompt('Please enter your name:');

            if (name) {
                let message = `${name}, your BMI: ${BMI}. `;
                if (BMI < 18.5) {
                    message += 'You may be underweight.';
                } else if (BMI >= 18.5 && BMI < 24.9) {
                    message += 'You are in a healthy weight range.';
                } else if (BMI >= 25 && BMI < 29.9) {
                    message += 'You may be overweight.';
                } else {
                    message += 'You may be obese. Consult a healthcare professional.';
                }
                alert(message);
            }
        }

    });
});