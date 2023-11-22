// paste text styles
"object" != typeof JSON && (JSON = {}), function () { "use strict"; var rx_one = /^[\],:{}\s]*$/, rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, rx_four = /(?:^|:|,)(?:\s*\[)+/g, rx_escapable = /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta, rep; function f(t) { return t < 10 ? "0" + t : t } function this_value() { return this.valueOf() } function quote(t) { return rx_escapable.lastIndex = 0, rx_escapable.test(t) ? '"' + t.replace(rx_escapable, function (t) { var e = meta[t]; return "string" == typeof e ? e : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4) }) + '"' : '"' + t + '"' } function str(t, e) { var r, n, o, u, f, a = gap, i = e[t]; switch (i && "object" == typeof i && "function" == typeof i.toJSON && (i = i.toJSON(t)), "function" == typeof rep && (i = rep.call(e, t, i)), typeof i) { case "string": return quote(i); case "number": return isFinite(i) ? String(i) : "null"; case "boolean": case "null": return String(i); case "object": if (!i) return "null"; if (gap += indent, f = [], "[object Array]" === Object.prototype.toString.apply(i)) { for (u = i.length, r = 0; r < u; r += 1)f[r] = str(r, i) || "null"; return o = 0 === f.length ? "[]" : gap ? "[\n" + gap + f.join(",\n" + gap) + "\n" + a + "]" : "[" + f.join(",") + "]", gap = a, o } if (rep && "object" == typeof rep) for (u = rep.length, r = 0; r < u; r += 1)"string" == typeof rep[r] && (o = str(n = rep[r], i)) && f.push(quote(n) + (gap ? ": " : ":") + o); else for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (o = str(n, i)) && f.push(quote(n) + (gap ? ": " : ":") + o); return o = 0 === f.length ? "{}" : gap ? "{\n" + gap + f.join(",\n" + gap) + "\n" + a + "}" : "{" + f.join(",") + "}", gap = a, o } } "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function () { return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null }, Boolean.prototype.toJSON = this_value, Number.prototype.toJSON = this_value, String.prototype.toJSON = this_value), "function" != typeof JSON.stringify && (meta = { "\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\" }, JSON.stringify = function (t, e, r) { var n; if (indent = gap = "", "number" == typeof r) for (n = 0; n < r; n += 1)indent += " "; else "string" == typeof r && (indent = r); if ((rep = e) && "function" != typeof e && ("object" != typeof e || "number" != typeof e.length)) throw new Error("JSON.stringify"); return str("", { "": t }) }), "function" != typeof JSON.parse && (JSON.parse = function (text, reviver) { var j; function walk(t, e) { var r, n, o = t[e]; if (o && "object" == typeof o) for (r in o) Object.prototype.hasOwnProperty.call(o, r) && (void 0 !== (n = walk(o, r)) ? o[r] = n : delete o[r]); return reviver.call(t, e, o) } if (text = String(text), rx_dangerous.lastIndex = 0, rx_dangerous.test(text) && (text = text.replace(rx_dangerous, function (t) { return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4) })), rx_one.test(text.replace(rx_two, "@").replace(rx_three, "]").replace(rx_four, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({ "": j }, "") : j; throw new SyntaxError("JSON.parse") }) }();

if (aeVersionHigherThan("24.0.00")) {
  pasteTextStylesMograph_v24();
} else {
  pasteTextStylesMograph_v23();
}

function getStyleBanditStylesPath() {
  var folderPath;

  if ($.os.indexOf("Windows") !== -1) {
    // Windows path
    folderPath = Folder.userData.toString() + "/Mograph Mindset/Style Bandit/styles.json";
  } else {
    // macOS path
    folderPath = Folder.userData.toString() + "/Mograph Mindset/Style Bandit/styles.json";
  }

  return folderPath;
}

function getStyleBanditPath() {
  var folderPath;

  if ($.os.indexOf("Windows") !== -1) {
    // Windows path
    folderPath = Folder.userData.toString() + "/Mograph Mindset/Style Bandit";
  } else {
    // macOS path
    folderPath = Folder.userData.toString() + "/Mograph Mindset/Style Bandit";
  }

  return folderPath;
}

function getMographMindsetPath() {
  var folderPath;

  if ($.os.indexOf("Windows") !== -1) {
    // Windows path
    folderPath = Folder.userData.toString() + "/Mograph Mindset";
  } else {
    // macOS path
    folderPath = Folder.userData.toString() + "/Mograph Mindset";
  }

  return folderPath;
}

function isSecurityPrefSet() {
  try {
    var securitySetting = app.preferences.getPrefAsLong("Main Pref Section", "Pref_SCRIPTING_FILE_NETWORK_SECURITY");
    return (securitySetting == 1);
  } catch (err) {
    alert("Error in isSecurityPrefSet function\n" + err.toString());
  }
}

function osCheck() {
  var op = $.os;
  var match = op.indexOf("Windows");
  if (match != (-1)) {
    var userOS = "PC";// User is on PC
  } else {
    var userOS = "MAC";// User is on MAC
  }
  return userOS;
}

function aeVersionHigherThan(versionThreshold) {
  // Check if the AE version is higher than a threshold
  // Returns true if running AE version is higher than given threshold

  var onlyNumeric = /\D/g;
  var cleanRunningVersion = parseInt(app.version.replace(onlyNumeric, ""));
  var givenThreshold = parseInt(versionThreshold.replace(onlyNumeric, ""));

  return cleanRunningVersion >= givenThreshold;
}

function pasteTextStylesMograph_v23() {
  if (!(isSecurityPrefSet())) {
    alert("Style Bandit requires user permission to write files. To activate this plugin, you must first enable:\n\n \"Allow Scripts to Write Files and Access Network\" \n\n The Scripting & Expressions preferences will now be opened.", "");
    //Opens "Scripting & Expressions" tab of Preferences
    app.executeCommand(3131);
  } else {
    if (app.project.activeItem == null || !(app.project.activeItem instanceof CompItem)) {
      alert("Please select a composition first.");
      return false;
    }

    if (app.project.activeItem.selectedLayers.length == 0) {
      alert("Please select a layer to apply to.");
      return false;
    }


    app.beginSuppressDialogs();
    app.beginUndoGroup("Paste Text Style");

    var layers = app.project.activeItem.selectedLayers;
    var mographMindsetFolder;

    mographMindsetFolder = Folder(getMographMindsetPath());

    if (!mographMindsetFolder.exists) mographMindsetFolder.create();
    var textStylesFolder = Folder(getStyleBanditPath());
    if (!textStylesFolder.exists) textStylesFolder.create();
    var textStylesFile = File(getStyleBanditStylesPath());
    textStylesFile.encoding = 'UTF-8';
    textStylesFile.open("r");

    var textObj = JSON.parse(textStylesFile.read());

    textStylesFile.close();

    var processed = 0;
    var layer;

    var expressionString = '';
    var ogExpression, textProp, textLayer, moreOptions;
    for (var l = 0; l < layers.length; l++) {
      if (layers[l].property("ADBE Text Properties") != null) {

        processed++;
        textLayer = layers[l].property("ADBE Text Properties");

        moreOptions = textLayer.property("ADBE Text More Options");
        textProp = textLayer.property("ADBE Text Document");

        textProp.value.resetCharStyle();
        textProp.value.resetParagraphStyle();

        // If Expression has text, copy for later and remove the expression
        if (textProp.expression != '') {

          // Valid Text Expression
          ogExpression = textProp.expression;
          textProp.expression = '';

        } else {

          // Empty Text Expression
          ogExpression = '';

        }

        layer = layers[l];

        var smallString = "x";
        var ogString = textProp.value.text;
        if (textProp.numKeys > 0) {
          textProp.setValueAtTime(layers[l].containingComp.time, smallString);
        } else {
          textProp.setValue(smallString);
        }

        var textDocument = textProp.value;

        // if (textObj.allCaps) // textDocument.allCaps = textObj.allCaps;
        if (textObj.applyFill != undefined) textDocument.applyFill = textObj.applyFill;
        if (textObj.applyStroke != undefined) textDocument.applyStroke = textObj.applyStroke;
        if (textObj.autoLeading) textDocument.autoLeading = textObj.autoLeading;
        // if (textObj.baselineLocs) // textDocument.baselineLocs = textObj.baselineLocs;
        if (textObj.baselineShift) textDocument.baselineShift = textObj.baselineShift;
        // if (textObj.boxText) textDocument.boxText = textObj.boxText;
        // if (textObj.boxText) if (textDocument.boxText == true) textDocument.boxTextPos = textObj.boxTextPos;
        // if (textObj.boxText) if (textDocument.boxText == true) textDocument.boxTextSize = textObj.boxTextSize;
        // if (textObj.fauxBold) textDocument.fauxBold = textObj.fauxBold;
        // if (textObj.fauxItalic) textDocument.fauxItalic = textObj.fauxItalic;
        if (textObj.fillColor) if (textObj.fillColor != "") textDocument.fillColor = textObj.fillColor;
        if (textObj.font) textDocument.font = textObj.font;
        // if (textObj.fontFamily) // textDocument.fontFamily = textDocument.fontFamily;
        // if (textObj.fontLocation) // textDocument.fontLocation = textObj.fontLocation;
        if (textObj.fontSize) textDocument.fontSize = textObj.fontSize;
        // if (textObj.fontStyle) // textDocument.fontStyle = textObj.fontStyle;
        if (textObj.horizontalScale) textDocument.horizontalScale = textObj.horizontalScale;
        if (textObj.justification) textDocument.justification = textObj.justification;
        if (textObj.leading) if (textObj.autoLeading == false) textDocument.leading = textObj.leading;
        // if (textObj.pointText) // textDocument.pointText = textObj.pointText;
        // if (textObj.smallCaps) // textDocument.smallCaps = textObj.smallCaps;
        if (textObj.strokeColor) if (textObj.strokeColor != "") textDocument.strokeColor = textObj.strokeColor;
        if (textObj.strokeOverFill != undefined) textDocument.strokeOverFill = textObj.strokeOverFill;
        if (textObj.strokeWidth) textDocument.strokeWidth = textObj.strokeWidth;
        // if (textObj.subscript) // textDocument.subscript = textObj.subscript;
        // if (textObj.superscript) // textDocument.superscript = textObj.superscript;
        // if (textObj.text) // textDocument.text = textObj.text;
        if (textObj.tracking) textDocument.tracking = textObj.tracking;
        if (textObj.tsume) textDocument.tsume = textObj.tsume;
        if (textObj.verticalScale) textDocument.verticalScale = textObj.verticalScale;

        // Apply Text Style
        if (textProp.numKeys > 0) {
          textProp.setValueAtTime(layers[l].containingComp.time, textDocument);
        } else {
          textProp.setValue(textDocument);
        }

        // Apply Text Layer > More Options
        if (textObj.anchorPointGrouping) moreOptions.property("ADBE Text Anchor Point Option").setValue(textObj.anchorPointGrouping);
        if (textObj.fillAndStroke) moreOptions.property("ADBE Text Render Order").setValue(textObj.fillAndStroke);
        if (textObj.interCharacterBlending) moreOptions.property("ADBE Text Character Blend Mode").setValue(textObj.interCharacterBlending);

        // Apply More Options > Grouping Alignment
        if (textObj.groupingAlignment) {
          if (moreOptions.property("ADBE Text Anchor Point Align").numKeys > 0) {
            moreOptions.property("ADBE Text Anchor Point Align").setValueAtTime(layers[l].containingComp.time, textObj.groupingAlignment);
          } else {
            moreOptions.property("ADBE Text Anchor Point Align").setValue(textObj.groupingAlignment);
          }
        }

        // Create Text Style Expressions
        expressionString += 'text.sourceText.style.setAllCaps(' + textObj.allCaps + ')\r\n';
        expressionString += '.setFauxBold(' + textObj.fauxBold + ')\r\n';
        expressionString += '.setFauxItalic(' + textObj.fauxItalic + ')\r\n';
        expressionString += '.setSmallCaps(' + textObj.smallCaps + ')\r\n';
        textProp.expression = expressionString;

        // Apply Post-Expression Style
        var newValue = textProp.valueAtTime(layers[l].containingComp.time, false);
        if (textProp.numKeys > 0) {
          textProp.setValueAtTime(layers[l].containingComp.time, newValue);
        } else {
          textProp.setValue(newValue);
        }

        // Remove Text Style Expressions
        textProp.expression = ogExpression;

        // Add Back OG Source Text
        if (textProp.numKeys > 0) {
          textProp.setValueAtTime(layers[l].containingComp.time, ogString);
        } else {
          textProp.setValue(ogString);
        }

      }
    }

    app.endUndoGroup();
    app.endSuppressDialogs(false);
  }

  if (processed == 0) {
    alert("Did you mean to select a Text Layer? One or more Text Layers must be selected to Paste Text Style.");
    return false;
  }
}

function pasteTextStylesMograph_v24() {
  if (!(isSecurityPrefSet())) {
    alert("Style Bandit requires user permission to write files. To activate this plugin, you must first enable:\n\n \"Allow Scripts to Write Files and Access Network\" \n\n The Scripting & Expressions preferences will now be opened.", "");
    //Opens "Scripting & Expressions" tab of Preferences
    app.executeCommand(3131);
  } else {
    if (app.project.activeItem == null || !(app.project.activeItem instanceof CompItem)) {
      alert("Please select a composition first");
      return false;
    }

    if (app.project.activeItem.selectedLayers.length == 0) {
      alert("Please select a layer to apply to");
      return false;
    }

    app.beginSuppressDialogs();
    app.beginUndoGroup("Paste Text Style");

    var layers = app.project.activeItem.selectedLayers;
    var mographMindsetFolder;

    mographMindsetFolder = Folder(getMographMindsetPath());

    if (!mographMindsetFolder.exists) mographMindsetFolder.create();
    var textStylesFolder = Folder(getStyleBanditPath());
    if (!textStylesFolder.exists) textStylesFolder.create();
    var textStylesFile = File(getStyleBanditStylesPath());
    textStylesFile.open("r");
    var textObj = JSON.parse(textStylesFile.read());
    textStylesFile.close();

    var processed = 0;

    for (var l = 0; l < layers.length; l++) {
      if (layers[l].property("ADBE Text Properties") != null) {

        processed++;
        var textLayer = layers[l].property("ADBE Text Properties");

        var moreOptions = textLayer.property("ADBE Text More Options");
        var textProp = textLayer.property("ADBE Text Document");

        textProp.value.resetCharStyle();
        textProp.value.resetParagraphStyle();

        var smallString = "x";
        var ogString = textProp.value.text;
        if (textProp.numKeys > 0) {
          textProp.setValueAtTime(layers[l].containingComp.time, smallString);
        } else {
          textProp.setValue(smallString);
        }

        var textDocument = textProp.value;

        // if (textObj.allCaps) // textDocument.allCaps = textObj.allCaps;
        if (textObj.applyFill != undefined) textDocument.applyFill = textObj.applyFill;
        if (textObj.applyStroke != undefined) textDocument.applyStroke = textObj.applyStroke;
        if (textObj.autoHyphenate) textDocument.autoHyphenate = textObj.autoHyphenate;
        if (textObj.autoKernType) textDocument.autoKernType = textObj.autoKernType;
        if (textObj.autoLeading) textDocument.autoLeading = textObj.autoLeading;
        if (textObj.baselineDirection) textDocument.baselineDirection = textObj.baselineDirection;
        // if (textObj.baselineLocs) // textDocument.baselineLocs = textObj.baselineLocs;
        if (textObj.baselineShift != undefined) textDocument.baselineShift = textObj.baselineShift;
        // if (textObj.boxText) textDocument.boxText = textObj.boxText;
        // if (textObj.boxText) if (textDocument.boxText == true) textDocument.boxTextPos = textObj.boxTextPos;
        // if (textObj.boxText) if (textDocument.boxText == true) textDocument.boxTextSize = textObj.boxTextSize;
        // if (textObj.composerEngine) // textDocument.composerEngine = textObj.composerEngine;
        if (textObj.digitSet) textDocument.digitSet = textObj.digitSet;
        if (textObj.direction) textDocument.direction = textObj.direction;
        if (textObj.endIndent) textDocument.endIndent = textObj.endIndent;
        if (textObj.everyLineComposer) textDocument.everyLineComposer = textObj.everyLineComposer;
        if (textObj.fauxBold != undefined) textDocument.fauxBold = textObj.fauxBold;
        if (textObj.fauxItalic != undefined) textDocument.fauxItalic = textObj.fauxItalic;
        if (textObj.fillColor) if (textObj.fillColor != "") textDocument.fillColor = textObj.fillColor;
        if (textObj.firstLineIndent) textDocument.firstLineIndent = textObj.firstLineIndent;
        if (textObj.font) textDocument.font = textObj.font;
        if (textObj.fontBaselineOption) textDocument.fontBaselineOption = textObj.fontBaselineOption;
        if (textObj.fontCapsOption) textDocument.fontCapsOption = textObj.fontCapsOption;
        // if (textObj.fontFamily) // textDocument.fontFamily = textDocument.fontFamily;
        // if (textObj.fontLocation) // textDocument.fontLocation = textObj.fontLocation;
        // if (textObj.fontObject) // textDocument.fontObject = textObj.fontObject;
        if (textObj.fontSize) textDocument.fontSize = textObj.fontSize;
        // if (textObj.fontStyle) // textDocument.fontStyle = textObj.fontStyle;
        if (textObj.hangingRoman) textDocument.hangingRoman = textObj.hangingRoman;
        if (textObj.horizontalScale) textDocument.horizontalScale = textObj.horizontalScale;
        if (textObj.justification) textDocument.justification = textObj.justification;
        if (textObj.kerning) textDocument.kerning = textObj.kerning;
        if (textObj.leading) if (textObj.autoLeading == false) textDocument.leading = textObj.leading;
        if (textObj.leadingType) textDocument.leadingType = textObj.leadingType;
        if (textObj.ligature) textDocument.ligature = textObj.ligature;
        if (textObj.lineJoinType) textDocument.lineJoinType = textObj.lineJoinType;
        if (textObj.noBreak) textDocument.noBreak = textObj.noBreak;
        // if (textObj.pointText) // textDocument.pointText = textObj.pointText;
        // if (textObj.smallCaps) // textDocument.smallCaps = textObj.smallCaps;
        if (textObj.spaceAfter) textDocument.spaceAfter = textObj.spaceAfter;
        if (textObj.spaceBefore) textDocument.spaceBefore = textObj.spaceBefore;
        if (textObj.startIndent) textDocument.startIndent = textObj.startIndent;
        if (textObj.strokeColor) if (textObj.strokeColor != "") textDocument.strokeColor = textObj.strokeColor;
        if (textObj.strokeOverFill != undefined) textDocument.strokeOverFill = textObj.strokeOverFill;
        if (textObj.strokeWidth) textDocument.strokeWidth = textObj.strokeWidth;
        // if (textObj.subscript) // textDocument.subscript = textObj.subscript;
        // if (textObj.superscript) // textDocument.superscript = textObj.superscript;
        // if (textObj.text) // textDocument.text = textObj.text;
        if (textObj.tracking) textDocument.tracking = textObj.tracking;
        if (textObj.tsume) textDocument.tsume = textObj.tsume;
        if (textObj.verticalScale) textDocument.verticalScale = textObj.verticalScale;

        // Apply Text Layer > More Options
        if (textObj.anchorPointGrouping) moreOptions.property("ADBE Text Anchor Point Option").setValue(textObj.anchorPointGrouping);
        if (textObj.fillAndStroke) moreOptions.property("ADBE Text Render Order").setValue(textObj.fillAndStroke);
        if (textObj.interCharacterBlending) moreOptions.property("ADBE Text Character Blend Mode").setValue(textObj.interCharacterBlending);

        // Apply More Options > Grouping Alignment
        if (textObj.groupingAlignment) {
          if (moreOptions.property("ADBE Text Anchor Point Align").numKeys > 0) {
            moreOptions.property("ADBE Text Anchor Point Align").setValueAtTime(layers[l].containingComp.time, textObj.groupingAlignment);
          } else {
            moreOptions.property("ADBE Text Anchor Point Align").setValue(textObj.groupingAlignment);
          }
        }

        // Apply Text Style
        if (textProp.numKeys > 0) {
          textProp.setValueAtTime(layers[l].containingComp.time, textDocument);
        } else {
          textProp.setValue(textDocument);
        }

        // Add Back OG Source Text
        if (textProp.numKeys > 0) {
          textProp.setValueAtTime(layers[l].containingComp.time, ogString);
        } else {
          textProp.setValue(ogString);
        }

      }
    }

    app.endUndoGroup();
    app.endSuppressDialogs(false);
  }

  if (processed == 0) {
    alert("Did you mean to select a Text Layer? One or more Text Layers must be selected to Paste Text Style.");
    return false;
  }
}
