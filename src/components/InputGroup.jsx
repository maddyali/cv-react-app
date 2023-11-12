export default function InputGroup(props) {
  const { type, id, labelText, placeholder } = props;
  return (
    <div className="input-group">
      <label htmlFor={id}>{labelText}</label>
      <input type={type} id={id} placeholder={placeholder} />
    </div>
  );
}
