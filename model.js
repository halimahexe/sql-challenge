const db = require('./database/db.js');

const select_cohorts_in_finsbo = db.prepare(/*sql*/ `
  SELECT
    name
  FROM
    cohorts
  WHERE
    location = 'Finsbury Park'
`);

function listCohortsInFinsbo() {
	return select_cohorts_in_finsbo.all();
}

const select_students_in_finsbo = db.prepare(/*sql*/ `
  SELECT
    username
  FROM
    students
  WHERE cohort_name in (SELECT
    name
  FROM
    cohorts
  WHERE
    location = 'Finsbury Park')
`);

function listStudentsInFinsbo() {
	return select_students_in_finsbo.all();
}

// const select_students_with_location = db.prepare(/*sql*/ `
//   -- [3]
// `);

// function listStudentsWithLocation() {
// 	return select_students_with_location.all();
// }

// const select_students_with_projects = db.prepare(/*sql*/ `
//   -- [4]
// `);

// function listStudentsWithProjects() {
// 	return select_students_with_projects.all();
// }

// const select_students_with_projects_in_finsbo = db.prepare(/*sql*/ `
//   -- [5]
// `);

// function listStudentsWithProjectsInFinsbo() {
// 	return select_students_with_projects_in_finsbo.all();
// }

module.exports = {
	listCohortsInFinsbo,
	listStudentsInFinsbo /* ,
	listStudentsWithLocation,
	listStudentsWithProjects,
	listStudentsWithProjectsInFinsbo, */,
};
