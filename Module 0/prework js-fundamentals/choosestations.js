const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];


function chooseStations(stations) 
{
  let goodStations = [];

  for (const station of stations) 
  {

    let capacity = station[1];
    let venue = station[2];

    if (capacity >= 20) 
    { 
      if (venue === "school" || venue === "community centre")
      {
        goodStations.push(station[0]);
      }
    }
  }

  
  return goodStations;

}

chooseStations(stations);
