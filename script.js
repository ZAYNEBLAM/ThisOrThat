// ===============================
// QUESTIONS DATA
// Replace these with your own questions and images!
// ===============================
const questions = [
    {
        question: "Beach or Mountains?",
        optionA: { title: "🏖️ Beach", image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=tropical%20beach%20with%20palm%20trees%20and%20turquoise%20water&image_size=square_hd" },
        optionB: { title: "⛰️ Mountains", image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=misty%20mountain%20landscape%20with%20green%20hills&image_size=square_hd" }
    },
    {
        question: "City or Countryside?",
        optionA: { title: "🏙️ City", image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=night%20city%20skyline%20with%20neon%20lights&image_size=square_hd" },
        optionB: { title: "🏡 Countryside", image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=peaceful%20countryside%20farm%20with%20cows&image_size=square_hd" }
    },
    {
        question: "Batman or Spider-Man?",
        optionA: { title: "🦇 Batman", image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=batman%20in%20dark%20costume%20on%20rooftop&image_size=square_hd" },
        optionB: { title: "🕷️ Spider-Man", image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=spider-man%20in%20red%20and%20blue%20costume%20swinging&image_size=square_hd" }
    },
    {
        question: "Oreo cheesecake or lemon cheesecake?",
        optionA: { title: "🍪 Oreo Cheesecake", image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=delicious%20oreo%20cheesecake%20with%20cookie%20crust&image_size=square_hd" },
        optionB: { title: "🍋 Lemon Cheesecake", image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=fresh%20lemon%20cheesecake%20with%20lemon%20slices&image_size=square_hd" }
    },
    {
        question: "Sweet or savory?",
        optionA: { title: "🍭 Sweet", image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=colorful%20candies%20and%20donuts&image_size=square_hd" },
        optionB: { title: "🍿 Savory", image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=cheese%20board%20and%20pretzels&image_size=square_hd" }
    },
    {
        question: "Dogs or Cats?",
        optionA: { title: "🐶 Dogs", image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=cute%20golden%20retriever%20puppy%20playing&image_size=square_hd" },
        optionB: { title: "🐱 Cats", image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=cute%20fluffy%20orange%20cat%20curled%20up&image_size=square_hd" }
    },
    {
        question: "Travel or stay at home?",
        optionA: { title: "✈️ Travel", image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=airplane%20and%20suitcase%20on%20beach&image_size=square_hd" },
        optionB: { title: "🏠 Stay at Home", image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=cozy%20living%20room%20with%20blanket%20and%20book&image_size=square_hd" }
    },
    {
        question: "Books or Movies?",
        optionA: { title: "📚 Books", image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=stack%20of%20books%20with%20coffee%20and%20lamp&image_size=square_hd" },
        optionB: { title: "🎥 Movies", image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=movie%20theater%20screen%20and%20popcorn&image_size=square_hd" }
    },
    {
        question: "Music or Podcasts?",
        optionA: { title: "🎵 Music", image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=headphones%20and%20vintage%20record%20player&image_size=square_hd" },
        optionB: { title: "🎙️ Podcasts", image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=professional%20microphone%20and%20laptop&image_size=square_hd" }
    },
    {
        question: "Casual style or old money style?",
        optionA: { title: "👕 Casual Style", image: "images/casual.jpg" },
        optionB: { title: "👔 Old Money Style", image: "images/oldmoney.jpg" }
    },
    {
        question: " watch or bracelet?",
        optionA: { title: "⌚ Watch", image: "images/watch.jpg" },
        optionB: { title: "📿  Bracelet", image: "images/bracelet.jpg" }
    },
    {
        question: "Sneakers or  sandals?",
        optionA: { title: "👟 Sneakers", image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=white%20sneakers%20on%20floor&image_size=square_hd" },
        optionB: { title: "🩴  Sandals", image: "images/sandals.jpg" }
    },
    {
        question: "Cars or motorcycles?",
        optionA: { title: "🚗 Cars", image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=sporty%20red%20car%20on%20road&image_size=square_hd" },
        optionB: { title: "🏍️ Motorcycles", image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=black%20motorcycle%20on%20highway&image_size=square_hd" }
    },
    {
        question: "Teddy bear or LEGO?",
        optionA: { title: "🧸 Teddy Bear", image: "images/teddybear.jpg" },
        optionB: { title: "🧱 LEGO", image: "images/lego.jpg" }
    },
    {
        question: "Family or Friends?",
        optionA: { title: "👨‍👩‍👧‍👦 Family", image: "images/family.jpg" },
        optionB: { title: "👯 Friends", image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=group%20of%20friends%20laughing%20together&image_size=square_hd" }
    }
];

let currentQuestion = 0;
let playerId = null;
let answers = {};

// DOM Elements
const welcomeScreen = document.getElementById('welcome-screen');
const questionScreen = document.getElementById('question-screen');
const endScreen = document.getElementById('end-screen');
const startBtn = document.getElementById('start-btn');
const prevBtn = document.getElementById('prev-btn');
const skipBtn = document.getElementById('skip-btn');
const finishBtn = document.getElementById('finish-btn');
const questionNumberEl = document.getElementById('question-number');
const questionTextEl = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const progressBar = document.getElementById('progress-bar');

// Initialize
startBtn.addEventListener('click', startGame);
prevBtn.addEventListener('click', goToPrevious);
skipBtn.addEventListener('click', goToNext);
finishBtn.addEventListener('click', () => {
    window.location.reload();
});

function startGame() {
    // Create new player (try Firebase first, but fall back to local if not configured)
    playerId = generatePlayerId();
    
    // If Firebase is not configured, just start the game
    if (!db) {
        console.log('Firebase not configured, proceeding without saving');
        showScreen('question');
        renderQuestion();
        return;
    }
    
    // Try to save to Firebase if it is configured
    db.collection('players').doc(playerId).set({
        id: playerId,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    }).then(() => {
        showScreen('question');
        renderQuestion();
    }).catch(error => {
        console.log('Error saving player to Firebase, proceeding without saving:', error);
        showScreen('question');
        renderQuestion();
    });
}

function generatePlayerId() {
    return 'player_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

function showScreen(screenName) {
    welcomeScreen.classList.remove('active');
    questionScreen.classList.remove('active');
    endScreen.classList.remove('active');

    if (screenName === 'welcome') {
        welcomeScreen.classList.add('active');
    } else if (screenName === 'question') {
        questionScreen.classList.add('active');
    } else if (screenName === 'end') {
        endScreen.classList.add('active');
        launchConfetti();
    }
}

function renderQuestion() {
    const q = questions[currentQuestion];
    questionNumberEl.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
    questionTextEl.textContent = q.question;
    
    // Update progress bar
    const progress = ((currentQuestion) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
    
    // Render options
    optionsContainer.innerHTML = '';
    
    // Option A
    const optionA = document.createElement('div');
    optionA.className = 'option-card';
    if (answers[currentQuestion] === 'A') {
        optionA.classList.add('selected');
    }
    optionA.innerHTML = `
        <img src="${q.optionA.image}" alt="${q.optionA.title}" class="option-image">
        <div class="option-title">${q.optionA.title}</div>
    `;
    optionA.addEventListener('click', () => selectOption('A'));
    optionsContainer.appendChild(optionA);
    
    // Option B
    const optionB = document.createElement('div');
    optionB.className = 'option-card';
    if (answers[currentQuestion] === 'B') {
        optionB.classList.add('selected');
    }
    optionB.innerHTML = `
        <img src="${q.optionB.image}" alt="${q.optionB.title}" class="option-image">
        <div class="option-title">${q.optionB.title}</div>
    `;
    optionB.addEventListener('click', () => selectOption('B'));
    optionsContainer.appendChild(optionB);
    
    // Toggle previous button
    prevBtn.disabled = currentQuestion === 0;
}

function selectOption(option) {
    const q = questions[currentQuestion];
    const optionTitle = option === 'A' ? q.optionA.title : q.optionB.title;
    
    // Save answer locally
    answers[currentQuestion] = option;
    
    // Save to Firestore
    saveAnswer(currentQuestion, option, optionTitle);
    
    // Move to next question
    goToNext();
}

function saveAnswer(questionNum, chosenOption, optionTitle) {
    // Only save to Firebase if it is configured
    if (!db) {
        console.log('Firebase not configured, answer not saved');
        return;
    }
    
    db.collection('players').doc(playerId).collection('answers').doc(`question_${questionNum + 1}`).set({
        questionNumber: questionNum + 1,
        chosenOption: chosenOption,
        optionTitle: optionTitle,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    }).catch(error => {
        console.log('Error saving answer to Firebase:', error);
    });
}

function goToNext() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        renderQuestion();
    } else {
        // Last question, show end screen
        progressBar.style.width = '100%';
        setTimeout(() => {
            showScreen('end');
        }, 300);
    }
}

function goToPrevious() {
    if (currentQuestion > 0) {
        currentQuestion--;
        renderQuestion();
    }
}

// Confetti Effect
function launchConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const colors = ['#f093fb', '#f5576c', '#4facfe', '#00f2fe', '#43e97b', '#fa709a'];
    const confetti = [];
    const confettiCount = 150;
    
    for (let i = 0; i < confettiCount; i++) {
        confetti.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            r: Math.random() * 6 + 2,
            d: Math.random() * 10 + 10,
            color: colors[Math.floor(Math.random() * colors.length)],
            tilt: Math.random() * 10 - 5,
            tiltAngle: 0
        });
    }
    
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        confetti.forEach((c, i) => {
            c.tiltAngle += 0.1;
            c.y += c.d;
            c.tilt = Math.sin(c.tiltAngle) * 15;
            
            if (c.y > canvas.height) {
                c.x = Math.random() * canvas.width;
                c.y = Math.random() * canvas.height - canvas.height;
            }
            
            ctx.beginPath();
            ctx.lineWidth = c.r;
            ctx.strokeStyle = c.color;
            ctx.moveTo(c.x + c.tilt + c.r / 2, c.y);
            ctx.lineTo(c.x + c.tilt - c.r / 2, c.y + c.tilt + c.r / 2);
            ctx.stroke();
        });
        
        requestAnimationFrame(draw);
    }
    
    draw();
    
    // Stop confetti after 5 seconds
    setTimeout(() => {
        canvas.style.display = 'none';
    }, 5000);
}
