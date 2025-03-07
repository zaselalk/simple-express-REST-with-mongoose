const hrInterview = (req, res, next) => {
    const random = Math.floor(Math.random() * 10);
    if (random % 2 == 0) {
        res.status(401).send('Not Authorized');
    }
    next();
}

module.exports = hrInterview;