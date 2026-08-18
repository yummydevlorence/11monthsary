// ======================================
// ELEMENTS
// ======================================

const envelope =
    document.getElementById("envelope");

const envelopeContainer =
    document.getElementById(
        "envelope-container"
    );

const letterContainer =
    document.getElementById(
        "letter-container"
    );

const nextButton =
    document.getElementById(
        "next-button"
    );

const memoriesContainer =
    document.getElementById(
        "memories-container"
    );

const backButton =
    document.getElementById(
        "back-button"
    );

const hearts =
    document.getElementById(
        "hearts"
    );


// ======================================
// OPEN ENVELOPE
// ======================================

let envelopeOpened = false;

envelope.addEventListener(
    "click",
    function () {

        if (envelopeOpened) {
            return;
        }

        envelopeOpened = true;

        // Play opening animation
        envelope.classList.add("open");

        // Wait for envelope animation
        setTimeout(
            function () {

                envelopeContainer.style.display =
                    "none";

                letterContainer.style.display =
                    "flex";

                // Trigger animation on next frame
                setTimeout(
                    function () {
                        letterContainer.classList.add(
                            "animate-in"
                        );
                    },
                    10
                );

                window.scrollTo(0, 0);

            },
            1500
        );

    }
);


// ======================================
// NEXT.JPEG → MEMORIES PAGE
// ======================================

nextButton.addEventListener(
    "click",
    function () {

        letterContainer.style.display =
            "none";

        memoriesContainer.style.display =
            "block";

        setTimeout(
            function () {
                memoriesContainer.classList.add(
                    "animate-in"
                );
            },
            10
        );

        window.scrollTo(0, 0);

    }
);


// ======================================
// BACK TO LETTER
// ======================================

backButton.addEventListener(
    "click",
    function () {

        memoriesContainer.style.display =
            "none";

        letterContainer.style.display =
            "flex";

        setTimeout(
            function () {
                letterContainer.classList.add(
                    "animate-in"
                );
            },
            10
        );

        window.scrollTo(0, 0);

    }
);


// ======================================
// FLOATING HEARTS
// ======================================

const heartSymbols = [
    "♡",
    "♥",
    "❤"
];


function createHeart() {

    const heart =
        document.createElement("span");

    heart.className =
        "floating-heart";

    heart.textContent =
        heartSymbols[
            Math.floor(
                Math.random() *
                heartSymbols.length
            )
        ];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        (10 + Math.random() * 18)
        + "px";

    heart.style.animationDuration =
        (6 + Math.random() * 5)
        + "s";

    hearts.appendChild(heart);


    setTimeout(
        function () {

            heart.remove();

        },
        12000
    );
}


// Intro floating hearts
for (let i = 0; i < 18; i++) {
    setTimeout(() => {
        createHeart();
    }, i * 180);
}

// Initial hearts

for (
    let i = 0;
    i < 10;
    i++
) {

    setTimeout(
        createHeart,
        i * 400 + 2000
    );
}


// New hearts

setInterval(
    createHeart,
    700
);