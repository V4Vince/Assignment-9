import JobCard from './JobCard'
import { Button, Container } from '@mui/material';

// import {jobPosts} from '../../Utilities/siteData'
import { useFavorited } from '../../Utilities/favoriteProvider';
import { useEffect, useState } from 'react';
import { getAllJobPosts, updateUserFavoriteJobs } from './api';
import { useJobs } from '../../Utilities/jobsProvider';
import { useAuth } from '../../Utilities/authProvider';
import { useCompanies } from '../../Utilities/companiesProvider';
import { Link } from 'react-router-dom';

function JobListing() {
  const {isLoggedIn, setIsLoggedIn} = useAuth()
  const {jobPosts, jobActions} = useJobs()
  const {companies, a} = useCompanies()

  console.log("CURRENT USER", isLoggedIn.user);
  console.log("JOB", jobPosts);



  const handleAddFavorite = async(jobPost) => {
    console.log("ADDING FAVORITE", jobPost);
    
    const currentUser = isLoggedIn.user
    const favoritedJobs = {favoritedJobs: [...currentUser.favoritedJobs].concat(jobPost)}
    updateUserFavoriteJobs(currentUser._id, favoritedJobs).then((data) => jobActions.updateFavoritedJobs(data.favoritedJobs)
  )
  }

  const handleRemoveFavorite = async(jobPost) => {
    const currentUser = isLoggedIn.user
    const favoritedJobs = {favoritedJobs: currentUser.favoritedJobs.filter(post => post._id !== jobPost._id)}
    updateUserFavoriteJobs(currentUser._id, favoritedJobs).then((data) => jobActions.updateFavoritedJobs(data.favoritedJobs)
    )
  }

  useEffect(() => {
    const getJobs = async () => {
      try {
        const allJobs = await getAllJobPosts()
        jobActions.loadJobs(allJobs)
      } catch (error) {
        console.log(error)
      }
    }

    getJobs()
  }, [])

  const allPosts = jobPosts?.allJobs?.map(job => {
    // const isAlreadyFavorited = favoritedJobPosts.find(post => post.id === job.id);
    let company = companies.find(company => company._id === job.companyId)
    let favorited = jobPosts.favoritedJobs.find(post => post._id === job._id)
    
    return <JobCard favorited={favorited} company={company} isSignedIn={isLoggedIn.loggedIn} jobPost={job} jobName={job.title} link={job.applyLink} jobDescription={job.description} handleAddFavoriteClick={handleAddFavorite} handleRemoveFavoriteClick={handleRemoveFavorite}/>
  })

  return (
    <div>
      
      <Container>
        {
          isLoggedIn?.user?.type === 'admin' && <Button variant='contained' component={Link} to='new-job-form' state={{userId: isLoggedIn.user._id}} >New Job</Button>
        }
        <h1>Job Posts:</h1>

        <div>
          {allPosts}
        </div>
      </Container>
    </div>
  );
}

export default JobListing;
