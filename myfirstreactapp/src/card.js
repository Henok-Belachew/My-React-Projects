import './card.css';
import IMG from './images/image-victor.jpg';
import headerIMG from './images/bg-pattern-card.svg'

function card() {
  return (
  
    <div className='container'>
      
      <img id='headerimg' src={headerIMG} alt="" />
      <img id='img' src={IMG} alt="" />

      <div id='userinfo'>
        <h2>Vitor Crest <span>26</span></h2>
        <span>London</span>
      </div>

      <div id="line"></div>
     
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
        

    </div>
    
  );
}

export default card;
