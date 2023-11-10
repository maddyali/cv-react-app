export default function EducationInfoSection({ info }) {
  const { startDate, endDate, location, schoolName, degree } = info;

  return (
    <div>
      <div>
        <p>
          {startDate}
          {startDate && endDate && <span>-</span>}
          {endDate}
        </p>
        <p>{location}</p>
      </div>
      <div>
        <p>{schoolName}</p>
        <p>{degree}</p>
      </div>
    </div>
  );
}
