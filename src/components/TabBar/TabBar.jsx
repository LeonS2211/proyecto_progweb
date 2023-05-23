import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

//import Sonnet from '../../components/Sonnet';

function TabBar() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="home" title="Home">
        <p>hola</p>
      </Tab>
      <Tab eventKey="profile" title="Profile">
        <p>hola</p>
      </Tab>
      <Tab eventKey="longer-tab" title="Loooonger Tab">
      <p>hola</p>
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
      <p>hola</p>
      </Tab>
    </Tabs>
  );
}

export default TabBar;