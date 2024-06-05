document.addEventListener('DOMContentLoaded', () => {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxtgNw3y8B8WBbqhvCpRrQlGjFrY6_clUO1-1GTtTMXessYl_LF7-vOzcIWi_EFbWAm/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById('newsletter-success-msg')
    
    if (!form.dataset.listenerAdded) {    
        form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                msg.innerHTML = 'Έχετε εγγραφεί επιτυχώς!'
                setTimeout(function(){
                    msg.innerHTML = ''
                },5000)
                form.reset()
            })
            .catch(error => console.error('Error!', error.message))
    })
    form.dataset.listenerAdded = 'true';
}
});