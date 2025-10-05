    const form = document.querySelector('.filter-sidebar form');
    const card = document.querySelectorAll('.property-card');
    const arMin = document.getElementById('price-min');
    const arMax = document.getElementById('price-max');
    const Terulet = document.getElementById('Terulet');

if(card.length > 0){
    let TeruletMin = Infinity;
    card.forEach(card => {
        const cardTeruletMin = parseInt(card.dataset.Terulet);
        if(cardTeruletMin < TeruletMin){
            TeruletMin = cardTeruletMin;
        }
    });
    Terulet.setAttribute('min', TeruletMin);
}

if(card.length > 0){
    let TeruletMax = 0;
    card.forEach(card => {
        const cardTeruletMax = parseInt(card.dataset.Terulet);
        if(cardTeruletMax > TeruletMax){
            TeruletMax = cardTeruletMax;
        }
    });
    Terulet.setAttribute('max', TeruletMax);
}

if (card.length > 0) {
        let lowPrice = Infinity;
        card.forEach(card => {
            const cardPrice = parseInt(card.dataset.ar);
            if (cardPrice < lowPrice) {
                lowPrice = cardPrice;
            }
        });
        arMin.setAttribute('min', lowPrice);
        arMax.setAttribute('min', lowPrice);
        console.log(`A minimális ár a listában: ${lowPrice}. A beviteli mező min attribútuma beállítva.`);
    }

if (card.length > 0) {
        let MaxPrice = 0;
        card.forEach(card => {
            const cardPrice = parseInt(card.dataset.ar);
            if (cardPrice > MaxPrice) {
                MaxPrice = cardPrice;
            }
        });
        arMax.setAttribute('max', MaxPrice);
        arMin.setAttribute('max', MaxPrice);
        console.log(`A minimális ár a listában: ${MaxPrice}. A beviteli mező min attribútuma beállítva.`);
    }

function MinP() {
    const arMinInput = document.getElementById('price-min');
    const minPriceTextElement = document.getElementById('minPriceTEXT');
    minPriceTextElement.textContent = arMinInput.value + " Ft";
}

function MaxP() {
    const arMaxInput = document.getElementById('price-max');
    const maxPriceTextElement = document.getElementById('maxPriceTEXT');
    maxPriceTextElement.textContent = arMaxInput.value + " Ft";
}

function TeruletT() {
    const TeruletKiiras = document.getElementById('Terulet');
    const TeruletText = document.getElementById('TeruletKI');
    TeruletText.textContent = TeruletKiiras.value + " m²";
}

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        function toNormalForm(str) {
            return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        }

        const hely = document.getElementById('location').value.toLowerCase();
        const arMaxi = parseInt(arMax.value);
        const arMini = parseInt(arMin.value);
        const elhely = document.getElementById('localization').value;
        const tipus = document.getElementById('type').value;
        const szobak = document.getElementById('rooms').value;
        const Teruleti = parseInt(Terulet_BE.value);


        card.forEach(card => {
            const cardHely = toNormalForm(card.dataset.hely?.toLowerCase() || "");
            const cardAr = parseInt(card.dataset.ar) || 0;
            const cardElhely = card.dataset.elhely || "";
            const cardTipus = card.dataset.tipus || "";
            const cardSzobak = card.dataset.szobak || "";
            const cardTerulet = card.dataset.Terulet || 0;

            let show = true;

            const helyClean = toNormalForm(hely);

            if(helyClean !== cardHely){
                show = false
            }

            if (helyClean == ""){
                show = true
            }
            
            if(cardAr < arMini || cardAr > arMaxi){
                show = false
            }

            if(elhely !== "Mindegy" && cardElhely !== elhely){
                show = false
            }
            
            if(tipus !== "Mindegy" && cardTipus !== tipus){
                show = false
            }
            
            if(szobak !== "Mindegy" && cardSzobak !== szobak){
                show = false
            }

            if(cardTerulet < Teruleti || cardTerulet > Teruleti){
                show = false
            }

            card.style.display = show ? "block" : "none";
        });
    });

    const clearBtn = document.getElementById('szuroTorles');
    
    clearBtn.addEventListener('click', (e) => {
        e.preventDefault();
        form.reset();
        card.forEach(card => {
            card.style.display = 'block';
        });
    });