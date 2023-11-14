import EducationForm from "./forms/EducationForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

export default function AddEducationSection() {
  return (
    <section className="add-education-section">
      <button className="section-expand">
        <div className="section-expand-header">
          <FontAwesomeIcon icon={faGraduationCap} />

          <h2>Education</h2>
        </div>
        <FontAwesomeIcon icon={faChevronUp} />
      </button>

      <div className="section-content">
        <EducationForm />
      </div>
    </section>
  );
}
