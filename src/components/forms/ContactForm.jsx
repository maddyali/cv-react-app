import InputGroup from "../InputGroup";
import Buttons from "../ButtonGroup";

export default function ContactForm() {
  return (
    <div className="form-container">
      <form>
        <InputGroup
          type="text"
          id="full-name"
          labelText="Full name"
          placeholder="Enter full name"
        />

        <InputGroup
          type="text"
          id="email"
          labelText="Email"
          placeholder="Enter email"
        />

        <InputGroup
          type="text"
          id="phone-number"
          labelText="Phone number"
          placeholder="Enter phone number"
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
