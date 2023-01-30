export interface IHeroe {
    id?:               string;
    superhero:        string;
    publisher:        Publisher;
    alter_ego:        string;
    first_appearance: string;
    characters:       string;
    atl_img?:          string; //http://faoisfhsifdjso.com/img.png
}
export enum Publisher {
    DCComics = "DC Comics",
    MarvelComics = "Marvel Comics",
}