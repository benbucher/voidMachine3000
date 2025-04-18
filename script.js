const coinSounds = [
    new Audio("8bit-coin-1.mp3"),
    new Audio("8bit-coin-2.mp3"),
    new Audio("8bit-coin-3.mp3")
];
const vendSounds = [
    new Audio("8bit-vend-1.mp3"),
    new Audio("8bit-vend-2.mp3"),
    new Audio("8bit-vend-3.mp3")
];

let credit = 0;

function insererPiece() {
    const sound = coinSounds[Math.floor(Math.random() * coinSounds.length)];
    sound.play();
    credit++;
    document.getElementById("credit-display").innerText = `Crédit: ${credit}`;
}

function acheter(element) {
    if (credit <= 0) {
        document.getElementById("message").innerText = "Veuillez insérer une pièce avant d'acheter.";
        return;
    }

    const machine = document.getElementById("machine");
    const presentation = document.getElementById("presentation");
    const sound = vendSounds[Math.floor(Math.random() * vendSounds.length)];

    sound.play();
    const delivered = document.getElementById("delivered-item");
    delivered.innerText = element.innerText;
    delivered.style.display = "flex";
    delivered.style.opacity = "0";
    delivered.style.transform = "translate(-50%, -100px)";
    delivered.style.animation = "none";
    delivered.offsetHeight;
    delivered.style.animation = "dropIn 0.6s ease-out forwards";
    machine.style.animation = "shake 0.3s ease-in-out";

    const deceptions = [
        "Tu pensais vraiment que ça changerait quelque chose ?",
        "Analyse de ta décision : incohérente mais humaine.",
        "Ce n'est pas recyclable.",
        "Produit expiré avant d'exister.",
        "Cette clé n'ouvre rien, mais elle ferme un peu.",
        "Ce ticket donne accès à une attente.",
        "Décevant, non ?"
    ];
    document.getElementById("message").innerText = deceptions[Math.floor(Math.random() * deceptions.length)];

    machine.style.animation = "";

    credit--;
    document.getElementById("credit-display").innerText = `Crédit: ${credit}`;
}

// Make functions globally available
window.insererPiece = insererPiece;
window.acheter = acheter;