import DisplaySection from "./DisplaySection";
import ContactInfoSection from "./ContactInfoSection";
import EducationInfoSection from "./EducationInfoSection";
import ExperienceInfoSection from "./ExperienceInfoSection";

export default function Resume({ contactInfo, educationInfo, experienceInfo }) {
  return (
    <div className="resume-container">
      <ContactInfoSection
        fullName={contactInfo.fullName}
        email={contactInfo.email}
        phoneNumber={contactInfo.phoneNumber}
        location={contactInfo.location}
      />

      <DisplaySection
        arr={educationInfo}
        Component={EducationInfoSection}
        title="Education Section"
      />

      <DisplaySection
        arr={experienceInfo}
        Component={ExperienceInfoSection}
        title="Experience Section"
      />
    </div>
  );
}
