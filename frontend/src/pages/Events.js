import { useLoaderData } from 'react-router-dom';

import EventsList from '../components/EventsList';

function EventsPage() {
  const data = useLoaderData();

  // if (data.isError) {
  //   return <p>{data.message}</p>;
  // }

  const events = data.events;
  return <>{<EventsList events={events} />}</>;
}

export default EventsPage;

export async function loader() {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    // return { isError: true, message: 'Could not fetch events' };
    throw new Response(JSON.stringify({ message: 'Could not fetch events.' }), {
      //better throw Responses than regular object besause of status prop
      status: 500,
    });
  } else {
    // const resData = await response.json();
    //const res = new Response('any data', { state: 201 }); ???
    // return resData.events;
    return response;
  }
}
