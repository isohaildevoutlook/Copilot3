function skillsMember() {
  // Get the member id from the URL
  var memberId = window.location.search.replace("?id=", "");
  // Get the member data from the API
  $.ajax({
    url: "https://skillsapi.herokuapp.com/members/" + memberId,
    method: "GET",
    success: function (response) {
      // Display the member data
      $("#member-name").text(response.name);
      $("#member-email").text(response.email);
      $("#member-bio").text(response.bio);
      $("#member-avatar").attr("src", response.avatar);
      // Get the member skills from the API
      $.ajax({
        url: "https://skillsapi.herokuapp.com/members/" + memberId + "/skills",
        method: "GET",
        success: function (response) {
          // Display the member skills
          for (var i = 0; i < response.length; i++) {
            var skill = response[i];
            $("#member-skills").append("<li>" + skill.name + "</li>");
          }
        }
      });
    }
  });
}