// Movie data - normally this would come from an API
const movies = {
    popular: [
        { id: 1, title: "Stranger Things", image: "https://m.media-amazon.com/images/M/MV5BMDZkYmVhNjMtNWU4MC00MDQxLWE3MjYtZGMzZWI1ZjhlOWJmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg", year: 2016, rating: "8.7" },
        { id: 2, title: "The Witcher", image: "https://m.media-amazon.com/images/M/MV5BN2FiOWU4YzYtMzZiOS00MzcyLTlkOGEtOTgwZmEwMzAxMzA3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg", year: 2019, rating: "8.2" },
        { id: 3, title: "Money Heist", image: "https://m.media-amazon.com/images/M/MV5BODI0ZTljYTMtODQ1NC00NmI0LTk1YWUtN2FlNDM1MDExMDlhXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_.jpg", year: 2017, rating: "8.3" },
        { id: 4, title: "The Queen's Gambit", image: "https://m.media-amazon.com/images/M/MV5BM2EwMmRhMmUtMzBmMS00ZDQ3LTg4OGEtNjlkODk3ZTMxMmJlXkEyXkFqcGdeQXVyMjM5ODk1NDU@._V1_.jpg", year: 2020, rating: "8.6" },
        { id: 5, title: "Breaking Bad", image: "https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg", year: 2008, rating: "9.5" },
        { id: 6, title: "Peaky Blinders", image: "https://m.media-amazon.com/images/M/MV5BZjYzZDgzMmYtYjY5Zi00YTk1LThhMDYtNjFlNzM4MTZhYzgyXkEyXkFqcGdeQXVyMTE5NDQ1MzQ3._V1_.jpg", year: 2013, rating: "8.8" }
    ],
    trending: [
        { id: 7, title: "Squid Game", image: "https://m.media-amazon.com/images/M/MV5BYWE3MDVkN2EtNjQ5MS00ZDQ4LTliNzYtMjc2YWMzMDEwMTA3XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg", year: 2021, rating: "8.0" },
        { id: 8, title: "Wednesday", image: "https://m.media-amazon.com/images/M/MV5BM2ZmMjEyZmYtOGM4YS00YTNhLWE3ZDMtNzQxM2RhNjBlODIyXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg", year: 2022, rating: "8.1" },
        { id: 9, title: "Bridgerton", image: "https://m.media-amazon.com/images/M/MV5BNjk4MDdhODctMmFhYi00ZTNhLThlN2UtN2NhZGY0OGFlMWEwXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg", year: 2020, rating: "7.4" },
        { id: 10, title: "The Last of Us", image: "https://m.media-amazon.com/images/M/MV5BZGUzYTI3M2EtZmM0Yy00NGUyLWI4ODEtN2Q3ZGJlYzhhZjU3XkEyXkFqcGdeQXVyNTM0OTY1OQ@@._V1_.jpg", year: 2023, rating: "8.8" },
        { id: 11, title: "Ozark", image: "https://m.media-amazon.com/images/M/MV5BZDUxMWNlMTUtYTljZS00MTE0LTlkYjktOTU1ODZjYzBhMTk0XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg", year: 2017, rating: "8.5" },
        { id: 12, title: "The Crown", image: "https://m.media-amazon.com/images/M/MV5BZWNiODE2NjAtZWM1NS00ZDBjLWE4ZDEtMDlhNWE2YzA4OGFkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg", year: 2016, rating: "8.7" }
    ],
    tvShows: [
        { id: 13, title: "Dark", image: "https://m.media-amazon.com/images/M/MV5BOTk2NzUyOTctZDdlMS00MDJlLTgzNTEtNzQzYjFhNjA0YjBjXkEyXkFqcGdeQXVyMjg1NDcxNDM@._V1_.jpg", year: 2017, rating: "8.7" },
        { id: 14, title: "Better Call Saul", image: "https://m.media-amazon.com/images/M/MV5BZDA4YmE0OTYtMmRmNS00Mzk2LTlhM2MtNjk4NzBjZGE1MmIyXkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg", year: 2015, rating: "8.9" },
        { id: 15, title: "Mindhunter", image: "https://m.media-amazon.com/images/M/MV5BNWNmYzQ1ZWUtYTQ3ZS00Y2UwLTlkMDctZThlOTJkMGJiNzBiXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_.jpg", year: 2017, rating: "8.6" },
        { id: 16, title: "Black Mirror", image: "https://m.media-amazon.com/images/M/MV5BZTgyNTBkNzctN2I3NC00NTA1LWJiMDMtYzA2MmYyZjc1NWQzXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg", year: 2011, rating: "8.8" },
        { id: 17, title: "The Haunting of Hill House", image: "https://m.media-amazon.com/images/M/MV5BMTU4NzA4MDEwNF5BMl5BanBnXkFtZTgwMTQxODYzNjM@._V1_.jpg", year: 2018, rating: "8.6" },
        { id: 18, title: "Narcos", image: "https://m.media-amazon.com/images/M/MV5BNmFjODU3YzgtMGUwNC00ZGI3LWFkZjQtMjkxZDc3NmQ1MzcyXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg", year: 2015, rating: "8.8" }
    ],
    originals: [
        { id: 19, title: "The Umbrella Academy", image: "https://m.media-amazon.com/images/M/MV5BNzk0OWQzMDQtODg1ZC00Yjg2LWJjYzAtNGRjMjE2M2FlYjZjXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg", year: 2019, rating: "8.0" },
        { id: 20, title: "Stranger Things", image: "https://m.media-amazon.com/images/M/MV5BMDZkYmVhNjMtNWU4MC00MDQxLWE3MjYtZGMzZWI1ZjhlOWJmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg", year: 2016, rating: "8.7" },
        { id: 21, title: "The Witcher", image: "https://m.media-amazon.com/images/M/MV5BN2FiOWU4YzYtMzZiOS00MzcyLTlkOGEtOTgwZmEwMzAxMzA3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg", year: 2019, rating: "8.2" },
        { id: 22, title: "House of Cards", image: "https://m.media-amazon.com/images/M/MV5BODM1MDU2NjY5NF5BMl5BanBnXkFtZTgwMDkxNTcwNjM@._V1_.jpg", year: 2013, rating: "8.7" },
        { id: 23, title: "Orange Is the New Black", image: "https://m.media-amazon.com/images/M/MV5BYjYyM2FmMmMtZDgyZi00NGU3LWI3NzktODllZDY0YzQyNzgyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg", year: 2013, rating: "8.2" },
        { id: 24, title: "Bojack Horseman", image: "https://m.media-amazon.com/images/M/MV5BYWQwMDNkM2MtODU4OS00OTY3LTgwOTItNjE2Yzc0MzRkMDllXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg", year: 2014, rating: "8.8" }
    ]
};

// DOM Elements
const searchIcon = document.getElementById('search-icon');
const searchInput = document.getElementById('search-input');
const darkModeToggle = document.getElementById('dark-mode-toggle');
const loginForm = document.getElementById('login-form');
const popularMoviesContainer = document.getElementById('popular-movies-container');
const trendingMoviesContainer = document.getElementById('trending-movies-container');
const tvShowsContainer = document.getElementById('tvshows-container');
const originalsContainer = document.getElementById('originals-container');
const heroBanner = document.getElementById('hero-banner');
const header = document.querySelector('header');

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Load movies
    loadMovies(movies.popular, popularMoviesContainer);
    loadMovies(movies.trending, trendingMoviesContainer);
    loadMovies(movies.tvShows, tvShowsContainer);
    loadMovies(movies.originals, originalsContainer);

    // Set up event listeners
    setupEventListeners();
});

// Load movies into containers
function loadMovies(moviesList, container) {
    container.innerHTML = '';
    
    moviesList.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        movieCard.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <div class="movie-info">
                <div class="movie-title">${movie.title}</div>
                <div>${movie.year} | Rating: ${movie.rating}</div>
            </div>
        `;
        
        // Add click event to movie cards
        movieCard.addEventListener('click', () => {
            alert(`You clicked on ${movie.title}. In a real app, this would open the movie details page.`);
        });
        
        container.appendChild(movieCard);
    });
}

// Set up event listeners
function setupEventListeners() {
    // Search functionality
    searchIcon.addEventListener('click', (e) => {
        e.preventDefault();
        searchInput.classList.toggle('active');
        if (searchInput.classList.contains('active')) {
            searchInput.style.display = 'block';
            searchInput.focus();
        } else {
            searchInput.style.display = 'none';
        }
    });

    // Search input functionality
    searchInput.addEventListener('keyup', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        if (searchTerm.length > 2) {
            searchMovies(searchTerm);
        } else if (searchTerm.length === 0) {
            // Reset to original state
            loadMovies(movies.popular, popularMoviesContainer);
            loadMovies(movies.trending, trendingMoviesContainer);
            loadMovies(movies.tvShows, tvShowsContainer);
            loadMovies(movies.originals, originalsContainer);
        }
    });

    // Dark mode toggle
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            darkModeToggle.textContent = 'Toggle Light Mode';
        } else {
            darkModeToggle.textContent = 'Toggle Dark Mode';
        }
    });

    // Login form submission
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // In a real app, you would send this to a server
            console.log('Login attempt:', { email, password });
            
            // Simulate successful login
            alert('Login successful! Welcome to Netflix.');
            
            // Close the modal
            const loginModal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
            loginModal.hide();
        });
    }

    // Scroll event for header background
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Random hero banner (in a real app, this would be curated content)
    changeHeroBanner();
}

// Search movies function
function searchMovies(searchTerm) {
    // Combine all movies for searching
    const allMovies = [
        ...movies.popular,
        ...movies.trending,
        ...movies.tvShows,
        ...movies.originals
    ];
    
    // Filter movies based on search term
    const filteredMovies = allMovies.filter(movie => 
        movie.title.toLowerCase().includes(searchTerm)
    );
    
    // Display search results in all containers
    const containers = [
        popularMoviesContainer,
        trendingMoviesContainer,
        tvShowsContainer,
        originalsContainer
    ];
    
    // Clear all containers
    containers.forEach(container => {
        container.innerHTML = '';
    });
    
    // Show results in the first container
    if (filteredMovies.length > 0) {
        document.querySelector('#home h1').textContent = 'Search Results';
        loadMovies(filteredMovies, popularMoviesContainer);
    } else {
        document.querySelector('#home h1').textContent = 'No Results Found';
    }
    
    // Hide other sections
    document.getElementById('trending').style.display = 'none';
    document.getElementById('tvShows').style.display = 'none';
    document.getElementById('originals').style.display = 'none';
}

// Change hero banner randomly (simulating featured content)
function changeHeroBanner() {
    // In a real app, this would be curated content or API-driven
    const featuredContent = [
        {
            title: "The Witcher",
            description: "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.",
            image: "https://m.media-amazon.com/images/M/MV5BN2FiOWU4YzYtMzZiOS00MzcyLTlkOGEtOTgwZmEwMzAxMzA3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
            videoUrl: "https://youtu.be/ndl1W4ltcmg"
            
        },
        {
            title: "Stranger Things",
            description: "When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.",
            image: "https://m.media-amazon.com/images/M/MV5BMDZkYmVhNjMtNWU4MC00MDQxLWE3MjYtZGMzZWI1ZjhlOWJmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
            videoUrl: "https://youtu.be/b9EkMc79ZSU"
        },
        {
            title: "OG",
            description: "OG revolves around a ruthless gangster named Ojas Gambheera \"OG\" who returns to Mumbai after disappearing for 10 years on a personal crusade to finish crime bosses.",
            image: "https://wallpapercave.com/wp/wp13058468.jpg",
            videoUrl: "https://youtu.be/ePOglweqy7o?si=VQ1y4ROr49WX8FDs"
        }
    ];
    
    // Keep the first one as default (as in the original HTML)
    const featured = featuredContent[0];
    
    // Update hero banner every 30 seconds (in a real app)
    setInterval(() => {
        const randomIndex = Math.floor(Math.random() * featuredContent.length);
        const newFeatured = featuredContent[randomIndex];
        
        heroBanner.style.backgroundImage = `url('${newFeatured.image}')`;
        document.querySelector('.home-movie-heading').textContent = newFeatured.title;
        document.querySelector('.home-movie-description').textContent = newFeatured.description;
        document.querySelector('.home-movie-play-button').parentElement.href = newFeatured.videoUrl;
    }, 30000);
}

// Reset search results when clicking on navigation links
document.querySelectorAll('.main-nav a').forEach(link => {
    link.addEventListener('click', () => {
        // Reset search
        searchInput.value = '';
        searchInput.classList.remove('active');
        searchInput.style.display = 'none';
        
        // Reset sections visibility
        document.getElementById('trending').style.display = 'block';
        document.getElementById('tvShows').style.display = 'block';
        document.getElementById('originals').style.display = 'block';
        
        // Reset headings
        document.querySelector('#home h1').textContent = 'Popular on Netflix';
        
        // Reload original content
        loadMovies(movies.popular, popularMoviesContainer);
        loadMovies(movies.trending, trendingMoviesContainer);
        loadMovies(movies.tvShows, tvShowsContainer);
        loadMovies(movies.originals, originalsContainer);
    });
});
