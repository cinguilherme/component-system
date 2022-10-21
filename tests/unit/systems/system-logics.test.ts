import { removeDuplicateComponents, orderComponentsByDependencies } from '../../../src/systems/system-logics'
import { ComponentInterface } from '../../../src/components/ComponentInterface'

describe('system-logics', () => {
    it('should remove duplicate components', () => {
        const components: Array<ComponentInterface> = [
            {
                dependencies: [],
                name: 'a',
                start: () => {},
                stop: () => {},
                status: () => {},
            },
            {
                dependencies: [],
                name: 'a',
                start: () => {},
                stop: () => {},
                status: () => {},
            },
        ]
        const result = removeDuplicateComponents(components)
        expect(result).toHaveLength(1)
    })
    it('should order components by dependencies', () => {
        const components: Array<ComponentInterface> = [
            {
                dependencies: [],
                name: 'a',
                start: () => {},
                stop: () => {},
                status: () => {},
            },
            {
                dependencies: ['a'],
                name: 'b',
                start: () => {},
                stop: () => {},
                status: () => {},
            },
        ]
        const result = orderComponentsByDependencies(components)
        expect(result).toHaveLength(2)
        expect(result[0]).toEqual(components[0])
        expect(result[1]).toEqual(components[1])
    })
})
