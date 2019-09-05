var Mock=require("mockjs");
Mock.mock('/shouye',"get",require('./json/shouye'));
Mock.mock('/movie',"get",require('./json/movie'));
Mock.mock('/findgoodmovie',"get",require('./json/findgoodmovie'));
