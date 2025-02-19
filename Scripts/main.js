const navTitle = document.querySelector(".navTitle");
const sideBar = document.querySelector(".sideBar");
const showSideBarBtn = document.querySelector("#showSideBarBtn");
const hideSideBarBtn = document.querySelector("#hideSideBarBtn");

const overviewSection = document.querySelector("#overviewSection");
const overviewBtn = document.querySelector("#overviewBtn");

const myPatientsSection = document.querySelector("#myPatientsSection");
const myPatientsBtn = document.querySelector("#myPatientsBtn");

hideSideBarBtn.addEventListener("click", () => {
    if (!sideBar.classList.contains("d-none")) {
        sideBar.classList.add("sideBarAnimationHide");
        setTimeout(() => {
            sideBar.classList.add("d-none");
            sideBar.classList.remove("sideBarAnimationHide");
        }, 300);
    }
});

showSideBarBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    sideBar.classList.add("sideBarAnimationShow");
    sideBar.classList.remove("d-none");
});

myPatientsBtn.addEventListener("click", () => {
    myPatientsSection.classList.add("d-block");
    myPatientsSection.classList.remove("d-none");
    overviewSection.classList.add("d-none"); // Hide the overview section
    navTitle.innerHTML = "My Patients";
});

overviewBtn.addEventListener("click", () => {
    overviewSection.classList.add("d-block");
    overviewSection.classList.remove("d-none");
    myPatientsSection.classList.add("d-none"); // Hide the myPatientsSection
    navTitle.innerHTML = "Overview";
});


const today = new Date();

const day = today.getDate();;
const monthNumber = today.getMonth() + 1; 
const year = today.getFullYear();

document.querySelectorAll(".day").forEach(element => {
    element.innerHTML = day;
});

document.querySelectorAll(".month").forEach(element => {
    element.innerHTML = monthNumber;
});

document.querySelectorAll(".year").forEach(element => {
    element.innerHTML = year;
});

document.querySelectorAll('.filter .status-checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', function () {
        if (this.checked) {
            document.querySelectorAll('.filter .status-checkbox').forEach(cb => {
                if (cb !== this) cb.checked = false;
            });
        }
    });
});

document.querySelectorAll('.sort .status-checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', function () {
        if (this.checked) {
            document.querySelectorAll('.sort .status-checkbox').forEach(cb => {
                if (cb !== this) cb.checked = false;
            });
        }
    });
});

(function fillPatientDetailsInfo() {
    let patientDetailsInfoContent = '';
    let rescentAppoinmentContent = '';

    for (let i = 0; i <= 5; i++) {
        patientDetailsInfoContent += `
            <div id="patient" class="py-4 border-bottom d-flex justify-content-between flex-wrap">
                <div class="col-12 col-lg-auto mt-2 d-lg-flex align-items-center">
                    <img src="../images/preson.jpg" alt="Preson img" class="d-block mx-auto rounded-circle mb-3 mb-lg-0">
                </div>
                <div class="col-6 col-lg-auto mt-2 d-lg-flex align-items-center">
                    <h5 class="text-lg-center">Name <span class="d-block">Ahmed Ibrahim</span></h5>
                </div>
                <div class="col-6 col-lg-auto mt-2 d-lg-flex align-items-center">
                    <h5 class="text-lg-center">Age <span class="d-block">28</span></h5>
                </div>
                <div class="col-6 col-lg-auto mt-2 d-lg-flex align-items-center">
                    <h5 class="text-lg-center">Treatment Status <span class="d-block">In Progress</span></h5>
                </div>
                <div class="col-6 col-lg-auto mt-2 d-lg-flex align-items-center">
                    <h5 class="text-lg-center">Last Session Date <span class="d-block">23/01/2025</span></h5>
                </div>
                <div class="col-12 col-lg-auto mt-2 d-lg-flex align-items-center">
                    <h5 class="text-lg-center text-center">Next Appoinment <span class="d-block">12/03/2025</span></h5>
                </div>
            </div>
        `;

        rescentAppoinmentContent += `
            <div class="border-bottom d-flex justify-content-between align-items-center py-3">
                <img src="../images/preson.jpg" alt="" class="me-2">
                <h5>Hossam Hassan</h5>
                <h5>12/03/2025</h5>
            </div>
        `;
    }

    document.querySelector(".patientDetailsInfo").innerHTML = patientDetailsInfoContent;
    document.querySelectorAll(".rescentAppoinmentContent").forEach(element => {
        element.innerHTML = rescentAppoinmentContent;
    });
})();

const slider = document.querySelector(".cardsSlider");

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add("active"); 
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.classList.remove("active");
});

slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.classList.remove("active");
});

slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; 
    slider.scrollLeft = scrollLeft - walk;
});