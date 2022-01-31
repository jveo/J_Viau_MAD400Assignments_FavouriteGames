import { Content } from "./content-interface";

/*
    WHAT 'CONTENT' IS:

    id: number;
    title: string;
    description: string;
    creator: string;
    imgURL: string;
    type?: string;
    tags?: [string];
*/
 
export class ContentList {
    private _items: Content[]

    constructor(item: Content){
        this._items = []
        this._items[0] = item
    }

    get Items(): Content[]{
        return this._items;
    }

    set items(newItem: Content[]){
        this._items = newItem

    }

    numberOfItems(){
        return this._items.length;
    }

    processContent(index: number){
        let item = this._items[index]
        
        return `<html>
                    <div>
                        <p> 
                            ${item.title}\n
                            ${item.description}\n
                            ${item.creator}\n
                            ${item.type!}
                        </p>
                        <img src="${item.imgURL}"</img>
                    </div>
                </html>`
    }
}
