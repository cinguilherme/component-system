import { startComponent } from '../components/http_server_component/http_server_component'

interface Component {
    dependencies?: Array<Component>,
    name: string,
    startCommand: Function,
    stopCommand: Function
}

interface SystemMap {
    components: Array<Component>
}

const http: Component = {name: "http", startCommand: startComponent, stopCommand: () => {}}

const system_map: SystemMap = {components: [http]}

system_map.components.filter(c => c.name == "http")[0].app.listen(3000, () => {
    console.log('system is up and http on port 3000');
});