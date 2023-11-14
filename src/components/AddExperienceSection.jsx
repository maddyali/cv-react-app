import ExperienceForm from "./forms/ExperienceForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faBriefcase } from "@fortawesome/free-solid-svg-icons";

export default function AddExperienceSection() {
  return (
    <section className="add-experience-section">
      <button className="section-expand">
        <div className="section-expand-header">
          <FontAwesomeIcon icon={faBriefcase} />

          <h2>Experience</h2>
        </div>
        <FontAwesomeIcon icon={faChevronUp} />
      </button>

      <div className="section-content">
        <ExperienceForm />
      </div>
    </section>
  );
}
