var startups = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter', 'Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];
var groups = ['farmers', 'astronauts', 'children', 'programmers', 'students', 'dogs', 'teachers'];

var random1 = Math.floor((Math.random() * startups.length));
var random2 = Math.floor((Math.random() * groups.length));

console.log('A startup that is ' + startups[random1] + ', but for ' + groups[random2]);
