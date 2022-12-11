import './card.css';
import ReactDOM from 'react-dom/client';
import IMG from './images/image-victor.jpg';
import headerIMG from './images/bg-pattern-card.svg'



function Header() {
  return (
    <div className='header'>
      <img id='headerimg' src={headerIMG} alt="" />
      <img id='img' src={IMG} alt="" />
    </div>
  )
}

function Lower() {
  return (
    <div className='lower' id='lowerr'>
          <div className="info">
            <h2>80k</h2>
            <span className="tag">Followers</span>
          </div>
          <div className="info">
            <h2>803k</h2>
            <span className="tag">Likes</span>
          </div>
          <div className="info">
            <h2>1.4K</h2>
            <span className="tag">Photos</span>
          </div>
      </div>
  )
}

function MainContent() {
  return (
    <div className='main'>
        <div id='userinfo'>
          <h2>Vitor Crest <span>26</span></h2>
          <span>London</span>
        </div>

        <div id="line"></div>
      </div>
  ) 
}
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

// export default card;
