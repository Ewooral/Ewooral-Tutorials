const aliceTumbling = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming = {
    duration: 2000,
    iterations: 1,
    fill: 'forwards'
}

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

alice1.animate(aliceTumbling, aliceTiming);






//................................................................................
function generatePrimes(quota) {

    function isPrime(n) {
        for (let c = 2; c <= Math.sqrt(n); ++c) {
            if (n % c === 0) {
                return false;
            }
        }
        return true;
    }

    const primes = [];
    const maximum = 1000000;

    while (primes.length < quota) {
        const candidate = Math.floor(Math.random() * (maximum + 1));
        if (isPrime(candidate)) {
            primes.push(candidate);
        }
    }

    return primes;
}

document.querySelector('#generate').addEventListener('click', () => {
    const quota = document.querySelector('#quota').value;
    const primes = generatePrimes(quota);
    document.querySelector('#output').textContent = `Finished generating ${quota} primes!`;
});

document.querySelector('#reload').addEventListener('click', () => {
    document.location.reload()
});



const log = document.querySelector('.event-log');

document.querySelector('#xhr').addEventListener('click', () => {
    log.textContent = '';

    const xhr = new XMLHttpRequest();

    xhr.addEventListener('loadend', () => {
        log.textContent = `${log.textContent}Finished with status: ${xhr.status}`;
    });

    xhr.open('GET', 'https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json');
    xhr.send();
    log.textContent = `${log.textContent}Started XHR request\n`;
});

document.querySelector('#reload').addEventListener('click', () => {
    log.textContent = '';
    document.location.reload();
});