// Shannon's Softball Portfolio - Video Gallery

// Real highlight videos. `orientation` controls the card/modal aspect ratio.
// Durations are read from each video's metadata at runtime (see initVideoDurations).
const videoData = [
    {
        id: 1,
        title: "RBI Single",
        description: "Driving in a run with a clean single up the middle.",
        category: "at-bats",
        orientation: "landscape",
        videoUrl: "assets/videos/1920x1080/RBI-SINGLE.mp4"
    },
    {
        id: 2,
        title: "Skittles Triple",
        description: "Three-bagger laced into the gap.",
        category: "at-bats",
        orientation: "landscape",
        videoUrl: "assets/videos/1920x1080/Skittles-Triple-TN.mp4"
    },
    {
        id: 3,
        title: "Triple - MTX Cardinals",
        description: "Triple driven deep playing for the MTX Cardinals.",
        category: "at-bats",
        orientation: "landscape",
        videoUrl: "assets/videos/1920x1080/Triple-MTX.mp4"
    },
    {
        id: 4,
        title: "3-RBI Double",
        description: "Clutch double clearing the bases for three runs.",
        category: "at-bats",
        orientation: "landscape",
        videoUrl: "assets/videos/1920x1080/3RBI-Double-MTX.mp4"
    },
    {
        id: 5,
        title: "Tee Work",
        description: "Training session dialing in swing mechanics off the tee.",
        category: "training",
        orientation: "landscape",
        videoUrl: "assets/videos/1920x1080/Tee-Work.mp4"
    },
    {
        id: 6,
        title: "Triple - High School",
        description: "High school triple driven into the outfield gap.",
        category: "at-bats",
        orientation: "portrait",
        videoUrl: "assets/videos/1080x1920/Triple-HS.mp4"
    },
    {
        id: 7,
        title: "Single - MTX Cardinals",
        description: "Solid base hit with the MTX Cardinals.",
        category: "at-bats",
        orientation: "portrait",
        videoUrl: "assets/videos/1080x1920/Single-MTX.mp4"
    },
    {
        id: 8,
        title: "Double - MTX Cardinals",
        description: "Extra-base hit splitting the outfielders.",
        category: "at-bats",
        orientation: "portrait",
        videoUrl: "assets/videos/1080x1920/Double-MTX.mp4"
    },
    {
        id: 9,
        title: "RBI Single - MTX Cardinals",
        description: "Run-scoring single in travel ball competition.",
        category: "at-bats",
        orientation: "portrait",
        videoUrl: "assets/videos/1080x1920/RBI-SINGLE-MTX.mp4"
    }
];

// Initialize video gallery
document.addEventListener('DOMContentLoaded', function() {
    try {
        initVideoGallery();
        initVideoCategories();
        initVideoPlayer();
    } catch (error) {
        console.error('Error initializing video functionality:', error);
    }
});

// Initialize video gallery
function initVideoGallery() {
    const videoGallery = document.getElementById('video-gallery');
    if (!videoGallery) return;
    
    // Display all videos initially
    displayVideos(videoData);
}

// Initialize video categories
function initVideoCategories() {
    const categoryButtons = document.querySelectorAll('[data-category]');

    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');

            // Update active button styling
            categoryButtons.forEach(btn => {
                btn.classList.remove('bg-primary', 'text-white', 'hover:bg-primary/90');
                btn.classList.add('bg-gray-100', 'text-gray-700', 'hover:bg-gray-200');
            });

            // Add active styling to clicked button
            this.classList.remove('bg-gray-100', 'text-gray-700', 'hover:bg-gray-200');
            this.classList.add('bg-primary', 'text-white', 'hover:bg-primary/90');

            // Filter and display videos
            filterVideos(category);
        });
    });
}

// Filter videos by category
function filterVideos(category) {
    const filteredVideos = category === 'all' 
        ? videoData 
        : videoData.filter(video => video.category === category);
    
    displayVideos(filteredVideos);
}

// Display videos in gallery
function displayVideos(videos) {
    const videoGallery = document.getElementById('video-gallery');
    if (!videoGallery) return;

    videoGallery.innerHTML = videos.map(video => createVideoItem(video)).join('');

    // Add click handlers to video items
    addVideoClickHandlers();

    // Fill in duration badges once each video's metadata loads
    initVideoDurations();
}

// Create video item HTML
function createVideoItem(video) {
    const aspectClass = video.orientation === 'portrait' ? 'aspect-[9/16]' : 'aspect-video';

    return `
        <div class="video-item group cursor-pointer bg-white rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-200 overflow-hidden" data-video-id="${video.id}">
            <div class="relative ${aspectClass} bg-gray-900 overflow-hidden">
                <video class="video-thumbnail w-full h-full object-cover" src="${video.videoUrl}#t=0.1" muted playsinline preload="metadata" tabindex="-1"></video>
                <div class="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/35 transition-colors duration-200">
                    <span class="flex items-center justify-center w-16 h-16 rounded-full bg-black/60 group-hover:bg-primary/90 group-hover:scale-110 transition-all duration-200">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                            <path d="M8 5v14l11-7z"/>
                        </svg>
                    </span>
                </div>
                <span class="video-duration absolute bottom-2 right-2 bg-black/75 text-white text-xs font-medium px-2 py-1 rounded hidden"></span>
            </div>
            <div class="p-4">
                <h3 class="text-lg font-display font-semibold text-gray-900">${video.title}</h3>
                <p class="text-sm text-gray-600 mt-1 leading-relaxed">${video.description}</p>
                <span class="inline-block mt-3 text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">${formatCategory(video.category)}</span>
            </div>
        </div>
    `;
}

// Format category name for display
function formatCategory(category) {
    const categoryNames = {
        'at-bats': 'At-Bats',
        'training': 'Training'
    };

    return categoryNames[category] || category;
}

// Read each thumbnail video's duration from metadata and show it as a badge
function initVideoDurations() {
    const thumbnails = document.querySelectorAll('#video-gallery .video-thumbnail');

    thumbnails.forEach(videoEl => {
        const badge = videoEl.parentElement.querySelector('.video-duration');
        if (!badge) return;

        const setDuration = () => {
            if (isFinite(videoEl.duration) && videoEl.duration > 0) {
                badge.textContent = formatDuration(videoEl.duration);
                badge.classList.remove('hidden');
            }
        };

        if (videoEl.readyState >= 1) {
            setDuration();
        } else {
            videoEl.addEventListener('loadedmetadata', setDuration, { once: true });
        }
    });
}

// Format seconds as M:SS
function formatDuration(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = Math.floor(totalSeconds % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

// Add click handlers to video items
function addVideoClickHandlers() {
    const videoItems = document.querySelectorAll('.video-item');
    
    videoItems.forEach(item => {
        item.addEventListener('click', function() {
            const videoId = parseInt(this.getAttribute('data-video-id'));
            const video = videoData.find(v => v.id === videoId);
            
            if (video) {
                openVideoModal(video);
            }
        });
    });
}

// Initialize video player modal
function initVideoPlayer() {
    // Create video modal
    createVideoModal();
}

// Create video modal
function createVideoModal() {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-75 z-50 hidden flex items-center justify-center';
    modal.id = 'video-modal';
    modal.innerHTML = `
        <div class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-3 sm:p-4" onclick="closeVideoModal()">
            <div class="bg-white rounded-lg w-full max-w-4xl max-h-[92vh] flex flex-col overflow-hidden" onclick="event.stopPropagation()">
                <div class="flex justify-between items-center p-4 border-b">
                    <h3 id="modal-title" class="text-lg sm:text-xl font-bold text-gray-900 pr-4 truncate"></h3>
                    <button class="text-gray-500 hover:text-gray-700 text-3xl font-bold leading-none flex-shrink-0" id="modal-close" aria-label="Close video" onclick="closeVideoModal()">&times;</button>
                </div>
                <div class="p-4 flex flex-col min-h-0">
                    <div class="flex items-center justify-center bg-black rounded mb-4">
                        <video id="modal-video" controls playsinline preload="metadata" class="max-w-full max-h-[68vh] rounded">
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div class="video-details">
                        <p id="modal-description" class="text-gray-700"></p>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add event listeners
    const closeButton = document.getElementById('modal-close');

    if (closeButton) {
        closeButton.addEventListener('click', closeVideoModal);
    }

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeVideoModal();
        }
    });
}

// Open video modal
function openVideoModal(video) {
    const modal = document.getElementById('video-modal');
    const videoElement = document.getElementById('modal-video');
    const titleElement = document.getElementById('modal-title');
    const descriptionElement = document.getElementById('modal-description');

    if (!modal || !videoElement || !titleElement || !descriptionElement) return;

    // Set video source and details
    videoElement.src = video.videoUrl;
    titleElement.textContent = video.title;
    descriptionElement.textContent = video.description;

    // Show modal
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    // Play video
    videoElement.play().catch(e => {
        console.log('Video autoplay prevented:', e);
    });
}

// Close video modal
function closeVideoModal() {
    const modal = document.getElementById('video-modal');
    const videoElement = document.getElementById('modal-video');

    if (!modal || !videoElement) return;

    // Pause video
    videoElement.pause();
    videoElement.currentTime = 0;

    // Hide modal
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Lazy loading for video thumbnails
function initLazyLoading() {
    const thumbnails = document.querySelectorAll('.video-thumbnail');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            }
        });
    });
    
    thumbnails.forEach(img => {
        if (img.dataset.src) {
            imageObserver.observe(img);
        }
    });
}

// Video search functionality
function initVideoSearch() {
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search videos...';
    searchInput.className = 'video-search';
    
    const videoCategories = document.querySelector('.video-categories');
    if (videoCategories) {
        videoCategories.appendChild(searchInput);
        
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const filteredVideos = videoData.filter(video => 
                video.title.toLowerCase().includes(searchTerm) ||
                video.description.toLowerCase().includes(searchTerm)
            );
            
            displayVideos(filteredVideos);
        });
    }
}

// Initialize search functionality
document.addEventListener('DOMContentLoaded', function() {
    initLazyLoading();
    initVideoSearch();
});

// Video analytics (for future implementation)
function trackVideoPlay(videoId) {
    // This would integrate with analytics services
    console.log('Video played:', videoId);
}

function trackVideoComplete(videoId) {
    // This would integrate with analytics services
    console.log('Video completed:', videoId);
}

// Add video event listeners for analytics
document.addEventListener('DOMContentLoaded', function() {
    const videoElement = document.getElementById('modal-video');
    if (videoElement) {
        videoElement.addEventListener('play', function() {
            const videoId = this.getAttribute('src').split('/').pop();
            trackVideoPlay(videoId);
        });
        
        videoElement.addEventListener('ended', function() {
            const videoId = this.getAttribute('src').split('/').pop();
            trackVideoComplete(videoId);
        });
    }
});
