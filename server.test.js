const request = require("supertest");
const server = require("./server");
const db = require("./data/dbConfig");

describe('API', () => {
    // afterEach(async () => {
    //   await db("users").truncate();
    // })

    describe('Register', () => {
        it('recieves 201 when user is first registered, fails (500) if user is already registered', () => {
          return request(server)
          .post('/api/users/register')
          .send({
            username:"testyoo",
            password: "testpw"
          })
          .then(res => expect(res.status).toBe(201))
        })
      })

    it("recieves 500 when user is already registered", async () => {
    await request(server)
        .post("/api/users/register")
        .send({ 
            username: "testyoo",
            password: "testpw" 
        })
        .then(res => expect(res.status).toBe(500))
        })

    it("recieves 200 when user is logged in", async () => {
    await request(server)
        .post("/api/users/login")
        .send({ 
            username: "testyoo",
            password: "testpw" 
        })
        .then(res => expect(res.status).toBe(200))
        })

    it("recieves 401 when user info is incorrect", async () => {
        await request(server)
            .post("/api/users/login")
            .send({ 
                username: "doesnotexist",
                password: "testpw" 
            })
            .then(res => expect(res.status).toBe(401))
            })

    it("returns 200, gets all posts", async () => {
            await request(server)
                .get('/api/posts')
                .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjYsInVzZXJuYW1lIjoiQmlsbHkiLCJpYXQiOjE1OTA1MzAyOTAsImV4cCI6MTU5MDU1OTA5MH0.gArSaRFbqybCOV04MaC87CgWysqiRGTo56VxNobcg24')
                .then(res => expect(res.status).toBe(200))
            })

    it("returns 201, post created", async () => {
        await request(server)
            .post('/api/posts/user/1')
            .send({
                title: "POST FROM TEST",
                content: "Had a great day in TESTING!"
                })
            .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjYsInVzZXJuYW1lIjoiQmlsbHkiLCJpYXQiOjE1OTA1MzAyOTAsImV4cCI6MTU5MDU1OTA5MH0.gArSaRFbqybCOV04MaC87CgWysqiRGTo56VxNobcg24')
            .then(res => expect(res.status).toBe(201))
        })
});