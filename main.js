/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navbar.classList.contains("active")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


/* =========================
   CLOSE MOBILE MENU
========================= */

const navLinks =
    document.querySelectorAll(".navbar a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        const icon =
            menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    });

});


/* =========================
   SEARCH FOOD PROBLEMS
========================= */

const searchInput =
    document.getElementById("searchInput");

const searchBtn =
    document.getElementById("searchBtn");

const problemCards =
    document.querySelectorAll(".problem-card");

const noResult =
    document.getElementById("noResult");


function searchProblems() {

    const searchValue =
        searchInput.value
            .toLowerCase()
            .trim();

    let found = false;


    problemCards.forEach(card => {

        const problemName =
            card
                .getAttribute("data-name")
                .toLowerCase();


        if (
            problemName.includes(searchValue) ||
            searchValue === ""
        ) {

            card.style.display = "block";

            found = true;

        } else {

            card.style.display = "none";

        }

    });


    if (!found) {

        noResult.style.display = "block";

    } else {

        noResult.style.display = "none";

    }

}


searchBtn.addEventListener(
    "click",
    searchProblems
);


searchInput.addEventListener(
    "keyup",
    (event) => {

        if (event.key === "Enter") {

            searchProblems();

        }

    }
);


/* =========================
   SOLUTION MODAL
========================= */

const modal =
    document.getElementById(
        "solutionModal"
    );

const closeModal =
    document.getElementById(
        "closeModal"
    );

const modalOk =
    document.getElementById(
        "modalOk"
    );

const modalTitle =
    document.getElementById(
        "modalTitle"
    );

const modalText =
    document.getElementById(
        "modalText"
    );


function showSolution(problem) {


    const solutions = {

        "Acidity":
            "Try eating smaller meals, avoid foods that trigger your symptoms, and avoid lying down immediately after eating. Persistent or severe symptoms should be discussed with a healthcare professional.",


        "Food Poisoning":
            "Focus on fluids to prevent dehydration and rest. If symptoms are severe, persistent, or include signs such as bloody diarrhea, seek medical attention.",


        "Overeating":
            "Try eating slowly, paying attention to hunger and fullness signals, and using reasonable portions. Regular meal timing may also help.",


        "Dehydration":
            "Drink fluids regularly throughout the day. Increase attention to hydration during hot weather or physical activity. Severe dehydration needs prompt medical care.",


        "Junk Food":
            "Gradually replace highly processed snacks with fruits, vegetables, nuts, whole grains, and other nutrient-dense options.",


        "Indigestion":
            "Eat slowly, avoid very large meals, and notice which foods trigger discomfort. Frequent or severe indigestion should be evaluated by a healthcare professional."

    };


    modalTitle.textContent =
        problem + " Solution";


    modalText.textContent =
        solutions[problem] ||
        "Choose healthy eating habits and consult a healthcare professional when symptoms are serious or persistent.";


    modal.classList.add("active");

}


/* =========================
   CLOSE MODAL
========================= */

closeModal.addEventListener(
    "click",
    () => {

        modal.classList.remove(
            "active"
        );

    }
);


modalOk.addEventListener(
    "click",
    () => {

        modal.classList.remove(
            "active"
        );

    }
);


modal.addEventListener(
    "click",
    (event) => {

        if (
            event.target === modal
        ) {

            modal.classList.remove(
                "active"
            );

        }

    }
);


/* =========================
   CONTACT FORM
========================= */

const contactForm =
    document.getElementById(
        "contactForm"
    );


contactForm.addEventListener(
    "submit",
    (event) => {

        event.preventDefault();


        const name =
            document
                .getElementById("name")
                .value
                .trim();


        if (name) {

            alert(
                "Thank you, " +
                name +
                "! Your message has been received."
            );


            contactForm.reset();

        }

    }
);


/* =========================
   CURRENT YEAR
========================= */

document.getElementById(
    "year"
).textContent =
    new Date().getFullYear();