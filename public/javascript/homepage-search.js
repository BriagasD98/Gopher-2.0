async function searchHandler(event) {
    event.preventDefault();

    const city = document.querySelector('input[name="fname"]').value;
    const date = document.querySelector('input[name="date"]').value;
    const category = document.querySelector('input[name="event-category"]').value;

    document.location.replace('/search/'+city+'&'+date+'&'+category);
}
  
  document.querySelector('.action-form').addEventListener('submit', searchHandler);