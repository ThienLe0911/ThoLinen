import Footer from "../common/Footer/Footer";
import Header from "../common/HeaderComponent/Header";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <Header></Header>
      <div className="info flex justify-center py-20 mt-20">
        <div className="container_custom">
          <h4>Get to know us</h4>
          <h2>About our company</h2>
          <p className="uppermedium_text mt-5">
            At <span className="font-bold inline">Glamour</span>, we are
            passionate about fashion, style, and self-expression.
          </p>
          <p className="medium_text mt-5">
            Our journey began with a simple yet powerful vision: to create
            clothing that not only embodies the latest trends but also empowers
            individuals to feel confident and express their unique personalities
            through fashion.
          </p>
        </div>
      </div>
      <div className="w-full relative h-[100vh]">
        <video
          className=""
          width={"100%"}
          style={{ objectFit: "cover", height: "100vh" }}
          playsInline
          autoPlay
          muted
          loop
          src="https://swag.vivathemes.com/wp-content/uploads/2023/10/aboutus.mp4"
        ></video>
      </div>
      <div className="story flex justify-center py-20 border-[1px]">
        <div className="container_custom">
          <h2>Our Story</h2>
          <p className="uppermedium_text mt-5">
            Founded in 2002, SWAG is the brainchild of a group of fashion
            enthusiasts who shared a common dream.
          </p>
          <p className="medium_text mt-5">
            Our founders, Nick and Jeena, were driven by a deep love for fashion
            and a desire to provide people with clothing that allows them to
            shine and stand out in a crowded world of fashion. What started as a
            small-scale endeavor has now grown into a renowned fashion brand
            with a global presence. Our commitment to quality, innovation, and
            customer satisfaction has propelled us to the forefront of the
            fashion industry.
          </p>
        </div>
      </div>
      <div className="Philosophy flex justify-center py-20">
        <div className="container_custom">
          <h2>Our Philosophy</h2>
          <p className="uppermedium_text mt-5">
            At SWAG, we believe that fashion is not just about what you wear,
            but how it makes you feel. It’s a powerful form of self-expression
            and an art that speaks volumes without uttering a word. Our
            philosophy is grounded in the following principles:
          </p>
          <div className="philosophy_wrapper mt-5 flex">
            <div className="philosophy_left basis-1/2 ">
              <img
                className="w-full object-fill philosoply_image"
                src="https://swag.vivathemes.com/wp-content/uploads/2023/10/shirt-819x1024.jpg"
                alt="banner"
              ></img>
            </div>
            <div className="philosophy_right basis-1/2 flex flex-col justify-center px-5">
              <div className="philosophy_right-item">
                <p className="medium_text">
                  <span className="font-bold medium_text">Quality Craftsmanship:</span> We take pride in the craftsmanship of our clothing. Every stitch, button, and fabric choice is carefully selected to ensure that our products are not only stylish but also built to last.
                </p>
              </div>
              <div className="philosophy_right-item mt-5">
                <p className="medium_text">
                  <span className="font-bold medium_text">Trendsetting Designs:</span> Our in-house design team stays at the forefront of fashion trends, creating pieces that are not only contemporary but also possess a timeless appeal.
                </p>
              </div>
              <div className="philosophy_right-item mt-5">
                <p className="medium_text">
                  <span className="font-bold medium_text">Inclusivity:</span> We celebrate diversity and inclusivity in fashion. Our range includes sizes and styles that cater to people from all walks of life.
                </p>
              </div>
              <div className="philosophy_right-item mt-5">
                <p className="medium_text">
                  <span className="font-bold medium_text">Eco-Consciousness:</span> We are committed to sustainability and responsible fashion. [Fashion Company Name] takes steps to minimize our environmental footprint and promote ethical practices within the fashion industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default About;
