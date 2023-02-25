const mainController = {
	index: (req, res) => {
		res.render('index', { title: 'Express' });
	},
	login: function (req,res){
        res.render('login');
    },
	register: function (req,res){
        res.render('register');
    }
}

module.exports = mainController;