import * as BlocklyJavaScript from 'blockly/javascript';
import * as BlocklyAll from 'blockly';
import { localize } from '@deriv-com/translations';
import { setColors } from './hooks/colours.js';
import goog from './goog.js';

window.goog = goog;

/**
 * Reconstruct a single Blockly namespace object from the named ESM exports.
 * blockly v13 (this fork) ships index.mjs which has NO default export —
 * every class/util is a named export.  We therefore spread them all onto one
 * plain object so legacy code that expects window.Blockly.<Class> keeps working.
 */
const buildBlocklyNamespace = () => {
    // BlocklyAll is the ESM namespace; spread all named exports into one object.
    const ns = { ...BlocklyAll };
    return ns;
};

const modifyBlocklyWorkSpaceContextMenu = () => {
    const exclude_item = ['blockInline'];
    exclude_item.forEach(item_id => {
        const option = window.Blockly.ContextMenuRegistry.registry.getItem(item_id);
        option.preconditionFn = () => 'hidden';
    });

    const items_to_localize = {
        undoWorkspace: localize('Undo'),
        redoWorkspace: localize('Redo'),
        cleanWorkspace: localize('Clean up Blocks'),
        collapseWorkspace: localize('Collapse Blocks'),
        expandWorkspace: localize('Expand Blocks'),
        workspaceDelete: localize('Delete All Blocks'),
    };

    Object.keys(items_to_localize).forEach(item_id => {
        const option = window.Blockly.ContextMenuRegistry.registry.getItem(item_id);
        option.displayText = localize(items_to_localize[item_id]);
    });
};

export const loadBlockly = async isDarkMode => {
    // Build the Blockly namespace from static named imports (no dynamic import needed).
    const BlocklyCore = buildBlocklyNamespace();

    if (!BlocklyCore || !BlocklyCore.Generator) {
        console.error('[loadBlockly] Blockly failed to load — Generator class not found. Skipping workspace initialisation.');
        return;
    }

    window.Blockly = BlocklyCore;
    window.Blockly.Colours = {};

    const BlocklyGenerator = new window.Blockly.Generator('code');
    const BlocklyJavaScriptGenerator = {
        ...BlocklyJavaScript,
        ...BlocklyGenerator,
    };
    window.Blockly.JavaScript = BlocklyJavaScriptGenerator;

    if (window.Blockly.Theme && window.Blockly.Themes?.Zelos) {
        window.Blockly.Themes.zelos_renderer = window.Blockly.Theme.defineTheme('zelos_renderer', {
            base: window.Blockly.Themes.Zelos,
            componentStyles: {},
        });
    }

    modifyBlocklyWorkSpaceContextMenu();
    setColors(isDarkMode);
    await import('./hooks/index.js');
    await import('./blocks');
};
