// describe('UserController', function(){

//   beforeEach(function() {
//     module('dunderMifflinApp');
//   });

//  var api = [
//   {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//       "name": "Romaguera-Crona",
//       "catchPhrase": "Multi-layered client-server neural-net",
//       "bs": "harness real-time e-markets"
//     }
//   }];

//   var postApi = [
//     {
//       "userId": 1,
//       "id": 1,
//       "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//       "body": "quia et suscipitsuscipit recusandae consequuntur expedita et cumreprehenderit molestiae ut ut quas totamnostrum rerum est autem sunt rem eveniet architecto"
//     },
//     {
//       "userId": 1,
//       "id": 2,
//       "title": "qui est esse",
//       "body": "est rerum tempore vitaesequi sint nihil reprehenderit dolor beatae ea dolores nequefugiat blanditiis voluptate porro vel nihil molestiae ut reiciendisqui aperiam non debitis possimus qui neque nisi nulla"
//     },
//     {
//       "userId": 1,
//       "id": 3,
//       "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
//       "body": "et iusto sed quo iurevoluptatem occaecati omnis eligendi aut advoluptatem doloribus vel accusantium quis pariaturmolestiae porro eius odio et labore et velit aut"
//     },
//         {
//       "userId": 2,
//       "id": 1,
//       "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//       "body": "quia et suscipitsuscipit recusandae consequuntur expedita et cumreprehenderit molestiae ut ut quas totamnostrum rerum est autem sunt rem eveniet architecto"
//     },
//     {
//       "userId": 2,
//       "id": 2,
//       "title": "qui est esse",
//       "body": "est rerum tempore vitaesequi sint nihil reprehenderit dolor beatae ea dolores nequefugiat blanditiis voluptate porro vel nihil molestiae ut reiciendisqui aperiam non debitis possimus qui neque nisi nulla"
//     },
//     {
//       "userId": 2,
//       "id": 3,
//       "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
//       "body": "et iusto sed quo iurevoluptatem occaecati omnis eligendi aut advoluptatem doloribus vel accusantium quis pariaturmolestiae porro eius odio et labore et velit aut"
//     }
//   ];

//   var commentApi = [
//     {
//       "postId": 1,
//       "id": 1,
//       "name": "id labore ex et quam laborum",
//       "email": "Eliseo@gardner.biz",
//       "body": "laudantium enim quasi est quidem magnam voluptate ipsam eostempora quo necessitatibusdolor quam autem quasireiciendis et nam sapiente accusantium"
//     },
//     {
//       "postId": 1,
//       "id": 2,
//       "name": "quo vero reiciendis velit similique earum",
//       "email": "Jayne_Kuhic@sydney.com",
//       "body": "est natus enim nihil est dolore omnis voluptatem numquamet omnis occaecati quod ullam atvoluptatem error expedita pariaturnihil sint nostrum voluptatem reiciendis et"
//     },
//     {
//       "postId": 1,
//       "id": 3,
//       "name": "odio adipisci rerum aut animi",
//       "email": "Nikita@garfield.biz",
//       "body": "quia molestiae reprehenderit quasi aspernaturaut expedita occaecati aliquam eveniet laudantiumomnis quibusdam delectus saepe quia accusamus maiores nam estcum et ducimus et vero voluptates excepturi deleniti ratione"
//     },
//     {
//       "postId": 2,
//       "id": 1,
//       "name": "id labore ex et quam laborum",
//       "email": "Eliseo@gardner.biz",
//       "body": "laudantium enim quasi est quidem magnam voluptate ipsam eostempora quo necessitatibusdolor quam autem quasireiciendis et nam sapiente accusantium"
//     },
//     {
//       "postId": 2,
//       "id": 2,
//       "name": "quo vero reiciendis velit similique earum",
//       "email": "Jayne_Kuhic@sydney.com",
//       "body": "est natus enim nihil est dolore omnis voluptatem numquamet omnis occaecati quod ullam atvoluptatem error expedita pariaturnihil sint nostrum voluptatem reiciendis et"
//     },
//     {
//       "postId": 2,
//       "id": 3,
//       "name": "odio adipisci rerum aut animi",
//       "email": "Nikita@garfield.biz",
//       "body": "quia molestiae reprehenderit quasi aspernaturaut expedita occaecati aliquam eveniet laudantiumomnis quibusdam delectus saepe quia accusamus maiores nam estcum et ducimus et vero voluptates excepturi deleniti ratione"
//     }
//   ];

//   describe('Grab Posts', function() {
//     it('Check to see how many posts of same as id of user', function(){
//       var $scope = $rootScope.$new();
//       var controller = $controller('authController', { $scope: $scope });
//       expect(findPosts(1, 'userId', postApi).length).toEqual(3);
//     });
//     it('Check return to see if Post URL is parsed properly', function(){
//       expect(setUrlQueryParams('posts', 1, 'userId', 'userId')).toEqual('https://jsonplaceholder.typicode.com/posts?userId=1');
//     });
//     it('Check return to see if Comment URL is parsed properly', function(){
//       expect(setUrlQueryParams('comments', [1,2], commentApi, 'id', 'postId')).toEqual('https://jsonplaceholder.typicode.com/comments?postId=1&postId=2');
//     });
//   });
// })
