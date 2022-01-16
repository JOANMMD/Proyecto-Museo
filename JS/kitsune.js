class Kitsune {
    constructor() {
        this.masks = [];
    }
    getMasks() {
        return this.masks
    }
    setMasks(masks) {
        this.masks = masks;
    }
    initializeGallery() {
        let mask2 = new JapaneseMask("img/Kitsune.jpg", "Mascara Kitsune", "Históricamente, los zorros han sido vistos en Japón como criaturas mágicas con la capacidad de mutar de forma a su antojo. Asimismo, se les considera mensajeros de Inari, el dios sintoísta del arroz, el comercio y la prosperidad, por lo que las máscaras Kitsune son importantes en algunos festivales que involucran a este dios.");
        this.masks.push(mask2);
    }
}

let maskKitsune = new Kitsune();
maskKitsune.initializeGallery();

const maskPieces = maskKitsune.getMasks();

function showInfoClickBotom() {
    alert(maskPieces[0].getDescription())
};