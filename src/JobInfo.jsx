import React, { useState } from "react";
import JobDuties from "./JobDuties";

const JobInfo = ({ jobs }) => {
  const [currentJob, setCurrentJob] = useState(0);
  const { id, order, title, dates, duties, company } = jobs[currentJob];

  return (
    <article className="jobs-center">
      <section className="btn-container">
        {jobs.map((item, index) => {
          return (
            <button
              key={item.id}
              type="button"
              className={
                index === currentJob ? "job-btn active-btn" : "job-btn"
              }
              onClick={() => setCurrentJob(index)}
            >
              {item.company}
            </button>
          );
        })}
      </section>
      <section>
        <h3>{title}</h3>
        <span className="job-company">{company}</span>
        <p className="job-date">{dates}</p>
        <JobDuties duties={duties} />
      </section>
    </article>
  );
};

export default JobInfo;
