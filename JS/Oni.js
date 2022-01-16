class Oni {
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

        let mask4 = new JapaneseMask("img/Oni y Hannya.jpg", "Mascara de Oni", "El Oni es un demonio comúnmente conocido en Japón. Se caracteriza por una cara de color rojo oscuro, dos cuernos, dientes afilados y ojos amarillos. Según los cuentos populares, el Oni es un espíritu invisible conocido por causar mala fortuna, desastres, guerras y enfermedades. Toman la forma de un ogro o un duende.");
        this.masks.push(mask4);
    }
}

let maskOni = new Oni();
maskOni.initializeGallery();

const maskPieces = maskOni.getMasks();

function showInfoClickBotom() {
    alert(maskPieces[0].getDescription())
};