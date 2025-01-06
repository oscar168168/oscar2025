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
    title: "UX/UI Designer",
    company: "Prometeus KC Co., Ltd.",
    description:
      "Leading user research through surveys, interviews, and usability testing. Designing user interfaces that are intuitive and visually cohesive. Collaborating with developers to ensure seamless implementation. Conducting usability tests to gather valuable feedback.",
    year: "2023 - Present",
  },
  {
    id: 3,
    title: "UX/UI Designer",
    company: "Prometeus KC Co., Ltd.",
    description:
      "Leading user research through surveys, interviews, and usability testing. Designing user interfaces that are intuitive and visually cohesive. Collaborating with developers to ensure seamless implementation. Conducting usability tests to gather valuable feedback.",
    year: "2023 - Present",
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
      <div className="lg:space-y-12 space-y-8">
        {experiences.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-3 gap-6 w-full  text-start"
          >
            <div className="col-span-1">
              <p>{item.year}</p>
            </div>
            <div className="col-span-2">
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
