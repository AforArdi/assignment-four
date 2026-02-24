// total count logic on dashboard
let totalJob = document.getElementById('total-dashboard');
let totalInterview = document.getElementById('interview');
let totalRejected = document.getElementById('rejected');


const allJobsSection = document.getElementById('allJobs');
const mainContainer = document.querySelector('main');
const filteredJobsSection = document.getElementById('filtered-jobs');

const allFilterBtn = document.getElementById('btn-all');
const interviewFilterBtn = document.getElementById('btn-interview');
const rejectedFilterBtn = document.getElementById('btn-rejected');

// empty array for other toggle
let interviewList = [];
let rejectedList = [];

calculateCount();


mainContainer.addEventListener('click', function(e){
    // fire this only for interview btn
    if (e.target.classList.contains('btn-interview-stat')){
        const parentNode = e.target.parentNode.parentNode;

        const companyName = parentNode.querySelector('.company-name').textContent;
        const jobName = parentNode.querySelector('.job-position').textContent;
        const jobOffers = parentNode.querySelector('.job-offers').textContent;
        const status = parentNode.querySelector('.applied-status').textContent;
        const jobInfoPara = parentNode.querySelector('.job-info-para').textContent;

        // status
        parentNode.querySelector('.applied-status').innerText = 'Applied';

        const JobCardInfo = {
            companyName,
            jobName,
            jobOffers,
            status: 'Applied',
            jobInfoPara
        }
        
        // checking if item exists in the array ir not
        const companyExists = interviewList.find(item => item.companyName == JobCardInfo.companyName);
        
        if(!companyExists){
            interviewList.push(JobCardInfo);
        }
        
        // update count
        calculateCount();

        // console.log(interviewList);
        renderInterview()
    }

})
