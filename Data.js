const app = express()
app.listen(3000, () => console.log('listening at 3000'));
app.use(express.static('public'));

const database = new Datastore('defaultdb')
database.loadDatabase();

app.post('/api', (request, response) => {
    const data = request.body;
    const timestamp = Date.now();
    data.timestamp = timestamp;
    database.insert(data);
    response.json(data);
});