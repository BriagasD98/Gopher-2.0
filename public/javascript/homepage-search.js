async function searchHandler(event) {
    event.preventDefault();

    const date = document.querySelector('input[name="date"]').value;

    if (!date){
      date="thisIsTheDefaultDate";
    }

    const category = document.querySelector('select[name="dropdown"]').value;
    if (!category){
      category="thisIsTheDefaultCategory";
    }

    console.log("date: "+date);
    console.log("category: "+category);

    document.location.replace('/search/'+date+'&'+category);
};

document.querySelector('#submitBtn').addEventListener('click', searchHandler);