import uniqid from "uniqid";

const exampleCV = {
  contactInfo: {
    fullName: "First Last",
    email: "email@client.com",
    phoneNumber: "281-330-8004",
    location: "Houston, TX",
  },
  educationInfo: [
    {
      schoolName: "100 Devs",
      degree: "Software Development",
      startDate: "01/23",
      endDate: "present",
      location: "Remote",
      id: uniqid(),
    },
  ],
  experienceInfo: [
    {
      companyName: "Really cool company",
      jobTitle: "Full Stack Developer",
      jobDescription:
        "Developed full-stack web applications which processed, analyzed, and rendered data visually. Managed time sensitive updates, including content changes and database upgrades. Planned, wrote, and debugged web applications and software with complete accuracy.",
      startDate: "11/2023",
      endDate: "present",
      location: "Houston, TX",
      id: uniqid(),
    },
  ],
};

export default exampleCV;
