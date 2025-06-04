export class Category {
    slug: string;
    name: string;
    url: string;

    constructor(slug: string, name: string , url: string) {
        this.slug = slug;
        this.name = name;
        this.url = url;
    }
}
