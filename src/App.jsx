import { useEffect, useState } from "react";
import JobInfo from "./JobInfo";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [jobs, setJobs] = useState(null);

  const getData = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setJobs(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (!jobs) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>;
      </section>
    );
  }

  return (
    <section>
      <JobInfo jobs={jobs} />
    </section>
  );
};
export default App;
