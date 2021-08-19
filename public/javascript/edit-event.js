const loadCategories = async function() {
  let result = await fetch('/api/categories', {
    method: 'GET'
  })
  
  return result.json()
    .then(responsedata=>{
      for(x=0;x<responsedata.length;x++){
        var newCategoryOption = document.createElement('option');
        newCategoryOption.textContent=responsedata[x].title;
        document.querySelector('select[name="dropdown"]').appendChild(newCategoryOption);
      };
  });
};
  
  async function editFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="event-title"]').value;
    const event_description = document.querySelector('textarea[name="event-description"]').value;
    let category = document.querySelector('select[name="dropdown"]').value;
    const date = document.querySelector('input[name="event-date"]').value;
    const street = document.querySelector('input[name="event-location-street"]').value;

    if(category==="Add a new category"){
      const newCategoryValue = document.querySelector('input[name="new-category-input-choice"]').value;
      category = newCategoryValue;
    
      var result = await fetch('/api/categories', {
        method: 'POST',
        body: JSON.stringify({
          title: category
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
   }else{
    var result = await fetch('/api/categories', {
      method: 'POST',
      body: JSON.stringify({
        title: category
      }),
      headers: {
        'Content-Type': 'application/json'
      }
   });
  }
    
    return result.json()
      .then(responsedata=>{

        categoryID=responsedata.id;

        fetch(`/api/events`, {
          method: 'PUT',
          body: JSON.stringify({
            title: title,
            event_description: event_description,
            date: date,
            address: street,
            category_id: categoryID
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        })
      }).then(document.location.replace('/dashboard'));
  }

  const newCategoryHandler = function(event) {
    var targetEl = event.target;
  
    if (targetEl.value==="Add a new category"){
      const location = document.querySelector("#categorySection");
  
      let newCategoryBox = document.createElement('input');
      newCategoryBox.setAttribute('type','text');
      newCategoryBox.setAttribute('name','new-category-input-choice');
      newCategoryBox.setAttribute('placeholder','Please enter your new category');
    
      location.appendChild(newCategoryBox);
    }
  };
  
  document.querySelector('.edit-event-form').addEventListener('submit', editFormHandler);
  document.querySelector('.dropdown').addEventListener('input', newCategoryHandler)

  loadCategories();