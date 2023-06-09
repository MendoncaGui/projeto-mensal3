export interface Pokemon {
    [x: string]: any;
    name: string;
    weight: number;
    sprites: {
      [x: string]: any;
      front_default: string;
    };
    stats: {
      base_stat: number;
      stat: {
        name: string;
      };
    }[];
    abilities: {
      ability: {
        name: string;
      };
    }[];
    types: {
      type: {
        name: string;
      };
    }[];
  }