'use strict';

// =====================
// Main module
// =====================
(function() {
  angular.module('rsPokedex', ['rsPokedex.vendors', 'rsPokedex.scripts']);

  // =====================
  // Modules definition
  // =====================
  angular.module('rsPokedex.services', []);
  angular.module('rsPokedex.directives', []);
  angular.module('rsPokedex.components', []);
  angular.module('rsPokedex.routes', []);
  angular.module('rsPokedex.filters', []);
  angular.module('rsPokedex.controllers', []);
  angular.module('rsPokedex.constants', []);
  angular.module('rsPokedex.configs', []);

  // =====================
  // Vendors module
  // =====================
  angular.module('rsPokedex.vendors', [
    'ui.router',
    'toastr'
  ]);

  // =====================
  // Scripts module
  // =====================
  angular.module('rsPokedex.scripts', [
    'rsPokedex.constants',
    'rsPokedex.configs',
    'rsPokedex.services',
    'rsPokedex.routes',
    'rsPokedex.controllers',
    'rsPokedex.directives',
    'rsPokedex.components',
    'rsPokedex.filters'
  ]);
})();