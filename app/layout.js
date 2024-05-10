import '../styles/css/plugins/animate.min.css';
import '../styles/css/plugins/fontawesome-6.css';
//import '../styles/css/plugins/jquery-ui.css';
import '../styles/css/plugins/swiper.min.css';
import '../styles/css/plugins/unicons.css';
import '../styles/css/plugins/nice-select.css';
import '../styles/css/vendor/bootstrap.min.css';
import '../styles/css/vendor/canela-font.css';
import '../styles/css/vendor/magnific-popup.css';
import '../styles/css/vendor/metismenu.css';
//import '../styles/css/style.css';
import '../styles/global.css';
import '../styles/scss/style.scss';

import 'metismenujs/style';
import Default_footer from "../partials/footer/default_footer";
export const metadata = {

}

export default function RootLayout({ children }) {

  
  return (
    
    <html lang="en">
      <head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        
        <link rel="shortcut icon" type="image/x-icon" href="assets/images/fav.png">
    </link>
    </head>
      <body>{children}
       <Default_footer className='v__1'/>
      </body>
     
    </html>
     
  )
}
