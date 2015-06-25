AdminConfig = {
  name: "Juhani Wellbeing",
  adminEmails: ['test@test.com'],
  collections:
  {
    Residents: {
      icon: "users",
      color: "red",
      auxCollections: ['Homes'],
      tableColumns: [
        {label: "First name", name: "firstName"},
        {label: "Home", name: "homeName()"}
      ],
      extraFields: ['homeId']
    },
    Activities: {
      icon: "heartbeat",
      color: "green",
      tableColumns: [
        {label: "Resident(s)", name: "residentNames()"},
        {label: "Activity Type", name: "activityType()"},
        {label: "Duration", name: "duration"}
      ],
      auxCollections: ['Residents', 'ActivityTypes'],
      extraFields: ['residentIds', 'activityTypeId']
    },
    ActivityTypes: {
      icon: "heart-o",
      label: "Activity Types",
      color: "green",
      tableColumns: [
        {label: "Name", name: "name"}
      ]
    },
    Homes: {
      icon: "home",
      color: "yellow",
      auxCollections: ['Groups'],
      tableColumns: [
        {label: "Name", name: "name"},
        {label: "Group", name: "groupName()"}
      ],
      extraFields: ['groupId']
    },
    Groups: {
      icon: "sitemap",
      label: "Home Groups",
      color: "yellow",
      tableColumns: [
        {label: "Name", name: "name"}
      ]
    },
    'Meteor.roles': {
      label: 'Roles',
      color: 'blue',
      icon: 'user-md',
      tableColumns: [
        {label: 'Name', name: 'name'}
      ]
    }
  }
}
