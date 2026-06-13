const character = {
    name: "Snortleblat",
    charClass: "Swamp Beast Diplomat",
    level: 5,
    health: 100,

    updateUI: function () {
        document.getElementById('charName').innerText = this.name;
        document.getElementById('charClass').innerText = this.charClass;
        document.getElementById('charLevel').innerText = this.level;
        document.getElementById('charHealth').innerText = this.health;
    },


    attacked: function () {
        if (this.health > 0) {
            this.health -= 20;

            if (this.health <= 0) {
                this.health = 0;
                this.updateUI();
                setTimeout(() => alert(`${this.name} has died!`), 10);
            } else {
                this.updateUI();
            }
        }
    },

    levelUp: function () {
        if (this.health > 0) {
            this.level += 1;
            this.updateUI();
        } else {
            alert(`${this.name} cannot level up because they are dead.`);
        }
    }
};

window.onload = function () {
    character.updateUI();
};