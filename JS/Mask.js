class JapaneseMask {
    constructor(picture, name, description) {

        this.picture = picture;
        this.name = name;
        this.description = description;

    }
    getPicture() {
        return this.picture;
    }
    setPicture(picture) {
        this.picture = picture
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name
    }
    getDescription() {
        return this.description
    }
    setDescription(description) {
        this.description = description
    }
}