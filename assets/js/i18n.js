(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else if (typeof exports === 'object') {
        module.exports = factory;
    } else {
        root.I18N = factory();
    }    
})(this, function () {

    'use strict';
    
    var I18N = {};
    
    // Character maps
    var LATIN_MAP = {
        'À': 'A', 'Á': 'A', 'Â': 'A', 'Ã': 'A', 'Ä': 'A', 'Å': 'A', 'Æ': 'AE', 'Ç':
        'C', 'È': 'E', 'É': 'E', 'Ê': 'E', 'Ë': 'E', 'Ì': 'I', 'Í': 'I', 'Î': 'I',
        'Ï': 'I', 'Ð': 'D', 'Ñ': 'N', 'Ò': 'O', 'Ó': 'O', 'Ô': 'O', 'Õ': 'O', 'Ö':
        'O', 'Ő': 'O', 'Ø': 'O', 'Ù': 'U', 'Ú': 'U', 'Û': 'U', 'Ü': 'U', 'Ű': 'U',
        'Ý': 'Y', 'Þ': 'TH', 'Ÿ': 'Y', 'ß': 'ss', 'à':'a', 'á':'a', 'â': 'a', 'ã':
        'a', 'ä': 'a', 'å': 'a', 'æ': 'ae', 'ç': 'c', 'è': 'e', 'é': 'e', 'ê': 'e',
        'ë': 'e', 'ì': 'i', 'í': 'i', 'î': 'i', 'ï': 'i', 'ð': 'd', 'ñ': 'n', 'ò':
        'o', 'ó': 'o', 'ô': 'o', 'õ': 'o', 'ö': 'o', 'ő': 'o', 'ø': 'o', 'ù': 'u',
        'ú': 'u', 'û': 'u', 'ü': 'u', 'ű': 'u', 'ý': 'y', 'þ': 'th', 'ÿ': 'y'
    },
    LATIN_SYMBOLS_MAP = {
        '©':'(c)'
    },
    GREEK_MAP = {
        'α':'a', 'β':'b', 'γ':'g', 'δ':'d', 'ε':'e', 'ζ':'z', 'η':'h', 'θ':'8',
        'ι':'i', 'κ':'k', 'λ':'l', 'μ':'m', 'ν':'n', 'ξ':'3', 'ο':'o', 'π':'p',
        'ρ':'r', 'σ':'s', 'τ':'t', 'υ':'y', 'φ':'f', 'χ':'x', 'ψ':'ps', 'ω':'w',
        'ά':'a', 'έ':'e', 'ί':'i', 'ό':'o', 'ύ':'y', 'ή':'h', 'ώ':'w', 'ς':'s',
        'ϊ':'i', 'ΰ':'y', 'ϋ':'y', 'ΐ':'i',
        'Α':'A', 'Β':'B', 'Γ':'G', 'Δ':'D', 'Ε':'E', 'Ζ':'Z', 'Η':'H', 'Θ':'8',
        'Ι':'I', 'Κ':'K', 'Λ':'L', 'Μ':'M', 'Ν':'N', 'Ξ':'3', 'Ο':'O', 'Π':'P',
        'Ρ':'R', 'Σ':'S', 'Τ':'T', 'Υ':'Y', 'Φ':'F', 'Χ':'X', 'Ψ':'PS', 'Ω':'W',
        'Ά':'A', 'Έ':'E', 'Ί':'I', 'Ό':'O', 'Ύ':'Y', 'Ή':'H', 'Ώ':'W', 'Ϊ':'I',
        'Ϋ':'Y'
    },
    TURKISH_MAP = {
        'ş':'s', 'Ş':'S', 'ı':'i', 'İ':'I', 'ç':'c', 'Ç':'C', 'ü':'u', 'Ü':'U',
        'ö':'o', 'Ö':'O', 'ğ':'g', 'Ğ':'G'
    },
    RUSSIAN_MAP = {
        'а':'a', 'б':'b', 'в':'v', 'г':'g', 'д':'d', 'е':'e', 'ё':'yo', 'ж':'zh',
        'з':'z', 'и':'i', 'й':'j', 'к':'k', 'л':'l', 'м':'m', 'н':'n', 'о':'o',
        'п':'p', 'р':'r', 'с':'s', 'т':'t', 'у':'u', 'ф':'f', 'х':'h', 'ц':'c',
        'ч':'ch', 'ш':'sh', 'щ':'sh', 'ъ':'', 'ы':'y', 'ь':'', 'э':'e', 'ю':'yu',
        'я':'ya',
        'А':'A', 'Б':'B', 'В':'V', 'Г':'G', 'Д':'D', 'Е':'E', 'Ё':'Yo', 'Ж':'Zh',
        'З':'Z', 'И':'I', 'Й':'J', 'К':'K', 'Л':'L', 'М':'M', 'Н':'N', 'О':'O',
        'П':'P', 'Р':'R', 'С':'S', 'Т':'T', 'У':'U', 'Ф':'F', 'Х':'H', 'Ц':'C',
        'Ч':'Ch', 'Ш':'Sh', 'Щ':'Sh', 'Ъ':'', 'Ы':'Y', 'Ь':'', 'Э':'E', 'Ю':'Yu',
        'Я':'Ya'
    },
    UKRAINIAN_MAP = {
        'Є':'Ye', 'І':'I', 'Ї':'Yi', 'Ґ':'G', 'є':'ye', 'і':'i', 'ї':'yi', 'ґ':'g'
    },
    CZECH_MAP = {
        'č':'c', 'ď':'d', 'ě':'e', 'ň': 'n', 'ř':'r', 'š':'s', 'ť':'t', 'ů':'u',
        'ž':'z', 'Č':'C', 'Ď':'D', 'Ě':'E', 'Ň': 'N', 'Ř':'R', 'Š':'S', 'Ť':'T',
        'Ů':'U', 'Ž':'Z'
    },
    POLISH_MAP = {
        'ą':'a', 'ć':'c', 'ę':'e', 'ł':'l', 'ń':'n', 'ó':'o', 'ś':'s', 'ź':'z',
        'ż':'z', 'Ą':'A', 'Ć':'C', 'Ę':'E', 'Ł':'L', 'Ń':'N', 'Ó':'O', 'Ś':'S',
        'Ź':'Z', 'Ż':'Z'
    },
    LATVIAN_MAP = {
        'ā':'a', 'č':'c', 'ē':'e', 'ģ':'g', 'ī':'i', 'ķ':'k', 'ļ':'l', 'ņ':'n',
        'š':'s', 'ū':'u', 'ž':'z', 'Ā':'A', 'Č':'C', 'Ē':'E', 'Ģ':'G', 'Ī':'I',
        'Ķ':'K', 'Ļ':'L', 'Ņ':'N', 'Š':'S', 'Ū':'U', 'Ž':'Z'
    },
    ARABIC_MAP = {
        'أ':'a', 'ب':'b', 'ت':'t', 'ث': 'th', 'ج':'g', 'ح':'h', 'خ':'kh', 'د':'d',
        'ذ':'th', 'ر':'r', 'ز':'z', 'س':'s', 'ش':'sh', 'ص':'s', 'ض':'d', 'ط':'t',
        'ظ':'th', 'ع':'aa', 'غ':'gh', 'ف':'f', 'ق':'k', 'ك':'k', 'ل':'l', 'م':'m',
        'ن':'n', 'ه':'h', 'و':'o', 'ي':'y'
    },
    LITHUANIAN_MAP = {
        'ą':'a', 'č':'c', 'ę':'e', 'ė':'e', 'į':'i', 'š':'s', 'ų':'u', 'ū':'u',
        'ž':'z',
        'Ą':'A', 'Č':'C', 'Ę':'E', 'Ė':'E', 'Į':'I', 'Š':'S', 'Ų':'U', 'Ū':'U',
        'Ž':'Z'
    },
    SERBIAN_MAP = {
        'ђ':'dj', 'ј':'j', 'љ':'lj', 'њ':'nj', 'ћ':'c', 'џ':'dz', 'đ':'dj',
        'Ђ':'Dj', 'Ј':'j', 'Љ':'Lj', 'Њ':'Nj', 'Ћ':'C', 'Џ':'Dz', 'Đ':'Dj'
    },
    AZERBAIJANI_MAP = {
        'ç':'c', 'ə':'e', 'ğ':'g', 'ı':'i', 'ö':'o', 'ş':'s', 'ü':'u',
        'Ç':'C', 'Ə':'E', 'Ğ':'G', 'İ':'I', 'Ö':'O', 'Ş':'S', 'Ü':'U'
    },
    ALL_MAPS = [
        LATIN_MAP,
        LATIN_SYMBOLS_MAP,
        GREEK_MAP,
        TURKISH_MAP,
        RUSSIAN_MAP,
        UKRAINIAN_MAP,
        CZECH_MAP,
        POLISH_MAP,
        LATVIAN_MAP,
        ARABIC_MAP,
        LITHUANIAN_MAP,
        SERBIAN_MAP,
        AZERBAIJANI_MAP
    ],
    removeList = [];   
    
    
    var Downcoder = {
        Initialize: function() {
            if (Downcoder.map) {
                return;
            }
            Downcoder.map = {};
            Downcoder.chars = [];
            for (var i=0; i<ALL_MAPS.length; i++) {
                var lookup = ALL_MAPS[i];
                for (var c in lookup) {
                    if (lookup.hasOwnProperty(c)) {
                        Downcoder.map[c] = lookup[c];
                    }
                }
            }
            for (var k in Downcoder.map) {
                if (Downcoder.map.hasOwnProperty(k)) {
                    Downcoder.chars.push(k);
                }
            }
            Downcoder.regex = new RegExp(Downcoder.chars.join('|'), 'g');
        }
    };
    
    I18N.slugify = function (slug, numChars) {

        Downcoder.Initialize();
        slug = slug.replace(Downcoder.regex, function(m) {
            return Downcoder.map[m]
        });

        var regex = new RegExp('\\b(' + removeList.join('|') + ')\\b', 'gi');
        slug = slug.replace(regex, '');
        slug = slug.replace(/[^-\w\s]/g, '');
        slug = slug.replace(/^\s+|\s+$/g, '');
        slug = slug.replace(/[-\s]+/g, '-');
        slug = slug.toLowerCase();
        
        return slug.substring(0, numChars);
    };
    
    return I18N;    
});