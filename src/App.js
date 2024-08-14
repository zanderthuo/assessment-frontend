import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import PrivateRoute from './route/PrivateRoute';
import LandingPage from './pages/LandingPage';
import ErrorPage from './pages/ErrorPage';
import LoginPage from './pages/auth/LoginPage';
import ListUserPage from './pages/users/ListUserPage';
// import HomePage from './pages/HomePage';
// import ViewUserPage from './pages/ViewUserPage';
// import ViewAlbumPage from './pages/ViewAlbumPage';
// import ViewPhotoPage from './pages/ViewPhotoPage';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" component={LandingPage} exact />
          <Route path="/login" component={LoginPage} />
          <PrivateRoute path="/users" component={ListUserPage} />
          {/* <PrivateRoute path="/home" component={HomePage} />
          <PrivateRoute path="/user/:userId" component={ViewUserPage} />
          <PrivateRoute path="/album/:albumId" component={ViewAlbumPage} />
          <PrivateRoute path="/photos/:photoId" component={ViewPhotoPage} /> */}
          <Route component={ErrorPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
