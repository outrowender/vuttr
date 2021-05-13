import * as Faker from 'faker'
export class Tool {

    id: number
    title: string
    link: string
    description: string
    tags: string[]

    private constructor(id: number, title: string, link: string, description: string, tags: string[]) {
        this.id = id
        this.title = title
        this.link = link
        this.description = description
        this.tags = tags
    }

    static create(id: number, title: string, link: string = '', description: string = '', tags: string[] = []) {
        console.log('creating...')
        return new Tool(id, title, link, description, tags)
    }

    static fake(lenght: number = 1): Tool[] {
        return (new Array(lenght).fill({}))
            .map((_, index) => this.create(index,
                Faker.lorem.words(2),
                Faker.internet.url(),
                Faker.lorem.sentence(),
                Faker.lorem.words(3).split(' ')
            ))
    }

    public toString(): string {
        return `id: ${this.id}, title: ${this.title}, link: ${this.link}, description: ${this.description}, tags: ${this.tags.length} items`;
    }
}