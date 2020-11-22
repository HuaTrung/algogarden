import React from "react";
import {
  Button,
  Divider,
  Grid,
  Header,
  Icon,
  Search,
  Segment,
} from "semantic-ui-react";
// import Filterizr from 'filterizr';
import CardPortfolio from "./component/CardPortfolio";
import anime from 'animejs/lib/anime.es.js';

class Portfolio extends React.Component {
    constructor(props) {
      super(props);
    }
    componentDidMount() {
        var opac = anime({
            targets: '.name .letter',
          opacity: [0,1],
          easing: "easeOutSine",
          duration: 1000,
          keyframes: [
                    {display: 'block' }, // start frame
                    {display: 'none'}, // end frame
                ],
          delay: (el, i) => 150 * (i+1),
        //   function(){$(this).addClass('hideAway')}
          });
          
        // anime.timeline({loop: false})
        // .add({
        //   targets: '.name .letter',
        //   opacity: [0,1],
        //   easing: "easeOutSine",
        //   duration: 1000,
        //   delay: (el, i) => 150 * (i+1)
        // })
        // .add({
        //     targets: '.name .letterremove',
        //     opacity: [1,0],
        //     easing: "easeOutSine",
        //     duration: 500,
        //     rotateY: 45,
        //     keyframes: [
        //         {display: 'block' }, // start frame
        //         {display: 'none'}, // end frame
        //     ],
        //     delay: (el, i) => 150 * (i+1)
        //   })
        // .add({
        //     targets: '.name .letterlast',
        //     opacity: [0,1],
        //     easing: "easeOutSine",
        //     duration: 500,
        //     rotateY: [-90,0],
        //     delay: (el, i) => 150 * (i+1)
        //   });
    }
    render(){
        return(<Segment padded style={{ backgroundColor: "#BDAAA4" }}>
        <Grid columns={2} stackable divided>
          <Grid.Row verticalAlign="middle">
            <Grid.Column width={12}>
            {/* <h1 style={{fontFamily:"FlowerFonts",color:"#FFFFFF"}}> */}
            <div className="name" style={{fontFamily:"FlowerFonts",color:"#FFFFFF",fontWeight:"bold",fontSize:"40px"}}>
                <div className="letter">|</div>
                <div className="letter">(</div>
                <div className="letter">M</div>
                <div className="letter"></div>
                <div className="letter letterremove">P</div>
                <div className="letter letterremove">o</div>
                <div className="letter letterremove">r</div>
                <div className="letter letterremove">t</div>
                <div className="letter letterremove">f</div>
                <div className="letter letterremove">o</div>
                <div className="letter letterremove">l</div>
                <div className="letter letterremove">i</div>
                <div className="letter letterremove">o</div>
                <div className="letterlast">G</div>
                <div className="letterlast">a</div>
                <div className="letterlast">r</div>
                <div className="letterlast">d</div>
                <div className="letterlast">e</div>
                <div className="letterlast">n</div>
            </div>
                
                {/* |(MGarden</h1> */}
              <div id="app" className="container" style={{ boxSizing: "content-box" }}>
                <CardPortfolio
                  header="Convex Hull"
                  content="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                  image="https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.0-9/120333386_3867300719964839_9174287930543848124_o.jpg?_nc_cat=102&ccb=2&_nc_sid=0debeb&_nc_ohc=CTlEqOr7HSYAX8O3898&_nc_ht=scontent.fsgn2-5.fna&oh=6a89db14b80fce9efa7cc3dfc1327dda&oe=5FE068D6"
                ></CardPortfolio>
                <CardPortfolio
                  header="Shakespeare Monkey"
                  content="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                  image="https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.0-9/119455931_3821712097857035_3938507418574807443_o.jpg?_nc_cat=111&ccb=2&_nc_sid=0debeb&_nc_ohc=YEChnZMkU38AX-mtZUC&_nc_ht=scontent.fsgn2-2.fna&oh=ee3d6fcb3c7da7f28226ea1f54b1f096&oe=5FDFD795"
                ></CardPortfolio>
                <CardPortfolio
                  header="Shakespeare Monkey"
                  content="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                  image="https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.0-9/117711727_3737131362981776_3976506613262938381_o.jpg?_nc_cat=108&ccb=2&_nc_sid=0debeb&_nc_ohc=fFyL41Y9_uwAX851QIT&_nc_ht=scontent.fsgn2-3.fna&oh=9377c6b97cc713c1396fdfafd737a0c6&oe=5FDEA11A"
                ></CardPortfolio>
              </div>
            </Grid.Column>
            <Grid.Column width={4} textAlign="center">
              <section >
                <div className="profile profile-smallimg" style={{ backgroundColor: "#FFFFFF" }}>
                  <div className="profile__image">
                    <img
                      src="https://i.imgur.com/L8vjbWV.jpg"
                      alt="Trung Hua"
                    />
                  </div>
                  <div className="profile__info">
                    <h3>Trung Hua</h3>
                    <p className="profile__info__extra">
                      A very good boi that loves playing fetch and ice-cream! Gentle
                      with everyone. Scared of the rain.
                    </p>
                  </div>
                </div>
              </section>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>);
    }
}
// function Portfolio() {
//   return <DividerExampleHorizontalTable></DividerExampleHorizontalTable>;
// }

// const DividerExampleHorizontalTable = () => (
//   <Segment padded style={{ backgroundColor: "#BDAAA4" }}>
//     <Grid columns={2} stackable divided>
//       <Grid.Row verticalAlign="middle">
//         <Grid.Column width={12}>
//         {/* <h1 style={{fontFamily:"FlowerFonts",color:"#FFFFFF"}}> */}
//         <div class="name" style={{fontFamily:"FlowerFonts",color:"#FFFFFF"}}>
//             <div class="letter">|</div>
//             <div class="letter">(</div>
//             <div class="letter">M</div>
//             <div class="letter"></div>
//             <div class="letter">G</div>
//             <div class="letter">a</div>
//             <div class="letter">r</div>
//             <div class="letter">d</div>
//             <div class="letter">e</div>
//             <div class="letter">n</div>
//         </div>
            
//             {/* |(MGarden</h1> */}
//           <div id="app" class="container" style={{ boxSizing: "content-box" }}>
//             <CardPortfolio
//               header="Convex Hull"
//               content="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
//               image="https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.0-9/120333386_3867300719964839_9174287930543848124_o.jpg?_nc_cat=102&ccb=2&_nc_sid=0debeb&_nc_ohc=CTlEqOr7HSYAX8O3898&_nc_ht=scontent.fsgn2-5.fna&oh=6a89db14b80fce9efa7cc3dfc1327dda&oe=5FE068D6"
//             ></CardPortfolio>
//             <CardPortfolio
//               header="Shakespeare Monkey"
//               content="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
//               image="https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.0-9/119455931_3821712097857035_3938507418574807443_o.jpg?_nc_cat=111&ccb=2&_nc_sid=0debeb&_nc_ohc=YEChnZMkU38AX-mtZUC&_nc_ht=scontent.fsgn2-2.fna&oh=ee3d6fcb3c7da7f28226ea1f54b1f096&oe=5FDFD795"
//             ></CardPortfolio>
//             <CardPortfolio
//               header="Shakespeare Monkey"
//               content="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
//               image="https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.0-9/117711727_3737131362981776_3976506613262938381_o.jpg?_nc_cat=108&ccb=2&_nc_sid=0debeb&_nc_ohc=fFyL41Y9_uwAX851QIT&_nc_ht=scontent.fsgn2-3.fna&oh=9377c6b97cc713c1396fdfafd737a0c6&oe=5FDEA11A"
//             ></CardPortfolio>
//           </div>
//         </Grid.Column>
//         <Grid.Column width={4} textAlign="center">
//           <section >
//             <div class="profile profile-smallimg" style={{ backgroundColor: "#FFFFFF" }}>
//               <div class="profile__image">
//                 <img
//                   src="https://i.imgur.com/L8vjbWV.jpg"
//                   alt="Trung Hua"
//                 />
//               </div>
//               <div class="profile__info">
//                 <h3>Trung Hua</h3>
//                 <p class="profile__info__extra">
//                   A very good boi that loves playing fetch and ice-cream! Gentle
//                   with everyone. Scared of the rain.
//                 </p>
//               </div>
//             </div>
//           </section>
//         </Grid.Column>
//       </Grid.Row>
//     </Grid>
//   </Segment>
// );
export default Portfolio;
