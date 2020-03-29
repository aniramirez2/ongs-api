const request = require('supertest');
const app = require('../../src/app');

describe('ong', () => {
    it('should be ablle to create a new ong', async () => {
        const response = await request(app).post('/ongs').send({
            name: "Teste ong",
            email: "hello@gmail.com",
            whatsapp: "31999665603",
            city: "Bh",
            uf: "MG"
        })
    })
})