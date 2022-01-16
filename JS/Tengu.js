class Tengu {
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
        let mask1 = new JapaneseMask("img/tengu.jpg", "Mascara Tengu", "Esta es probablemente la máscara tradicional más común que se puede ver en Japón. El Tengu es un tipo de ser mítico que se considera un dios sintoísta. Originalmente, se pensaba que el tengu causaba mala suerte a los humanos. Sin embargo, la imagen del tengu ahora se conoce como el protector. Generalmente, se cree que son protectores de lugares sagrados. Por eso es común ver estas máscaras en rituales religiosos o incluso como pieza decorativa en establecimientos comerciales y templos.");
        this.masks.push(mask1);


    }
}

let maskTengu = new Tengu();
maskTengu.initializeGallery();

const maskPieces = maskTengu.getMasks();

function showInfoClickBotom() {
    alert(maskPieces[0].getDescription())
};