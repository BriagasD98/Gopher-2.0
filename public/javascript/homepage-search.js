async function searchHandler(event) {
    event.preventDefault();

    const date = document.querySelector('input[name="date"]').value;

    if (date===null){
      date="thisIsTheDefaultDate";
    }

    const category = document.querySelector('input[name="event-category"]').value;
    if (category===null){
      category="thisIsTheDefaultCategory";
    }

    document.location.replace('/search/'+date+'&'+category);
};
  
document.querySelector('.action-form').addEventListener('submit', searchHandler);