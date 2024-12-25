/**
 * @license
 * Copyright 2016 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'com.google.flow',
  name: 'FLOW',

  ids: [ 'name' ],

  properties: [
    {
      class: 'String',
      name: 'name'
    },
    {
      class: 'String',
      name: 'description'
    },
    {
      class: 'FObjectArray',
      of: 'com.google.flow.Property',
      name: 'memento'
      /*
      postSet: function(o, n) {
        this.instance_.memento_ = foam.JSON.compact.stringify(n);
        debugger;
      }
    },
    {
      class: 'String',
      name: 'memento_',
      hidden: true,
      postSet: function(o, n) {
        this.instance_.memento = foam.json.parse(n, null, this.__context__);
        debugger;
      }*/
    }
  ]
});
