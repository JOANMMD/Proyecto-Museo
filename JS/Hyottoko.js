class Hyottoko {
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
        let mask3 = new JapaneseMask("img/Hyottoko.jpg", "Máscara de Hyottoko", "Tanto la máscara de Hyottoko como la de Okame, son máscaras tradicionales diseñadas como persona. El Hyottoko es un personaje cómico basado en un mito originario de la prefectura de Iwate. Según la historia, un niño con cara extraña tiene la habilidad de hacer oro. Debido a esto, las máscaras hechas con la imagen de su rostro se colocan dentro de las casas y se cree que traen buena fortuna");
        this.masks.push(mask3);
    }
}

let maskHyottoko = new Hyottoko();
maskHyottoko.initializeGallery();

const maskPieces = maskHyottoko.getMasks();

function showInfoClickBotom() {
    alert(maskPieces[0].getDescription())
};