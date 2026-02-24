// total count on dashboard function
function calculateCount(){
    totalJob.innerText = allJobsSection.children.length;
    totalInterview.innerText = interviewList.length;
    totalRejected.innerText = rejectedList.length;
}

// btn toggling color change function
function clickStyle(id){
    allFilterBtn.classList.remove('btn-primary');
    interviewFilterBtn.classList.remove('btn-primary');
    rejectedFilterBtn.classList.remove('btn-primary');

    const selectedBtn = document.getElementById(id);
    selectedBtn.classList.add('btn-primary');

    currentStatus = id;

    // only showing the selected job card
    if (id === 'btn-interview') {
        allJobsSection.classList.add('hidden');
        filteredJobsSection.classList.remove('hidden');
        renderInterview();
    } else if (id === 'btn-all') {
        allJobsSection.classList.remove('hidden');
        filteredJobsSection.classList.add('hidden');
    } else if (id === 'btn-rejected'){
        allJobsSection.classList.add('hidden');
        filteredJobsSection.classList.remove('hidden');
        renderRejected();
    }
}

// interview cards
function renderInterview(){
    filteredJobsSection.innerHTML = '';

    for (let interview of interviewList){
        const div = document.createElement('div');
        div.className = 'flex justify-between border p-6 rounded-md';
        // div.classList.add('flex', 'justify-between', 'border', 'p-6', 'rounded-md');

        div.innerHTML = `
                <!-- main part -->
                <div class="space-y-4">
                    <!-- part 1 -->
                    <div class="flex flex-col gap-2">
                        <p class="company-name">${interview.companyName}</p>
                        <p class="job-position">${interview.jobName}</p>
                    </div>
                    <p class="job-offers">${interview.jobOffers}</p>
                    <div class="flex flex-col gap-2">
                        <p class="applied-status">${interview.status}</p>
                        <p class="job-info-para">${interview.jobInfoPara}</p>
                    </div>
                    <!-- part 2 -->
                     <div class="flex gap-2">
                        <button class="btn btn-interview-stat">INTERVIEW</button>
                        <button class="btn btn-rejected-stat">REJECTED</button>
                     </div>
                </div>
                <!-- delete part -->
                <div>
                    <button class="btn"><i class="fa-solid fa-trash-can"></i></button>
                </div>
        `
        filteredJobsSection.appendChild(div);
    }
}

// rejected cards
function renderRejected(){
    filteredJobsSection.innerHTML = '';

    for (let reject of rejectedList){
        const div = document.createElement('div');
        div.className = 'flex justify-between border p-6 rounded-md';
        // div.classList.add('flex', 'justify-between', 'border', 'p-6', 'rounded-md');

        div.innerHTML = `
                <!-- main part -->
                <div class="space-y-4">
                    <!-- part 1 -->
                    <div class="flex flex-col gap-2">
                        <p class="company-name">${reject.companyName}</p>
                        <p class="job-position">${reject.jobName}</p>
                    </div>
                    <p class="job-offers">${reject.jobOffers}</p>
                    <div class="flex flex-col gap-2">
                        <p class="applied-status">${reject.status}</p>
                        <p class="job-info-para">${reject.jobInfoPara}</p>
                    </div>
                    <!-- part 2 -->
                     <div class="flex gap-2">
                        <button class="btn btn-interview-stat">INTERVIEW</button>
                        <button class="btn btn-rejected-stat">REJECTED</button>
                     </div>
                </div>
                <!-- delete part -->
                <div>
                    <button class="btn"><i class="fa-solid fa-trash-can"></i></button>
                </div>
        `
        filteredJobsSection.appendChild(div);
    }
}