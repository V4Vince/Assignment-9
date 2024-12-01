import React, { useEffect, useState } from 'react';
import CompanyInfoCard from './CompanyInfoCard'
import { Box, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { getAllCompanies } from './api';
import { useAuth } from '../../Utilities/authProvider';
import { useCompanies } from '../../Utilities/companiesProvider';

const CompanyPage = () => {
    const {isLoggedIn, setIsLoggedIn} = useAuth()
    const {companies, actions} = useCompanies()
    const navigate = useNavigate();

        //handles navigating to company details page and passes the company data into state
    const handleCardClick = (company) => {
        navigate(`/company-showcase-details/${company.id}`, { state: { currentCompanyData: company}})
    }
    
    useEffect(() => {
        const getCompanies = async () => {
            try {
                const allCompanies = await getAllCompanies()
                actions.loadCompanies(allCompanies)
            } catch (error) {
                console.log(error)
            }
        }

        getCompanies()
    }, [])
    
    return(
        <div>
            <h1>Company Page</h1>
            {
                isLoggedIn?.user?.type === 'admin' && <Button variant='contained' component={Link} to='new-company-form' state={{userId: isLoggedIn.user._id}} >New Company</Button>
            }
            <div>
                {
                    companies.map(company => <Box onClick={() => handleCardClick(company)}><CompanyInfoCard someCompanyName={company.name}/></Box>)
                }
            </div>
        </div>
    )
}

export default CompanyPage