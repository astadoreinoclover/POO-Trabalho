export class Protagonista {
    private _nome: string = "Sung Jin Woo";
    private _hp: number = 100;
    private _mana: number = 10;
    private _xp: number = 0;
    private _nivel: number = 1;
    private _forca: number = 10;
    private _finish = new Ataque('Corte Rapido', 20);
    private _finish2 = new Ataque('Erga-se', 30);
    private _finish3 = new Ataque('Area do Monarca', 50);

    public atacar(mostro: Monstro) {
        let dano = this._forca*Math.floor(Math.random()*3);
        mostro.receberDano(dano);
    }

    receberDano(dano: number) {
        this._hp -= dano;
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

export class Monstro {
    private _nome: string = "Goblin";
    private _hp: number = 70;
    private _mana: number = 3;
    private _nivel: number = 1;
    private _forca: number = 4;
    private _finish = Math.floor(Math.random() * (30 - 15 + 1)) + 15;

    receberDano(dano: number) {
        this._hp -= dano;
    }

    private atacar(protagonista:Protagonista) {
        let dano = this._forca*Math.floor(Math.random()*3);
        protagonista.receberDano(dano);
    }
}