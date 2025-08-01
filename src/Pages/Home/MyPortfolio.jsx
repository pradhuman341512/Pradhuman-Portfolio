import data from "../../data/index.json";
import { FaGithub } from "react-icons/fa";
export default function MyPortfolio() {
  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <h2 className="section--heading">My Projects</h2>
        </div>
        <div>
           <a href="https://github.com/pradhuman341512" className="visit-github">
           <button className="btn btn-github">
           
            <FaGithub className="w-6 h-6" />
           Visit My GitHub
          </button></a>
          
        </div>
      </div>
      <div className="portfolio--section--container px-4">
        {data?.portfolio?.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={item.src} alt="Placeholder" />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>
              <p className="text-sm portfolio--link">
               <a href={item.url} className="text-md flex  gap-2 ">
                 {item.link}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 20 19"
                  fill="none"
                >
                  <path
                    d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                    stroke="currentColor"
                    stroke-width="2.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
               </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
