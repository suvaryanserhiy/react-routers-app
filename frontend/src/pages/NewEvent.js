import { redirect } from 'react-router-dom';
import EventForm from '../components/EventForm';

function NewEvent() {
  return <EventForm />;
}

export default NewEvent;

export async function action({ request, params }) {
  const data = await request.formData();

  const eventData = {
    title: data.get('title'),
    image: data.get('image'),
    description: data.get('description'),
    date: data.get('date'),
  };
  const response = await fetch('http://localhost:8080/events/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(eventData),
  });

  if (!response.ok) {
    throw new Response({ message: 'Could not add new event' }, { status: 500 });
  }

  return redirect('/events');
}
