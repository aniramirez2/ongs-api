const request = require('supertest');
const app = require('../../src/app');

describe('ong', () => {
    it('should be ablle to create a new ong', () => {
        const response = request(app).post('/ongs').send({
            name: "Teste ong",
            email: "hello",
            whatsapp: "31999665603",
            city: "Bh",
            uf: "MG"
        })
    })
})