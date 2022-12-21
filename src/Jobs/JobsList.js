import React, { useEffect, useState } from 'react';
import JoblyApi from '../backend/helpers/api';
import './Jobs.css';
import { Link } from 'react-router-dom';
import { CardGroup, Card, CardBody, CardTitle, CardSubtitle, CardText, Button, CardImg } from 'reactstrap';
import { v4 as uuid } from 'uuid';
import axios from 'axios';
import JobCard from './JobCard';
import JobSearchForm from './JobSearchForm';

function JobsList() {
	const [
		jobs,
		setJobs
	] = useState([]);

	const [
		isLoading,
		setIsLoading
	] = useState(true);

	const [
		applied,
		setApplied
	] = useState(false);

	const filterJobs = (j) => {
		setJobs(j);
	};

	useEffect(() => {
		async function getJobs(data) {
			let jobsFromApi = await JoblyApi.getJobs();
			filterJobs(jobs);
			setJobs(jobsFromApi);
			setIsLoading(false);
		}
		getJobs();
	}, []);

	if (isLoading) {
		return;
	}

	return (
		<div>
			<h1>Jobs</h1>
			<JobSearchForm filterJobs={filterJobs} />
			<CardGroup>{jobs.map((job) => <JobCard key={uuid()} job={job} />)}</CardGroup>
		</div>
	);
}

export default JobsList;
