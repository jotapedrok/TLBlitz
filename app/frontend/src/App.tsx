import React from 'react';
import { useSelector } from 'react-redux';
import './App.scss';
import AlertBox from './components/AlertBox';
import Router from './routes/routes';
import { RootState } from './store';

function App() {
  const { hasAlert, alert } = useSelector((s: RootState) => s.alert);
  return (
    <div className="App">
      {hasAlert && (
        <AlertBox
          buttons={alert.buttons || []}
          content={alert.content || ''}
          title={alert.title || ''}
          hasButton={alert.hasButton || false}
        />
      )}
      <Router />
    </div>
  );
}

export default App;
