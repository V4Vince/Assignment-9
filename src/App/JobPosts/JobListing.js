import JobCard from './JobCard'
import { Container } from '@mui/material';

import {jobPosts} from '../../Utilities/siteData'

function JobListing() {

  const allPosts = jobPosts.map(job => <JobCard jobName={job.title} jobDescription={job.description}/>)

  return (
    <div>
      
      <Container>
        <h1>Job Posts:</h1>

        <div>
          {allPosts}
        </div>
      </Container>
    </div>
  );
}

export default JobListing;
