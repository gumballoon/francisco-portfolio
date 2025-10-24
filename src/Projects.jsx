import Divider from "./Divider";
import ProjectItem from "./ProjectItem";

import yelpCamp from "./assets/image-project-yelp.png";
import weather from "./assets/image-project-weather.png";
import eCommerce from "./assets/image-project-e-commerce.png";
import comments from "./assets/image-project-comments.png";
import crowdfunding from "./assets/image-project-crowdfunding.png";
import cart from "./assets/image-project-cart.png";
import capoot from "./assets/image-project-capoot.png";

export default function Projects() {
  return (
    <section className="Projects px-8 pt-16 max-w-[1280px] mx-auto">
      <h2 className="poppins text-3xl font-bold leading-normal tracking-wider -mb-4 md:text-[2.25rem] xl:text-[2.5rem] transition-all duration-300">
        Projects
      </h2>

          <Divider title={"full-stack"} isProject={true} />

      <ProjectItem
        image={yelpCamp}
        title={"Yelp Camp"}
        date={"June 2025"}
        demo={"https://yelp-camp-qj1s.onrender.com"}
        repo={"https://github.com/gumballoon/yelp-camp"}
        description={
          <>
            Full-stack web app where users can create, edit, and review
            campgrounds. Includes user authentication, image uploads, and
            interactive maps. Built as a RESTful application with{" "}
            <span>Node.js</span>, <span>Express</span>, <span>MongoDB</span>,{" "}
            <span>Mongoose</span>, and <span>EJS</span>.  This was the capstone project of Colt Steele's{" "}
            <a
              href="https://www.udemy.com/course/the-web-developer-bootcamp/"
              target="_blank"
              className="link"
            >
              Web Developer Bootcamp 2025
            </a>
            . The biggest challenge was juggling all the new tools and concepts, applying what I learned as I went. For quick testing, log in with the demo account: <i>yadayada</i> <span className="text-gb-teal-500">/</span> <i>NoSoup4U!</i>
          </>
        }
      />

      <Divider title={"react"} isProject={true} />

      <ProjectItem
        image={weather}
        title={"Weather App"}
        date={"October 2025"}
        demo={"https://gumballoon.github.io/weather-app/"}
        repo={"https://github.com/gumballoon/weather-app"}
        description={
          <>
            Challenge from{" "}
            <a
              href="https://www.frontendmentor.io/challenges/weather-app-K1FhddVm49"
              target="_blank"
              className="link"
            >
              Frontend Mentor
            </a>
            , focusing on real-time weather data integration via the Open-Meteo API, location search functionality, 7-day and hourly forecasts, and unit conversion. Built with{" "}
            <span>React</span> and <span>Tailwind CSS</span>. I started by nailing the functionality first, making sure every API call was handled correctly and the state was efficient and predictable. With the core logic solid, I refined the UI to make the experience clean, fast, and intuitive.
          </>
        }
      />

      <ProjectItem
        image={eCommerce}
        title={"E-commerce Product Page"}
        date={"September 2025"}
        demo={"https://gumballoon.github.io/e-commerce-product-page/"}
        repo={"https://github.com/gumballoon/e-commerce-product-page"}
        description={
          <>
            Challenge from{" "}
            <a
              href="https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6"
              target="_blank"
              className="link"
            >
              Frontend Mentor
            </a>
            , focusing on interactive lightbox galleries, shopping cart state
            management, and responsive image carousels. Built with{" "}
            <span>React</span> and <span>Tailwind CSS</span>. The hardest part was deciding how to structure the lightbox and components for different screen sizes. I managed it by building each part incrementally and focusing on reusability.
          </>
        }
      />

      <ProjectItem
        image={comments}
        title={"Interactive Comments"}
        date={"August 2025"}
        demo={"https://gumballoon.github.io/interactive-comments-section/"}
        repo={"https://github.com/gumballoon/interactive-comments-section"}
        description={
          <>
            Challenge from{" "}
            <a
              href="https://www.frontendmentor.io/challenges/interactive-comments-section-iG1RugEG9"
              target="_blank"
              className="link"
            >
              Frontend Mentor
            </a>
            , focusing on full comment interactivity with nested threads,
            editable and deletable comments, and voting functionality. Built
            with <span>React</span> and <span>Tailwind CSS</span>. Managing CRUD in a frontend-only project was complex and a milestone for learning forms and state. I got through it by diving in, experimenting, and learning as I went.
          </>
        }
      />

      <Divider title={"vanilla js"} isProject={true} />

      <ProjectItem
        image={crowdfunding}
        title={"Crowdfunding Product Page"}
        date={"May 2025"}
        demo={"https://gumballoon.github.io/crowdfunding-product-page/"}
        repo={"https://github.com/gumballoon/crowdfunding-product-page"}
        description={
          <>
            Challenge from{" "}
            <a
              href="https://www.frontendmentor.io/challenges/crowdfunding-product-page-7uvcZe7ZR"
              target="_blank"
              className="link"
            >
              Frontend Mentor
            </a>
            , focusing on interactive pledges, state updates, responsive design,
            and dynamic DOM manipulation. Built with <span>JavaScript</span>{" "}
            (vanilla) and <span>Bootstrap</span>. The biggest challenge was managing the pledge forms and updating the live stats. I handled it by testing, adjusting, and figuring out how each piece should work together.
          </>
        }
      />

      <ProjectItem
        image={cart}
        title={"Product List w/ Cart"}
        date={"March 2025"}
        demo={"https://gumballoon.github.io/product-list-with-cart/"}
        repo={"https://github.com/gumballoon/product-list-with-cart"}
        description={
          <>
            Challenge from{" "}
            <a
              href="https://www.frontendmentor.io/challenges/product-list-with-cart-5MmqLVAp_d"
              target="_blank"
              className="link"
            >
              Frontend Mentor
            </a>
            , focusing on updating the UI in multiple places based on user
            actions, cart functionality, and responsive layout. Built with{" "}
            <span>JavaScript</span> (vanilla) and <span>Bootstrap</span>. Updating the UI in multiple places while maintaining cart functionality was a major milestone in my learning. I tackled it by trying things out, fixing issues, and refining how everything fit together.
          </>
        }
      />

      <ProjectItem
        image={capoot}
        title={"Capoot"}
        date={"January 2025"}
        demo={"https://gumballoon.github.io/capoot/"}
        repo={"https://github.com/gumballoon/capoot"}
        description={
          <>
            An <span>original project</span>: a capo calculator web app that
            transposes power chord progressions into open chords. Select your
            chords, get the capo fret, and play simplified open chord versions.
            Designed in <span>Figma</span> and built with{" "}
            <span>JavaScript</span> (vanilla) and <span>Bootstrap</span>. My very first website, and a real learning experience. I explored, experimented, and learned by figuring things out as I built it.
          </>
        }
      />
    </section>
  );
}
