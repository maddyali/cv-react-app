import ContactForm from "./forms/ContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faUser } from "@fortawesome/free-solid-svg-icons";

export default function AddContactSection() {
  return (
    <>
      <section className={`add-contact-section`}>
        <button className="section-expand">
          <div className="section-expand-header">
            <FontAwesomeIcon icon={faUser} />

            <h2>Contact Info</h2>
          </div>

          <FontAwesomeIcon icon={faChevronUp} />
        </button>

        <div className="section-content">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
