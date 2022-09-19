import '../scss/faq.scss';
import inductionlogo from '../assets/induction-logo.svg';
import Faqbox from '../components/Faqbox';

const Faq = (props) => {
  return (
    <div className={props.isBlur ? "blur" : ""}>
      <div className="faq">
        <img src={inductionlogo} alt="induction logo" />
        <h1>FAQs</h1>
        <Faqbox />
        <Faqbox />
        <Faqbox />
      </div>
    </div>
  )
}

export default Faq;
