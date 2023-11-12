import InputGroup from "../InputGroup";
import Buttons from "../ButtonGroup";
//  startDate,
// endDate,
// location,
// companyName,
// jobTitle,
// jobDescription,
export default function ExperienceForm() {
  return (
    <div className="form-container">
      <form>
        <InputGroup
          type="text"
          id="company-name"
          labelText="Company name"
          placeholder="Enter company name"
        />

        <InputGroup
          type="text"
          id="job-title"
          labelText="Job title"
          placeholder="Enter job title"
        />

        <InputGroup
          type="text"
          id="start-date"
          labelText="Start date"
          placeholder="Enter start date"
        />

        <InputGroup
          type="text"
          id="end-date"
          labelText="End date"
          placeholder="Enter end date"
        />

        <InputGroup
          type="text"
          id="location"
          labelText="Location"
          placeholder="Enter location"
        />

        <InputGroup
          type="text"
          id="job-description"
          labelText="Job description"
          placeholder="Enter job description"
        />

        <Buttons />
      </form>
    </div>
  );
}
