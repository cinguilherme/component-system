import { HttpComponent } from '../../components/http_server_component/http_server_component'
import {ComponentInterface} from "../../components/ComponentInterface";
import {SystemComponentInterface} from "../system-map-layout";

interface SystemMap {
    components: Array<any>
}

const http = new HttpComponent();

const system_map: SystemMap = {components: [http]}

system_map.components
    .forEach((c) => {
        c.dependencies.forEach((a: ComponentInterface) => a.start())
        c.start()
        return c
    });

console.log("system up")

// system_map.components.forEach(c => {
//     c.stop();
// })

// deactivate all components
