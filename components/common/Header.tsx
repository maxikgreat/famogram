import Router from 'next/router';

interface HeaderProps {
  routes: JSX.Element[],
}

export const Header = () => (
  <header>
    <div class="row align-items-center">
      <div class="col-lg-2 col-md-4">
        <div class="logo wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s"><a href="index.html"><img src="images/icons/logo.svg" alt="Brand" /></a></div>
      </div>
      <div class="col-lg-10 col-md-8">
        <nav class="navbar navbar-expand-md wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <img src="images/icons/menu-toggle.svg" alt="Toggle" />
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item first">
                <a class="nav-link" href="learn.html">Learn</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about-us.html">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="intgration.html">Integrations</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="support.html">Support</a>
              </li>
              <li class="nav-item">
                <a class="btn btn-border" class="nav-link" href="#">Login</a>
              </li>
              <li class="nav-item dropdown user-login">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <strong class="avatar lg"><img src="images/user-image.png" class="rounded-circle" alt="User" /></strong>
                  <span></span>
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#0"><img src="images/icons/profile.svg" alt="Profile" /> Profile</a>
                  <a class="dropdown-item active" href="#"><img src="images/icons/notifications.svg" alt="Notifications" /> Notifications</a>
                  <a class="dropdown-item" href="#"><img src="images/icons/messages.svg" alt="Messages" /> Messages</a>
                  <a class="dropdown-item" href="#"><img src="images/icons/settings.svg" alt="Settings" /> Settings</a>
                  <div class="btn-block"><a class="dropdown-item" href="#">Sign Out</a></div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>  
  </header>
)
