// take html
let input = document.getElementById('input');
let board = document.getElementById('search-list');

function createTenBlock(value) {
  for (let key in value) {
    board.innerHTML += `<li>${value[key].title}<br>${value[key].body}</li>`;
  }
}

function search(value) {
  input.addEventListener('input', (e) => {
    let target = e.target.value;
    if (target.length > 0) {
      board.innerHTML = '';
      for (key in value) {
        if (value[key].title.includes(target)) {
          board.innerHTML += `<li>${value[key].title}<br> ${value[key].body}</li>`;
        }
        if (value[key].body.includes(target)) {
          board.innerHTML += `<li>${value[key].title}<br>${value[key].body}</li>`;
        }
      }
    } else if (target.length === 0) {
      createTenBlock(value);
    }
  });
}

fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    createTenBlock(data);
    search(data);
  });
