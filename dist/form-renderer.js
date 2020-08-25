(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@/js/renderer.vue'), require('@/js/sections/buttonGroup.vue'), require('@/js/sections/cascader.vue'), require('@/js/sections/input.vue'), require('@/js/sections/list.vue'), require('@/js/sections/select.vue'), require('@/js/sections/textarea.vue'), require('@/js/sections/title.vue'), require('@/js/sections/uploader.vue')) :
	typeof define === 'function' && define.amd ? define(['exports', '@/js/renderer.vue', '@/js/sections/buttonGroup.vue', '@/js/sections/cascader.vue', '@/js/sections/input.vue', '@/js/sections/list.vue', '@/js/sections/select.vue', '@/js/sections/textarea.vue', '@/js/sections/title.vue', '@/js/sections/uploader.vue'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.LargeList = {}, global.renderer_vue, global.buttonGroup_vue, global.cascader_vue, global.input_vue, global.list_vue, global.select_vue, global.textarea_vue, global.title_vue, global.uploader_vue));
}(this, (function (exports, renderer_vue, buttonGroup_vue, cascader_vue, input_vue, list_vue, select_vue, textarea_vue, title_vue, uploader_vue) { 'use strict';

	function _interopNamespace(e) {
		if (e && e.__esModule) { return e; } else {
			var n = Object.create(null);
			if (e) {
				Object.keys(e).forEach(function (k) {
					if (k !== 'default') {
						var d = Object.getOwnPropertyDescriptor(e, k);
						Object.defineProperty(n, k, d.get ? d : {
							enumerable: true,
							get: function () {
								return e[k];
							}
						});
					}
				});
			}
			n['default'] = e;
			return Object.freeze(n);
		}
	}

	var renderer_vue__namespace = /*#__PURE__*/_interopNamespace(renderer_vue);
	var buttonGroup_vue__namespace = /*#__PURE__*/_interopNamespace(buttonGroup_vue);
	var cascader_vue__namespace = /*#__PURE__*/_interopNamespace(cascader_vue);
	var input_vue__namespace = /*#__PURE__*/_interopNamespace(input_vue);
	var list_vue__namespace = /*#__PURE__*/_interopNamespace(list_vue);
	var select_vue__namespace = /*#__PURE__*/_interopNamespace(select_vue);
	var textarea_vue__namespace = /*#__PURE__*/_interopNamespace(textarea_vue);
	var title_vue__namespace = /*#__PURE__*/_interopNamespace(title_vue);
	var uploader_vue__namespace = /*#__PURE__*/_interopNamespace(uploader_vue);



	exports.Renderer = renderer_vue__namespace;
	exports.ItemButtonGroup = buttonGroup_vue__namespace;
	exports.ItemCascader = cascader_vue__namespace;
	exports.ItemInput = input_vue__namespace;
	exports.ItemList = list_vue__namespace;
	exports.ItemSelect = select_vue__namespace;
	exports.ItemTextarea = textarea_vue__namespace;
	exports.ItemTitle = title_vue__namespace;
	exports.ItemUploader = uploader_vue__namespace;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
