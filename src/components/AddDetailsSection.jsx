import ContactForm from "./forms/ContactForm";
import EducationForm from "./forms/EducationForm";
import ExperienceForm from "./forms/ExperienceForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp,
  faUser,
  faGraduationCap,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

export default function AddDetailsSection({ sectionName }) {
  return (
    <>
      <section className={`add-${sectionName.toLowerCase()}-section`}>
        <button className="section-expand">
          <div className="section-expand-header">
            {sectionName === "Contact" ? (
              <FontAwesomeIcon icon={faUser} />
            ) : sectionName === "Education" ? (
              <FontAwesomeIcon icon={faGraduationCap} />
            ) : (
              <FontAwesomeIcon icon={faBriefcase} />
            )}
            <h2>{sectionName}</h2>
          </div>
          <FontAwesomeIcon icon={faChevronUp} />
        </button>

        <div className="section-content">
          {sectionName === "Contact" ? (
            <ContactForm />
          ) : sectionName === "Education" ? (
            <EducationForm />
          ) : (
            <ExperienceForm />
          )}
        </div>
      </section>
    </>
  );
}
