import {
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const SocialMediaIcons = () => {
    return (
      <div className="flex center md:justify-start my-5 gap-7">
        <a
                className="hover:opacity-50 transition duration-500"
                target= "_blank"
                rel="noreferrer"
         href="https://www.linkedin.com/in/micaela-savournin/">
         <FaLinkedin></FaLinkedin>
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          target= "_blank"
          rel="noreferrer"
          href="https://github.com/Micasavournin">
          <FaGithub></FaGithub>
        </a>
      </div>
    );
  };
  
  export default SocialMediaIcons;
  