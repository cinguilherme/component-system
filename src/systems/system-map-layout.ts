import {ComponentInterface} from "../components/ComponentInterface";

export interface SystemComponentInterface {
    dependencies: Array<ComponentInterface>
    name: string
    component: ComponentInterface
}

export interface SystemMapLayout {
    components: Array<any>
}