import { Link } from "react-scroll";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm <span className="px-2 text-blue-600">Pradhuman Singh</span></p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
  I am a passionate Full Stack Developer with expertise in building scalable web applications using modern technologies like React, NextJs, JS, Node.js, Express, MongoDb, Postgress, UI/UX, Figma, Python, Prisma and Docker. 
  <br /> I love transforming complex problems into elegant, user-friendly solutions while continuously learning and adapting to new challenges.,
</p>

        </div>
       
       <button className="btn btn-primary"> 
         <Link to="/Contact">
            Get In Touch
         </Link>
        </button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
