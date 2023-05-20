"use strict";
class Protagonista {
    constructor() {
        this._nome = "Sung Jin Woo";
        this._hp = 100;
        this._mana = 10;
        this._xp = 0;
        this._nivel = 1;
        this._forca = 10;
        this._dano = 0;
        this._finish = new Ataque('Corte Rapido', 20);
        this._finish2 = new Ataque('Erga-se', 30);
        this._finish3 = new Ataque('Area do Monarca', 50);
        this._foto = "player1.png";
        this._dano = this._forca + (this._forca * (this._nivel / 10));
    }
    get nivel() {
        return this._nivel;
    }
    set nivel(nivel) {
        this._nivel = nivel;
    }
    get dano() {
        return this._dano;
    }
    set dano(dano) {
        this._dano = dano;
    }
    get hp() {
        return this._hp;
    }
    set hp(hp) {
        this._hp = hp;
    }
    get nome() {
        return this._nome;
    }
    set nome(nome) {
        this._nome = nome;
    }
    get foto() {
        return this._foto;
    }
    set foto(foto) {
        this._foto = foto;
    }
    get forca() {
        return this._forca;
    }
    set forca(forca) {
        this._forca = forca;
    }
    get mana() {
        return this._mana;
    }
    set mana(mana) {
        this._mana = mana;
    }
    get xp() {
        return this._xp;
    }
    set xp(xp) {
        this._xp = xp;
    }
}
class Ataque {
    constructor(nome, dano) {
        this._dano = dano;
        this._nome = nome;
    }
}
class Monstro {
    constructor(nome, hp, mana, forca, foto) {
        this._nome = nome;
        this._hp = hp;
        this._mana = mana;
        this._nivel = Math.floor(Math.random() * 10);
        this._forca = forca;
        this._foto = foto;
        this._dano = this._forca + (this._forca * (this._nivel / 10));
    }
    get nome() {
        return this._nome;
    }
    get dano() {
        return this._dano;
    }
    get foto() {
        return this._foto;
    }
    set foto(foto) {
        this._foto = foto;
    }
    get hp() {
        return this._hp;
    }
    get mana() {
        return this._mana;
    }
    get nivel() {
        return this._nivel;
    }
    get forca() {
        return this._forca;
    }
}
//===================================================================================================================
const protagonista = new Protagonista();
const nomeProta = document.querySelector('.nome');
nomeProta.textContent = protagonista.nome;
const fotoProta = document.querySelector('.fotoProta');
fotoProta.src = `./img/${protagonista.foto}`;
const nivelProta = document.querySelector('.nivel');
nivelProta.textContent = `${protagonista.nivel}`;
const forcaProta = document.querySelector('.forca');
forcaProta.textContent = `${protagonista.forca}`;
const manaProta = document.querySelector('.mana');
manaProta.textContent = `${protagonista.mana}`;
const xpProta = document.querySelector('.xp');
xpProta.textContent = `${protagonista.xp}`;
const hpProta = document.querySelector('.hp');
hpProta.textContent = `${protagonista.hp}`;
const danoProta = document.querySelector('.dano');
danoProta.textContent = `${protagonista.dano}`;
const monstro1 = new Monstro("Goblin", 70, 3, 15, 'goblin.png');
const monstro2 = new Monstro("Orc", 100, 5, 30, 'orc.png');
const monstro3 = new Monstro("Dragão", 200, 50, 20, 'dragao.png');
// Sorteio para determinar qual monstro foi escolhido
const monstros = [monstro1, monstro2, monstro3];
const indiceSorteado = Math.floor(Math.random() * monstros.length);
const monstroEscolhido = monstros[indiceSorteado];
const nomeM = document.querySelector('.nomeM');
nomeM.textContent = monstroEscolhido.nome;
const fotoM = document.querySelector('.fotoM');
fotoM.src = `./img/${monstroEscolhido.foto}`;
const nivelM = document.querySelector('.nivelM');
nivelM.textContent = `${monstroEscolhido.nivel}`;
const forcaM = document.querySelector('.forcaM');
forcaM.textContent = `${monstroEscolhido.forca}`;
const hpM = document.querySelector('.hpM');
hpM.textContent = `${monstroEscolhido.hp}`;
const manaM = document.querySelector('.manaM');
manaM.textContent = `${monstroEscolhido.mana}`;
const danoM = document.querySelector('.danoM');
danoM.textContent = `${monstroEscolhido.dano}`;
