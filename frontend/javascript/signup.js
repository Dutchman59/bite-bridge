export function saveUserDetails() {
  const btn = document.getElementById('sign-up-button')
  if (!btn) return;
  btn.onclick = () => {


    const firstName = document.getElementById('firstname-input').value;
    const surName = document.getElementById('surname-input').value;
    const phone = document.getElementById('phone-input').value;
    const address = document.getElementById('address-input').value;
    const userName = document.getElementById('userName-input').value;
    const email = document.getElementById('email-input').value;
    const password = document.getElementById('password-input').value;
    if (!firstName || !email || !password) {
      alert("Fill all fields");
      return;
    }
    const user = {
      first: firstName,
      second: surName,
      phone: phone,
      address: address,
      userName: userName,
      email: email,
      password: password
    }

    localStorage.setItem('user', JSON.stringify(user))
    window.location.href = 'login.html'
  }

}

export function renderUserDetails() {
  const user = JSON.parse(localStorage.getItem('user'))
  console.log(user);
  
  let profileDetails = "";
  if (user) {
    profileDetails += `
    <div class="profile-left">
        <img src="../icons_images/1.jpg" />
        <h3>${user.userName}</h3>
        <h4>Name: <span>${user.first} ${user.second}</span></h3>
        <p>Email: <span>${user.email}</span></p>
        <p>Contacts: <span>${user.phone}</span></p>
        <p>Home: <span>${user.address}</span></p>
      </div>

      <div class="profile-right">
        <h3>Edit Profile</h3>

        <div class="form-group">
          <label>Full Name</label>
          <input type="text" value="${user.first} ${user.second}" />
        </div>

        <div class="form-group">
          <label>Email</label>
          <input type="email" value="${user.email}" />
        </div>

        <div class="form-group">
          <label>Phone</label>
          <input type="text" value="${user.phone}" />
        </div>

        <div class="form-group">
          <label>Address</label>
          <input type="text" value="${user.address}" />
        </div>

        <button class="save-btn">Save Changes</button>

        <div class="actions">
          <button class="logout">Logout</button>
          <button class="delete">Delete Account</button>
        </div>
      </div>
    `}
  else {
    profileDetails += `
 <div class="profile-left">
        <img src="../icons_images/s.jpg" >
        <h3>username</h3>
        <h4>Name: No account found <span></span></h3>
        <p>Email: <span>$</span></p>
        <p>Contacts: <span>$</span></p>
        <p>Home: <span>$</span></p>
      </div>

      <div class="profile-left">
      <button onclick="
      window.location.href= 'signup.html'
      " class="relocate">create account</button>
      </div>
      `
  }
  document.querySelector('.profile-container').innerHTML = profileDetails
}

export function removeUser() {
  const btn = document.querySelector('.logout')
  if (!btn) return;
  btn.onclick = () => {
    localStorage.removeItem('user')
    alert("user logout")
    window.location.href = 'signup.html'
  }
}

export function verifyUser() {
  const btn = document.getElementById('login-button')
  if (!btn) return;
  btn.onclick = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    let email = document.getElementById('email-input').value
    let userName = document.querySelector('.userName-input').value
    let password = document.getElementById('password-input').value
    if (!user) {
      alert("no account found sign up")
      window.location.href = 'signup.html'
      return
    }
    if ((user.email === email || user.userName === userName) && user.password === password) {
      window.location.href = 'home.html'
    }
    else {
      document.getElementById('email-input').value = "";
      document.getElementById('password-input').value = "";
      alert("incorrect email or password")
    }
  }


}

export function redirectUser  (){
  const link = document.querySelector('.home-link')
  const user = JSON.parse(localStorage.getItem('user'))
  if(!link)return;
  link.onclick = () =>{
  if(!user){
    window.location.href = 'signup.html'
    return
  }
  else{
    window.location.href = 'home.html'
  }
}
}

export function welcomeUser(){
  const user = JSON.parse(localStorage.getItem('user'))
  if(!user)return;
  let welcome = "" ;
  welcome = `
  <b class="welcome">Welcome back <span>${user.userName} ${user.second}</span> 👋<br>Ready to <span>order</span> something delicious</b>
  `
  document.querySelector('.welcome-container').innerHTML = welcome

}