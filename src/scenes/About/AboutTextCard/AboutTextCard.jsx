import s from './AboutTextCard.module.scss';
import { ImPointRight } from 'react-icons/im';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        Hi Everyone, I am{' '}
        <span className={s.purple}>Muhammad Bilal </span>
        from <span className={s.purple}> Swabi, kpk, Pakistan</span>
        <br />
        Software engineer with expertise in cross-platform development{' '}
        <br />
        using React , Javascript , Java , Css3 and Many More.
        <br />
        <br />
        I have Done My intermediate Scoring A+ Grade in pre-engineering and now
        <br />
        I am Doing Bachleors in Computer Science  Having alots of Experience in Web Development.
        <br />
        <br />
        Apart from coding, some other activities that I love to do!
      </p>

      <ul>
        <li className={s.aboutActivity}>
          <ImPointRight /> Playing Games
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Reading
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Travelling
        </li>
      </ul>
    </div>
  );
};

export default AboutTextCard;
