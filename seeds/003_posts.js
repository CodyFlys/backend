
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {
          id: 1, 
          user_id: 1,
          title: "Mountains", 
          photo_url: "https://images.unsplash.com/photo-1516655855035-d5215bcb5604?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80", 
          location: "Lake Louise, Canada", 
          content: "Took some amazing photos in the mountains today!"
        },

        {
          id: 2, 
          user_id: 1,
          title: "Mountains in the night", 
          photo_url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80", 
          location: "Moena, Italy", 
          content: "Took some amazing photos in the mountains tonight!"
        },

        {
          id: 3, 
          user_id: 2,
          title: "Saint Basil’s Cathedral",
          photo_url: "https://images.unsplash.com/photo-1520106212299-d99c443e4568?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80", 
          location: "Moscow, Russia", 
          content: "Took this photo while I was in Moscow!"
        },

        {
          id: 4, 
          user_id: 2,
          title: "Theme Park", 
          photo_url: "https://images.unsplash.com/photo-1531012451721-432c0ae74527?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80", 
          location: "RedRide Park, LA", 
          content: "Photos of me at the theme park last week!"
        },

        {
          id: 5, 
          user_id: 3,
          title: "Cochem", 
          photo_url: "https://images.unsplash.com/photo-1501952476817-d7ae22e8ee4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80", 
          location: "Cochem, Germany", 
          content: "Amaaazing views"
        },

        {
          id: 6, 
          user_id: 3,
          title: "Snowy Trail", 
          photo_url: "https://images.unsplash.com/photo-1516820208784-270b250306e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80", 
          location: "RidgeField, CO",
          content: "Snowy roads outside my house look amaaaaazing!"
        },

        {
          id: 7, 
          user_id: 4,
          title: "Festival", 
          photo_url: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80", 
          location: "RoseRed Festival, OH", 
          content: "Amaaaaazing festival last week!!!"
        },

        {
          id: 8, 
          user_id: 4,
          title: "City", 
          photo_url: "https://images.unsplash.com/photo-1508030358362-c071fa056233?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80", 
          location: "Chicago, IL", 
          content: "Drone shot of this amaaazing city!!"
        },

        {
          id: 9, 
          user_id: 5,
          title: "Great wall of china", 
          photo_url: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80", 
          location: "Great Wall of China, China", 
          content: "Photo of the Great Wall of China"
        },

        {
          id: 10,
          user_id: 5,
          title: "City in the night", 
          photo_url: "https://images.unsplash.com/photo-1561488111-5d800fd56b8a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80", 
          location: "Sydney, Australia", 
          content: "Amazing photo of this beautiful city in the night from the water!"
        },
      ]);
    });
};
