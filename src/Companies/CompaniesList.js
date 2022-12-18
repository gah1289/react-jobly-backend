import React, { useEffect, useState } from 'react';
import JoblyApi from '../backend/helpers/api';
import './Companies.css';
import { CardGroup, Card, CardBody, CardTitle, CardSubtitle, CardText, Button, CardImg } from 'reactstrap';

import logo1 from './logos/logo1.png';
import logo2 from './logos/logo2.png';
import logo3 from './logos/logo3.png';
import logo4 from './logos/logo4.png';
import noLogo from './logos/no-logo.png';

function CompaniesList() {
	const [
		companies,
		setCompanies
	] = useState([]);

	const [
		isLoading,
		setIsLoading
	] = useState(true);

	const [
		applied,
		setApplied
	] = useState(false);

	const [
		searchName,
		setSearchName
	] = useState();
	const [
		minEmployees,
		setMinEmployees
	] = useState();
	const [
		maxEmployees,
		setMaxEmployees
	] = useState();

	const getLogo = (logoUrl) => {
		let logo;
		let logoNum;
		if (logoUrl) {
			logoNum = logoUrl[11];
			if (logoNum === '1') {
				logo = logo1;
			}
			if (logoNum === '2') {
				logo = logo2;
			}
			if (logoNum === '3') {
				logo = logo3;
			}
			if (logoNum === '4') {
				logo = logo4;
			}
		}
		else logo = noLogo;
		return logo;
	};

	useEffect(() => {
		async function getCompanies() {
			let companiesFromApi = await JoblyApi.request('companies', {});
			setCompanies(companiesFromApi.companies);
			setIsLoading(false);
		}
		getCompanies();
	}, []);

	if (isLoading) {
		return <p> loading...</p>;
	}

	return (
		<div>
			<h1>Companies</h1>
			<form>
				<h2>Search by:</h2>
				<div>
					<label forHtml="name">Name: </label>
					<input id="name" type="text" placeholder="Company Name" />
				</div>{' '}
				<div>
					<label>Number of Employees: </label>
					<input id="minEmployees" type="text" placeholder="Minimum" />
					to
					<input id="maxEmployees" type="text" placeholder="Maximum" />
				</div>{' '}
			</form>
			<button>Search</button>
			<CardGroup>
				{companies.map((company) => (
					<Card key={company.handle} style={{ minWidth: '30vw' }} className="company-card">
						<CardImg alt={company.name} src={getLogo(company.logoUrl)} top width="100%" />
						<CardBody>
							<CardTitle tag="h5">{company.name}</CardTitle>
							<CardSubtitle className="mb-2 text-muted" tag="h6">
								Size: {company.numEmployees} Employees
							</CardSubtitle>
							<CardText>{company.description}</CardText>
							<Button>Jobs</Button>
						</CardBody>
					</Card>
				))}
			</CardGroup>
		</div>
	);
}

export default CompaniesList;
