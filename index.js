const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/api/health', (req, res) => {
    res.json({ status: 'UP', service: 'megacorp-internal-tool-build' });
});

app.listen(PORT, () => {
    console.log(`MegaCorp Internal Tool build server running on port ${PORT}`);
});
