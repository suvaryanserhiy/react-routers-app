import { useRouteError } from 'react-router-dom';
import PageContent from '../components/PageContent';
import MainNavigation from '../components/MainNavigation';

function ErrorPage() {
  const error = useRouteError(); // get hold of the data that's being thrown as an error inside a component thats been rendered as an error element.

  let title = 'An error occurred!';
  let message = 'Something went wrong';

  if (error.status === 500) {
    message = JSON.parse(error.data).message; // get the Response data
  }
  if (error.status === 404) {
    title = 'Not found!';
    message = 'Could not find resource or page.';
  }
  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}

export default ErrorPage;
