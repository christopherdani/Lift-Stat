// Model representing a single template

const templates = [];

module.exports = class Template {
    constructor(name) {
        this.name = name;
    }

    save() {
        templates.push(this);
    }

    static fetchAll() {
        return this.templates;
    }
}