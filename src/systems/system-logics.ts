// function for given a list of components, order by least dependencies
import { ComponentInterface } from '../components/ComponentInterface'

export function orderComponentsByLeastDependencies(components: Array<ComponentInterface>) {
    return components.sort(function (a: any, b: any) {
        return a.dependencies.length - b.dependencies.length
    })
}

// function for given a list of components return a list where a component is only included once
export function removeDuplicateComponents(components: Array<ComponentInterface>) {
    return components.filter((v, i, a) => a.findIndex(t => t.name === v.name) === i)
}

// function for given a list of components return a list where a component is always after its dependencies
export function orderComponentsByDependencies(components: Array<ComponentInterface>) {
    return components.sort(function (a: any, b: any) {
        return b.dependencies.indexOf(a) - a.dependencies.indexOf(b)
    })
}
