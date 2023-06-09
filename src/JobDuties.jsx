import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { v4 as uuid4 } from "uuid";

const JobDuties = ({ duties }) => {
  return (
    <div>
      {duties.map((item) => {
        const id = uuid4();
        return (
          <div className="job-desc" key={id}>
            <FaAngleDoubleRight className="job-icon" />
            <p>{item}</p>
          </div>
        );
      })}
    </div>
  );
};

export default JobDuties;
