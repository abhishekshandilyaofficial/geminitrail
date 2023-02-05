import Breadcrumb from 'react-bootstrap/Breadcrumb';

function Breadcrumbs() {
  return (
    <Breadcrumb className='container-fluid' id="Breadcrumbs-bar">
      <Breadcrumb.Item href="#">Gemini</Breadcrumb.Item>
      <Breadcrumb.Item href="#">
        Partner Portal Dashboard
      </Breadcrumb.Item>
      <Breadcrumb.Item active>Find Existing Partner ID</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default Breadcrumbs;