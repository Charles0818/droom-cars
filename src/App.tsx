import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { BuyingCars, Wrapper } from './pages';
import './styles/App.scss';

const App: React.FC = (): JSX.Element => {
  return (
    <IconContext.Provider value={{ className: 'global-class-name' }}>
      <Router>
        <Wrapper>
          <Route exact path="/" component={BuyingCars} />
        </Wrapper>
      </Router>
    </IconContext.Provider>
  );
};

export default App;
