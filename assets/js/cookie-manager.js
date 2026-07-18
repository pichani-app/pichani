document.addEventListener('DOMContentLoaded', () => {
    const saveBtn = document.getElementById('save-cookie-settings');
    
    if (saveBtn) {
        saveBtn.addEventListener('click', () => {
            const settings = {
                essential: true, // Always true
                performance: document.getElementById('cookie-performance').checked,
                functional: document.getElementById('cookie-functional').checked,
                targeting: document.getElementById('cookie-targeting').checked
            };
            
            // In a real app, you'd save this to localStorage or a cookie
            console.log('Saving Cookie Settings:', settings);
            localStorage.setItem('cookie_preferences', JSON.stringify(settings));
            
            // Visual feedback
            const originalText = saveBtn.textContent;
            saveBtn.textContent = 'Settings Saved!';
            saveBtn.style.backgroundColor = '#2d3436';
            
            setTimeout(() => {
                saveBtn.textContent = originalText;
                saveBtn.style.backgroundColor = '';
            }, 2000);
        });
        
        // Load saved settings if they exist
        const savedSettings = JSON.parse(localStorage.getItem('cookie_preferences'));
        if (savedSettings) {
            if (document.getElementById('cookie-performance')) 
                document.getElementById('cookie-performance').checked = savedSettings.performance;
            if (document.getElementById('cookie-functional')) 
                document.getElementById('cookie-functional').checked = savedSettings.functional;
            if (document.getElementById('cookie-targeting')) 
                document.getElementById('cookie-targeting').checked = savedSettings.targeting;
        }
    }
});
