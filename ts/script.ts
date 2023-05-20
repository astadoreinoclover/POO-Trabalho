class Protagonista {
    private _nome: string = "Sung Jin Woo";
    private _hp: number = 100;
    private _mana: number = 10;
    private _xp: number = 0;
    private _nivel: number = 1;
    private _forca: number = 10;
    private _dano:number = 0;
    private _finish = new Ataque('Corte Rapido', 20);
    private _finish2 = new Ataque('Erga-se', 30);
    private _finish3 = new Ataque('Area do Monarca', 50);
    private _foto:string = "player1.png";

    constructor() {
        this._dano = this._forca + (this._forca * (this._nivel/10));
    }

    get nivel():number {
        return this._nivel;
    }

    set nivel(nivel:number) {
        this._nivel = nivel;
    }

    get dano():number {
        return this._dano;
    }

    set dano(dano:number) {
        this._dano = dano;
    }

    get hp():number {
        return this._hp;
    }

    set hp(hp:number) {
        this._hp = hp;
    }

    get nome():string {
        return this._nome;
    }

    set nome(nome:string) {
        this._nome = nome;
    }

    get foto(): string {
        return this._foto;
    }

    set foto(foto: string) {
        this._foto = foto;
    }

    get forca(): number {
        return this._forca;
    }

    set forca(forca: number) {
        this._forca = forca;
    }

    get mana(): number {
        return this._mana;
    }

    set mana(mana: number) {
        this._mana = mana;
    }

    get xp(): number {
        return this._xp;
    }

    set xp(xp: number) {
        this._xp = xp;
    }
}

class Ataque {
    private _nome: string ;
    private _dano: number ;

    constructor(nome:string,dano:number) {
        this._dano = dano;
        this._nome = nome;
    }
}

class Monstro {
    private _nome: string;
    private _hp: number;
    private _mana: number;
    private _nivel: number;
    private _forca: number;
    private _foto:string;
    private _dano:number;

    constructor(nome: string, hp: number, mana: number, forca: number,foto:string) {
        this._nome = nome;
        this._hp = hp;
        this._mana = mana;
        this._nivel = Math.floor(Math.random() * 10);
        this._forca = forca;
        this._foto = foto;
        this._dano = this._forca + (this._forca * (this._nivel/10));
    }

    get nome(): string {
        return this._nome;
    }

    get dano(): number {
        return this._dano;
    }

    get foto(): string {
        return this._foto;
    }

    set foto(foto: string) {
        this._foto = foto;
    }

    get hp(): number {
        return this._hp;
    }

    get mana(): number {
        return this._mana;
    }

    get nivel(): number {
        return this._nivel;
    }

    get forca(): number {
        return this._forca;
    }
}



//===================================================================================================================

const protagonista: Protagonista = new Protagonista();

const nomeProta = document.querySelector('.nome')  as HTMLDivElement;
nomeProta.textContent = protagonista.nome;

const fotoProta = document.querySelector('.fotoProta')  as HTMLImageElement;
fotoProta.src = `./img/${protagonista.foto}`;

const nivelProta = document.querySelector('.nivel')  as HTMLTableCellElement;
nivelProta.textContent = `${protagonista.nivel}`;

const forcaProta = document.querySelector('.forca')  as HTMLTableCellElement;
forcaProta.textContent = `${protagonista.forca}`;

const manaProta = document.querySelector('.mana')  as HTMLTableCellElement;
manaProta.textContent = `${protagonista.mana}`;

const xpProta = document.querySelector('.xp')  as HTMLTableCellElement;
xpProta.textContent = `${protagonista.xp}`;

const hpProta = document.querySelector('.hp')  as HTMLTableCellElement;
hpProta.textContent = `${protagonista.hp}`;

const danoProta = document.querySelector('.dano')  as HTMLTableCellElement;
danoProta.textContent = `${protagonista.dano}`;





const monstro1 = new Monstro("Goblin", 70, 3, 15, 'goblin.png');
const monstro2 = new Monstro("Orc", 100, 5, 30, 'orc.png');
const monstro3 = new Monstro("Dragão", 200, 50, 20, 'dragao.png');

// Sorteio para determinar qual monstro foi escolhido
const monstros = [monstro1, monstro2, monstro3];
const indiceSorteado = Math.floor(Math.random() * monstros.length);
const monstroEscolhido = monstros[indiceSorteado];

const nomeM = document.querySelector('.nomeM')  as HTMLDivElement;
nomeM.textContent = monstroEscolhido.nome;

const fotoM = document.querySelector('.fotoM')  as HTMLImageElement;
fotoM.src = `./img/${monstroEscolhido.foto}`;

const nivelM = document.querySelector('.nivelM')  as HTMLTableCellElement;
nivelM.textContent = `${monstroEscolhido.nivel}`;

const forcaM = document.querySelector('.forcaM')  as HTMLTableCellElement;
forcaM.textContent = `${monstroEscolhido.forca}`;

const hpM = document.querySelector('.hpM')  as HTMLTableCellElement;
hpM.textContent = `${monstroEscolhido.hp}`;

const manaM = document.querySelector('.manaM')  as HTMLTableCellElement;
manaM.textContent = `${monstroEscolhido.mana}`;

const danoM = document.querySelector('.danoM')  as HTMLTableCellElement;
danoM.textContent = `${monstroEscolhido.dano}`;