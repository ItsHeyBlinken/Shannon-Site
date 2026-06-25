// Shannon's Softball Portfolio - Statistics Dashboard

// Statistics data
const statsData = {
    batting: {
        current: {
            avg: 0.385,
            obp: 0.450,
            slg: 0.620,
            hr: 15,
            rbi: 42,
            sb: 8,
            ab: 120,
            hits: 46,
            runs: 38
        },
        previous: {
            avg: 0.342,
            obp: 0.398,
            slg: 0.580,
            hr: 12,
            rbi: 35,
            sb: 6,
            ab: 110,
            hits: 38,
            runs: 32
        }
    },
    fielding: {
        current: {
            fpct: 0.965,
            po: 45,
            a: 38,
            e: 3,
            tc: 86
        },
        previous: {
            fpct: 0.952,
            po: 42,
            a: 35,
            e: 4,
            tc: 81
        }
    },
    pitching: {
        current: {
            era: 2.85,
            wl: '8-3',
            k: 45,
            whip: 1.25,
            ip: 65.2,
            bb: 18,
            h: 64
        },
        previous: {
            era: 3.20,
            wl: '6-4',
            k: 38,
            whip: 1.35,
            ip: 58.1,
            bb: 22,
            h: 57
        }
    }
};

// Initialize statistics dashboard
document.addEventListener('DOMContentLoaded', function() {
    try {
        initStatsTabs();
        updateStatsDisplay('batting');
        createProgressBars();
    } catch (error) {
        console.error('Error initializing stats functionality:', error);
    }
});

// Initialize stats tabs
function initStatsTabs() {
    const tabButtons = document.querySelectorAll('[data-tab]');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');

            // Remove active styling from all buttons
            tabButtons.forEach(btn => {
                btn.classList.remove('bg-primary', 'text-white');
                btn.classList.add('text-gray-700', 'hover:bg-white');
            });

            // Remove active class from all tab contents
            tabContents.forEach(content => {
                content.classList.remove('active');
                content.classList.add('hidden');
            });

            // Add active styling to clicked button
            this.classList.remove('text-gray-700', 'hover:bg-white');
            this.classList.add('bg-primary', 'text-white');

            // Show corresponding content
            const targetContent = document.getElementById(`${targetTab}-stats`);
            if (targetContent) {
                targetContent.classList.remove('hidden');
                targetContent.classList.add('active');
            }

            // Update stats display
            updateStatsDisplay(targetTab);
        });
    });
}

// Update stats display
function updateStatsDisplay(category) {
    const currentStats = statsData[category].current;
    const previousStats = statsData[category].previous;
    
    // Update stat values
    const statItems = document.querySelectorAll(`#${category}-stats .stat-item`);
    statItems.forEach((item, index) => {
        const statKeys = Object.keys(currentStats);
        if (index < statKeys.length) {
            const stat = statKeys[index];
            const statElement = item.querySelector('.stat-value');
            if (statElement) {
                const value = currentStats[stat];
                statElement.textContent = formatStatValue(stat, value);
                
                // Add improvement indicator
                const improvement = calculateImprovement(previousStats[stat], currentStats[stat]);
                if (improvement !== 0) {
                    addImprovementIndicator(statElement, improvement);
                }
            }
        }
    });
    
    // Update progress bars
    updateProgressBars(category, currentStats, previousStats);
}

// Format stat values for display
function formatStatValue(stat, value) {
    if (typeof value === 'number') {
        if (stat.includes('avg') || stat.includes('obp') || stat.includes('slg') || stat.includes('fpct') || stat.includes('era') || stat.includes('whip')) {
            return value.toFixed(3);
        } else if (stat.includes('ip')) {
            return value.toFixed(1);
        } else {
            return value.toString();
        }
    }
    return value.toString();
}

// Calculate improvement percentage
function calculateImprovement(previous, current) {
    if (typeof previous === 'number' && typeof current === 'number') {
        if (previous === 0) return 0;
        return ((current - previous) / previous) * 100;
    }
    return 0;
}

// Add improvement indicator
function addImprovementIndicator(element, improvement) {
    const indicator = document.createElement('span');
    indicator.className = 'improvement-indicator';
    
    if (improvement > 0) {
        indicator.textContent = `+${improvement.toFixed(1)}%`;
        indicator.style.color = 'var(--success-green)';
    } else if (improvement < 0) {
        indicator.textContent = `${improvement.toFixed(1)}%`;
        indicator.style.color = 'var(--warning-yellow)';
    }
    
    element.appendChild(indicator);
}

// Create progress bars for visual representation
function createProgressBars() {
    const statItems = document.querySelectorAll('.stats .stat-item');
    
    statItems.forEach(item => {
        const valueElement = item.querySelector('.stat-value');
        const labelElement = item.querySelector('.stat-label');
        
        if (valueElement && labelElement) {
            const value = parseFloat(valueElement.textContent);
            const maxValue = getMaxValueForStat(labelElement.textContent);
            
            if (maxValue > 0) {
                const percentage = (value / maxValue) * 100;
                createProgressBar(item, percentage);
            }
        }
    });
}

// Get maximum value for progress bar calculation
function getMaxValueForStat(statLabel) {
    const maxValues = {
        'Batting Average': 0.500,
        'On-Base Percentage': 0.500,
        'Slugging Percentage': 1.000,
        'Home Runs': 30,
        'RBI': 100,
        'Stolen Bases': 50,
        'Fielding Percentage': 1.000,
        'Putouts': 100,
        'Assists': 100,
        'Errors': 20,
        'ERA': 6.00,
        'Strikeouts': 200,
        'WHIP': 2.00
    };
    
    return maxValues[statLabel] || 0;
}

// Create progress bar element
function createProgressBar(container, percentage) {
    const progressContainer = document.createElement('div');
    progressContainer.className = 'progress-container';
    progressContainer.style.cssText = `
        width: 100%;
        height: 4px;
        background-color: var(--accent-color);
        border-radius: 2px;
        margin-top: 0.5rem;
        overflow: hidden;
    `;
    
    const progressBar = document.createElement('div');
    progressBar.className = 'progress-bar';
    progressBar.style.cssText = `
        height: 100%;
        width: ${Math.min(percentage, 100)}%;
        background: linear-gradient(90deg, var(--softball-orange), var(--primary-color));
        border-radius: 2px;
        transition: width 0.8s ease;
    `;
    
    progressContainer.appendChild(progressBar);
    container.appendChild(progressContainer);
}

// Update progress bars
function updateProgressBars(category, currentStats, previousStats) {
    const statItems = document.querySelectorAll(`#${category}-stats .stat-item`);
    
    statItems.forEach(item => {
        const progressBar = item.querySelector('.progress-bar');
        if (progressBar) {
            const valueElement = item.querySelector('.stat-value');
            const labelElement = item.querySelector('.stat-label');
            
            if (valueElement && labelElement) {
                const value = parseFloat(valueElement.textContent);
                const maxValue = getMaxValueForStat(labelElement.textContent);
                
                if (maxValue > 0) {
                    const percentage = (value / maxValue) * 100;
                    progressBar.style.width = `${Math.min(percentage, 100)}%`;
                }
            }
        }
    });
}

// Season comparison functionality
function initSeasonComparison() {
    const comparisonToggle = document.createElement('button');
    comparisonToggle.className = 'comparison-toggle btn btn-secondary';
    comparisonToggle.textContent = 'Show Season Comparison';
    
    const statsContainer = document.querySelector('.stats-display');
    if (statsContainer) {
        statsContainer.insertBefore(comparisonToggle, statsContainer.firstChild);
        
        comparisonToggle.addEventListener('click', function() {
            toggleSeasonComparison();
        });
    }
}

// Toggle season comparison view
function toggleSeasonComparison() {
    const isShowingComparison = document.querySelector('.comparison-view');
    
    if (isShowingComparison) {
        hideSeasonComparison();
    } else {
        showSeasonComparison();
    }
}

// Show season comparison
function showSeasonComparison() {
    const currentTab = document.querySelector('.tab-btn.active');
    const category = currentTab.getAttribute('data-tab');
    
    const currentStats = statsData[category].current;
    const previousStats = statsData[category].previous;
    
    // Create comparison view
    const comparisonView = document.createElement('div');
    comparisonView.className = 'comparison-view';
    comparisonView.innerHTML = `
        <h4>Season Comparison</h4>
        <div class="comparison-grid">
            ${Object.keys(currentStats).map(stat => `
                <div class="comparison-item">
                    <div class="stat-label">${formatStatLabel(stat)}</div>
                    <div class="stat-values">
                        <span class="current-value">${formatStatValue(stat, currentStats[stat])}</span>
                        <span class="previous-value">${formatStatValue(stat, previousStats[stat])}</span>
                    </div>
                    <div class="improvement">
                        ${calculateImprovement(previousStats[stat], currentStats[stat]) > 0 ? '+' : ''}${calculateImprovement(previousStats[stat], currentStats[stat]).toFixed(1)}%
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    
    const statsDisplay = document.querySelector('.stats-display');
    statsDisplay.appendChild(comparisonView);
    
    // Update button text
    const toggleButton = document.querySelector('.comparison-toggle');
    toggleButton.textContent = 'Hide Season Comparison';
}

// Hide season comparison
function hideSeasonComparison() {
    const comparisonView = document.querySelector('.comparison-view');
    if (comparisonView) {
        comparisonView.remove();
    }
    
    // Update button text
    const toggleButton = document.querySelector('.comparison-toggle');
    toggleButton.textContent = 'Show Season Comparison';
}

// Format stat labels for display
function formatStatLabel(stat) {
    const labels = {
        'avg': 'Batting Average',
        'obp': 'On-Base Percentage',
        'slg': 'Slugging Percentage',
        'hr': 'Home Runs',
        'rbi': 'RBI',
        'sb': 'Stolen Bases',
        'ab': 'At Bats',
        'hits': 'Hits',
        'runs': 'Runs',
        'fpct': 'Fielding Percentage',
        'po': 'Putouts',
        'a': 'Assists',
        'e': 'Errors',
        'tc': 'Total Chances',
        'era': 'ERA',
        'wl': 'Wins-Losses',
        'k': 'Strikeouts',
        'whip': 'WHIP',
        'ip': 'Innings Pitched',
        'bb': 'Walks',
        'h': 'Hits Allowed'
    };
    
    return labels[stat] || stat;
}

// Initialize season comparison
document.addEventListener('DOMContentLoaded', function() {
    initSeasonComparison();
});
