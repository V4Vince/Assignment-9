import React, { useContext, useEffect } from 'react';
import JobCard from '../JobPosts/JobCard'
import { useJobs } from '../../Utilities/jobsProvider';
import { getAllJobPosts, updateUserFavoriteJobs } from '../JobPosts/api';
import { useAuth } from '../../Utilities/authProvider';
import { useNavigate } from 'react-router-dom';

const FavoriteJobList = () => {

    const { jobPosts, jobActions } = useJobs();
    const { isLoggedIn, setIsLoggedIn } = useAuth();
    console.log("favorites job lists: ", jobPosts);
    const navigate = useNavigate()

    const handleRemoveFavorite = async(jobPost) => {
        const currentUser = isLoggedIn.user
        const favoritedJobs = {favoritedJobs: currentUser.favoritedJobs.filter(post => post._id !== jobPost._id)}
        updateUserFavoriteJobs(currentUser._id, favoritedJobs).then((data) => jobActions.updateFavoritedJobs(data.favoritedJobs)
        )
      }


      useEffect(() => {
        const loggedIn = isLoggedIn.loggedIn
        if(!loggedIn) {
            navigate('/home')
        }
      }, [])
    

    useEffect(() => {
        const getAlljobs = async () => {
            try {
                const allJobs = await getAllJobPosts()
                jobActions.loadJobs(allJobs)
            } catch (error) {
                console.log(error)
            }
        }
        getAlljobs()
    }, [])
    
    return (
        <div>
            <h1>Favorited Jobs</h1>
    
            {
                jobPosts?.favoritedJobs?.map(post => <JobCard favorited isSignedIn={isLoggedIn.loggedIn} jobPost={post} jobName={post.title} jobDescription={post.description} handleRemoveFavoriteClick={handleRemoveFavorite} favorited/>)
            }
        </div>
    )
}

export default FavoriteJobList