var app = new Vue({
  el: '#app',
  data:{

     newComment:{
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
         fetch('api/comment/create.php/',{
           method:'POST',
           body: JSON.stringify(this.newComment),
           headers: {
             "Content-Type": "application/json; charset=utf-8"
           }
         })
         .then( response.json() )
         .then( json => {
             console.log("returned from post:", json);
           this.newComment.push(json[0]);
             this.newComment = this.newCertificationData();
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
