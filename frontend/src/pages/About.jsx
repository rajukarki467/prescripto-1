import React from "react";
import { assets } from "../assets/assets_frontend/assets";

const About = () => {
  return (
    <div>
      <header className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-medium"> US</span>
        </p>
      </header>

      <section className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt="About us visual representation"
        />
        <article className="flex flex-col justify-center gap-5 ms:w-2/4 text-sm text-gray-600">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
            adipisci aspernatur, eum velit quasi quam enim ratione optio vel
            modi nam animi suscipit ea qui excepturi voluptatibus provident
            vitae autem?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
            porro dolore asperiores, voluptates sequi ex veniam accusantium
            ducimus, magni ut quisquam tempora labore eius eum. Quidem dicta
            ratione exercitationem molestias quibusdam? Nostrum excepturi
            debitis sunt harum id odio suscipit recusandae sint ipsa, sapiente
            corrupti accusamus. Voluptates dolor at odit quisquam.
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            repellendus deleniti nostrum fugiat impedit similique asperiores
            modi reiciendis mollitia. Cum distinctio dolores harum totam ab non
            nam atque. Quae, commodi.
          </p>
        </article>
      </section>

      <section className="text-xl my-4">
        <p>
          WHY <span className="text-gray-700 font-semibold"> CHOOSE US</span>
        </p>
        <div className="flex flex-col md:flex-row mb-20">
          <div className="border px-10 md:px-16 py-8 flex flex-col gap-5 text-[15px] hover:bg-primary  hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
            <b>Efficiency:</b>
            <p>
              Streamlined appointment scheduling that fits into your busy
              lifestyle.
            </p>
          </div>
          <div className="border px-10 md:px-16 py-8 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
            <b>Convenience:</b>
            <p>
              Access to a network of trusted healthcare professionals in your
              area.
            </p>
          </div>
          <div className="border px-10 md:px-16 py-8 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
            <b>Personalization:</b>
            <p>
              Tailored recommendations and reminders to help you stay on top of
              your health.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
