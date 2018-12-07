export interface IContato{
    id: string;
    nome: string; 
    telefones: ITelefone[];
}

export interface ITelefone{
    ddd: number;
    numero: string;
    whatsapp: boolean;
}