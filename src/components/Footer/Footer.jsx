import s from './Footer.module.scss';
import { AiFillGithub, AiOutlineWhatsApp } from 'react-icons/ai';
import {
  FaFacebookSquare,
  FaLinkedinIn,
  FaTelegramPlane,
} from 'react-icons/fa';

const Footer = () => {
  // let date = new Date();
  // let year = date.getFullYear();

  return (
    <div className={s.footer}>
      <div className={s.container}>
        <div className={s.copyright}>
          <h1>Developed By<i><b> Bilal khan Yousafzai </b></i></h1>
        </div>

        <div className={s.body}>
          <ul className={s.socialIcons}>
            <li>
              <a
                href="https://wa.me/923329368599"
                target="_blank"
                rel="noreferrer"
                aria-label="github"
              >
                <AiOutlineWhatsApp />
              </a>
            </li>
            <li>
              <a
                href="https://web.facebook.com/profile.php?id=100080185032580"
                target="_blank"
                rel="noreferrer"
                aria-label="facebook"
              >
                <FaFacebookSquare />
              </a>
            </li>
            <li>
              <a
                href="https://t.me/Bilalkhan332"
                target="_blank"
                rel="noreferrer"
                aria-label="TelegramPlane"
              >
                <FaTelegramPlane />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/muhammad-bilal-5bb697232/"
                target="_blank"
                rel="noreferrer"
                aria-label="linkedin"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
