export default class AuthService {

  constructor(domain) {
    this.domain = domain || 'http://localhost:3030';
    this.fetch = this.fetch.bind(this);
    this.login = this.login.bind(this);
    this.getProfile = this.getProfile.bind(this);
  }

  login(email, password, strategy = 'local') {

    // Get a token and user
    return this.fetch(`${this.domain}/authentication`, {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
        strategy
      })
    }).then(res => {
      this.setToken(res.accessToken);
      this.setProfile(res.user);
      return Promise.resolve(res);
    });

  }

  loggedIn() {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken();
    return !!token && !this._isTokenExpired(token); //TODO: work on this function
  }

  setProfile(profile) {
    // Saves profile data to localStorage
    localStorage.setItem('this_user', JSON.stringify(profile));
  }

  getProfile() {
    // Retrieves the profile data from localStorage
    const profile = localStorage.getItem('this_user');
    return profile ? JSON.parse(localStorage.profile) : {};
  }

  setToken(idToken) {
    // Saves user token to localStorage
    localStorage.setItem('this_token', idToken);
  }

  getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem('this_token');
  }

  logout() {
    // Clear user token and profile data from localStorage
    localStorage.removeItem('this_token');
    localStorage.removeItem('this_user');
    return true;
  }

  _checkStatus(response) {
    // raises an error in case response status is not a success
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      let error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  }

  _isTokenExpired() {
    return false;
  }

  fetch(url, options) {
    // performs api calls sending the required authentication headers
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    if (this.loggedIn()) {
      headers['Authorization'] = 'Bearer ' + this.getToken();
    }

    return fetch(url, {
      headers,
      ...options
    })
      .then(this._checkStatus)
      .then(response => response.json());
  }
}
