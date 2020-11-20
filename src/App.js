import "./Porfolio.css";
// import "./stylesheets/metro-panel.css";
import TileView from "./component/TileView"
import icon_service from './assets/images/icons/03.png';
import icon_me from './assets/images/icons/01.png';
import icon_porfolio from './assets/images/icons/06.png';
import icon_testimonials from './assets/images/icons/02.png';
import icon_profile from './assets/images/icons/04.png';
import icon_contact from './assets/images/icons/05.png';


function App() {
  return (
    <section id="home">
    <section id="metro-panel" className="fx fx-bounceIn">

      <div className="stripe clearfix">

        <div className="tile tile-01 transparent">
        </div>

        <div className="tile tile-01 thumb">
          <div className="tile-nav flipX">
            <img alt="" title className="img1" src="images/tiles/profile-img1.jpg" />
            <img alt="" title className="img2" src="images/tiles/profile-img.jpg" />
          </div>
        </div>

        <TileView color="#eeabcc" description="Hello, I am Sarah Smith. A freelance graphic designer."
         title="About me" href="#about" icon={icon_me}></TileView>

        <div className="tile tile-01 thumb">
          <div className="tile-nav flipX">
            <img alt="" title className="img1" src="images/tiles/03a.jpg" />
            <img alt="" title className="img2" src="images/tiles/03b.jpg" />
          </div>
        </div>

        <TileView color="#8cdbe2" description="27 Applications, 87 Websites &amp; 52 Illustrations."
         title="My Portfolio" href="#portfolio" icon={icon_porfolio}></TileView>
        
        <div className="tile transparent">
        </div>

        <div className="slogan tile-03   text-left">
          <div className="inner">
            <h1>Sarah Smith</h1>
            <h3>A freelance graphic &amp; web designer</h3>
          </div>
        </div>

        <TileView color="#8cdbe2" description="
              Web Design / iPhone Application / Graphic Design / Android
              Application" title="My Service" href="#service" icon={icon_service}></TileView>

        <div className="tile tile-01 thumb">
          <div className="tile-nav flipX">
            <img alt="" title className="img1" src="images/tiles/02a.jpg" />
            <img alt="" title className="img2" src="images/tiles/02b.jpg" />
          </div>
        </div>

        <div className="tile tile-01 thumb">
          <div className="tile-nav flipY">
            <img alt="" title className="img1" src="images/tiles/05a.jpg" />
            <img alt="" title className="img2" src="images/tiles/05b.jpg" />
          </div>
        </div>

        <TileView color="#e2d338" description="Customer love us, Happy Words"
         title="Testimonials" href="#testimonials" icon={icon_testimonials}></TileView>

        <div className="tile tile-01 thumb">
          <div className="tile-nav flipX">
            <img alt="" title className="img1" src="images/tiles/01a.jpg" />
            <img alt="" title className="img2" src="images/tiles/01b.jpg" />
          </div>
        </div>

        <TileView color="#c5a9eb" description="Our Professional Skills and Education"
         title="Profile Page" href="#profile" icon={icon_profile}></TileView>
        {/* Tile : Ends */}
        {/* Tile : Starts */}
        <div className="tile tile-01 thumb">
          <div className="tile-nav flipY">
            <img alt="" title className="img1" src="images/tiles/06a.jpg" />
            <img alt="" title className="img2" src="images/tiles/06b.jpg" />
          </div>
        </div>

        <TileView color="#c2e295" description="Have a question or message for me?"
         title="Contact Me" href="#contact" icon={icon_contact}></TileView>

        {/* Tile : Ends */}
      </div>
      {/* stripe :ends*/}
    </section>
  </section>
  );
}

export default App;
