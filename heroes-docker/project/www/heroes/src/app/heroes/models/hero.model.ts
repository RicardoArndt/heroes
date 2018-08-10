import {Image} from './image.model';

export class Hero {
    public constructor(public id: string,
                        public name: string,
                        public images: Image[],
                        public atack: number, 
                        public defense: number){

    }
}
