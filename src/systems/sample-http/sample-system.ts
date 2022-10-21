import { HttpComponent } from '../../components/http_server_component/http_server_component'
import { system, SystemMap } from '../system-map'

const http = new HttpComponent()

export const system_map: SystemMap = {
    components: [
        {
            dependencies: [],
            name: 'http',
            component: http,
        },
    ],
}

export const server_system = system(system_map)
