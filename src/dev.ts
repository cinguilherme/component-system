import { cli_system } from './systems/system-cli/sample-system-cli'
import { CliComponent } from './components/cli_input_component/cli-component'
import { Bookmark } from './components/http_out_component/bookmark'
import { HttpOutMockComponent } from './components/http_out_component/http-out-mock-component'

// cli_system.start()
//
// const cli = cli_system.system_map.components[0].component as CliComponent
//
// cli.program.parse()

const bookmark: Bookmark = {
    table: [
        {
            endpoint: 'cat',
            url: 'http://localhost:3000',
            method: 'GET',
            handler: () => {
                return Promise.resolve({ a: 10 })
            },
        },
    ],
}

const http_out_mock = new HttpOutMockComponent(bookmark)

http_out_mock.start()

http_out_mock
    .call('catx')
    .then(response => console.log(response))
    .catch(err => console.log(err))
