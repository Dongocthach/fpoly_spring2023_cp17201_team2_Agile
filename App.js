// const createError = require('http-errors');
const express = require('express');
// const path = require('path');
// const cookieParser = require('cookie-parser');
// const logger = require('morgan');
// const mongoose = require('mongoose');
// const { checkUser, requireAuth } = require('./middleware/authMiddleware');
// require('./modules/shoe/ShoeModel');
// require('./modules/categories/CategoryModel');



// server.listen(port,() => {
//   console.log(`Server running at port `+port);
// });

// const dbURI = 'mongodb+srv://sheep:test1234@cluster0.iayhcp3.mongodb.net/ps19765?retryWrites=true&w=majority';
// mongoose.connect(dbURI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
//   .then(() => console.log('>>>>>>>>>> DB Connected!!!!!!'))
//   .catch(err => console.log('>>>>>>>>> DB Error: ', err));

  
// const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/users');
// const productRouter= require('./routes/product');
// const apiRouter= require('./routes/api');
// const studentRouter = require('./routes/student')

// const app = express();

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'hbs');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.get('*', checkUser);
// app.use('/', indexRouter);
// app.use('/users', usersRouter);
// app.use('/student',requireAuth, studentRouter);
// app.use('/product',requireAuth, productRouter);
// app.use('/api/v1/', apiRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });


const port = process.env.PORT || 5001;
app.listen(port, () => {
    console.log(`Our app is running on port ${ port }`);
});
module.exports = app;
