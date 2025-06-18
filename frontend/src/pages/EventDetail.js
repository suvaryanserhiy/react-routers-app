import { useRouteLoaderData } from 'react-router-dom';
import EventItem from '../components/EventItem';
function EventDetailPage() {
  const data = useRouteLoaderData('event-detail'); // the id of route which loader we wanna use
  return (
    <>
      {/* {backend will include 'event' into a response data object} */}
      <EventItem event={data.event} />
    </>
  );
}

export default EventDetailPage;

export async function loader({ request, params }) {
  const eventId = params.eventId;
  const response = await fetch('http://localhost:8080/events/' + eventId);

  if (!response.ok) {
    throw new Response({
      message: 'Could not fetch details for selected event.',
      status: 500,
    });
  } else {
    return response;
  }
}
