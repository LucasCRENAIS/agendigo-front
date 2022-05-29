import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import Map from '../CompanyExample/Maps';

import './companyExample.css'

import CompanyExampleMap from './CompanyExampleMap';

import PropTypes from 'prop-types';

const CompanyExample = ({id}) => {

    const [company, setCompany] = useState(null);

    useEffect(
        () => {
            Axios
                .get(`https://agendigo.herokuapp.com/api/v1/company/${id}/services`)
                .then(
                    (response) => {
                        setCompany(response.data[0]);
                    }
                ).catch((error) => {

                });
        },
        [id],
    );

        
    return (
        <>
        {company &&
        <div className="companyExample">

        <div>{company.company.company_name}</div>
            <div>{company.company.address}</div>
            <div>{company.company.description}</div>


            <div>{company.services[0].name}</div>

            <CompanyExampleMap companyData ={company}/>
        </div>
        }
        </>


    );
}
CompanyExample.propTypes = {
    company: PropTypes.arrayOf(
        PropTypes.shape({
            company_name: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
}
export default CompanyExample

