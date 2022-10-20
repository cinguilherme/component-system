import { system_map ,startSystem, stopSystem} from "../../../src/systems/sample/sample-system";
import supertest from "supertest";

describe("Sample System", () => {

    it('should start and stop the system', () => {
        startSystem(system_map);
        stopSystem(system_map);
    });


    it('should start, expose a working endpoint and stop the system', async () => {
        startSystem(system_map);
        await supertest("http://localhost:3000").get("/").expect(200);
        stopSystem(system_map);
        try { await supertest("http://localhost:3000").get("/") }
        catch (e) {
            expect(e.message).toContain("ECONNREFUSED") }
    });

});