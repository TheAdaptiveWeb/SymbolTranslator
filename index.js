
addEventListener('click', (e) => {
    console.log('Click!', e);
    e = e || window.event;

    let target = e.target || e.srcElement;
    let text = target.textContent.trim() || target.innerText.trim();

    if (text === '') return;
    if (text !== target.innerHTML) return;

    let words = text.replace(/\./g, '').toLowerCase().split(' ');

    let out = '';

    let completedWords = [];

    words.forEach((word) => {
        out += '<div style="display: inline-block; text-align: center"><div style="width: 50px; height: 50px; background-size: cover;" class="symboltranslator-' + word + '"></div><div>' + word + '</div></div>';

        if (completedWords.indexOf(word) === -1) {
            completedWords.push(word);

            aw.request('https://www.opensymbols.org/api/v1/symbols/search?q=' + word).then(response => {
                if (response.length === 0) return;

                let imageUrl = response[0].image_url;
                let els = document.getElementsByClassName('symboltranslator-' + word);
                for (let i = 0; i < els.length; i++) {
                    els[i].style.backgroundImage = 'url(' + imageUrl + ')';
                }
            })
        }
    });

    target.innerHTML = out;
});