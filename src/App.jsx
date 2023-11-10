import "./App.css";
import exampleCV from "./exampleCV";
import Resume from "./components/Resume";

function App() {
  const { contactInfo, educationInfo, experienceInfo } = exampleCV;

  return (
    <>
      <Resume
        contactInfo={contactInfo}
        educationInfo={educationInfo}
        experienceInfo={experienceInfo}
      />
    </>
  );
}

export default App;
