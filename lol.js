  
    let color=["black", "white", "red", "green", "blue", "yellow", "cyan", "magenta",
    "gray", "grey", "orange", "brown", "pink", "lime", "maroon", "navy", "olive",
    "teal", "aqua", "silver", "gold", "beige", "coral", "crimson", "indigo",
    "ivory", "khaki", "lavender", "linen", "mintcream", "mistyrose", "moccasin",
    "navajowhite", "oldlace", "orchid", "peru", "plum", "powderblue", "rosybrown",
    "salmon", "sandybrown", "seagreen", "sienna", "skyblue", "slateblue",
    "slategray", "snow", "springgreen", "steelblue", "tan", "thistle", "tomato",
    "turquoise", "violet", "wheat", "whitesmoke", "yellowgreen", "darkblue",
    "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkkhaki", "darkmagenta",
    "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon",
    "darkseagreen", "darkslateblue", "darkslategray", "darkturquoise", "darkviolet",
    "deeppink", "deepskyblue", "dodgerblue", "firebrick", "floralwhite", "forestgreen",
    "fuchsia", "gainsboro", "ghostwhite", "greenyellow", "honeydew", "hotpink",
    "indianred", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow",
    "lightgray", "lightgreen", "lightpink", "lightsalmon", "lightseagreen",
    "lightskyblue", "lightslategray", "lightsteelblue", "lightyellow", "mediumaquamarine",
    "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue",
    "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue",
    "papayawhip", "peachpuff", "rebeccapurple", "royalblue", "saddlebrown", "seashell",
    "skyblue", "snow", "tan", "thistle", "turquoise", "violet", "wheat", "white",
    "chartreuse", "cadetblue", "blanchedalmond", "antiquewhite", "azure", "burlywood",
    "chocolate", "cornflowerblue", "cornsilk", "dimgrey", "lightgrey",
    "mediumgrey", "paleturquoise", "palevioletred", "rosybrown",
    "saddlebrown", "sandybrown", "seashell", "sienna", "slategray", "whitesmoke",
    "lightgoldenrod", "darkslategray", "mediumslateblue", "darkorchid", "palegreen",
    "mediumspringgreen", "mintcream", "darkolivegreen", "darkseagreen", "darkslateblue",
    "mediumturquoise", "paleturquoise", "lavenderblush", "lightsteelblue", "aliceblue",
    "aquamarine", "azure", "honeydew", "ivory", "lavender", "linen", "seashell", "snow",
    "ghostwhite", "whitesmoke", "gainsboro", "lemonchiffon", "palegoldenrod",
    "papayawhip", "cornsilk", "bisque", "blanchedalmond", "antiquewhite", "peachpuff",
    "navajowhite", "moccasin", "oldlace"]
    let ok = document.getElementsByClassName("box");
    let random= Math.floor(Math.random() * color.length);
    for (let index = 0; index< ok.length; index++) {
        ok[index].style.backgroundColor=color[random];
        random= Math.floor(Math.random() * color.length)

    }
      
