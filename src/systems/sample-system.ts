import { newComponent } from '../components/http_server_component/http_server_component'

interface Component {
    dependencies?: Array<Component>,
    name: string,
    startComponent: Function,
    stopCommand: Function
}

interface SystemMap {
    components: Array<any>
}

const system_map: SystemMap = {components: [newComponent()]}

system_map.components
    .filter((c) => c.name == 'http')
    .forEach((c) => {
        c.startComponent()
        return c
    });

