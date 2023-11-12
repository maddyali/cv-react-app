import "./App.css";
import exampleCV from "./exampleCV";
import Resume from "./components/Resume";
import AddDetailsSection from "./components/AddDetailsSection";

function App() {
  const { contactInfo, educationInfo, experienceInfo } = exampleCV;

  return (
    <>
      <AddDetailsSection sectionName="Contact" />
      <AddDetailsSection sectionName="Education" />
      <AddDetailsSection sectionName="Experience" />

      <Resume
        contactInfo={contactInfo}
        educationInfo={educationInfo}
        experienceInfo={experienceInfo}
      />
    </>
  );
}

export default App;
