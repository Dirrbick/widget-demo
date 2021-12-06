'use strict';

const select = document.getElementById('query-info-container');




VSS.init({
  explicitNotifyLoaded: true,
  usePlatformStyles: true
});

VSS.require(["TFS/Dashboards/WidgetHelpers", "TFS/WorkItemTracking/RestClient"], 
  function (WidgetHelpers, TFS_Wit_WebApi) {
      WidgetHelpers.IncludeWidgetStyles();
      VSS.register("HelloWorldWidget2", function () {                
          var projectId = VSS.getWebContext().project.id;

          const getInfo = (e) => {
            const url = 'https://swapi.dev/api/people';
          
            const result = fetch(url)
              .then(response => response.json())
              .then(data => {
                data.results.forEach(item => {
                  let el = document.createElement("option");
                  el.textContent = item.name;
                  el.value = item.name
                  select.appendChild(el);
                  return;
              });
            return result;
            })
          }
          
          return {
              load: function (widgetSettings) {
                  // Set your title
                  var $title = $('h2.title');
                  $title.text('Hello World');

                  return getInfo(widgetSettings);
              }
          }
      });
  VSS.notifyLoadSucceeded();
});       


