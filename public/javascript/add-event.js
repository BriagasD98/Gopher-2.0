async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="event-title"]').value;
    const event_description = document.querySelector('textarea[name="event-description"]').value;
    const category = document.querySelector('input[name="event-category"]').value;
    const date = document.querySelector('input[name="event-category"]').value;
    const street = document.querySelector('input[name="event-location-street"]').value;
    const zip = document.querySelector('input[name="event-location-zip"]').value;
    const city = document.querySelector('input[name="event-location-city"]').value;
    const state = document.querySelector('input[name="event-location-state"]').value;

  console.log(post_text);

    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        event_description: event_description,
        category: category,
        date: date,
        address: [street, zip, city, state]
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);