// paste text styles
"object" != typeof JSON && (JSON = {}), function () { "use strict"; var rx_one = /^[\],:{}\s]*$/, rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, rx_four = /(?:^|:|,)(?:\s*\[)+/g, rx_escapable = /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta, rep; function f(t) { return t < 10 ? "0" + t : t } function this_value() { return this.valueOf() } function quote(t) { return rx_escapable.lastIndex = 0, rx_escapable.test(t) ? '"' + t.replace(rx_escapable, function (t) { var e = meta[t]; return "string" == typeof e ? e : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4) }) + '"' : '"' + t + '"' } function str(t, e) { var r, n, o, u, f, a = gap, i = e[t]; switch (i && "object" == typeof i && "function" == typeof i.toJSON && (i = i.toJSON(t)), "function" == typeof rep && (i = rep.call(e, t, i)), typeof i) { case "string": return quote(i); case "number": return isFinite(i) ? String(i) : "null"; case "boolean": case "null": return String(i); case "object": if (!i) return "null"; if (gap += indent, f = [], "[object Array]" === Object.prototype.toString.apply(i)) { for (u = i.length, r = 0; r < u; r += 1)f[r] = str(r, i) || "null"; return o = 0 === f.length ? "[]" : gap ? "[\n" + gap + f.join(",\n" + gap) + "\n" + a + "]" : "[" + f.join(",") + "]", gap = a, o } if (rep && "object" == typeof rep) for (u = rep.length, r = 0; r < u; r += 1)"string" == typeof rep[r] && (o = str(n = rep[r], i)) && f.push(quote(n) + (gap ? ": " : ":") + o); else for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (o = str(n, i)) && f.push(quote(n) + (gap ? ": " : ":") + o); return o = 0 === f.length ? "{}" : gap ? "{\n" + gap + f.join(",\n" + gap) + "\n" + a + "}" : "{" + f.join(",") + "}", gap = a, o } } "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function () { return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null }, Boolean.prototype.toJSON = this_value, Number.prototype.toJSON = this_value, String.prototype.toJSON = this_value), "function" != typeof JSON.stringify && (meta = { "\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\" }, JSON.stringify = function (t, e, r) { var n; if (indent = gap = "", "number" == typeof r) for (n = 0; n < r; n += 1)indent += " "; else "string" == typeof r && (indent = r); if ((rep = e) && "function" != typeof e && ("object" != typeof e || "number" != typeof e.length)) throw new Error("JSON.stringify"); return str("", { "": t }) }), "function" != typeof JSON.parse && (JSON.parse = function (text, reviver) { var j; function walk(t, e) { var r, n, o = t[e]; if (o && "object" == typeof o) for (r in o) Object.prototype.hasOwnProperty.call(o, r) && (void 0 !== (n = walk(o, r)) ? o[r] = n : delete o[r]); return reviver.call(t, e, o) } if (text = String(text), rx_dangerous.lastIndex = 0, rx_dangerous.test(text) && (text = text.replace(rx_dangerous, function (t) { return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4) })), rx_one.test(text.replace(rx_two, "@").replace(rx_three, "]").replace(rx_four, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({ "": j }, "") : j; throw new SyntaxError("JSON.parse") }) }();

pasteTextStylesMograph();

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

function pasteTextStylesMograph() {
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
    var layer;

    var expressionString = '';
    var ogExpression, textProp;
    for (var l = 0; l < layers.length; l++) {
      if (layers[l].property("ADBE Text Properties") != null) {

        processed++;
        textProp = layers[l].property("ADBE Text Properties").property("ADBE Text Document");

        // If Expression has text, copy for later and remove the expression
        if (textProp.expression != '') {
          ogExpression = textProp.expression;
          textProp.expression = '';
        } else {
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
        expressionString += 'text.sourceText.style.setAllCaps(' + textObj.allCaps + ')\r\n';
        //textDocument.applyFill = textObj.applyFill;
        expressionString += '.setApplyFill(' + textObj.applyFill + ')\r\n';
        //textDocument.applyStroke = textObj.applyStroke;
        expressionString += '.setApplyStroke(' + textObj.applyStroke + ')\r\n';

        // textDocument.baselineLocs = textObj.baselineLocs;
        textDocument.baselineShift = textObj.baselineShift;
        expressionString += '.setBaselineShift(' + textObj.baselineShift + ')\r\n';
        expressionString += '.setFauxBold(' + textObj.fauxBold + ')\r\n';
        expressionString += '.setFauxItalic(' + textObj.fauxItalic + ')\r\n';
        if (textObj.fillColour != "") expressionString += '.setFillColor([' + textObj.fillColor.toString() + '])\r\n';

        textDocument.font = textObj.font;
        expressionString += '.setFont("' + textObj.font + '")\r\n';
        //textDocument.fontFamily = textObj.fontFamily;
        //textDocument.fontLocation = textObj.fontLocation;

        textDocument.fontSize = textObj.fontSize;
        expressionString += '.setFontSize(' + textObj.fontSize + ')\r\n';
        //textDocument.horizontalScale = textObj.horizontalScale;
        textDocument.justification = textObj.justification;
        //expressionString += 'fontSize = '+textObj.fontSize+';\r\n';
        //textDocument.leading = textObj.leading;
        expressionString += '.setLeading(' + textObj.leading + ')\r\n';


        expressionString += '.setAutoLeading(' + textObj.autoLeading + ')\r\n';


        //textDocument.pointText = textObj.pointText;
        //textDocument.smallCaps = textObj.smallCaps;
        expressionString += '.setSmallCaps(' + textObj.smallCaps + ')\r\n';
        if (textObj.strokeColor != "") expressionString += '.setStrokeColor([' + textObj.strokeColor.toString() + '])\r\n';
        //textDocument.strokeOverFill = textObj.strokeOverFill;
        //textDocument.strokeWidth = textObj.strokeWidth;
        expressionString += '.setStrokeWidth(' + textObj.strokeWidth + ')\r\n';
        //textDocument.subscript = textObj.subscript;
        //textDocument.superscript = textObj.superscript;
        //textDocument.text = textObj.text;
        //textDocument.tracking = textObj.tracking;
        expressionString += '.setTracking(' + textObj.tracking + ')\r\n';
        //textDocument.tsume = textObj.tsume;
        //textDocument.verticalScale = textObj.verticalScale;
        textProp.expression = expressionString;

        var newValue = textProp.valueAtTime(layers[l].containingComp.time, false);
        var test = new TextDocument("");
        test = newValue;
        test.text = ogString;

        // set the text style to our calculated one
        // will fail here because newValue is undefined
        textProp.expression = '';

        if (textObj.justification.toString() == "7413") test.justification = ParagraphJustification.LEFT_JUSTIFY;
        if (textObj.justification.toString() == "7414") test.justification = ParagraphJustification.RIGHT_JUSTIFY;
        if (textObj.justification.toString() == "7415") test.justification = ParagraphJustification.CENTER_JUSTIFY;

        if (textObj.justification.toString() == "7416") test.justification = ParagraphJustification.FULL_JUSTIFY_LASTLINE_LEFT;
        if (textObj.justification.toString() == "7417") test.justification = ParagraphJustification.FULL_JUSTIFY_LASTLINE_RIGHT;
        if (textObj.justification.toString() == "7418") test.justification = ParagraphJustification.FULL_JUSTIFY_LASTLINE_CENTER;
        if (textObj.justification.toString() == "7419") test.justification = ParagraphJustification.FULL_JUSTIFY_LASTLINE_FULL;

        if (textProp.numKeys > 0) {
          textProp.setValueAtTime(layers[l].containingComp.time, test);
        } else {
          textProp.setValue(test);
        }
        // remove expression

        if (ogExpression != '') textProp.expression = ogExpression;
        // alert("a2");
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