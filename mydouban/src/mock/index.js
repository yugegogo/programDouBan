var Mock=require("mockjs");
Mock.mock('/shouye',"get",require('./json/shouye'));
Mock.mock('/movie',"get",require('./json/movie'));
Mock.mock('/findgoodmovie',"get",require('./json/findgoodmovie'));
Mock.mock('/goodbook',"get",require('./json/goodbook'));
Mock.mock('/xiaozua',"get",require('./json/xiaozua'));
Mock.mock('/xiaozub',"get",require('./json/xiaozub'));
Mock.mock('/xiaozuc',"get",require('./json/xiaozuc'));




