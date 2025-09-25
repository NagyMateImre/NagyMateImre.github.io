const form = document.querySelector('.filter-sidebar form');
const cards = document.querySelectorAll('.property-card');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const hely = document.getElementById('location').value.toLowerCase();
    const arMin = parseInt(document.getElementById('price-min').value) || 0;
    const arMax = parseInt(document.getElementById('price-max').value) || Infinity;
    const elhely = document.getElementById('localization').value;
    const tipus = document.getElementById('type').value;
    const szobak = document.getElementById('rooms').value;

    function removeAccents(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

    cards.forEach(card => {
        const cardHely = removeAccents(card.dataset.hely?.toLowerCase() || "");
        const cardAr = parseInt(card.dataset.ar) || 0;
        const cardElhely = card.dataset.elhely || "";
        const cardTipus = card.dataset.tipus || "";
        const cardSzobak = card.dataset.szobak || "";

        let show = true;

        const helyClean = removeAccents(hely);

        if(hely && !cardHely.includes(helyClean)) show = false;

        if(cardAr < arMin || cardAr > arMax) show = false;

        if(elhely !== "Mindegy" && cardElhely !== elhely) show = false;

        if(tipus !== "Mindegy" && cardTipus !== tipus) show = false;

        if(szobak !== "Mindegy" && cardSzobak !== szobak) show = false;

        card.style.display = show ? "block" : "none";
    });
});
const clearBtn = document.getElementById('szuroTorles');

clearBtn.addEventListener('click', (e) => {
    e.preventDefault();
    form.reset();
    cards.forEach(card => {
        card.style.display = 'block';
    });
});