import { SystemMap, system } from '../system-map'
import { CliComponent } from '../../components/cli_input_component/cli-component'

const cli = new CliComponent()

export const system_map: SystemMap = {
    components: [
        {
            dependencies: [],
            name: 'cli',
            component: cli,
        },
    ],
}

export const cli_system = system(system_map)
