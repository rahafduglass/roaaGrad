// Replace 'I9rEt345cFtIQY8km' and 'YOUR_TEMPLATE_ID' with your EmailJS User ID and email template ID respectively
emailjs.init('-K0V4mgbz-q8ToSevoIUP');

document.getElementById('message-form').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form submission

  var messageInput = document.getElementById('message-input').value;

  var templateParams = {
    message: messageInput
  };

  // Replace 'service_0l1fi9o' with the ID of the EmailJS service you created
  emailjs.send('service_0l1fi9o', 'template_e1zmgth', templateParams)
    .then(function(response) {
      console.log('Email sent successfully!', response.status, response.text);
      // Display success message or take any other actions
    }, function(error) {
      console.error('Email sending failed!', error);
      // Display error message or take any other actions
    });
});