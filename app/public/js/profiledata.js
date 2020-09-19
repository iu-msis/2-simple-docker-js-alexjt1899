var app = new Vue({
  el: '#userprofile',
  data: {
    userName: '',
    userEmail: '',
    userEmailLink: '',
    userBirthday: '',
    userLocation: '',
  userImgLarge: '',
  userImgThumbnail: '',
},
  created() {
    this.fetchUser();
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
          this.userBirthday = userData.dob.date;
          this.userLocation= userData.location.city + " "+ userData.location.state + ", "+userData.location.country

          this.userImgLarge= userData.picture.large;
          this.userImgThumbnail= userData.picture.thumbnail;

        })
      }

  }

})
