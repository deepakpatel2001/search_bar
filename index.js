const inputData = document.querySelector('input');
const dataReciever = document.querySelector('.receiveData');
const showData = document.querySelector('.showData');
const remove = document.querySelector('.close');

const suggestion = [
    'ram aayenge to angna sajayenge',
    'triggered insaan',
    'bollyflix',
    'fukra insaan',
    'who was the winner of bigg boss ott plateform',
    'web developer annual income',
];

inputData.addEventListener('input', (e) => {
    const mainRes = suggestion.filter((data) => {
        return data
            .toLowerCase()
            .includes(inputData.value.toLowerCase().trim());
    });
    showData.style.display = 'block';
    let myHtml = '';

    mainRes.forEach((result) => {
        myHtml += `<div class="mt-4 rounded-lg icon-input flex items-center h-6 bg-gray-800 py-7 w-full hover:bg-slate-600">
                    <span class="h-6 w-6 ml-3 mr-5 text-center"><img src="search-interface-symbol.png" alt="" class="w-full h-full bg-inherit"></span>
                    <div class="receiveData text-white bg-inherit cursor-pointer w-full h-14 outline-none rounded-lg text-3xl">
                    ${result}
                    </div>
                </div>`;
    });
    showData.innerHTML = myHtml;

    if (inputData.value !== '') {
        remove.style.display = 'block';
        remove.addEventListener('click', () => {
            inputData.value = '';
            remove.style.display = 'none';
            showData.style.display = "none"
        });
    } else {
        remove.style.display = 'none';
    }
});

showData.addEventListener('click', (event) => {
    if (event.target.classList.contains('receiveData')) {
        // Set clicked suggestion as the input value
        inputData.value = event.target.textContent.trim();
        // Hide the suggestions
    }
});
