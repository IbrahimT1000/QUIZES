const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());


app.use(cors());

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
	console.log(`Server On ${PORT}`);
});
app.get('/', (req, res) => {
  
});

