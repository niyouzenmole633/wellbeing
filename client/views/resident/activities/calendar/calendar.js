Template.activityCalendar.rendered = function () {
  // Get reference to template instance
  const instance = this;

  // Update the calendar when instance data changes
  instance.autorun(function () {
    const residentActivities = Template.currentData().activities;
    //console.log(residentActivities);

    // Group activities by activity date
    const nestedActivities = d3.nest()
      .key(function (activity) {
        return activity.activityDate;
      });

    // Get a sum of activities
    const summedActivities = nestedActivities.rollup(function (activity) {
        return {
          duration: d3.sum(activity, function (activity) {
            return activity.duration;
          })
        }
      })
      .entries(residentActivities);

      summedActivities.map(function (activity) {
        // Create date and duration attributes with proper data types
        activity.timestamp = new Date(activity.key).getTime();
        activity.duration = parseInt(activity.values.duration);

        // Delete unused key and values
        delete activity.values
        delete activity.key;
      });

    // Set up the activity map graphic
    const activityMap = new ActivityMap(summedActivities, {
      "id": "#activity-calendar",
      "parent": "#activity-calendar-container",
      "fit": true,
      "title": "Activity Calendar ",
      "timeColumn": "timestamp",
      "valueColumn": "duration",
      "compact": false
    });

    // Trying to figure out how to re-render the data
    activityMap.process();

    // Render the activity calendar
    activityMap.render();
  });
};
