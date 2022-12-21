import React, { useEffect, useState } from 'react';
import JoblyApi from '../backend/helpers/api';
import './Jobs.css';
import { Link } from 'react-router-dom';
import { CardGroup, Card, CardBody, CardTitle, CardSubtitle, CardText, Button, CardImg } from 'reactstrap';
import { v4 as uuid } from 'uuid';

function JobCard({ job }) {
	const [
		company,
		setCompany
	] = useState();

	useEffect(() => {
		async function getCompany(handle) {
			let res = await JoblyApi.getCompany(handle);

			setCompany(res);
			setIsLoading(false);
		}
		getCompany(job.companyHandle);
	}, []);

	const [
		isLoading,
		setIsLoading
	] = useState(true);
	if (isLoading) {
		return <p> loading...</p>;
	}

	return (
		<Card key={uuid()} style={{ minWidth: '30vw' }} className="job-card">
			<CardBody>
				<CardTitle tag="h5">{job.title}</CardTitle>
				<CardSubtitle className="mb-2 text-muted" tag="h6">
					Company: <Link to={`/companies/${job.companyHandle}`}>{company.name}</Link>
				</CardSubtitle>
				{job.salary ? <CardText>Salary: ${job.salary}</CardText> : <CardText> Salary not disclosed</CardText>}
				{job.equity ? <CardText>Equity: {job.equity}</CardText> : <CardText> No equity</CardText>}
				<Button>Jobs</Button>
			</CardBody>
		</Card>
	);
}

export default JobCard;
