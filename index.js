function fetchBooks(){
  return fetch('https://anapioficeandfire.com/api/books').then(resp => resp.json()).then(data => renderBooks(data))
}
function renderBooks(books){
  let main = document.querySelector('main')
  books.forEach(book => {
    let h2 = document.createElement('h2')
    h2.innerHTML = book.name
    main.appendChild(h2)
  })
}
document.addEventListener('DOMContentLoaded',() => {
  fetchBooks()
})