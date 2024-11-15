import JobCard from './App/JobPosts/JobCard'
import { Container } from '@mui/material';

import {jobPosts} from './Utilities/siteData'
import { Route, Routes } from 'react-router-dom';
import LoginPage from './App/Login/LoginPage';
import { BrowserRouter } from 'react-router-dom';
import MyNavbar from './App/Navbar/MyNavbar';
import JobListing from './App/JobPosts/JobListing';
// import AboutPage from './App/About/AboutPage';
import ContactPage from './App/Contact/ContactPage'
import CompanyShowCasePage from './App/Company/CompanyPage';
import FavoritedJobList from './App/User/FavoriteJobList';
import CompanyAboutPage from './App/Company/CompanyAboutPage'

function App() {
  return (
    <div>
      <MyNavbar />
      <Routes>
        <Route path="/home" element={<LoginPage />}/> {/* 👈 Renders at /app/ */}
        <Route path="/job-listing" element={<JobListing />}/>
        {/* <Route path="/about" element={<AboutPage />} /> */}
        <Route path="/contact" element={<ContactPage />} />  
        <Route path="/company-showcase" element={<CompanyShowCasePage />} />
        <Route path="/user-favorited-page" element={<FavoritedJobList />} />

        <Route path="/company-showcase-details/:id" element={<CompanyAboutPage />}/>
      </Routes>
    </div>

  )
  
}

export default App;
