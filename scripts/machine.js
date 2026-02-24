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

    // only showing the selected job card
    // if (id == 'interviewFilterBtn'){
    //     allJobsSection.classList.add('hidden');
    //     filteredJobsSection.classList.remove('hidden');
    // }
}

function renderInterview(){
    filteredJobsSection.innerHTML = '';

    for (let interview of interviewList){
        let div = document.createElement('div');
        div.className = 'flex justify-between border p-6 rounded-md';
        // div.classList.add('flex', 'justify-between', 'border', 'p-6', 'rounded-md');

        div.innerHTML = `
        <!-- card 1 -->
             <div class="flex justify-between border p-6 rounded-md">
                <!-- main part -->
                <div class="space-y-4">
                    <!-- part 1 -->
                    <div class="flex flex-col gap-2">
                        <p class="company-name">Mobile First Corp</p>
                        <p class="job-position">React Native Developer</p>
                    </div>
                    <p>Remote &bull; Full-time &bull; $130,000 - $175,000</p>
                    <div class="flex flex-col gap-2">
                        <p class="applied-status">Not Applied</p>
                        <p>Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>
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
             </div>
        `
        filteredJobsSection.appendChild(div);
    }
}