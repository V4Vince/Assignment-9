import React from 'react';
import { useLocation } from 'react-router-dom';

const CompanyAboutPage = () => {

    const location = useLocation()
    
    //Return UI with company name
    return (
        <div><h1>About Page for: {location.state?.currentCompanyData.name}</h1></div>
    )
}

export default CompanyAboutPage