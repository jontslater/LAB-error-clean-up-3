import '../styles/main.scss';
import houses from '../utils/sample_data/house';
import renderToDOM from '../utils/sample_data/renderToDom';
import htmlStructure from '../components/htmlStructure';
import header from '../components/header';
import startSortingBtn from '../components/startSortingbtn';
import studentAreas from '../components/StudentAreas';
import form from '../components/form';
import events from '../components/events';

const startApp = () => {
  htmlStructure();
  header();
  startSortingBtn();
  events();
  houses();
  renderToDOM();
  studentAreas();
  form();
};

startApp();
