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

    get items(): Content[]{
        return this._items;
    }

    // from my understanding, to add to the private _items array we need to pass in a array of Content, which would be an object
    set items(newItem: Content[]){
        this._items = newItem
    }

    addItem(item: Content){
        this._items.push(item)
    }

    numberOfItems(): number {
        return this._items.length;
    }

    processContent(index: number){
        let item = this._items[index]
        
        return `<html>
                    <div>
                            <h3>${item.title ? item.title : ""}</h3>\n
                            <p>${item.description}</p>\n
                            <p>${item.creator}</p>\n
                            ${item.type ? item.type : ""}
                    </div>

                    <img src="${item.imgURL ? item.imgURL : "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"}" "</img>\n
                    <p> tags: ${item.tags ? item.tags : ""}</p>

                </html>`
    }

}
