ssm.addStates([{
  id: 'mobile',
  query: '(max-width: 767px)',
  onEnter: function(e) {
    console.log('enter mobile');
    app.header_menu.init(e.state.id);
  }
}, {
  id: 'tablet',
  query: '(min-width: 768px) and (max-width: 991px)',
  onEnter: function(e) {
    console.log('enter tablet');
    app.header_menu.init(e.state.id);
  }
}, {
  id: 'desktop',
  query: '(min-width: 992px)',
  onEnter: function(e) {
    console.log('enter desktop');
    app.header_menu.init(e.state.id);
  }
}]);
