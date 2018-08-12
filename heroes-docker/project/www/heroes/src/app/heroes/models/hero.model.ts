import {Image} from './image.model';

export class Hero {
    public Id: string;

    public constructor( public Name: string,
                        public Images: Image[],
                        public Atack: number,
                        public Defense: number){

    }
}
