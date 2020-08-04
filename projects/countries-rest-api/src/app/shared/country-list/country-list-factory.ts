export interface Country {
  name: string;
  nativeName: string;
  topLevelDomain: string[];
  population: number;
  currencies: Currency[];
  region: string;
  languages: Language[];
  subregion: string;
  capital: string;
  borders: string[];
  flag: string;
  alpha3Code: string;
  currenciesCode?: string[];
  languagesName?: string[];
  bordersName?: string[];
}


export interface Currency {
  code: string;
  name: string;
  symbol: string;
}

export interface Language {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}
