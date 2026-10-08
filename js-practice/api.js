fetch('(https://api.github.com/users/torvalds)')
.then((response) => response.json())
.then((data) => console.log('Step 1 (.then): ', data));

async function getAsync(){
    const response = await fetch('https://api.github.com/users/torvalds');
    const data = await response.json();
    console.log('Step 2 (async/await): ', data);
}
getAsync();

async function displaySingleAsync() {
    const container = document.querySelector('#async');

    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const post = await response.json();

    container.innerHTML = `
    <h3>Async #${post.title}</h3>
    <p>Async #${post.body}</p>
    `;
}
displaySingleAsync();

async function displayFirstFiveAsync(){
    const container = document.querySelector('#array');

    const response =  await fetch('https://jsonplaceholder.typicode.com/posts');
    const array = await response.json();

    container.innerHTML = '';

    const firstFive = array.slice(0, 5);

    firstFive.forEach((post) => {
        const arrayCard = document.createElement('div');
        arrayCard.classList.add('card');

        arrayCard.innerHTML = `
        <h4>${post.id}. ${post.title}</h4>
          <p>${post.body}</p>
        `;
        container.appendChild(arrayCard);
    })
}
displayFirstFiveAsync();