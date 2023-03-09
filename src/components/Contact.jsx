import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { resume, download, linkedin, github } from "../assets";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (form.name === "" || form.email === "" || form.message === "") {
      setLoading(false);
      alert("Please fill out the blank fields.");
    } else {
      emailjs
        .send(
          "service_yitdq5l",
          "template_nnnk3ly",
          {
            from_name: form.name,
            to_name: "Nour",
            from_email: form.email,
            to_email: "nour.w.dev@gmail.com",
            message: form.message,
          },
          "RsGgI6EndRXL9m10Y"
        )
        .then(
          () => {
            setLoading(false);
            alert("Thank you ! I will get back to you as soon as possible.");
            setForm({
              name: "",
              email: "",
              message: "",
            });
          },
          (error) => {
            console.log(error);
            setLoading(false);
            alert = "Something went wrong.";
          }
        );
    }
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-20 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <div className="flex gap-3">
            <button
              type="submit"
              className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
            >
              {loading ? "Sending..." : "Send"}
            </button>
            <a href={resume} download="Nour Wael Resume" className="w-fit">
              <button
                type="button"
                className="bg-tertiary py-3 px-8 outline-none w-fit flex gap-2 justify-center items-center text-white font-bold shadow-md shadow-primary rounded-xl"
              >
                Resume{" "}
                <img
                  src={download}
                  alt="download"
                  className=" w-[25px] h-[25px] relative bottom-[4px]"
                />
              </button>
            </a>
          </div>
          <div className="flex gap-2">
            <a
              href="https://www.linkedin.com/in/nour-waell/"
              target="_blank"
              className="w-fit"
            >
              <img src={linkedin} alt="linkedin" className="w-[35px] h[35px]" />
            </a>
            <a
              href="https://github.com/NourWaell"
              target="_blank"
              className="w-fit"
            >
              <img src={github} alt="github" className="w-[35px] h[35px]" />
            </a>
          </div>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
