export default function ExperienceInfoSection({ info }) {
  const {
    startDate,
    endDate,
    location,
    companyName,
    jobTitle,
    jobDescription,
  } = info;

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
        <p>{companyName}</p>
        <p>{jobTitle}</p>
        <p>{jobDescription}</p>
      </div>
    </div>
  );
}
