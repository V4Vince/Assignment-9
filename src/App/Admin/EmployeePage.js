import React, { useEffect, useState } from 'react'
import { fetchAllEmployees } from './api'
import EmployeeTable from './EmployeeTable'

export const EmployeePage = () => {

    const [employees, setEmployees] = useState([])

    useEffect(() => {
        const getEmployees = async () => {
            const allUsers = await fetchAllEmployees()
            // console.log("FETCHED EMPLOYEES: ", res);
            const filteredUsers = allUsers.filter(user => user.type === 'employee')

            setEmployees(filteredUsers)
        }
        
        getEmployees()
    }, [])
  return (
    <EmployeeTable employees={employees}/>
  )
}
