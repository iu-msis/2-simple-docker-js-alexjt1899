var app = new Vue({
  el: '#app',
  data:{

     newComment:{
       id:'',
      commentText:''
    },

    CommentList:[{
      id:'',
      commentText:''
    }]

   },

   methods: {
   		fetchComment: function(){
   			fetch('api/comments/index.php')
   			.then(response => response.json())
   			.then(json =>  {
   				this.CommentList=json;
   				console.log(this.CommentList);


   			});
   		},

      createComment(){
         fetch('api/comments/create.php',{
           //Professor Gregory helped me fix typos here
           method:'POST',
           body: JSON.stringify(this.newComment),
           headers: {
             "Content-Type": "application/json; charset=utf-8"
           }
         })
         	.then(response => response.json())
         .then( json => {
             console.log("returned from post:", json);
           this.CommentList.push(json[0]);
             this.newComment = this.newCommentData();
         });
         console.log("Creating (POSTing)")
         console.log(this.newComment);
      },
      newCommentData() {
          return{
            commentText: '',
          }
      }

    },



created() {

   this.fetchComment();
  console.log("hello world");

  	}



})
