export default function DisplaySection({ arr, Component, title }) {
  return (
    <section>
      <h2>{title}</h2>

      {arr.map((info) => (
        <Component info={info} key={info.id} />
      ))}
    </section>
  );
}
