// Binary Rain Effect
function createBinaryRain() {
    const binaryRain = document.createElement('div');
    binaryRain.className = 'binary-rain';
    document.body.appendChild(binaryRain);

    function createBinary() {
        const binary = document.createElement('div');
        binary.className = 'binary';
        binary.style.left = Math.random() * 100 + 'vw';
        binary.style.animationDuration = Math.random() * 2 + 3 + 's';
        binary.innerHTML = Math.random() > 0.5 ? '1' : '0';
        binaryRain.appendChild(binary);

        // Remove binary after animation
        setTimeout(() => {
            binary.remove();
        }, 5000);
    }

    // Create binary at intervals
    setInterval(createBinary, 100);
}

// Initialize binary rain
createBinaryRain();

// Navigation Active State with Smooth Scroll
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
            link.style.color = getComputedStyle(document.documentElement)
                .getPropertyValue('--secondary-color');
        } else {
            link.style.color = getComputedStyle(document.documentElement)
                .getPropertyValue('--text-color');
        }
    });
});

// Registration Modal with Animation
const modal = document.getElementById('registerModal');
const registerBtn = document.querySelector('.register-btn');
const closeBtn = document.querySelector('.close');
const registrationForm = document.getElementById('registrationForm');
const teamMembersContainer = document.getElementById('teamMembers');

// Team Section
const teamSection = document.createElement('div');
teamSection.classList.add('team-section');
teamSection.innerHTML = `
    <h2>Team Information</h2>
    <input type="text" name="teamName" placeholder="Team Name" required>
    <input type="text" name="problemStatement" placeholder="Problem Statement" required>
    <input type="text" name="problemStatementId" placeholder="Problem Statement Id" required>
    
    <h3>Team Leader Details</h3>
    <input type="text" name="leaderName" placeholder="Leader Name" required>
    <input type="email" name="leaderEmail" placeholder="Leader Email" required>
    <input type="tel" name="leaderWhatsapp" placeholder="Leader WhatsApp Number" required>
    <input type="text" name="leaderBranch" placeholder="Leader Branch" required>
    <input type="text" name="leaderCollegeID" placeholder="Leader College Registered Number" required>
`;
teamMembersContainer.appendChild(teamSection);

// Member Section for 5 Members
for (let i = 1; i <= 5; i++) {
    const memberDiv = document.createElement('div');
    memberDiv.classList.add('team-member');
    memberDiv.style.animationDelay = `${i * 0.1}s`;
    memberDiv.innerHTML = `
        <h3>Team Member ${i}</h3>
        <input type="text" name="memberName${i}" placeholder="Name" required>
        <input type="email" name="memberEmail${i}" placeholder="Email" required>
        <input type="tel" name="memberWhatsapp${i}" placeholder="WhatsApp Number" required>
        <input type="text" name="memberBranch${i}" placeholder="Branch" required>
        <input type="text" name="memberCollegeID${i}" placeholder="College Registered Number" required>
    `;
    teamMembersContainer.appendChild(memberDiv);
}

// Modal Open
registerBtn.onclick = () => {
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
};

// Modal Close
closeBtn.onclick = () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
    document.querySelectorAll('#registrationForm input').forEach(input => {
        input.value = '';
    });
};

document.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
        document.querySelectorAll("#registrationForm input").forEach(input => {
            input.value = "";
        });
    }
});


document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("3J6aaV142HL5aR9qt"); // Replace with your actual EmailJS user ID
});

registrationForm.onsubmit = async (e) => {
    e.preventDefault();

    let waitMessage = document.getElementById("waitMessage");
    waitMessage.style.display = "block"; // Show the message
    waitMessage.innerText = "Please wait for a while..."; // Set initial message

    // Generate Unique Team ID (Example: AH-001)
    const randomNumber = Math.floor(100 + Math.random() * 900);
    const teamID = `AH-${randomNumber}`;

    // Collect Data
    const formData = {
        teamID: teamID,
        teamName: document.querySelector('input[name="teamName"]').value || "N/A",
        problemStatement: document.querySelector('input[name="problemStatement"]').value || "N/A",
        problemStatementId: document.querySelector('input[name="problemStatementId"]').value || "N/A",
        leaderName: document.querySelector('input[name="leaderName"]').value || "N/A",
        leaderEmail: document.querySelector('input[name="leaderEmail"]').value || "N/A",
        leaderWhatsapp: document.querySelector('input[name="leaderWhatsapp"]').value || "N/A",
        leaderBranch: document.querySelector('input[name="leaderBranch"]').value || "N/A",
        leaderCollegeID: document.querySelector('input[name="leaderCollegeID"]').value || "N/A",

        member1Name: document.querySelector('input[name="memberName1"]')?.value || "N/A",
        member1Email: document.querySelector('input[name="memberEmail1"]')?.value || "N/A",
        member1Whatsapp: document.querySelector('input[name="memberWhatsapp1"]')?.value || "N/A",
        member1Branch: document.querySelector('input[name="memberBranch1"]')?.value || "N/A",
        member1CollegeID: document.querySelector('input[name="memberCollegeID1"]')?.value || "N/A",

        member2Name: document.querySelector('input[name="memberName2"]')?.value || "N/A",
        member2Email: document.querySelector('input[name="memberEmail2"]')?.value || "N/A",
        member2Whatsapp: document.querySelector('input[name="memberWhatsapp2"]')?.value || "N/A",
        member2Branch: document.querySelector('input[name="memberBranch2"]')?.value || "N/A",
        member2CollegeID: document.querySelector('input[name="memberCollegeID2"]')?.value || "N/A",

        member3Name: document.querySelector('input[name="memberName3"]')?.value || "N/A",
        member3Email: document.querySelector('input[name="memberEmail3"]')?.value || "N/A",
        member3Whatsapp: document.querySelector('input[name="memberWhatsapp3"]')?.value || "N/A",
        member3Branch: document.querySelector('input[name="memberBranch3"]')?.value || "N/A",
        member3CollegeID: document.querySelector('input[name="memberCollegeID3"]')?.value || "N/A",

        member4Name: document.querySelector('input[name="memberName4"]')?.value || "N/A",
        member4Email: document.querySelector('input[name="memberEmail4"]')?.value || "N/A",
        member4Whatsapp: document.querySelector('input[name="memberWhatsapp4"]')?.value || "N/A",
        member4Branch: document.querySelector('input[name="memberBranch4"]')?.value || "N/A",
        member4CollegeID: document.querySelector('input[name="memberCollegeID4"]')?.value || "N/A",

        member5Name: document.querySelector('input[name="memberName5"]')?.value || "N/A",
        member5Email: document.querySelector('input[name="memberEmail5"]')?.value || "N/A",
        member5Whatsapp: document.querySelector('input[name="memberWhatsapp5"]')?.value || "N/A",
        member5Branch: document.querySelector('input[name="memberBranch5"]')?.value || "N/A",
        member5CollegeID: document.querySelector('input[name="memberCollegeID5"]')?.value || "N/A"
    };

    try {
        // Send email using EmailJS
        const response = await emailjs.send("service_7n6g3cu", "template_4mgvbqp", formData);
        console.log("Email sent successfully!", response);

                
        console.log("Email sent to team leader successfully!");
        // Update success message
        waitMessage.innerText = "Registration submitted successfully! Your Team ID : " + teamID;

        // Clear form fields
        document.querySelectorAll('#registrationForm input').forEach(input => {
            input.value = '';
        });

       

    } catch (error) {
        console.error("Error sending email:", error);
        waitMessage.innerText = "Failed to send email. Please try again.";
    }
};



// Problem Statements with Search Animation
const problems = [
    {
        problemId: "AH_PS_001",
        title: "Smart Healthcare Assistant",
        description: "• Develop an AI-based healthcare assistant to provide medical information and recommendations. \n• Implement a chatbot that can answer health-related queries.\n• Use natural language processing (NLP) to understand and respond to user questions.\n• Integrate a symptom checker to provide basic diagnosis and advice.\n• Ensure data privacy and security.",
        field: "AI Innovators"
    },
    {
        problemId: "AH_PS_002",
        title: "AI-Powered Personal Finance Manager",
        description: "• Create an AI-driven application to help users manage their finances. \n• Implement a system to track income, expenses, and savings.\n• Use machine learning algorithms to predict spending patterns and suggest budget adjustments.\n• Provide personalized financial advice and recommendations.\n• Include data visualization tools for easy analysis of financial data.",
        field: "AI Innovators"
    },
    {
        problemId: "AH_PS_003",
        title: "Smart Traffic Management System",
        description: "• Design an AI-based system to optimize traffic flow in urban areas.\n• Use computer vision techniques to analyze real-time traffic footage.\n• Develop algorithms to predict traffic congestion and suggest alternate routes.\n• Implement machine learning models to optimize traffic signal timings.\n• Provide a user-friendly interface for traffic authorities to monitor and manage traffic.",
        field: "AI Innovators"
    },
    {
        problemId: "AH_PS_004",
        title: "Intelligent Tutoring System",
        description: "• Build an AI-driven tutoring platform to personalize the learning experience for students.\n• Implement adaptive learning algorithms to customize content based on student performance.\n• Use NLP to understand student queries and provide relevant explanations.\n•  Incorporate gamification elements to enhance engagement and motivation.\n• Provide detailed analytics on student progress and performance.",
        field: "AI Innovators"
    },
    {
        problemId: "AH_PS_005",
        title: "AI-Based News Aggregator",
        description: "• Develop a news aggregator that uses AI to deliver personalized news content.\n• Implement machine learning algorithms to understand user preferences and interests.\n• Use NLP to analyze and categorize news articles.\n• Provide personalized news recommendations and summaries.\n• Ensure the system detects and filters out fake news and biased content.",
        field: "AI Innovators"
    },
    {
        problemId: "AH_PS_006",
        title: "Smart Home Automation System",
        description: "• Create an AI-powered system to automate various aspects of home management.\n• Implement voice recognition and NLP to control home devices.\n• Use machine learning to predict and automate routine tasks (e.g., adjusting thermostat, lighting).\n• Develop a mobile app for remote control and monitoring of home devices.\n• Ensure security features to protect user data and prevent unauthorized access.",
        field: "AI Innovators"
    },
    {
        problemId: "AH_PS_007",
        title: "AI-Based Job Recommendation System",
        description: "• Design a platform that uses AI to match job seekers with suitable job opportunities.\n• Implement machine learning algorithms to analyze resumes and job descriptions.\n• Use NLP to understand and match job seeker skills with job requirements.\n• Provide personalized job recommendations and alerts.\n• Include features for tracking application status and receiving feedback.",
        field: "AI Innovators"
    },
    {
        problemId: "AH_PS_008",
        title: "AI-Driven Environmental Monitoring System",
        description: "• Develop a system to monitor and analyze environmental data using AI.\n• Use sensors to collect data on air quality, temperature, humidity, etc.\n• Implement machine learning models to analyze and predict environmental trends.\n• Provide real-time alerts and recommendations for environmental protection.\nCreate a dashboard to visualize data and trends.",
        field: "AI Innovators"
    }
]
;

const problemsGrid = document.getElementById('problemsGrid');
const problemSearch = document.getElementById('problemSearch');
const maxDescriptionLength = 100; // Limit description to 100 characters

function displayProblems(problemsList) {
    problemsGrid.innerHTML = '';    
    problemsList.forEach((problem, index) => {
        const problemCard = document.createElement('div');
        problemCard.classList.add('problem-card');
        problemCard.style.animationDelay = `${index * 0.1}s`;

        let shortDescription = problem.description.length > maxDescriptionLength
            ? problem.description.substring(0, maxDescriptionLength) + "..."
            : problem.description;

        problemCard.innerHTML = `
            <h3>${problem.title} <div class="problem-id">(${problem.problemId})</div></h3>
            <p class="description">
                <span class="short-desc">${shortDescription}</span>
               
            </p>
            <span class="field-tag">${problem.field}</span>
        `;

        problemsGrid.appendChild(problemCard);
    });
}
problemSearch.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredProblems = problems.filter(problem => 
        problem.problemId.toLowerCase().includes(searchTerm) ||
        problem.title.toLowerCase().includes(searchTerm) ||
        problem.description.toLowerCase().includes(searchTerm) ||
        problem.field.toLowerCase().includes(searchTerm)
    );
    displayProblems(filteredProblems);
});
// Initial problem display
displayProblems(problems);

const problemModal = document.getElementById("problemModal");
const modalTitle = document.getElementById("modalTitle");
const modalProblemId = document.getElementById("modalProblemId");
const modalDescription = document.getElementById("modalDescription");
const modalField = document.getElementById("modalField");
const closeModal = document.querySelector(".close-modal");

// Hide modal initially
problemModal.style.display = "none"; 

function displayProblems(problemsList) {
    problemsGrid.innerHTML = '';

    if (!problemsList || problemsList.length === 0) {
        console.warn("No problems available."); // Debugging log
        return; // Stop execution if problems list is empty
    }

    problemsList.forEach((problem, index) => {
        const problemCard = document.createElement('div');
        problemCard.classList.add('problem-card');
        problemCard.style.animationDelay = `${index * 0.1}s`;

        let shortDescription = problem.description.length > 100
            ? problem.description.substring(0, 100) + "..."
            : problem.description;

        problemCard.innerHTML = `
            <h3>${problem.title} <div class="problem-id">(${problem.problemId})</div></h3>
            <p class="description">
                <span class="short-desc">${shortDescription}</span>
            </p>
            <span class="field-tag">${problem.field}</span>
        `;

        // Open modal only when clicking a problem card
        problemCard.addEventListener("click", function (event) {
            console.log("Problem Card Clicked:", problem.title); // Debugging log

            // Set modal content
            modalTitle.innerText = problem.title;
            modalProblemId.innerText = problem.problemId;
            modalDescription.innerText = problem.description;
            modalField.innerText = problem.field;

            // Show modal
            problemModal.style.display = "flex";
            problemModal.style.justifyContent = "center";
            problemModal.style.alignItems = "center";
            problemModal.style.zIndex = "1000";
        });

        problemsGrid.appendChild(problemCard);
    });
}

// Close modal when clicking the close button
closeModal.addEventListener("click", () => {
    console.log("Closing modal"); // Debugging log
    problemModal.style.display = "none";
});

// Close modal when clicking outside
window.onclick = (event) => {
    if (event.target === problemModal) {
        problemModal.style.display = "none";
        document.body.style.overflow = "auto";
    }
};

// Ensure problems is defined before calling displayProblems
if (typeof problems !== "undefined" && problems.length > 0) {
    displayProblems(problems);
} else {
    console.warn("Problems data is missing or empty.");
}



// Schedule Data with Animation
const schedule = {
    day1: [
        {
            time: "9:30 AM",
            event: "Opening Ceremony",
            description: "Welcoming participants, introducing the organizing team, and outlining event rules."
        },
        {
            time: "10:15 AM",
            event: "Hackathon Begins",
            description: "Announcement of problem statements, team formation, and idea brainstorming starts."
        },
        {
            time: "1:00 PM",
            event: "Break-Time",
            description: "Participants can take a break for lunch and refreshments."
        },
        {
            time: "2:00 PM",
            event: "Hackathon Resumes",
            description: "Teams start working on their projects, coding, and implementing solutions."
        },
        {
            time: "4:00 PM",
            event: "Mentor Check-in",
            description: "Mentors review progress, provide feedback, and guide participants."
        }
    ],
    day2: [
        {
            time: "9:30 AM",
            event: "Morning Briefing",
            description: "All participants should be at the event hall for final announcements and updates."
        },
        {
            time: "10:15 AM",
            event: "Final Coding Stretch",
            description: "Last few hours to fine-tune, optimize, and prepare for submission."
        },
        {
            time: "2:00 PM",
            event: "Project Submission",
            description: "Teams submit their final projects for evaluation."
        },
        {
            time: "3:00 PM",
            event: "Result Announcement",
            description: "Judges announce the winners and provide feedback on the projects."
        },
        {
            time: "4:00 PM",
            event: "Closing Ceremony",
            description: "Prize distribution, networking session, and closing remarks."
        }
    ]
};

function displaySchedule() {
    const day1Events = document.getElementById('day1Events');
    const day2Events = document.getElementById('day2Events');

    schedule.day1.forEach((event, index) => {
        const eventDiv = document.createElement('div');
        eventDiv.classList.add('event');
        eventDiv.style.animationDelay = `${index * 0.2}s`;
        eventDiv.innerHTML = `
            <div class="event-time">${event.time}</div>
            <div class="event-details">
                <h4>${event.event}</h4>
                <p>${event.description}</p>
            </div>
        `;
        day1Events.appendChild(eventDiv);
    });

    schedule.day2.forEach((event, index) => {
        const eventDiv = document.createElement('div');
        eventDiv.classList.add('event');
        eventDiv.style.animationDelay = `${index * 0.2}s`;
        eventDiv.innerHTML = `
            <div class="event-time">${event.time}</div>
            <div class="event-details">
                <h4>${event.event}</h4>
                <p>${event.description}</p>
            </div>
        `;
        day2Events.appendChild(eventDiv);
    });
   
}

// Rules and FAQs with Animation
const rules = [
    "Teams must consist of exactly 6 members",
    "Team should have at least one girl",
    "All team members must be currently enrolled students",
    "Use of pre-existing code must be disclosed",
    "Projects must be original and created during the hackathon",
    "Teams must present their projects to the judges",
    "Each Team should have unique dress code"
];

const faqs = [
    {
        question: "What should I bring to the hackathon?",
        answer: "Bring your laptop, charger, student ID, and any other personal items you'll need for the 24-hour event."
    },
    {
        question: "Is there a registration fee?",
        answer: "No, participation in Aignite Hackathon is completely free of charge."
    },
    {
        question: "Can I start working on my project before the hackathon?",
        answer: "No, all project work must be done during the hackathon. However, you can come prepared with ideas and research."
    },
    {
        question: "What kind of projects can we build?",
        answer: "Any project that solves one of the provided problem statements."
    }
];

function displayRulesAndFAQs() {
    const rulesList = document.getElementById('rulesList');
    const faqContainer = document.getElementById('faqContainer');

    rules.forEach((rule, index) => {
        const li = document.createElement('li');
        li.textContent = rule;
        li.style.animationDelay = `${index * 0.1}s`;
        rulesList.appendChild(li);
    });

    faqs.forEach((faq, index) => {
        const faqDiv = document.createElement('div');
        faqDiv.classList.add('faq-item');
        faqDiv.style.animationDelay = `${index * 0.1}s`;
        faqDiv.innerHTML = `
            <h4>${faq.question}</h4>
            <p>${faq.answer}</p>
        `;
        faqContainer.appendChild(faqDiv);
    });
}

// Initialize all displays
displaySchedule();
displayRulesAndFAQs();

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);
  
// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    section.style.transition = "all 0.5s ease-out";
    observer.observe(section);
});

// Organized By Scroll functionality
function scrollLeft() {
    document.querySelector('.members').scrollBy({ left: -150, behavior: 'smooth' });
}
function scrollRight() {
    document.querySelector('.members').scrollBy({ left: 150, behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', function () {
    const galleryBoxes = document.querySelectorAll('.gallery-box');

    galleryBoxes.forEach(box => {
        const firstImage = box.querySelector('.gallery-grid img');

        // Set first image as background before expansion
        if (firstImage) {
            box.style.backgroundImage = `url(${firstImage.src})`;
            box.style.backgroundSize = 'cover';
            box.style.backgroundPosition = 'center';
            box.style.minHeight = '200px'; // Ensures visibility
        }

        box.addEventListener('click', function (event) {
            const isExpanded = this.classList.contains('expanded');
            const clickedImage = event.target.tagName === 'IMG';

            // If clicking an image inside an expanded box, open it in modal
            if (isExpanded && clickedImage) {
                openImage(event.target.src);
                return;
            }

            // Collapse all other boxes
            galleryBoxes.forEach(otherBox => {
                otherBox.classList.remove('expanded');
                otherBox.classList.add('collapsed');
                otherBox.style.backgroundImage = `url(${otherBox.querySelector('.gallery-grid img').src})`; // Reset background
            });

            // Expand the clicked box
            this.classList.add('expanded');
            this.classList.remove('collapsed');
            this.style.backgroundImage = 'none'; // Remove background on expand

            // Smooth scroll into view if on mobile
            if (window.innerWidth <= 768) {
                this.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    function openImage(src) {
        if (document.querySelector('.image-modal')) return;

        let modal = document.createElement('div');
        modal.classList.add('image-modal');
        modal.innerHTML = `
            <div class="modals-content">
                <span class="close-btn">&times;</span>
                <img src="${src}" alt="Expanded Image">
            </div>
        `;

        document.body.appendChild(modal);

        modal.querySelector('.close-btn').addEventListener('click', () => modal.remove());
        modal.addEventListener('click', (event) => {
            if (event.target.classList.contains('image-modal')) modal.remove();
        });

        document.addEventListener('keydown', function handleKeyPress(event) {
            if (event.key === 'Escape') {
                modal.remove();
                document.removeEventListener('keydown', handleKeyPress);
            }
        });
    }
});
