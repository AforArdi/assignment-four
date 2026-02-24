// total count logic on dashboard
let totalJob = document.getElementById('total-dashboard');
let totalInterview = document.getElementById('interview');
let totalRejected = document.getElementById('rejected');

const interviewDefault = document.getElementById('interview-default');
const rejectedDefault = document.getElementById('rejected-default');

const allJobsSection = document.getElementById('allJobs');
const mainContainer = document.querySelector('main');
const filteredJobsSection = document.getElementById('filtered-jobs');

const allFilterBtn = document.getElementById('btn-all');
const interviewFilterBtn = document.getElementById('btn-interview');
const rejectedFilterBtn = document.getElementById('btn-rejected');

// empty array for other toggle
let interviewList = [];
let rejectedList = [];

// to check where exactly the user is toggling
let currentStatus = 'btn-all';


calculateCount();


mainContainer.addEventListener('click', function(e){
    // fire this only for interview btn
    if (e.target.classList.contains('btn-interview-stat')){
        const parentNode = e.target.parentNode.parentNode;

        const companyName = parentNode.querySelector('.company-name').innerText;
        const jobName = parentNode.querySelector('.job-position').innerText;

        const jobOffers = parentNode.querySelector('.job-offers').innerText;
        
        // const status = parentNode.querySelector('.applied-status').innerText;
        const jobInfoPara = parentNode.querySelector('.job-info-para').innerText;

        // status
        parentNode.querySelector('.applied-status').innerText = 'Applied';

        const JobCardInfo = {
            companyName,
            jobName,
            jobOffers,
            status: 'Applied',
            jobInfoPara
        }
        
        rejectedList = rejectedList.filter(item => item.companyName != JobCardInfo.companyName)

        // checking if item exists in the array ir not
        const companyExists = interviewList.find(item => item.companyName == JobCardInfo.companyName);
        
        if(!companyExists){
            interviewList.push(JobCardInfo);
        }
        
        if (currentStatus === 'btn-interview') {
            renderInterview();
        }else if (currentStatus === 'btn-rejected') {
            renderRejected();
        }
        
        // update count
        calculateCount();
        clickStyle(currentStatus);

        // console.log(interviewList);
    }else if (e.target.classList.contains('btn-rejected-stat')){
        const parentNode = e.target.parentNode.parentNode;

        const companyName = parentNode.querySelector('.company-name').innerText;
        const jobName = parentNode.querySelector('.job-position').innerText;

        const jobOffers = parentNode.querySelector('.job-offers').innerText;
        
        // const status = parentNode.querySelector('.applied-status').innerText;
        const jobInfoPara = parentNode.querySelector('.job-info-para').innerText;

        // status
        parentNode.querySelector('.applied-status').innerText = 'Rejected';

        const JobCardInfo = {
            companyName,
            jobName,
            jobOffers,
            status: 'Rejected',
            jobInfoPara
        }

        interviewList = interviewList.filter(item => item.companyName != JobCardInfo.companyName)
        
        // checking if item exists in the array ir not
        const companyExists = rejectedList.find(item => item.companyName == JobCardInfo.companyName);
        
        if(!companyExists){
            rejectedList.push(JobCardInfo);
        }

        if (currentStatus === 'btn-interview') {
            renderInterview();
        } else if (currentStatus === 'btn-rejected') {
            renderRejected();
        }
        
        // update count
        calculateCount();
        clickStyle(currentStatus);

        // console.log(interviewList);
    }else if (e.target.classList.contains('btn-delete')){
        const parentNode = e.target.parentNode.parentNode;
        const companyName = parentNode.querySelector('.company-name').innerText;

        // for ALL tab remove from main section
        if (currentStatus === 'btn-all') {
            parentNode.remove();

            // also remove from interview and rejected also
            interviewList = interviewList.filter(item => item.companyName != companyName);
            rejectedList = rejectedList.filter(item => item.companyName != companyName);
        }

        else if (currentStatus === 'btn-interview') {
            interviewList = interviewList.filter(item => item.companyName != companyName);
        }

        else if (currentStatus === 'btn-rejected') {
            rejectedList = rejectedList.filter(item => item.companyName != companyName);
        }

        // updating count
        calculateCount();
        clickStyle(currentStatus);
    }

})
