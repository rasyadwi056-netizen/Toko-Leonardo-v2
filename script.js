const form = document.getElementById('topupForm');
const successMsg = document.getElementById('successMsg');
const gameSelect = document.getElementById('gameSelect');
const nominalSelect = document.getElementById('nominalSelect');

const nominalData = {
    "mobile-legends": ["50 Diamond", "100 Diamond", "200 Diamond"],
    "roblox": ["50 Robux", "100 Robux", "200 Robux"],
    "genshin-impact": ["50 Genesis Crystals", "100 Genesis Crystals", "200 Genesis Crystals"],
    "pubg": ["50 UC", "100 UC", "200 UC"]
};

// Update nominal otomatis sesuai game
gameSelect.addEventListener('change', function(){
    const selectedGame = this.value;
    nominalSelect.innerHTML = '<option value="">Pilih Nominal</option>';
    if(nominalData[selectedGame]){
        nominalData[selectedGame].forEach(nominal => {
            const option = document.createElement('option');
            option.value = nominal;
            option.textContent = nominal;
            nominalSelect.appendChild(option);
        });
    }
});

// Submit form
form.addEventListener('submit', function(e){
    e.preventDefault();
    successMsg.textContent = `Top-Up berhasil! Terima kasih sudah menggunakan Top-Up Leonardo 🎮
