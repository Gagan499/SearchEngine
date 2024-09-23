document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const clearBtn = document.getElementById('clear-btn');
    const historyList = document.getElementById('history-list');

    // Function to load search history from localStorage and display it
    const loadHistory = () => {
        const history = JSON.parse(localStorage.getItem('searchHistory')) || [];
        historyList.innerHTML = ''; // Clear the list before adding new items

        // Loop through history and display each search query
        history.forEach((item) => {
            const li = document.createElement('li');
            li.textContent = item;
            historyList.appendChild(li);
        });
    };

    // Function to save a new search query in localStorage
    const saveHistory = (query) => {
        const history = JSON.parse(localStorage.getItem('searchHistory')) || [];
        history.push(query); // Add new search query to history
        localStorage.setItem('searchHistory', JSON.stringify(history)); // Save updated history
    };

    // Function to clear the search history
    const clearHistory = () => {
        localStorage.removeItem('searchHistory'); // Remove history from localStorage
        loadHistory(); // Reload the history to update the UI
    };

    // Event listener for the search button
    searchBtn.addEventListener('click', () => {
        const query = searchInput.value.trim(); // Get the search input value
        if (query) {
            saveHistory(query); // Save the search query
            loadHistory(); // Update the search history display
            searchInput.value = ''; // Clear the input field
        }
    });

    // Event listener for the clear button
    clearBtn.addEventListener('click', clearHistory);

    // Load history when the page is first loaded
    loadHistory();
});
