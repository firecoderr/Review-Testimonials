// MAIN FUNCTION ////////////////////////////////////////
function mainFunction() {
    // Datas ********************************************
    const datas = [
        {
            image: "./1.jpg",
            firstName: "Ali",
            profession: "Fron-End"
        },
    
        {
            image: "./4.png",
            firstName: "John",
            profession: "Web Designer"
        },
    
        {
            image: "./3.jpg",
            firstName: "Zack",
            profession: "Back-End"
        }
    ]
    
    // Select Elements ************************************
    const btns = document.querySelectorAll('.btn');
    
    const image = document.querySelector('img');
    const firstName = document.querySelector('.name');
    const profession = document.querySelector('.profession');
    
    let mainIndex = 0;
    
    // DOMContentLoaded ************************************
    document.addEventListener('DOMContentLoaded', () => {
        image.setAttribute('src', datas[mainIndex].image);
        firstName.textContent = datas[mainIndex].firstName;
        profession.textContent = datas[mainIndex].profession;
    })
    
    // Callback Functions ***********************************
    function logic(number) {
        image.setAttribute('src', datas[number].image);
        firstName.textContent = datas[number].firstName;
        profession.textContent = datas[number].profession;
    }
    
    // Button Events *****************************************
    btns.forEach(function(btn) {
        btn.addEventListener('click', (e) => {
            // Next --------------------------
            if (e.currentTarget.classList.contains("next")) {

                mainIndex++;
                if (mainIndex === datas.length) {
                    mainIndex = 0;
                }
                logic(mainIndex);

            // Previous ----------------------
            } else if (e.currentTarget.classList.contains("previous")) {

                mainIndex--;
                if (mainIndex < 0) {
                    mainIndex = datas.length-1;
                }
                logic(mainIndex);

            // Random -------------------------
            } else if (e.currentTarget.classList.contains("random")) {

                mainIndex = Math.floor(Math.random() * datas.length);
                logic(mainIndex);

            }
        })
    })
}
// Run the function above...
mainFunction();