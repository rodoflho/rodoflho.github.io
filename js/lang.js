function setLanguage(lang) {
    localStorage.setItem('language', lang);
    getLanguage()
    translateDOM()
}

var language; 
function getLanguage() {
    (localStorage.getItem('language') == null) ? setLanguage('fr') : false;
    $.ajax({ 
        url:  '/language/' +  localStorage.getItem('language') + '.json', 
        dataType: 'json', async: false, dataType: 'json', 
        success: function (lang) {
            language = lang
        }
    });
}
function translateDOM(){
    $.each(language, function(index, element) {
        $('.' + index).text(element);
    });
}