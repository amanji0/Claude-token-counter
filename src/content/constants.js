(() => {
	'use strict';

	const CC = (globalThis.ClaudeCounter = globalThis.ClaudeCounter || {});

	CC.DOM = Object.freeze({
		CHAT_MENU_TRIGGER: '[data-testid="chat-menu-trigger"]',
		MODEL_SELECTOR_DROPDOWN: '[data-testid="model-selector-dropdown"]',
		CHAT_PROJECT_WRAPPER: '.chat-project-wrapper',
		BRIDGE_SCRIPT_ID: 'cc-bridge-script'
	});

	CC.CONST = Object.freeze({
		CACHE_WINDOW_MS: 5 * 60 * 1000,
		CONTEXT_LIMIT_TOKENS: 200000,
		VERSION: '0.5.0'
	});

	CC.COLORS = Object.freeze({
		PROGRESS_FILL_DARK: '#818cf8',
		PROGRESS_FILL_LIGHT: '#6366f1',
		PROGRESS_OUTLINE_DARK: 'rgba(255,255,255,0.15)',
		PROGRESS_OUTLINE_LIGHT: 'rgba(0,0,0,0.12)',
		PROGRESS_MARKER_DARK: '#e0e7ff',
		PROGRESS_MARKER_LIGHT: '#312e81',
		RED_WARNING: '#ef4444',
		BOLD_LIGHT: '#1e1b4b',
		BOLD_DARK: '#e0e7ff',
		ACCENT_GRADIENT_START: '#6366f1',
		ACCENT_GRADIENT_END: '#8b5cf6',
		GLASS_BG_DARK: 'rgba(30, 27, 75, 0.6)',
		GLASS_BG_LIGHT: 'rgba(255, 255, 255, 0.7)',
		GLASS_BORDER_DARK: 'rgba(255, 255, 255, 0.1)',
		GLASS_BORDER_LIGHT: 'rgba(0, 0, 0, 0.08)'
	});
})();
