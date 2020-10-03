class Tag {
    constructor(name, id, variant) {
        this.name = name;
        this.id = id;
        this.variant = variant;
    }
}

export const TAGS = {
    WEB: new Tag("Web", 0, "dark"),
    DISCORD_BOT: new Tag("Discord Bot", 1, "dark"),
    API: new Tag("API", 2, "dark"),

    JAVASCRIPT: new Tag("Javascript", 4, "primary"),
    TYPESCRIPT: new Tag("Typescript", 5, "primary"),
    JAVA: new Tag("Java", 6, "primary"),
    RUST: new Tag("Rust", 7, "primary"),
    GO: new Tag("Golang", 8, "primary"),

    NODEJS: new Tag("Node JS", 9, "warning"),
    VUE: new Tag("Vue JS", 10, "warning"),
    REACT: new Tag("React", 11, "warning"),

    FRONTEND: new Tag("Front-end", 14, "success"),
    BACKEND: new Tag("Back-end", 15, "success"),
    FULLSTACK: new Tag("Full stack", 16, "success")
}