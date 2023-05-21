"use strict";
class Protagonista {
    constructor() {
        this._nome = "Sung Jin Woo";
        this._hp = 100;
        this._mana = 10;
        this._xp = 0;
        this._nivel = 1;
        this._forca = 20;
        this._dano = 0;
        this._finish = new Ataque('Corte Rapido', 30);
        this._finish2 = new Ataque('Erga-se', 50);
        this._finish3 = new Ataque('Area do Monarca', 90);
        this._foto = "player1.png";
        this._dano = this._forca + (this._forca * (this._nivel / 5));
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
    atacar(monstro) {
        console.log(`${this._nome} atacou ${monstro.nome}!`);
        this._hp += Math.floor(Math.random() * this._nivel);
        this._forca += Math.floor(Math.random() * ((this._forca * this._nivel) / 10));
        const dano = this._forca + (this._forca * (this._nivel / 5));
        monstro.receberDano(dano);
    }
    receberDano(dano) {
        this._hp -= dano;
        this._mana += Math.floor(Math.random() * 10);
        console.log(`${this._nome} recebeu ${dano} de dano!`);
        if (this._hp <= 0) {
            console.log(`${this._nome} foi derrotado!`);
        }
    }
    usarFinisher1(monstro) {
        if (this._mana >= 3) {
            console.log(`${this._nome} usou ${this._finish.nome}!`);
            const dano = this._finish.dano;
            monstro.receberDano(dano);
            this._mana -= 3;
        }
    }
    usarFinisher2(monstro) {
        if (this._mana >= 6) {
            console.log(`${this._nome} usou ${this._finish2.nome}!`);
            const dano = this._finish2.dano;
            monstro.receberDano(dano);
            this._mana -= 6;
        }
    }
    usarFinisher3(monstro) {
        if (this._mana >= 9) {
            console.log(`${this._nome} usou ${this._finish3.nome}!`);
            const dano = this._finish3.dano;
            monstro.receberDano(dano);
            this._mana -= 9;
        }
    }
    ganharXP(xp) {
        this._xp += xp;
        console.log(`${this._nome} ganhou ${xp} de XP!`);
        const xpNecessario = this.getXPNecessarioParaProximoNivel();
        if (this._xp >= xpNecessario) {
            this.subirDeNivel();
        }
    }
    getXPNecessarioParaProximoNivel() {
        return this._nivel * 10;
    }
    subirDeNivel() {
        this._nivel++;
        this._hp += 50;
        console.log(`${this._nome} subiu para o nível ${this._nivel}!`);
    }
}
class Ataque {
    constructor(nome, dano) {
        this._dano = dano;
        this._nome = nome;
    }
    get nome() {
        return this._nome;
    }
    set nome(nome) {
        this._nome = nome;
    }
    get dano() {
        return this._dano;
    }
    set dano(dano) {
        this._dano = dano;
    }
}
class Monstro {
    constructor(nome, hp, mana, prioridade, foto) {
        this._nome = nome;
        this._mana = mana;
        this._nivel = Math.floor(Math.random() * 9) + 1;
        this._forca = (this._nivel * prioridade) / 5;
        this._foto = foto;
        this._dano = this._forca + (this._forca * (this._mana / 1000));
        this._hp = hp + (hp * this._nivel / 100);
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
    atacar(protagonista) {
        console.log(`${this._nome} atacou ${protagonista.nome}!`);
        const dano = this._dano;
        this._mana -= 5;
        protagonista.receberDano(dano);
    }
    receberDano(dano) {
        this._hp -= dano;
        this._mana += Math.floor(Math.random() * 5);
        console.log(`${this._nome} recebeu ${dano} de dano!`);
        if (this._hp <= 0) {
            console.log(`${this._nome} foi derrotado!`);
        }
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
const monstro1 = new Monstro("Goblin", 70, 10, 10, 'goblin.png');
const monstro2 = new Monstro("Orc", 100, 30, 20, 'orc.png');
const monstro3 = new Monstro("Dragão", 200, 50, 30, 'dragao.png');
const monstros = [monstro1, monstro2, monstro3];
let monstroEscolhido = null;
do {
    let indiceSorteado = Math.floor(Math.random() * monstros.length);
    monstroEscolhido = monstros[indiceSorteado];
} while (monstroEscolhido.hp <= 0);
const nomeM = document.querySelector('.nomeM');
nomeM.textContent = monstroEscolhido.nome;
const fotoM = document.querySelector('.fotoM');
fotoM.src = `./img/${monstroEscolhido.foto}`;
const nivelM = document.querySelector('.nivelM');
nivelM.textContent = `${monstroEscolhido.nivel}`;
const forcaM = document.querySelector('.forcaM');
forcaM.textContent = `${monstroEscolhido.forca.toFixed(0)}`;
const hpM = document.querySelector('.hpM');
hpM.textContent = `${monstroEscolhido.hp}`;
const manaM = document.querySelector('.manaM');
manaM.textContent = `${monstroEscolhido.mana}`;
const danoM = document.querySelector('.danoM');
danoM.textContent = `${monstroEscolhido.dano.toFixed(0)}`;
atualizarEstatisticasNaTela();
function atq1() {
    if (monstroEscolhido) {
        protagonista.atacar(monstroEscolhido);
        if (monstroEscolhido.hp <= 0) {
            const xpGanho = monstroEscolhido.nivel * 5;
            protagonista.ganharXP(xpGanho);
        }
        else {
            monstroEscolhido.atacar(protagonista);
        }
        atualizarEstatisticasNaTela();
    }
}
function atq2() {
    if (monstroEscolhido) {
        protagonista.usarFinisher1(monstroEscolhido);
        if (monstroEscolhido.hp <= 0) {
            const xpGanho = monstroEscolhido.nivel * 3;
            protagonista.ganharXP(xpGanho);
        }
        else {
            monstroEscolhido.atacar(protagonista);
        }
    }
    atualizarEstatisticasNaTela();
}
function atq3() {
    if (monstroEscolhido) {
        protagonista.usarFinisher2(monstroEscolhido);
        if (monstroEscolhido.hp <= 0) {
            const xpGanho = monstroEscolhido.nivel * 3;
            protagonista.ganharXP(xpGanho);
        }
        else {
            monstroEscolhido.atacar(protagonista);
        }
    }
    atualizarEstatisticasNaTela();
}
function atq4() {
    if (monstroEscolhido) {
        protagonista.usarFinisher3(monstroEscolhido);
        if (monstroEscolhido.hp <= 0) {
            const xpGanho = monstroEscolhido.nivel * 3;
            protagonista.ganharXP(xpGanho);
        }
        else {
            monstroEscolhido.atacar(protagonista);
        }
    }
    atualizarEstatisticasNaTela();
}
function sortearMonstro() {
    let novoMonstro;
    do {
        let indiceSorteado = Math.floor(Math.random() * monstros.length);
        novoMonstro = monstros[indiceSorteado];
        monstroEscolhido = novoMonstro;
    } while (novoMonstro.hp <= 0);
    return novoMonstro;
}
function atualizarEstatisticasNaTela() {
    nomeProta.textContent = protagonista.nome;
    nivelProta.textContent = `${protagonista.nivel}`;
    hpProta.textContent = `${protagonista.hp.toFixed(0)}`;
    forcaProta.textContent = `${protagonista.forca.toFixed(0)}`;
    manaProta.textContent = `${protagonista.mana.toFixed(0)}`;
    xpProta.textContent = `${protagonista.xp.toFixed(0)}`;
    if (monstroEscolhido) {
        fotoM.src = `./img/${monstroEscolhido.foto}`;
        forcaM.textContent = `${monstroEscolhido.forca.toFixed(0)}`;
        nomeM.textContent = monstroEscolhido.nome;
        nivelM.textContent = `${monstroEscolhido.nivel}`;
        hpM.textContent = `${monstroEscolhido.hp.toFixed(0)}`;
        manaM.textContent = `${monstroEscolhido.mana.toFixed(0)}`;
        danoM.textContent = `${monstroEscolhido.dano.toFixed(0)}`;
    }
    if (protagonista.hp <= 0) {
        const jogo = document.querySelector('.game-over');
        jogo.classList.remove('d-none');
    }
    if (monstroEscolhido) {
        if (monstroEscolhido.hp <= 0) {
            sortearMonstro();
        }
    }
}
function reiniciar() {
    location.reload();
}
