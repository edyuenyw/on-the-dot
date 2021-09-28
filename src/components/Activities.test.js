import { render, screen } from '@testing-library/react';
import { Router, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';  // tool for just testing unlike Browser/HashRouter

import Activities from './Activities';

let searchInput = null;
const fakeHistory = createMemoryHistory();
const activities = [
  {
    id: 1,
    name: "Work",
    address: {            // get from google map
      addressFrom: "Home",
      addressTo: "Melbourne"
    },
    date: "18/09/2021",
    arriveBy: 900,
    departBy: 800
  }
];


// beforeEach() to load common render from the start (mock up data and function)
beforeEach( () => {
  // Have to mock/fake as per component tags sequences
  render(
    <Router history={ fakeHistory } >
      <Route path="/activities/" >
        <Activities activities={ activities } />
      </Route>
    </Router>
  );
});

it('renders Activities link', () => {
  render(<Activities />);
  const linkElement = screen.getByText(/Activities/);
  expect(linkElement).toBeInTheDocument();
});
