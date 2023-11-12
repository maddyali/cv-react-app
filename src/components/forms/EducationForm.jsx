import InputGroup from "../InputGroup";
import Buttons from "../ButtonGroup";

export default function EducationForm() {
  return (
    <div className="form-container">
      <form>
        <InputGroup
          type="text"
          id="school-name"
          labelText="School name"
          placeholder="Enter school name"
        />

        <InputGroup
          type="text"
          id="degree"
          labelText="Degree"
          placeholder="Enter degree name"
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

        <Buttons />
      </form>
    </div>
  );
}
