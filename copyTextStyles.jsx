// copy text styles
"object" != typeof JSON && (JSON = {}), function () { "use strict"; var rx_one = /^[\],:{}\s]*$/, rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, rx_four = /(?:^|:|,)(?:\s*\[)+/g, rx_escapable = /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta, rep; function f(t) { return t < 10 ? "0" + t : t } function this_value() { return this.valueOf() } function quote(t) { return rx_escapable.lastIndex = 0, rx_escapable.test(t) ? '"' + t.replace(rx_escapable, function (t) { var e = meta[t]; return "string" == typeof e ? e : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4) }) + '"' : '"' + t + '"' } function str(t, e) { var r, n, o, u, f, a = gap, i = e[t]; switch (i && "object" == typeof i && "function" == typeof i.toJSON && (i = i.toJSON(t)), "function" == typeof rep && (i = rep.call(e, t, i)), typeof i) { case "string": return quote(i); case "number": return isFinite(i) ? String(i) : "null"; case "boolean": case "null": return String(i); case "object": if (!i) return "null"; if (gap += indent, f = [], "[object Array]" === Object.prototype.toString.apply(i)) { for (u = i.length, r = 0; r < u; r += 1)f[r] = str(r, i) || "null"; return o = 0 === f.length ? "[]" : gap ? "[\n" + gap + f.join(",\n" + gap) + "\n" + a + "]" : "[" + f.join(",") + "]", gap = a, o } if (rep && "object" == typeof rep) for (u = rep.length, r = 0; r < u; r += 1)"string" == typeof rep[r] && (o = str(n = rep[r], i)) && f.push(quote(n) + (gap ? ": " : ":") + o); else for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (o = str(n, i)) && f.push(quote(n) + (gap ? ": " : ":") + o); return o = 0 === f.length ? "{}" : gap ? "{\n" + gap + f.join(",\n" + gap) + "\n" + a + "}" : "{" + f.join(",") + "}", gap = a, o } } "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function () { return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null }, Boolean.prototype.toJSON = this_value, Number.prototype.toJSON = this_value, String.prototype.toJSON = this_value), "function" != typeof JSON.stringify && (meta = { "\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\" }, JSON.stringify = function (t, e, r) { var n; if (indent = gap = "", "number" == typeof r) for (n = 0; n < r; n += 1)indent += " "; else "string" == typeof r && (indent = r); if ((rep = e) && "function" != typeof e && ("object" != typeof e || "number" != typeof e.length)) throw new Error("JSON.stringify"); return str("", { "": t }) }), "function" != typeof JSON.parse && (JSON.parse = function (text, reviver) { var j; function walk(t, e) { var r, n, o = t[e]; if (o && "object" == typeof o) for (r in o) Object.prototype.hasOwnProperty.call(o, r) && (void 0 !== (n = walk(o, r)) ? o[r] = n : delete o[r]); return reviver.call(t, e, o) } if (text = String(text), rx_dangerous.lastIndex = 0, rx_dangerous.test(text) && (text = text.replace(rx_dangerous, function (t) { return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4) })), rx_one.test(text.replace(rx_two, "@").replace(rx_three, "]").replace(rx_four, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({ "": j }, "") : j; throw new SyntaxError("JSON.parse") }) }();

copyTextStylesMograph(app.project.activeItem.selectedLayers[0]);

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

function copyTextStylesMograph(layer) {
  if (!(isSecurityPrefSet())) {
    alert("Style Bandit requires user permission to write files. To activate this plugin, you must first enable:\n\n \"Allow Scripts to Write Files and Access Network\" \n\n The Scripting & Expressions preferences will now be opened.", "");
    //Opens "Scripting & Expressions" tab of Preferences
    app.executeCommand(3131);
  } else {
    app.beginUndoGroup("Copy Text Style");
    var mographMindsetFolder;

    mographMindsetFolder = Folder(getMographMindsetPath());
    if (!mographMindsetFolder.exists) mographMindsetFolder.create();
    var textStylesFolder = Folder(getStyleBanditPath());
    if (!textStylesFolder.exists) textStylesFolder.create();

    var textProp = layer.property("ADBE Text Properties").property("ADBE Text Document");
    var textDocument = textProp.value;

    var textObj = {
      "allCaps": textDocument.allCaps,
      "applyFill": textDocument.applyFill,
      "applyStroke": textDocument.applyStroke,
      "autoLeading": textDocument.autoLeading,
      "baselineLocs": textDocument.baselineLocs,
      "baselineShift": textDocument.baselineShift,
      "fauxBold": textDocument.fauxBold,
      "fauxItalic": textDocument.fauxItalic,
      "fillColor": "",
      "font": textDocument.font,
      "fontFamily": textDocument.fontFamily,
      "fontLocation": textDocument.fontLocation,
      "fontSize": textDocument.fontSize,
      "fontStyle": textDocument.fontStyle,
      "horizontalScale": textDocument.horizontalScale,
      "justification": textDocument.justification,
      "leading": textDocument.leading,
      "pointText": textDocument.pointText,
      "smallCaps": textDocument.smallCaps,
      "strokeColor": "",
      "strokeOverFill": textDocument.strokeOverFill,
      "strokeWidth": textDocument.strokeWidth,
      "subscript": textDocument.subscript,
      "superscript": textDocument.superscript,
      "text": textDocument.text,
      "tracking": textDocument.tracking,
      "tsume": textDocument.tsume,
      "verticalScale": textDocument.verticalScale
    };

    if (textDocument.applyFill) textObj["fillColor"] = textDocument.fillColor;
    if (textDocument.applyStroke) textObj["strokeColor"] = textDocument.strokeColor;

    var textStylesFile = File(getStyleBanditStylesPath());
    textStylesFile.open("w");
    textStylesFile.write(JSON.stringify(textObj));
    textStylesFile.close();
  }

  app.endUndoGroup();
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

