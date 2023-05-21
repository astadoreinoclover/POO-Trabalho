class Protagonista {
    private _nome: string = "Sung Jin Woo";
    private _hp: number = 100;
    private _mana: number = 10;
    private _xp: number = 0;
    private _nivel: number = 1;
    private _forca: number = 20;
    private _dano:number = 0;
    private _finish = new Ataque('Corte Rapido', 30);
    private _finish2 = new Ataque('Erga-se', 50);
    private _finish3 = new Ataque('Area do Monarca', 90);
    private _foto:string = "player1.png";

    constructor() {
        this._dano = this._forca + (this._forca * (this._nivel/5));
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

    atacar(monstro: Monstro) {
        console.log(`${this._nome} atacou ${monstro.nome}!`);
        this._hp += Math.floor(Math.random() * (this._mana * this._nivel));
        this._forca += Math.floor(Math.random() * (this._forca * this._nivel));
        const dano = this._dano;
        monstro.receberDano(dano);
    }

    receberDano(dano: number) {
        this._hp -= dano;
        this._mana += Math.floor(Math.random() * 10);
        console.log(`${this._nome} recebeu ${dano} de dano!`);
        if (this._hp <= 0) {
            console.log(`${this._nome} foi derrotado!`);

        }
    }

    usarFinisher1(monstro: Monstro) {
        if (this._mana >= 3) {
            console.log(`${this._nome} usou ${this._finish.nome}!`);
            const dano = this._finish.dano;
            monstro.receberDano(dano);
            this._mana -= 3;
        }
    }

    usarFinisher2(monstro: Monstro) {
        if (this._mana >= 6) {
            console.log(`${this._nome} usou ${this._finish2.nome}!`);
            const dano = this._finish2.dano;
            monstro.receberDano(dano);
            this._mana -= 6;
        }
    }

    usarFinisher3(monstro: Monstro) {
        if (this._mana >= 9) {
            console.log(`${this._nome} usou ${this._finish3.nome}!`);
            const dano = this._finish3.dano;
            monstro.receberDano(dano);
            this._mana -= 9;
        }
    }

    ganharXP(xp: number) {
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
    private _nome: string ;
    private _dano: number ;

    constructor(nome:string,dano:number) {
        this._dano = dano;
        this._nome = nome;
    }

    get nome(): string {
        return this._nome;
    }

    set nome(nome: string) {
        this._nome = nome;
    }

    get dano(): number {
        return this._dano;
    }

    set dano(dano: number) {
        this._dano = dano;
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
    static hp: number;

    constructor(nome: string, hp: number, mana: number, prioridade:number, foto:string) {
        this._nome = nome;
        this._mana = mana;
        this._nivel = Math.floor(Math.random() * 9)+1;
        this._forca = (this._nivel * prioridade)/5;
        this._foto = foto;
        this._dano = this._forca + (this._forca * (this._mana/1000));
        this._hp = hp + (hp*this._nivel/100);
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


    atacar(protagonista: Protagonista) {
        console.log(`${this._nome} atacou ${protagonista.nome}!`);
        const dano = this._dano;
        this._mana -= 5;
        protagonista.receberDano(dano);
    }

    receberDano(dano: number) {
        this._hp -= dano;
        this._mana += Math.floor(Math.random() * 5)
        console.log(`${this._nome} recebeu ${dano} de dano!`);
        if (this._hp <= 0) {
            console.log(`${this._nome} foi derrotado!`);
        }
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





const monstro1 = new Monstro("Goblin", 70, 10, 10, 'goblin.png');
const monstro2 = new Monstro("Orc", 100, 30, 20, 'orc.png');
const monstro3 = new Monstro("Dragão", 200, 50, 30, 'dragao.png');

// // Sorteio para determinar qual monstro foi escolhido
// const monstros = [monstro1, monstro2, monstro3];
// let indiceSorteado = Math.floor(Math.random() * monstros.length);
// let monstroEscolhido = monstros[indiceSorteado];

const monstros = [monstro1, monstro2, monstro3];
let monstroEscolhido: Monstro | null = null;



    do {
    let indiceSorteado = Math.floor(Math.random() * monstros.length);
    monstroEscolhido = monstros[indiceSorteado];
    } while (monstroEscolhido.hp <= 0);



    const nomeM = document.querySelector('.nomeM')  as HTMLDivElement;
    nomeM.textContent = monstroEscolhido.nome;

    const fotoM = document.querySelector('.fotoM')  as HTMLImageElement;
    fotoM.src = `./img/${monstroEscolhido.foto}`;

    const nivelM = document.querySelector('.nivelM')  as HTMLTableCellElement;
    nivelM.textContent = `${monstroEscolhido.nivel}`;

    const forcaM = document.querySelector('.forcaM')  as HTMLTableCellElement;
    forcaM.textContent = `${monstroEscolhido.forca.toFixed(0)}`;

    const hpM = document.querySelector('.hpM')  as HTMLTableCellElement;
    hpM.textContent = `${monstroEscolhido.hp}`;

    const manaM = document.querySelector('.manaM')  as HTMLTableCellElement;
    manaM.textContent = `${monstroEscolhido.mana}`;

    const danoM = document.querySelector('.danoM')  as HTMLTableCellElement;
    danoM.textContent = `${monstroEscolhido.dano.toFixed(0)}`;



atualizarEstatisticasNaTela();


function atq1() {
    if(monstroEscolhido) {
        protagonista.atacar(monstroEscolhido);
        if (monstroEscolhido.hp <= 0) {
            const xpGanho = monstroEscolhido.nivel * 5;
            protagonista.ganharXP(xpGanho);
        } else {
            monstroEscolhido.atacar(protagonista);
        }
        atualizarEstatisticasNaTela()
    }      
}

function atq2() {
    if (monstroEscolhido) {
        protagonista.usarFinisher1(monstroEscolhido);
        if (monstroEscolhido.hp <= 0) {
            const xpGanho = monstroEscolhido.nivel * 2;
            protagonista.ganharXP(xpGanho);
        } else {
            monstroEscolhido.atacar(protagonista);
        }
    }
    atualizarEstatisticasNaTela()
}

function atq3() {
    if (monstroEscolhido) {
        protagonista.usarFinisher2(monstroEscolhido);
        if (monstroEscolhido.hp <= 0) {
            const xpGanho = monstroEscolhido.nivel * 2;
            protagonista.ganharXP(xpGanho);
        } else {
            monstroEscolhido.atacar(protagonista);
        }
    }
    atualizarEstatisticasNaTela()
}

function atq4() {
    if (monstroEscolhido) {
        protagonista.usarFinisher3(monstroEscolhido);
        if (monstroEscolhido.hp <= 0) {
            const xpGanho = monstroEscolhido.nivel * 2;
            protagonista.ganharXP(xpGanho);
        } else {
            monstroEscolhido.atacar(protagonista);
        }
    }
    atualizarEstatisticasNaTela()
}

function sortearMonstro(): Monstro {
    let novoMonstro: Monstro;
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
    forcaProta.textContent =`${protagonista.forca.toFixed(0)}`
    manaProta.textContent = `${protagonista.mana.toFixed(0)}`;
    xpProta.textContent = `${protagonista.xp.toFixed(0)}`;
  
    if (monstroEscolhido) {
      fotoM.src = `./img/${monstroEscolhido.foto}`;
      forcaM.textContent = `${monstroEscolhido.forca.toFixed(0)}`
      nomeM.textContent = monstroEscolhido.nome;
      nivelM.textContent = `${monstroEscolhido.nivel}`;
      hpM.textContent = `${monstroEscolhido.hp.toFixed(0)}`;
      manaM.textContent = `${monstroEscolhido.mana.toFixed(0)}`;
      danoM.textContent = `${monstroEscolhido.dano.toFixed(0)}`
    }

    if(protagonista.hp <= 0) {
        const jogo = document.querySelector('.game-over') as HTMLDivElement;
        jogo.classList.remove('d-none');
    }
    if(monstroEscolhido) {
        if(monstroEscolhido.hp <= 0) {
            sortearMonstro();
        }
    }
    

}

function reiniciar() {
    location.reload();
}