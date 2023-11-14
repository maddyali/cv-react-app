import { useState } from "react";
import "./App.css";
import exampleCV from "./exampleCV";
import Resume from "./components/Resume";
import AddContactSection from "./components/AddContactSection";
import AddEducationSection from "./components/AddEducationSection";
import AddExperienceSection from "./components/AddExperienceSection";
function App() {
  // const { contactInfo, educationInfo, experienceInfo } = exampleCV;

  const [contact, setContact] = useState(exampleCV.contactInfo);
  const [education, setEducation] = useState(exampleCV.educationInfo);
  const [experience, setExperience] = useState(exampleCV.experienceInfo);

  return (
    <>
      <AddContactSection />
      <AddEducationSection />
      <AddExperienceSection />

      <Resume
        contactInfo={contact}
        educationInfo={education}
        experienceInfo={experience}
      />
    </>
  );
}

export default App;
