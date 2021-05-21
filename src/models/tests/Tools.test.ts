import { Tool } from "../Tool"

describe('Tools', () => {
    it('should instance a class instance', () => {
        const tools = Tool.fake()[0]
        expect(tools).toBeTruthy()
    })

    it('should print a valid string from a model', () => {
        const tools = Tool.create(1, 'Hello')
        expect(tools.toString()).toBe('id: 1, title: Hello, link: ?, description: ?, tags: 0 items')
    })
})

