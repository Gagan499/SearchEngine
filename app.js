document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const clearBtn = document.getElementById('clear-btn');
    const historyList = document.getElementById('history-list');

    const loadHistory = () => {
        const history = JSON.parse(localStorage.getItem('searchHistory')) || [];
        historyList.innerHTML = ''; 
        history.forEach((item) => {
            const li = document.createElement('li');
            li.textContent = item;
            historyList.appendChild(li);
        });
    };

    const saveHistory = (query) => {
        const history = JSON.parse(localStorage.getItem('searchHistory')) || [];
        history.push(query); 
        localStorage.setItem('searchHistory', JSON.stringify(history)); 
    };

    const clearHistory = () => {
        localStorage.removeItem('searchHistory'); 
        loadHistory(); 
    };

    searchBtn.addEventListener('click', () => {
        const query = searchInput.value.trim();
        if (query) {
            saveHistory(query); 
            loadHistory(); 
            searchInput.value = ''; 
        }
    });

    clearBtn.addEventListener('click', clearHistory);
    loadHistory();
});
