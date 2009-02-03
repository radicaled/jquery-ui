/*
 * sortable_defaults.js
 */

var sortable_defaults = {
	accurateIntersection: true,
	appendTo: "parent",
	axis: false,
	cancel: ":input,option",
	connectWith: false,
	containment: false,
	cssNamespace: "ui",
	cursor: 'auto',
	cursorAt: false,
	delay: 0,
	disabled: false,
	distance: 1,
	dropOnEmpty: true,
	forcePlaceholderSize: false,
	forceHelperSize: false,
	grid: false,
	handle: false,
	helper: "original",
	items: "> *",
	opacity: false,
	placeholder: false,
	revert: false,
	scroll: true,
	scrollSensitivity: 20,
	scrollSpeed: 20,
	scope: "default",
	sortIndicator: "???",
	tolerance: "intersect",
	zIndex: 1000
};

commonWidgetTests('sortable', { defaults: sortable_defaults });