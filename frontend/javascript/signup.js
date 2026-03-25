export function saveUserDetails() {
  const btn = document.getElementById('sign-up-button')
  if (!btn) return;
  btn.onclick = () => {


    const firstName = document.getElementById('firstname-input').value;
    const surName = document.getElementById('surname-input').value;
    const email = document.getElementById('email-input').value;
    const password = document.getElementById('password-input').value;
    if (!firstName || !email || !password) {
      alert("Fill all fields");
      return;
    }
    const user = {
      first: firstName,
      second: surName,
      email: email,
      password: password
    }

    localStorage.setItem('user', JSON.stringify(user))
    window.location.href = 'login.html'
  }

}

export function renderUserDetails() {
  const user = JSON.parse(localStorage.getItem('user'))
  let profileDetails = "";
  if (user) {
    profileDetails += `
    <div class="profile-left">
        <img src="../icons_images/profile.jpg" />
        <h3>${user.first} ${user.second}</h3>
        <p>${user.email}</p>
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
          <input type="text" value="+254 712 345 678" />
        </div>

        <div class="form-group">
          <label>Address</label>
          <input type="text" value="Thika, Kenya" />
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
    let password = document.getElementById('password-input').value
    if (!user) {
      alert("no account found sign up")
      window.location.href = 'signup.html'
      return
    }
    if (user.email === email && user.password === password) {
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
  <b class="welcome">Welcome back <span>${user.first} ${user.second}</span> 👋<br>Ready to <span>order</span> something delicious</b>
  `
  document.querySelector('.welcome-container').innerHTML = welcome

}