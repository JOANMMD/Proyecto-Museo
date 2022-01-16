class Kabuki {
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
        let mask5 = new JapaneseMask("img/kabuki.jpg", "Máscara Kabuki", "El Kabuki es una rama del teatro clásico representado en forma de danza dramática. Las tramas habituales de las actuaciones de Kabuki incluyen mitos legendarios, folclore e historias en Japón. Se trata de criaturas mágicas, dioses, espíritus y gente común. Se realizan actuaciones especiales según la época del año.");
        this.masks.push(mask5);
    }
}

let maskKabuki = new Kabuki();
maskKabuki.initializeGallery();

const maskPieces = maskKabuki.getMasks();

function showInfoClickBotom() {
    alert(maskPieces[0].getDescription())
};