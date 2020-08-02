//= ../../bower_components/jquery/dist/jquery.js
//= owl.carousel.js
//= jquery.mmenu.all.js
//= fotorama.js
//= jquery.matchHeight.js
$(document).ready(function () {

	// SLIDER
	var sliderCarousel = $('#slider-carousel')
	sliderCarousel.owlCarousel({
		items:1,
		nav:false,
		dots:false
	});

	// MMENU
	var menu = $('#mmenu').mmenu({
		"extensions": [
            "fx-menu-slide",
            "position-right",
            "pagedim-black",
            "border-none"
        ],
        navbar: {
			add: false
        },
        "navbars": [
            {
               "position": "top",
               "content": [
                  "close",
                  "searchfield"
                ]
            }
        ]
		}, {
			clone: true
		});
	var menuBtn = $('#mmenu-btn');
	var apiMmenu = menu.data('mmenu');
	menuBtn.click(function() {
		menuBtn.addClass('is-active');
		setTimeout(function() {
			apiMmenu.open();
		},200);
	});
	apiMmenu.bind('close:finish', function() {
		menuBtn.removeClass('is-active');
	});

	// MODAL FILTER
	var btnModal = $('.sorter_filter');
	var modal = $('.modal-filter');
	var modalClose = $('.modal-filter_close');
	btnModal.click(function() {
		modal.fadeIn(200);
	});
	modalClose.click(function() {
		modal.fadeOut(200);
	});

	var filterTitle = $('#filter-title');
	var filterContent = $('#filter-content');
	var filterSvg = $('#filter-svg');
	filterTitle.click(function() {
		if (filterContent.css('display')  == 'none') {
			filterContent.fadeIn(0, function() {
				filterContent.css({
					display: 'flex',
				});
			});
			filterSvg.css({
				transform: 'rotate(270deg)',
			});
		}
		else {
			filterContent.fadeOut(0, function() {
				filterContent.css({
					display: 'none',
				});
			});
			filterSvg.css({
				transform: 'rotate(90deg)',
			});
		}
	});

	var sizeTitle = $('#size-title');
	var sizeContent = $('#size-content');
	var sizeSvg = $('#size-svg');
	sizeTitle.click(function() {
		if (sizeContent.css('display')  == 'none') {
			sizeContent.fadeIn(0, function() {
				sizeContent.css({
					display: 'flex',
				});
			});
			sizeSvg.css({
				transform: 'rotate(270deg)',
			});
		}
		else {
			sizeContent.fadeOut(0, function() {
				sizeContent.css({
					display: 'none',
				});
			});
			sizeSvg.css({
				transform: 'rotate(90deg)',
			});
		}
	});

	// SCROLL
	$('a[href^="#"]').click(function () { 
	    var elementClick = $(this).attr("href");
	    var destination = $(elementClick).offset().top;
	    $('html').animate( { scrollTop: destination }, 800 );
  	});

  	// FOTORAMA
  	$('#fotorama').fotorama({
  		width:'100%',
  		ratio:1.7/1,
  		nav:'thumbs',

  	});

  	// DROPDOWN
  	var dropdown = $('.dropdown');
  	var dropdownPlaceholder = $('.dropdown_placeholder');
  	var dropdownOption = $('.dropdown_option');
  	var dropdownMenu = $('.dropdown_menu');
  	var dropdownControl = $('.dropdown_control');
  	dropdownControl.click(function() {
  		if (dropdown.hasClass('is-active')) {
  			dropdown.removeClass('is-active');
  			dropdownMenu.removeClass('visible');
  			dropdownMenu.addClass('hide');
  		}
  		else {
  			dropdown.addClass('is-active');
  			dropdownMenu.removeClass('hide');
  			dropdownMenu.addClass('visible');
  		}
  	});
  	dropdownOption.click(function() {
  		dropdown.removeClass('is-active');
  		dropdownMenu.removeClass('visible');
  		dropdownMenu.addClass('hide');
  		dropdownOption.removeClass('is-selected');
  		$(this).addClass('is-selected');
  		var textOption = $(this).text();
  		dropdownPlaceholder.text(textOption);
  	});

	// MAP TABS
	var mapList = $('#map1');
	var mapMap = $('#map2');
	var mapTab1 = $('#map-tab-1');
	var mapTab2 = $('#map-tab-2');
	mapTab1.click(function() {
		mapMap.css('display','none');
		mapList.css('display','block');
	});
	mapTab2.click(function() {
		mapList.css('display','none');
		mapMap.css('display','block');
	});

	function setup_for_min_width(mql768) {
		if (mql768.matches) {
			mapList.css('display','block');
			mapMap.css('display','block');
		}
	};
	var mql768 = window.matchMedia("screen and (min-width: 768px)"); 
	mql768.addListener(setup_for_min_width);
	setup_for_min_width(mql768);

	function setup_for_max_width(mql767) {
		if (mql767.matches) {
			mapList.css('display','block');
			mapMap.css('display','none');
		}
	};
	var mql767 = window.matchMedia("screen and (max-width: 767px)"); 
	mql767.addListener(setup_for_max_width);
	setup_for_max_width(mql767);

	// MAP STORES
	var mapCities = $('#map_cities');
	var mapStores = $('#map_stores');
	var mapStoresCounter = mapStores.children('li').length;
	var mapCity = $('#map_cities div');
	var mapCountry = $('#map_country');
	var mapCityCounter = $('#map_city');
	var backBtn = $('#map_back-btn');
	mapCity.click(function() {
		mapCities.css('display','none');
		mapStores.css('display','block');
		mapCountry.text($(this).text());
		mapCityCounter.text(mapStoresCounter + ' STORES');
		backBtn.css('display','block');
	});
	backBtn.click(function() {
		mapStores.css('display','none');
		mapCities.css('display','block');
		backBtn.css('display','none');
	});

	// STORE INFO
	var searchPanel = $('.search-panel-store-content');
	var searchMore = $('.search-panel-more-info');
	var storeInfo = $('.store-info');
	searchPanel.click(function() {
		storeInfo.addClass('store-info-open');
	});

	// TECH-DISCOVER CAROUSEL
	var techCarousel1 = $('#tech-discover_carousel--1');
	techCarousel1.owlCarousel({
		items:1,
		nav:false,
		dots:true,
		responsive:{ //Адаптация в зависимости от разрешения экрана
			768:{
				items:2
			},
			1024:{
				items:3
			}
		}
	});
	$('.tech-discover_btn--next').click(function() {
    	techCarousel1.trigger('next.owl.carousel');
	})
	$('.tech-discover_btn--prev').click(function() {
	    techCarousel1.trigger('prev.owl.carousel');
	})

	// MAP
	function initMap() {
		var centerLatLng = new google.maps.LatLng(65.112573, 17.748286);
		var mapOptions = {
			center: centerLatLng,
			zoom: 4
		};
		var map = new google.maps.Map(document.getElementById("map"), mapOptions);
	};
	google.maps.event.addDomListener(window, "load", initMap);

});