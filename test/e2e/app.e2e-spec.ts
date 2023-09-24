import * as request from 'supertest';
const appUrl = 'http://api-e2e:8080';

describe('API Tests', () => {
  it('should return a successful POST response', async () => {
    const data = {};
    const response = await request(appUrl).post('/').send(data);
    expect(response.status).toBe(201);
    expect(response.body).toEqual({});
  });
});
