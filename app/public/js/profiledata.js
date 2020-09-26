var app = new Vue({
  el: '#userprofile',
  data: {
    userName: '',
    userEmail: '',
    userEmailLink: '',
    userbirthday: '',
    userLocation: '',
  userImgLarge: '',
  userImgThumbnail: '',
},

computed: {
  age() {
    return moment().diff(this.userbirthday, 'years');
  }
},


  created() {
    this.fetchUser();
    this.formatDate();

  },
  methods: {

      fetchUser: function() {

        fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
          var userData = data.results[0];
          console.log(userData);
          this.userName = userData.name.first + " " + userData.name.last;
          this.userEmail = userData.email;
          this.userbirthday = userData.dob.date;
          this.userLocation= userData.location.city + " "+ userData.location.state + ", "+userData.location.country

          this.userImgLarge= userData.picture.large;
          this.userImgThumbnail= userData.picture.thumbnail;

        })

console.log("submitted");



      },


      formatDate(d) {
      return moment(d).format("dddd, MMMM Do YYYY, h:mm:ss a (Z)");
    },

  },



})
