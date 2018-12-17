const client = require('./index');

const sqlquery = `create table if not exists fishes (
    id SERIAL PRIMARY KEY, 
    name TEXT, 
    type TEXT
);`;


client.query(sqlquery, (err) =>{
	if (err) {
		console.log(err);
	}
	console.log('All tables created');
});

module.exports = client;
