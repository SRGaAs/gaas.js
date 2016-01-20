import notificationTemplate from './templates/notification'
import './css/app.scss'

const icon_url = 'http://images.apple.com/v/mac/shared/osx/f/images/builtinapps/safari_nav_large.png';
const rootNode = document.querySelector('#summary-view-root');

let html = notificationTemplate({
  title: 'Frequent visitor',
  desc: 'Continuous log in for 30 days.',
  icon_url
});

rootNode.innerHTML = html;
