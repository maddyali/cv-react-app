import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

export default function ContactInfoSection({
  fullName,
  email,
  phoneNumber,
  location,
}) {
  return (
    <section>
      <h1>{fullName}</h1>
      <div>
        {email && (
          <div>
            <FontAwesomeIcon icon={faEnvelope} />
            <span>{email}</span>
          </div>
        )}

        {phoneNumber && (
          <div>
            <FontAwesomeIcon icon={faPhone} />
            <span>{phoneNumber}</span>
          </div>
        )}

        {location && (
          <div>
            <FontAwesomeIcon icon={faLocationDot} />
            <span>{location}</span>
          </div>
        )}
      </div>
    </section>
  );
}
