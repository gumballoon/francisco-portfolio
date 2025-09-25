import Divider from "./Divider";
import ProjectItem from "./ProjectItem";

import yelpCamp from "./assets/image-project-yelp.png";
import eCommerce from "./assets/image-project-e-commerce.png";
import comments from "./assets/image-project-comments.png";
import crowdfunding from "./assets/image-project-crowdfunding.png";
import cart from "./assets/image-project-cart.png";
import capoot from "./assets/image-project-capoot.png";

export default function Projects() {
    return (
        <section className="Projects px-8 pt-16 max-w-[1280px] mx-auto" id="Projects">
            <h2 className="poppins text-3xl font-bold leading-normal tracking-wider -mb-4 md:text-[2.25rem] xl:text-[2.5rem] transition-all duration-300">
                Projects
            </h2>

            < Divider title={'full-stack'} isProject={true}/>

            < ProjectItem image={yelpCamp} title={'Yelp Camp'} date={"Jun '25"} demo={'https://yelp-camp-qj1s.onrender.com'} repo={'https://github.com/gumballoon/yelp-camp'} description={<>Full-stack campground review platform designed as a RESTful web application, featuring user authentication, image uploads, interactive maps, and comprehensive security features. Built with <span>Node.js</span>, <span>Express</span>, <span>MongoDB</span>, <span>Mongoose</span>, <span>EJS</span>, and modern web technologies following Colt Steele's <a href="https://www.udemy.com/course/the-web-developer-bootcamp/" target="_blank" className="link">Web Developer Bootcamp 2025</a>."</>}/>
            
            < Divider title={'react'} isProject={true}/>

            < ProjectItem image={eCommerce} title={'E-commerce Product Page'} date={"September '25"} demo={'https://gumballoon.github.io/e-commerce-product-page/'} repo={'https://github.com/gumballoon/e-commerce-product-page'} description={<>Challenge from <a href="https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6" target="_blank" className="link">Frontend Mentor</a>, focusing on interactive lightbox galleries, shopping cart state management, responsive image carousels, and modern <span>React</span> component architecture with <span>Tailwind CSS</span>.</>}/>

            < ProjectItem image={comments} title={'Interactive Comments'} date={"August '25"} demo={'https://gumballoon.github.io/interactive-comments-section/'} repo={'https://github.com/gumballoon/interactive-comments-section'} description={<>Challenge from <a href="https://www.frontendmentor.io/challenges/interactive-comments-section-iG1RugEG9" target="_blank" className="link">Frontend Mentor</a>, focusing on CRUD operations, nested comment threading, vote functionality, and responsive <span>React</span> component architecture with <span>Tailwind CSS</span>.</>}/>

            < Divider title={'vanilla js'} isProject={true}/>

            < ProjectItem image={crowdfunding} title={'Crowdfunding Product Page'} date={"May '25"} demo={'https://gumballoon.github.io/crowdfunding-product-page/'} repo={'https://github.com/gumballoon/crowdfunding-product-page'} description={<>Challenge from <a href="https://www.frontendmentor.io/challenges/crowdfunding-product-page-7uvcZe7ZR" target="_blank" className="link">Frontend Mentor</a>, focusing on interactive pledges, state updates, responsive design, and dynamic DOM manipulation. Built with <span>JavaScript</span> (vanilla) and <span>Bootstrap</span>.</>}/>

            < ProjectItem image={cart} title={'Product List w/ Cart'} date={"March '25"} demo={'https://gumballoon.github.io/product-list-with-cart/'} repo={'https://github.com/gumballoon/product-list-with-cart'} description={<>Challenge from <a href="https://www.frontendmentor.io/challenges/product-list-with-cart-5MmqLVAp_d" target="_blank" className="link">Frontend Mentor</a>, focusing on updating the UI in multiple places based on user actions, cart functionality, and responsive layout. Built with <span>JavaScript</span> (vanilla) and <span>Bootstrap</span>.</>}/>

            < ProjectItem image={capoot} title={'Capoot'} date={"January '25"} demo={'https://gumballoon.github.io/capoot/'} repo={'https://github.com/gumballoon/capoot'} description={<>An <span>original project</span>: a capo calculator web app that transposes power chord progressions into open chords. Select your chords, get the capo fret, and play simplified open chord versions. Built with <span>JavaScript</span> (vanilla) and <span>Bootstrap</span>.</>}/>
        </section>
    )
}