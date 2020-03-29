const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ong', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('should be ablle to create a new ong', async () => {
    const response = await request(app).post('/ongs').send({
      name: "Teste ong",
      email: "hello@gmail.com",
      whatsapp: "31999665603",
      city: "Bh",
      uf: "MG"
    });
    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  })


})