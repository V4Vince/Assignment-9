import { Route, Routes } from 'react-router-dom';
import LoginPage from './App/Login/LoginPage';
import MyNavbar from './App/Navbar/MyNavbar';
import JobListing from './App/JobPosts/JobListing';
// import AboutPage from './App/About/AboutPage';
import ContactPage from './App/Contact/ContactPage'
import CompanyShowCasePage from './App/Company/CompanyPage';
import FavoritedJobList from './App/User/FavoriteJobList';
import CompanyAboutPage from './App/Company/CompanyAboutPage'
import AuthRoute from './Utilities/authRoute'
import AboutPage from './App/About/AboutPage';
import NewCompanyForm from './App/Company/NewCompanyForm';
import NewJobForm from './App/JobPosts/NewJobForm';

function App() {
  return (
    <div>
      <MyNavbar />
      <Routes>
        <Route path="/job-listing" element={<JobListing />}/>
        <Route path="/job-listing/new-job-form" element={<NewJobForm />}/>

        {/* <Route path="/about" element={<AboutPage />} /> */}
        <Route path="/contact" element={<ContactPage />} />  
        <Route path="/company-showcase" element={<CompanyShowCasePage />} />
          {/* <Route path="new-company-form" element={<h1>TESTING</h1>} /> */}
  
        <Route path="/company-showcase/new-company-form" element={<NewCompanyForm />} />
        <Route path="/user-favorited-page" element={<FavoritedJobList/>} />
        <Route path="/company-showcase-details/:id" element={<CompanyAboutPage />}/>

        <Route path="/about" element={<AboutPage />}/>
        <Route path="/home" element={<LoginPage />}/> {/* 👈 Renders at /app/ */}

      </Routes>
    </div>

  )
  
}

export default App;
