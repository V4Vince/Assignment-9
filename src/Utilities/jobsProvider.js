import React, { createContext, useContext, useState} from "react";
import { useAuth } from "./authProvider";

const JobsContext = createContext()

const JobsProvider = ({children}) => {
    const [jobPosts, setJobPosts] = useState({allJobs:[], favoritedJobs: []})
    const {isLoggedIn, setIsLoggedIn} = useAuth()

    const actions = {
        updateFavoritedJobs: (jobs) => {
            setJobPosts({...jobPosts, favoritedJobs: jobs})
            // console.log("ADD FAVORITE - current state: ", favoritedJobPosts);
        },
        removeFavorite: (job) => {
            setJobPosts({...jobPosts, favoritedJobs: jobPosts.favoritedJobs.filter(post => post.id !== job.id)})
        },
        loadFavoritedJobs: () => {
            const currentUser = isLoggedIn.user
            if(!currentUser) setJobPosts({...jobPosts, favoritedJobs: []})
            const favoritedJobs = jobPosts.filter(job => currentUser.favoritedJobs.includes(job._id))

            setJobPosts({...jobPosts, favoritedJobs: favoritedJobs})
        },
        loadJobs: (jobs) => {
            console.log("LOAD JOBS: ", jobs);
            
            setJobPosts({...jobPosts, allJobs: jobs})
        },
        resetFavoriteJobs: () => {
            setJobPosts({...jobPosts, favoritedJobs: []})
        }
    }

    return (
        <JobsContext.Provider value={{jobPosts, jobActions: actions}}>{children}</JobsContext.Provider>
    )
}

const useJobs = () => {
    return useContext(JobsContext)
}

export { JobsProvider, useJobs}