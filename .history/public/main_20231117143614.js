import '../styles/main.scss';
import houses from '../utils/sample_data/house';
import renderToDOM from '../utils/sample_data/renderToDom';
import htmlStructure from '../components/htmlStructure';
import header from '../components/header';
import startSortingBtn from '../components/startSortingbtn';
import studentAreas from '../components/StudentAreas';
import form from '../components/form';

const voldysArmy = [];

const filterBtnRow = () => {
  const domString = `<div class="btn-group" role="group" aria-label="Basic example">
      <button type="button" id="filter--hufflepuff" class="btn btn-warning btn-sm">Hufflepuff</button>
      <button type="button" class="btn btn-primary btn-sm" id="filter--ravenclaw">Ravenclaw</button>
      <button type="button" class="btn btn-success btn-sm" id="filter--slytherin">Slytherin</button>
      <button type="button" class="btn btn-danger btn-sm" id="filter--gryffindor">Gryffindor</button>
      <button type="button" class="btn btn-secondary btn-sm" id="filter--all">All</button>
    </div>`;

  renderToDOM('#filter-container', domString);
};

// ********** LOGIC  ********** //
// sorts student to a house and then place them in the students array

const startApp = () => {
  htmlStructure(); // always load first
  header();
  startSortingBtn();
  events(); // always load last
};

startApp();
