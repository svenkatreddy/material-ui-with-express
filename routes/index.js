module.exports = function (router) {
  router.get('/api', function (req, res) {
    res.json({
      hello: "world"
    });
  });
};