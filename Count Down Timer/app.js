const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const re = document.querySelector('#reset');
const range = document.querySelector('#ip');
const result = document.querySelector('#result');
let inter1;
let c;

start.addEventListener('click', () => {
    const r = parseInt(range.value);
    if (r === 0 || !r) {
        alert("Enter Time Please");
    }
    else {
        clearInterval(inter1);
        c = 0;
        result.value = c;
        inter1 = setInterval(() => {
            c++;
            result.value = c;
            if (c >= r) {
                clearInterval(inter1);
            }
        }, 1000);

    }
});

stop.addEventListener('click',()=>{
    clearInterval(inter1);
});
re.addEventListener('click',()=>{
    range.value="";
    clearInterval(inter1);
    result.value="";
});