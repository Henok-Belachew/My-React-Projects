import './card.css';
import ReactDOM from 'react-dom/client';

import Lower from './Components/Lower'
import Header from './Components/header'
import MainContent from './Components/maincontent';








function Card() { 
  return (
  
    <div className='container'>
      
      <Header />

      <MainContent />
           
      <Lower />

    </div>
    
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <Card />

);


