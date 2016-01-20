import notificationTemplate from './templates/notification'
import summaryBoardTemplate from './templates/summary_board'
import './css/app.scss'

const icon_url = 'http://images.apple.com/v/mac/shared/osx/f/images/builtinapps/safari_nav_large.png';
const rootNode = document.querySelector('#summary-view-root');

const htmlToNode = (htmlString) => {
  let containerNode = document.createElement('div');
  containerNode.innerHTML = htmlString;
  return containerNode.children[0];
}

let html = notificationTemplate({
  title: 'Frequent visitor',
  desc: 'Continuous log in for 30 days.',
  icon_url
});
rootNode.appendChild( htmlToNode(html) );

html = summaryBoardTemplate({});
rootNode.appendChild( htmlToNode(html) );
