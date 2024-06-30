document.getElementById('login-form').addEventListener('submit', async function(event) {
  event.preventDefault(); // Prevent the default form submission

  const personalId = document.getElementById('personalId-input').value;

  const response = await fetch('127.0.0.1:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ personalId })
  });

  if (response.ok) {
    //const accessToken=response.accessToken;
    //console.log(`accessToken when passed as a string is: ${accessToken}`);
    
    const data = await response.json();
    const accessToken =await data.accessToken;
    console.log(`the data is : ${JSON.stringify(data)}`);
    console.log(`the token is : ${JSON.stringify(accessToken)}`);
    console.log('Raw data:', data);
    console.log(`the token is ${accessToken}`);

/*
    // Store the token in localStorage or sessionStorage
    localStorage.setItem('token', token);

    // Redirect or load the home page
    window.location.href = '/home';
  */
  } else {
    // Handle login error
    alert('Login failed');
  }
});
