/* eslint-disable */
import './App.css';
import AppHeader from './component/AppHeader.jsx';
import MainBody from './component/MainBody.jsx';
import MainFooter from './component/MainFooter.jsx';

function App() {
  return (
    <div className="wrapper">
      <AppHeader></AppHeader>
      <MainBody></MainBody>
      <MainFooter></MainFooter>
    </div>
  );
}

export default App;
