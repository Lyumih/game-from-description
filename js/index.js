var app = new Vue({
    el: "#app",
    data: {
        description: "Игра жанр [3-в-ряд]",
        interfaces: [{
            name: "Game",
            word: "Игра"
        }, {
            name: "Genre",
            word: "Жанр"
        }, {
            name: "Menu",
            word: "Меню"
        }, {
            name: "World",
            word: "Мир"
        }, {
            name: "Item",
            word: "Предмет"
        }, {
            name: "Hero",
            word: "Герой"
        }, {
            name: "Enemy",
            word: "Враг"
        }, {
            name: "Skill",
            word: "Умение"
        }, {
            name: "Inventory",
            word: "Инвентарь"
        }, ],
    },
    computed: {
        words() {
            return this.description.split(" ")
        },
        filtredWords() {
            return this.words.filter(word => this.interfaces.map(e => e.word.toLowerCase()).includes(word.toLowerCase()))
        },
        foundedInterfaces() {
            return this.filtredWords.map(e => {
                return this.interfaces.filter(interface => interface.word.toLowerCase().includes(e.toLowerCase()))
            });
        },
        pseudocode() {
            return this.foundedInterfaces.map(e => {
                return e[0].word
            }).join("()->");
        },
        code() {
            return this.foundedInterfaces.map(e => {
                return e[0].name
            }).join("()->") + "()";
        },
        pseudoWords() {
            return this.words.join("()->") + "()"
        }

    },
})