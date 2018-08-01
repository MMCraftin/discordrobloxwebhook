/*
 * JavaScript (using jQuery) POST request to send a message to a Discord channel via a webhook.
 * See more options/info about it @ https://discordapp.com/developers/docs/resources/webhook#execute-webhook
 */

$.ajax({
  type: 'POST',
  // The webhook URL.
  url: 'https://discordapp.com/api/webhooks/474260876837257226/9oLUP1O59lX_Y9tcrK7TLxbpy14E7ymmC_J2l_Q3abcQqoIvU90LiT16xCpTRHbvNGDW',
  // Message data.
  data: JSON.stringify({
    // The username to be displayed.
    username: 'Nobody',
    // The avatar to be displayed.
    avatar_url: 'https://cdn.discordapp.com/avatars/411256446638882837/9a12fc7810795ded801fdb0401db0be6.png',
    // Contents of the message to be sent.
    content: 'Message content',
    // Embeds to be sent.
    embeds: [{
      // Embed title - link on 2nd row.
      title: 'Title',
      // Embed description - text on 3rd row.
      description: 'Description',
      // Link for title and thumbnail.
      url: 'https://gist.github.com/TheDragonRing/ea61c8d21db17913a43da92efe0de634',
      // Decimal number colour of the side of the embed.
      color: 11730954,
      // Embed image - picture below description (and fields).
      image: {
        url: 'https://cdn.discordapp.com/avatars/411256446638882837/9a12fc7810795ded801fdb0401db0be6.png'
      },
      // Embed author - icon next to text at top (text is a link).
      author: {
        name: 'TheDragonRing',
        url: 'https://thedragonring.me',
        icon_url: 'https://avatars0.githubusercontent.com/u/16874139'
      },
      // Embed thumbnail - small image in top right corner.
      thumbnail: {
        url: 'https://cdn.discordapp.com/avatars/411256446638882837/9a12fc7810795ded801fdb0401db0be6.png'
      },
      // Custom embed fields with a bold title/name, and normal content/value below title - located below description, above image.
      fields: [{
        name: 'Field',
        value: 'Field value'
      }],
      // Embed footer - icon next to text at bottom.
      footer: {
        text: 'Footer',
        icon_url: 'https://cdn.discordapp.com/avatars/411256446638882837/9a12fc7810795ded801fdb0401db0be6.png'
      }
    }]
  }),
  // Content type.
  contentType: 'application/json',
  // Success callback.
  success: function (data) { },
  // Error callback.
  error: function (data) {
    alert(data.responseText);
  }
});
