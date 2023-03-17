const app = require('../app');
const session = require('supertest');
const agent = session(app);


describe('GET rickandmorty/{id}',()=>{
    it('Responde con un status: 200', async ()=>{
        await agent.get('/rickandmorty/1').expect(200);
    });

    it('Responde un objeto con las propiedades: "id", "name", "species", "gender" e "image"',()=>{
        agent.get('/rickandmorty/1').expect(200);
    })
});