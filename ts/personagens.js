"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Monstro = exports.Protagonista = void 0;
class Protagonista {
    constructor() {
        this._nome = "Sung Jin Woo";
        this._hp = 100;
        this._mana = 10;
        this._xp = 0;
        this._nivel = 1;
        this._forca = 10;
        this._finish = new Ataque('Corte Rapido', 20);
        this._finish2 = new Ataque('Erga-se', 30);
        this._finish3 = new Ataque('Area do Monarca', 50);
    }
    atacar(mostro) {
        let dano = this._forca * Math.floor(Math.random() * 3);
        mostro.receberDano(dano);
    }
    receberDano(dano) {
        this._hp -= dano;
    }
}
exports.Protagonista = Protagonista;
class Ataque {
    constructor(nome, dano) {
        this._dano = dano;
        this._nome = nome;
    }
}
class Monstro {
    constructor() {
        this._nome = "Goblin";
        this._hp = 70;
        this._mana = 3;
        this._nivel = 1;
        this._forca = 4;
        this._finish = Math.floor(Math.random() * (30 - 15 + 1)) + 15;
    }
    receberDano(dano) {
        this._hp -= dano;
    }
    atacar(protagonista) {
        let dano = this._forca * Math.floor(Math.random() * 3);
        protagonista.receberDano(dano);
    }
}
exports.Monstro = Monstro;
