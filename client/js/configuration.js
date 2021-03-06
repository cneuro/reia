/**
 * REIA - MIT license
 * https://github.com/cneuro/reia
 * client
 * @author Chris Nater
 * */

/// CREATED ///

Template.configuration.onCreated( function () {
  this.subscribe('metrics');
});

/// HELPERS ///

Template.configurationMetricsSummary.helpers({
  'columns': function () {
    return ['Active & inactive', 'Active', 'Inactive'];
  },
  'subColumns': function () {
    return ['Total', 'Inputs', 'Outputs'];
  },
  'activeSwitches': function () {
    return [null, true, false];
  },
  'notBasic': function (type, active) {
    return __getMetrics(
      { '$ne': 'basic' },
      type,
      _.isBoolean(active) ? { 'active': (active ? {'$ne': false} : false) } : {}
    );
  }
})

Template.configurationTabContent.helpers({
  'active': function () {
    return this.active !== false;
  },
  'tabContentData': function () {
    return Template.parentData();
  }
});

Template.configurationMetricsScoringFormRow.helpers({
  'unitType': function () {
    return Template.parentData().unitType || Template.parentData(2).unitType;
  },
  'points': function () {
    return Template.parentData().points[this.index];
  }
});

/// EXTENSIONS ///

Template.configurationMetricsPanelTitle.inheritsHelpersFrom('configuration');
Template.configurationMetricsSummary.inheritsHelpersFrom('configuration');
