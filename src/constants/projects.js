import {TAGS} from "./tags";

class Project {
    constructor(name, tags, url, desc) {
        this.name = name;
        this.tags = tags;
        this.url = url;
        this.desc = desc;
    }
}

export default [
    new Project(
        "Anime Trivia Server",
        [TAGS.BACKEND, TAGS.API, TAGS.TYPESCRIPT, TAGS.NODEJS],
        "https://github.com/Kizuru/animetrivia-server",
        "Server-side stuff to run the anime trivia website i made :3"
    ), new Project(
        "Anime Trivia Client",
        [TAGS.FRONTEND, TAGS.WEB, TAGS.JAVASCRIPT, TAGS.VUE],
        "https://github.com/Kizuru/animetrivia-client",
        "Frontend for my anime trivia website! Simple but working :)"
    ), new Project(
        "Kuromu",
        [TAGS.DISCORD_BOT, TAGS.JAVASCRIPT, TAGS.NODEJS],
        "https://github.com/Kizuru/kuromujs",
        "A one of it's kind discord music bot... I guess..."
    ), new Project(
        "HamonAPI",
        [TAGS.FULLSTACK, TAGS.WEB, TAGS.JAVASCRIPT, TAGS.NODEJS],
        "https://github.com/Kizuru/hamonapi",
        "An image-generation API with subscriptions, rate-limiting and some other stuff"
    ), new Project(
        "Itsuku",
        [TAGS.DISCORD_BOT, TAGS.JAVASCRIPT, TAGS.NODEJS],
        "https://github.com/Kizuru/itsuku",
        "A multipurpose discord bot made a long time ago... probably too long ago"
    ), new Project(
        "Arcadia.js",
        [TAGS.BACKEND, TAGS.API, TAGS.JAVASCRIPT, TAGS.NODEJS],
        "https://github.com/Kizuru/arcadia.js",
        "An unofficial module to use the (hopefully unforgotten) arcadia API!"
    )
]