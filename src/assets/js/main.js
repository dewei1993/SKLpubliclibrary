
    const aboutContent = document.getElementById('aboutContent');
    const aboutTabs = document.querySelectorAll('.about-tab');

	const aboutData = {
	  mission: `The Sentro Ng Karunungan Library is an institutional for the collection of relevant books, reading materials, records, information technology materials, tapes, photographs, films, and other resources intended to inspire people in all walks of life to seek knowledge and enlightenment about this ever-changing world, and thereby become leaders in this part of the country in building and sustaining a literate community transforming lives through learning and understanding.`,

	  vision: `In 2028, the Sentro ng Karunungan Library strives to be a dynamic and innovative center for knowledge and learning. It aims to provide a diverse collection of digital resources, cutting-edge technology, and interactive spaces for collaboration. The library will actively engage the community through inclusive programs, fostering a culture of lifelong learning and empowering individuals to explore, discover, and grow.`,

	  goals: `To provide the best possible access to relevant information within a sustainable environment.
	1. Develop the library at its best in serving and providing resources and programs for the community;
	2. Develop the staff in building their skills for them to serve the community confidently; and ...`,

	  objectives: `• To identify community needs and provide programs of service and technology to meet those needs, in cooperation with other organizations and institutions;
	• To serve the community as a center of reliable information through adequate, relevant, and up-to-date collections across various subjects;
	• To promote reading and literacy for people of all ages;
	• To provide instruction in library and ...`
	};

    aboutTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        aboutTabs.forEach(btn => btn.classList.remove('active'));
        tab.classList.add('active');
        aboutContent.textContent = aboutData[tab.dataset.tab];
      });
    });

	const activityThumbs = document.querySelectorAll('.activity-thumb');
	const featuredImg = document.getElementById('featuredActivityImage');
	const featuredTitle = document.getElementById('featuredActivityTitle');
	const featuredDesc = document.getElementById('featuredActivityDesc');

	activityThumbs.forEach(item => {
	  item.addEventListener('click', () => {
	    featuredImg.src = item.dataset.img;
	    featuredTitle.textContent = item.dataset.title;
	    featuredDesc.textContent = item.dataset.desc;
	  });
	});

    const counters = document.querySelectorAll('.counter');
    const animateCounter = (el) => {
      const target = +el.dataset.target;
      const duration = 1800;
      const startTime = performance.now();

      const update = (currentTime) => {
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const value = Math.floor(progress * target);
        el.textContent = value.toLocaleString();
        if (progress < 1) requestAnimationFrame(update);
      };

      requestAnimationFrame(update);
    };

    const statsSection = document.querySelector('.stats-section');
    let counterStarted = false;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !counterStarted) {
          counters.forEach(animateCounter);
          counterStarted = true;
        }
      });
    }, { threshold: 0.3 });

    observer.observe(statsSection);

    const scrollTopBtn = document.getElementById('scrollTopBtn');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        scrollTopBtn.classList.add('show');
      } else {
        scrollTopBtn.classList.remove('show');
      }
    });

    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    document.getElementById('year').textContent = new Date().getFullYear();

    const navLinks = document.querySelectorAll('.navbar-custom .nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', function () {
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
      });
    });

    // VISITOR TRACKING SYSTEM (LOCAL STORAGE - ADVANCED)

function getDateKey(date = new Date()) {
  return date.toISOString().split('T')[0];
}

function updateVisitors() {
  const today = new Date();
  const todayKey = getDateKey(today);
  const totalKey = "total_visits";

  // Get stored data
  let visits = JSON.parse(localStorage.getItem("visit_data")) || {};
  let total = parseInt(localStorage.getItem(totalKey)) || 0;

  // Update today
  visits[todayKey] = (visits[todayKey] || 0) + 1;
  total++;

  localStorage.setItem("visit_data", JSON.stringify(visits));
  localStorage.setItem(totalKey, total);

  // Calculate stats
  let todayCount = visits[todayKey] || 0;

  let yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);
  let yesterdayKey = getDateKey(yesterday);
  let yesterdayCount = visits[yesterdayKey] || 0;

  let last7 = 0;
  let last30 = 0;
  let month = 0;
  let year = 0;

  Object.keys(visits).forEach(date => {
    const d = new Date(date);
    const diffDays = (today - d) / (1000 * 60 * 60 * 24);

    if (diffDays <= 7) last7 += visits[date];
    if (diffDays <= 30) last30 += visits[date];

    if (d.getMonth() === today.getMonth() && d.getFullYear() === today.getFullYear()) {
      month += visits[date];
    }

    if (d.getFullYear() === today.getFullYear()) {
      year += visits[date];
    }
  });

  // Update UI
  const stats = document.querySelectorAll('.visitors strong');

  if (stats.length >= 7) {
    stats[0].textContent = todayCount;
    stats[1].textContent = yesterdayCount;
    stats[2].textContent = last7;
    stats[3].textContent = last30;
    stats[4].textContent = month;
    stats[5].textContent = year;
    stats[6].textContent = total.toLocaleString();
  }
}

updateVisitors();

function handleHeroSearch(event) {
  event.preventDefault();

  const input = document.getElementById('heroSearchInput');
  const query = input.value.trim().toLowerCase();

  if (!query) {
    alert('Please enter a keyword to search.');
    return;
  }

  if (query.includes('about') || query.includes('mission') || query.includes('vision')) {
    window.location.href = '#about';
  } else if (query.includes('resource') || query.includes('catalog') || query.includes('opac')) {
    window.location.href = '#resources';
  } else if (query.includes('service') || query.includes('program') || query.includes('activity')) {
    window.location.href = '#services';
  } else if (query.includes('contact') || query.includes('location') || query.includes('hours')) {
    window.location.href = '#contact';
  } else {
    alert('No matching section found. Try keywords like About, Resources, Services, or Contact.');
  }

  input.value = '';
}

function scrollResources(direction) {
  const container = document.getElementById('resourceTrack');
  const card = container.querySelector('.resource-card');

  if (!card) return;

  const cardWidth = card.offsetWidth + 18; // include gap
  const scrollAmount = cardWidth * 3; // scroll 3 items

  container.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}

const resourceSlider = document.getElementById('resourceTrack');

let isDownRes = false;
let startXRes;
let scrollLeftRes;

resourceSlider.addEventListener('mousedown', (e) => {
  isDownRes = true;
  resourceSlider.classList.add('dragging');
  startXRes = e.pageX - resourceSlider.offsetLeft;
  scrollLeftRes = resourceSlider.scrollLeft;
});

resourceSlider.addEventListener('mouseleave', () => {
  isDownRes = false;
  resourceSlider.classList.remove('dragging');
});

resourceSlider.addEventListener('mouseup', () => {
  isDownRes = false;
  resourceSlider.classList.remove('dragging');
});

resourceSlider.addEventListener('mousemove', (e) => {
  if (!isDownRes) return;
  e.preventDefault();
  const x = e.pageX - resourceSlider.offsetLeft;
  const walk = (x - startXRes) * 1.5;
  resourceSlider.scrollLeft = scrollLeftRes - walk;
});


const slider = document.getElementById('servicesTrack');

let isDown = false;
let startX;
let scrollLeft;
let velocity = 0;
let momentumID;


/* =========================
   ARROW SCROLL (3 CARDS)
========================= */
function scrollServices(direction) {
  const card = slider.querySelector('.service-card');
  if (!card) return;

  const cardWidth = card.offsetWidth + 24; // include gap
  const scrollAmount = cardWidth * 3; // move 3 cards

  cancelMomentum(); // stop momentum if clicking

  slider.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}

/* =========================
   DRAG START
========================= */
slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('dragging');

  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;

  cancelMomentum(); // stop momentum on new drag
});

/* =========================
   DRAG END
========================= */
slider.addEventListener('mouseleave', stopDrag);
slider.addEventListener('mouseup', stopDrag);

function stopDrag() {
  if (!isDown) return;
  isDown = false;
  slider.classList.remove('dragging');
  startMomentum(); // start smooth glide
}

/* =========================
   DRAG MOVE
========================= */
slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;

  e.preventDefault();

  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX);

  const prevScroll = slider.scrollLeft;
  slider.scrollLeft = scrollLeft - walk;

  velocity = slider.scrollLeft - prevScroll; // track speed
});

/* =========================
   MOMENTUM EFFECT
========================= */
function startMomentum() {
  momentumID = requestAnimationFrame(momentumLoop);
}

function momentumLoop() {
  slider.scrollLeft += velocity;
  velocity *= 0.95; // friction (adjust for feel)

  if (Math.abs(velocity) > 0.5) {
    momentumID = requestAnimationFrame(momentumLoop);
  }
}

function cancelMomentum() {
  cancelAnimationFrame(momentumID);
}

const today = new Date();
const options = { year: 'numeric', month: 'long', day: 'numeric' };

document.getElementById('currentDate').textContent =
  today.toLocaleDateString('en-US', options);