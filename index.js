var app = angular.module('app', ['ui.router']);

app.config(['$stateProvider', '$locationProvider', '$httpProvider', '$urlRouterProvider', function($stateProvider, $locationProvider, $httpProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    views: {
      'main': {
        templateUrl: '/views/home.html',
        controller: 'HomeController'
      }
    }
  });
}]);

app.controller('HomeController', ['$scope', function($scope) {

  // $(document).ready(function() {
  //   $('.insta-post').addClass('animate-hidden').viewportChecker({
  //      classToAdd: 'animated fadeIn animate-visible',
  //      offset: 100
  //    });
  // });

  var menuChanged = false;
  var element = '.navbar-custom';
  var navHeight = 5;
  var topNavCss = {
    'background': '#fff',
    'box-shadow': 'darkgrey 0 1px 2px 0px',
    'color': '#000'
  };
  var scrollNavCss = {
    'box-shadow': 'none',
    'color': '#fff'
  };

  if (window.pageYOffset > navHeight) {
      $(element).css(topNavCss);
  }
  $(window).scroll(function (event) {
      var scroll = $(window).scrollTop();
      if (scroll > navHeight && !menuChanged) {
        $(element).css(topNavCss);
        $(element + ' a').css({color: '#000'});
        $('.logo').css({background: '#e1cebc'});
        if(scroll < 10) {
          $(element).stop(true, false).animate({ top: '-3px' }, 150, function () {
            $(element).stop(true, false).animate({ top: '0' }, 150);
          });
        }
        menuChanged = true;
      }
      else if (scroll < navHeight && menuChanged) {
          $(element).css(scrollNavCss);
          $(element + ' a').css({color: '#fff'});
          $('.logo').css({background: '#fff'});
          $(element).stop(true, false).animate({ backgroundColor: 'transparent' }, 300);
          menuChanged = false;
      }
  });
  var toggle = false;
  $scope.mobileNav = function() {
    toggle = !toggle;
    if(toggle) {
      $('.navbar-custom').css({background: '#fff', color: 'black'});
      $(element + ' a').css({color: '#000'});
      $('.logo').css({background: '#e1cebc'});
    }
    else if($(window).scrollTop() < 5) {
      setTimeout(function() {
        $('.logo').css({background: '#fff'});
        $('.navbar-custom').css({background: 'transparent', color: 'white'});
        $(element + ' a').css({color: '#fff'});
      }, 500);
    }
  };

  $scope.scrollToElement = function(element) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $(element).offset().top - 50
    }, 500);
  };

  $scope.posts = [
    {
      image: 'images/our_story/our_story-1.png',
      location: 'l.n.scapades',
      city: 'The Internet',
      date: '10/11/15',
      title: 'We Met Through Written Word',
      description: 'She was in Las Vegas, he was in Dallas. Carefully crafted emails shed light into our inner-workings.',
      index: 1
    },
    {
      image: 'images/our_story/our_story-2.jpg',
      location: 'l.n.scapades',
      city: 'Las Vegas, NV',
      date: '12/31/15',
      title: 'NYE - Our First Meeting',
      description: 'With a backdrop of romanticism, expectations and reality converged. The result? Uncertainty and a kiss.',
      index: 2
    },
    {
      image: 'images/our_story/our_story-3.jpg',
      location: 'l.n.scapades',
      city: 'The Internet',
      date: '1/10/16',
      title: 'A Fitting First Picture',
      description: 'At least one thing was certain; we could talk! Cheesy gifs and pixelated dates gradually filled our evenings.',
      index: 3
    },
    {
      image: 'images/our_story/our_story-4.jpg',
      location: 'l.n.scapades',
      city: 'Las Vegas, NV',
      date: '2/4/16',
      title: 'Meet The Parents',
      description: 'Hiking, pickleball, donuts, and board games. Analysis / data collection in high gear on both sides!',
      index: 4
    },
    {
      image: 'images/our_story/our_story-5.jpg',
      location: 'l.n.scapades',
      city: 'Big Sur, CA',
      date: '2/13/16',
      title: 'A Little Time To Think',
      description: 'With an air of uncertainty lingering, Lisa tried to escape via a girls trip while Shawn optimistically strategized.',
      index: 5
    },
    {
      image: 'images/our_story/our_story-6.jpg',
      location: 'l.n.scapades',
      city: 'Seattle, WA',
      date: '3/20/16',
      title: 'Persistence',
      description: 'It began as a last-ditch effort to gauge potential but ended with tearful goodbyes and, "You do it for me Lisa." ',
      index: 6
    },
    {
      image: 'images/our_story/our_story-7.jpg',
      location: 'l.n.scapades',
      city: 'Cozumel, Mexico',
      date: '4/11/16',
      title: 'Mexican Birthday',
      description: 'The new decade began with tropical water and ill-advised scooter rentals. The first of many foreign ventures!',
      index: 7
    },
    {
      image: 'images/our_story/our_story-8.jpg',
      location: 'l.n.scapades',
      city: 'Dallas, TX',
      date: '5/7/16',
      title: 'Hello Dallas',
      description: ' Hipster neighborhoods, Tex-Mex cousine, and a rodeo rounded off the exploration of big D.',
      index: 8
    },
    {
      image: 'images/our_story/our_story-9.jpg',
      location: 'l.n.scapades',
      city: 'Carlsbad Caverns, NM',
      date: '6/4/16',
      title: 'Goodbye Dallas.',
      description: 'Neither of us knew what would come of this move but we embraced the unknown and put faith in love.',
      index: 9
    },
    {
      image: 'images/our_story/our_story-10.jpg',
      location: 'l.n.scapades',
      city: 'Chicago, IL',
      date: '10/17/16',
      title: 'We Travel Well Together',
      description: 'Through ups and downs, travel has been a constant in the relationship. We came to know each other through it.',
      index: 10
    },
    {
      image: 'images/our_story/our_story-11.jpg',
      location: 'l.n.scapades',
      city: 'Brianhead, UT',
      date: '12/25/16',
      title: 'Christmas Shenanigans',
      description: 'New family relationships forged through tight quarters, competiton, and no shortage of sledding!',
      index: 11
    },
    {
      image: 'images/our_story/our_story-12.jpg',
      location: 'l.n.scapades',
      city: 'Denver, CO',
      date: '1/15/17',
      title: 'Let\'s Doing This Thing',
      description: 'Keeping in harmony with our travel theme, it seemed only fitting to pop the question in the mountains of CO.',
      index: 12
    }
  ];

  function detectDevice() {
    if (window.matchMedia("(max-width: 767px)").matches) {
      $scope.isMobile = true;
      $scope.isTablet = false;
      sortPosts([1,2,3,4,5,6,7,8,9,10,11,12]);
    }
    else if (window.matchMedia("(min-width: 768px) and (max-width: 991px)").matches) {
      $scope.isTablet = true;
      $scope.isMobile = false;
      sortPosts([1,2,4,3,5,6,8,7,9,10,12,11]);
    }
    else {
      $scope.isMobile = false;
      $scope.isTablet = false;
      sortPosts([1,2,3,6,5,4,7,8,9,12,11,10]);
    }
  }

  function sortPosts(posts) {
    $scope.postOrder = [];
    for (var i = 0; i < posts.length; i++) {
      for (var j = 0; j < $scope.posts.length; j++) {
        if(posts[i] === $scope.posts[j].index) {
          $scope.postOrder.push($scope.posts[j]);
        }
      }
    }
  }

  detectDevice();

  window.onresize = function() {
    detectDevice();
    $scope.$apply();
  };
}]);
