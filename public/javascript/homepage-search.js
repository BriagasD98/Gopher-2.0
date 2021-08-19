function cancelHandler(event){
  event.preventDefault;
  document.location.replace('/');
}

const loadEvents = function(dbEventData){
  var eventList = document.querySelector("#event-list");

  eventList.innerHTML="";

  for (x=0;x<dbEventData.length;x++){
    let newEventCard = document.createElement('div');
    newEventCard.setAttribute('class','card');

    let newEventCardHeader = document.createElement('div');
    newEventCardHeader.setAttribute("class","card-header");

    let newEventCardHeaderTitle = document.createElement('a');
    newEventCardHeaderTitle.setAttribute("class","card-header-title is-centered");
    newEventCardHeaderTitle.setAttribute("href","/event/"+dbEventData[x].id);
    newEventCardHeaderTitle.textContent=dbEventData[x].title;
    newEventCardHeader.appendChild(newEventCardHeaderTitle);

    newEventCard.appendChild(newEventCardHeader);

    let newEventCardContent = document.createElement('div')
    newEventCardContent.setAttribute('class','card-content');
    
    let newEventCardContentText = document.createElement('div');
    newEventCardContentText.setAttribute("class","content");
    newEventCardContentText.textContent=dbEventData.date

    newEventCardContent.appendChild(newEventCardContentText);
    newEventCard.appendChild(newEventCardContent);

    eventList.appendChild(newEventCard);
  };
};

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

    let result = await fetch('/api/events/'+date+"/"+category);

    return result.json().then(dbEventData=>loadEvents(dbEventData));
};

document.querySelector('#submitBtn').addEventListener('click', searchHandler);
document.querySelector('#cancelBtn').addEventListener('click', cancelHandler);