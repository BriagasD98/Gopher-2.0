async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="event-title"]').value;
    const event_description = document.querySelector('textarea[name="event-description"]').value;
    const category = document.querySelector('input[name="event-category"]').value;
    const date = document.querySelector('input[name="event-date"]').value;
    const street = document.querySelector('input[name="event-location-street"]').value;

    let result = await fetch('/api/categories', {
      method: 'POST',
      body: JSON.stringify({
        title: category
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    
    return result.json()
      .then(responsedata=>{

        categoryID=responsedata.id;
        console.log(categoryID);

        fetch(`/api/events`, {
          method: 'POST',
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
  
  document.querySelector('.new-event-form').addEventListener('submit', newFormHandler);