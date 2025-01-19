import React from "react";

const experiences = [
  {
    id: 1,
    title: "UX/UI Designer",
    company: "Prometeus KC Co., Ltd.",
    description:
      "Leading user research through surveys, interviews, and usability testing. Designing user interfaces that are intuitive and visually cohesive.Collaborating with developers to ensure seamless implementation.Conducting usability tests to gather valuable feedback.",
    year: "2023 - Present",
  },
  {
    id: 2,
    title: "IT Technician",
    company: "Mytech Mobility Cambodia Co., Ltd.",
    description:
      "Providing technical support to users and resolving technical issues. Performing system updates and maintenance to ensure smooth operation. Collaborating with developers to troubleshoot and resolve technical issues.",
    year: "Jan, 2023 - Nov, 2023",
  },
  {
    id: 3,
    title: "Project Officer",
    company: "Mytech Mobility Cambodia Co., Ltd.",
    description:
      "Leading project plans, managing resources, and ensuring on-time delivery. Collaborating with team members to implement project ideas. Providing feedback on project progress to guide the team towards success.",
    year: "May, 2022 - Jan, 2023",
  },
  {
    id: 4,
    title: "Teacher Assistant",
    company: "DK Schoolhouse",
    description:
      "Assisting in the teaching and learning process by providing support and guidance to students. Working closely with teachers to ensure that students have a positive learning experience.",
    year: "Oct, 2021 - Dec, 2022",
  },
];

const Experience = () => {
  return (
    <main
      id="experience"
      className="container mx-auto p-8 flex flex-col justify-center items-start lg:min-h-screen min-h-[100vh] lg:gap-20 gap-8 lg:mb-20 mb-12"
    >
      <h2>
        <span className="text-primary">Experience</span> That Delivers{" "}
        <span className="text-primary">Results</span>
      </h2>
      <div className="lg:space-y-16 space-y-8">
        {experiences.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-3 gap-6 w-full  text-start"
          >
            <div className="col-span-1 ">
              <p className="text-primary font-normal pt-1">{item.year}</p>
            </div>
            <div className="col-span-2 lg:space-y-2">
              <h4>{item.title}</h4>
              <h5 className="italic text-normal">{item.company}</h5>
              <br />
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Experience;
