import React, { Component } from 'react';
import axios from "axios"
import Footer from '../components/footer';
import GenerateMap from '../components/map-generator';


class Home extends Component {
    state = {
        cooldown: false,
        data: null,
        name: '',
        status: null,
        map: {
            271: {'n': 337, 'e': 267, 'room_id': 271, 'title': 'A misty room'}, 
            337: {'s': 271, 'room_id': 337, 'title': 'A misty room'}, 
            267: {'n': 285, 's': 172, 'w': 271, 'room_id': 267, 'title': 'A misty room'}, 
            172: {'n': 267, 's': 151, 'room_id': 172, 'title': 'A misty room'}, 
            151: {'n': 172, 'e': 147, 'w': 207, 'room_id': 151, 'title': 'A misty room'}, 
            207: {'n': 231, 'e': 151, 'w': 290, 'room_id': 207, 'title': 'A misty room'}, 
            290: {'e': 207, 'room_id': 290, 'title': 'A misty room'}, 
            231: {'s': 207, 'w': 248, 'room_id': 231, 'title': 'A misty room'}, 
            248: {'n': 296, 'e': 231, 'w': 280, 'room_id': 248, 'title': 'A misty room'}, 
            296: {'s': 248, 'room_id': 296, 'title': 'A misty room'}, 
            280: {'n': 325, 'e': 248, 'room_id': 280, 'title': 'A misty room'}, 
            325: {'n': 353, 's': 280, 'w': 374, 'room_id': 325, 'title': 'A misty room'}, 
            374: {'e': 325, 'room_id': 374, 'title': 'A misty room'}, 
            353: {'s': 325, 'room_id': 353, 'title': 'A misty room'}, 
            147: {'n': 200, 's': 134, 'e': 153, 'w': 151, 'room_id': 147, 'title': 'A misty room'}, 
            153: {'e': 329, 'w': 147, 'room_id': 153, 'title': 'A misty room'}, 
            329: {'w': 153, 'room_id': 329, 'title': 'A misty room'}, 
            134: {'n': 147, 's': 119, 'e': 144, 'room_id': 134, 'title': 'A misty room'}, 
            119: {'n': 134, 's': 95, 'room_id': 119, 'title': 'A misty room'}, 
            95: {'n': 119, 's': 53, 'w': 115, 'room_id': 95, 'title': 'A misty room'}, 
            53: {'n': 95, 's': 39, 'w': 88, 'room_id': 53, 'title': 'A misty room'}, 
            88: {'e': 53, 'w': 122, 'room_id': 88, 'title': 'A misty room'}, 
            122: {'n': 124, 'e': 88, 'room_id': 122, 'title': 'A misty room'}, 
            124: {'n': 157, 's': 122, 'room_id': 124, 'title': 'A misty room'}, 
            157: {'n': 210, 's': 124, 'w': 182, 'room_id': 157, 'title': 'A misty room'}, 
            210: {'s': 157, 'room_id': 210, 'title': 'A misty room'}, 
            182: {'e': 157, 'w': 208, 'room_id': 182, 'title': 'A misty room'}, 
            208: {'e': 182, 'room_id': 208, 'title': 'A misty room'}, 
            39: {'n': 53, 's': 32, 'e': 51, 'w': 41, 'room_id': 39, 'title': 'A misty room'}, 
            41: {'e': 39, 'room_id': 41, 'title': 'A misty room'}, 
            32: {'n': 39, 'e': 54, 'w': 30, 'room_id': 32, 'title': 'A misty room'}, 
            54: {'w': 32, 'room_id': 54, 'title': 'A misty room'}, 
            30: {'s': 31, 'e': 32, 'w': 27, 'room_id': 30, 'title': 'A misty room'}, 
            27: {'n': 40, 's': 28, 'e': 30, 'w': 20, 'room_id': 27, 'title': 'A misty room'}, 
            40: {'s': 27, 'room_id': 40, 'title': 'A misty room'}, 
            20: {'n': 63, 's': 19, 'e': 27, 'w': 46, 'room_id': 20, 'title': 'A misty room'}, 
            46: {'e': 20, 'w': 62, 'room_id': 46, 'title': 'A misty room'}, 
            62: {'n': 64, 'e': 46, 'w': 84, 'room_id': 62, 'title': 'A misty room'}, 
            64: {'s': 62, 'w': 82, 'room_id': 64, 'title': 'A misty room'}, 
            82: {'n': 191, 'e': 64, 'room_id': 82, 'title': 'A misty room'}, 
            191: {'s': 82, 'room_id': 191, 'title': 'A misty room'}, 
            84: {'e': 62, 'w': 91, 'room_id': 84, 'title': 'A misty room'}, 
            91: {'n': 180, 's': 101, 'e': 84, 'w': 99, 'room_id': 91, 'title': 'A misty room'}, 
            101: {'n': 91, 'w': 113, 'room_id': 101, 'title': 'A misty room'}, 
            113: {'s': 114, 'e': 101, 'room_id': 113, 'title': 'A misty room'}, 
            114: {'n': 113, 'w': 176, 'room_id': 114, 'title': 'A misty room'}, 
            176: {'e': 114, 'w': 402, 'room_id': 176, 'title': 'A misty room'}, 
            402: {'e': 176, 'w': 451, 'room_id': 402, 'title': 'A misty room'}, 
            451: {'e': 402, 'w': 453, 'room_id': 451, 'title': 'A misty room'}, 
            453: {'s': 464, 'e': 451, 'room_id': 453, 'title': 'A misty room'}, 
            464: {'n': 453, 'room_id': 464, 'title': 'A misty room'}, 
            180: {'s': 91, 'room_id': 180, 'title': 'A misty room'}, 
            99: {'n': 190, 'e': 91, 'w': 146, 'room_id': 99, 'title': 'A misty room'}, 
            146: {'n': 215, 's': 177, 'e': 99, 'w': 257, 'room_id': 146, 'title': 'A misty room'}, 
            215: {'n': 246, 's': 146, 'room_id': 215, 'title': 'A misty room'}, 
            246: {'s': 215, 'room_id': 246, 'title': 'A misty room'}, 
            177: {'n': 146, 'w': 346, 'room_id': 177, 'title': 'A misty room'}, 
            346: {'e': 177, 'room_id': 346, 'title': 'A misty room'}, 
            257: {'n': 320, 'e': 146, 'w': 364, 'room_id': 257, 'title': 'A misty room'}, 
            364: {'n': 429, 's': 381, 'e': 257, 'w': 448, 'room_id': 364, 'title': 'A misty room'}, 
            381: {'n': 364, 'w': 394, 'room_id': 381, 'title': 'A misty room'}, 
            394: {'e': 381, 'room_id': 394, 'title': 'A misty room'}, 
            448: {'e': 364, 'room_id': 448, 'title': 'A misty room'}, 
            429: {'s': 364, 'room_id': 429, 'title': 'A misty room'}, 
            320: {'n': 348, 's': 257, 'room_id': 320, 'title': 'A misty room'}, 
            348: {'s': 320, 'room_id': 348, 'title': 'A misty room'}, 
            190: {'s': 99, 'room_id': 190, 'title': 'A misty room'}, 
            63: {'n': 72, 's': 20, 'w': 73, 'room_id': 63, 'title': 'A misty room'}, 
            73: {'e': 63, 'room_id': 73, 'title': 'A misty room'}, 
            72: {'s': 63, 'w': 76, 'room_id': 72, 'title': 'A misty room'}, 
            76: {'n': 83, 'e': 72, 'w': 110, 'room_id': 76, 'title': 'A misty room'}, 
            110: {'e': 76, 'room_id': 110, 'title': 'A misty room'}, 
            83: {'s': 76, 'e': 130, 'w': 125, 'room_id': 83, 'title': 'A misty room'}, 
            125: {'n': 165, 'e': 83, 'w': 237, 'room_id': 125, 'title': 'A misty room'}, 
            237: {'e': 125, 'w': 245, 'room_id': 237, 'title': 'A misty room'}, 
            245: {'s': 254, 'e': 237, 'room_id': 245, 'title': 'A misty room'}, 
            254: {'n': 245, 'w': 314, 'room_id': 254, 'title': 'A misty room'}, 
            314: {'e': 254, 'room_id': 314, 'title': 'A misty room'}, 
            165: {'n': 203, 's': 125, 'w': 204, 'room_id': 165, 'title': 'A misty room'}, 
            203: {'n': 268, 's': 165, 'e': 299, 'room_id': 203, 'title': 'A misty room'}, 
            299: {'e': 311, 'w': 203, 'room_id': 299, 'title': 'A misty room'}, 
            311: {'w': 299, 'room_id': 311, 'title': 'A misty room'}, 
            268: {'s': 203, 'e': 411, 'w': 312, 'room_id': 268, 'title': 'A misty room'}, 
            411: {'w': 268, 'room_id': 411, 'title': 'A misty room'}, 
            312: {'n': 328, 'e': 268, 'room_id': 312, 'title': 'A misty room'}, 
            328: {'n': 332, 's': 312, 'e': 357, 'w': 363, 'room_id': 328, 'title': 'A misty room'}, 
            332: {'n': 350, 's': 328, 'room_id': 332, 'title': 'A misty room'}, 
            350: {'n': 436, 's': 332, 'e': 404, 'room_id': 350, 'title': 'A misty room'}, 
            436: {'s': 350, 'room_id': 436, 'title': 'A misty room'}, 
            404: {'n': 481, 'w': 350, 'room_id': 404, 'title': 'A misty room'}, 
            481: {'s': 404, 'room_id': 481, 'title': 'A misty room'}, 
            357: {'w': 328, 'room_id': 357, 'title': 'A misty room'},
            363: {'n': 372, 'e': 328, 'room_id': 363, 'title': 'A misty room'}, 
            372: {'n': 441, 's': 363, 'room_id': 372, 'title': 'A misty room'}, 
            441: {'s': 372, 'room_id': 441, 'title': 'A misty room'}, 
            204: {'n': 219, 'e': 165, 'w': 216, 'room_id': 204, 'title': 'A misty room'}, 
            219: {'s': 204, 'room_id': 219, 'title': 'A misty room'}, 
            216: {'n': 234, 'e': 204, 'w': 218, 'room_id': 216, 'title': 'A Dark Cave'}, 
            218: {'s': 263, 'e': 216, 'w': 242, 'room_id': 218, 'title': 'A Dark Cave'}, 
            263: {'n': 218, 'room_id': 263, 'title': 'A Dark Cave'}, 
            242: {'n': 287, 's': 259, 'e': 218, 'w': 275, 'room_id': 242, 'title': 'A Dark Cave'}, 
            287: {'s': 242, 'w': 339, 'room_id': 287, 'title': 'A Dark Cave'}, 
            339: {'e': 287, 'w': 445, 'room_id': 339, 'title': 'A Dark Cave'}, 
            445: {'n': 447, 'e': 339, 'w': 450, 'room_id': 445, 'title': 'A Dark Cave'}, 
            447: {'s': 445, 'room_id': 447, 'title': 'A Dark Cave'}, 
            450: {'e': 445, 'room_id': 450, 'title': 'A Dark Cave'}, 
            275: {'e': 242, 'w': 456, 'room_id': 275, 'title': 'A misty room'}, 
            456: {'e': 275, 'w': 499, 'room_id': 456, 'title': 'A misty room'}, 
            499: {'e': 456, 'room_id': 499, 'title': "Glasowyn's Grave"}, 
            259: {'n': 242, 'w': 310, 'room_id': 259, 'title': 'A Dark Cave'}, 
            310: {'e': 259, 'w': 412, 'room_id': 310, 'title': 'A Dark Cave'}, 
            412: {'s': 488, 'e': 310, 'room_id': 412, 'title': 'A Dark Cave'}, 
            488: {'n': 412, 'room_id': 488, 'title': 'A Dark Cave'}, 
            234: {'n': 368, 's': 216, 'w': 252, 'room_id': 234, 'title': 'A Dark Cave'}, 
            252: {'n': 284, 'e': 234, 'room_id': 252, 'title': 'A Dark Cave'}, 
            284: {'n': 302, 's': 252, 'w': 303, 'room_id': 284, 'title': 'A Dark Cave'}, 
            303: {'n': 361, 'e': 284, 'w': 405, 'room_id': 303, 'title': 'A Dark Cave'}, 
            361: {'n': 408, 's': 303, 'room_id': 361, 'title': 'A Dark Cave'}, 
            408: {'n': 458, 's': 361, 'w': 423, 'room_id': 408, 'title': 'A Dark Cave'}, 
            458: {'s': 408, 'w': 459, 'room_id': 458, 'title': 'A Dark Cave'}, 
            459: {'e': 458, 'room_id': 459, 'title': 'A Dark Cave'}, 
            423: {'e': 408, 'w': 454, 'room_id': 423, 'title': 'A Dark Cave'}, 
            454: {'n': 470, 'e': 423, 'room_id': 454, 'title': 'A Dark Cave'}, 
            470: {'s': 454, 'room_id': 470, 'title': 'A Dark Cave'}, 
            405: {'n': 406, 'e': 303, 'room_id': 405, 'title': 'A Dark Cave'}, 
            406: {'s': 405, 'w': 415, 'room_id': 406, 'title': 'A Dark Cave'}, 
            415: {'e': 406, 'w': 418, 'room_id': 415, 'title': 'A Dark Cave'}, 
            418: {'n': 425, 's': 474, 'e': 415, 'room_id': 418, 'title': 'A Dark Cave'}, 
            425: {'s': 418, 'w': 469, 'room_id': 425, 'title': 'A Dark Cave'}, 
            469: {'e': 425, 'room_id': 469, 'title': 'A Dark Cave'}, 
            474: {'n': 418, 'room_id': 474, 'title': 'A Dark Cave'}, 
            302: {'n': 422, 's': 284, 'room_id': 302, 'title': 'A Dark Cave'}, 
            422: {'n': 426, 's': 302, 'room_id': 422, 'title': 'A Dark Cave'}, 
            426: {'n': 457, 's': 422, 'room_id': 426, 'title': 'A Dark Cave'}, 
            457: {'n': 461, 's': 426, 'room_id': 457, 'title': 'A Dark Cave'}, 
            461: {'s': 457, 'room_id': 461, 'title': "Linh's Shrine"}, 
            368: {'s': 234, 'room_id': 368, 'title': 'A Dark Cave'}, 
            130: {'w': 83, 'room_id': 130, 'title': 'A misty room'}, 
            19: {'n': 20, 's': 10, 'w': 77, 'room_id': 19, 'title': 'A misty room'}, 
            77: {'e': 19, 'room_id': 77, 'title': 'A misty room'}, 
            10: {'n': 19, 's': 0, 'w': 43, 'room_id': 10, 'title': 'A misty room'}, 
            0: {'n': 10, 's': 2, 'e': 4, 'w': 1, 'room_id': 0, 'title': 'A brightly lit room'}, 
            2: {'n': 0, 's': 6, 'e': 3, 'room_id': 2, 'title': 'A misty room'}, 
            6: {'n': 2, 'w': 7, 'room_id': 6, 'title': 'A misty room'}, 
            7: {'n': 8, 'e': 6, 'w': 56, 'room_id': 7, 'title': 'A misty room'}, 
            56: {'e': 7, 'w': 61, 'room_id': 56, 'title': 'A misty room'}, 
            61: {'e': 56, 'w': 171, 'room_id': 61, 'title': 'A misty room'}, 
            171: {'e': 61, 'room_id': 171, 'title': 'A misty room'}, 
            8: {'s': 7, 'w': 16, 'room_id': 8, 'title': 'A misty room'}, 
            16: {'n': 58, 'e': 8, 'w': 67, 'room_id': 16, 'title': 'A misty room'}, 
            58: {'s': 16, 'w': 65, 'room_id': 58, 'title': 'A misty room'}, 
            65: {'n': 74, 'e': 58, 'w': 139, 'room_id': 65, 'title': 'A misty room'}, 
            74: {'n': 87, 's': 65, 'w': 161, 'room_id': 74, 'title': 'A misty room'}, 
            87: {'s': 74, 'room_id': 87, 'title': 'A misty room'}, 
            161: {'e': 74, 'room_id': 161, 'title': 'A misty room'}, 
            139: {'e': 65, 'w': 188, 'room_id': 139, 'title': 'A misty room'}, 
            188: {'e': 139, 'w': 335, 'room_id': 188, 'title': 'A misty room'}, 
            335: {'e': 188, 'w': 366, 'room_id': 335, 'title': 'A misty room'}, 
            366: {'e': 335, 'room_id': 366, 'title': 'A misty room'}, 
            67: {'e': 16, 'w': 162, 'room_id': 67, 'title': 'A misty room'}, 
            162: {'e': 67, 'room_id': 162, 'title': 'A misty room'}, 
            3: {'s': 9, 'e': 5, 'w': 2, 'room_id': 3, 'title': 'Mt. Holloway'}, 
            5: {'w': 3, 'room_id': 5, 'title': 'A misty room'}, 
            9: {'n': 3, 's': 12, 'e': 11, 'room_id': 9, 'title': 'Mt. Holloway'}, 
            12: {'n': 9, 's': 18, 'e': 14, 'w': 21, 'room_id': 12, 'title': 'Mt. Holloway'}, 
            14: {'s': 34, 'e': 37, 'w': 12, 'room_id': 14, 'title': 'Mt. Holloway'}, 
            37: {'w': 14, 'room_id': 37, 'title': 'Mt. Holloway'}, 
            34: {'n': 14, 's': 50, 'e': 35, 'room_id': 34, 'title': 'Mt. Holloway'}, 
            50: {'n': 34, 's': 89, 'room_id': 50, 'title': 'A misty room'}, 
            89: {'n': 50, 's': 93, 'room_id': 89, 'title': 'Mt. Holloway'}, 
            93: {'n': 89, 'w': 108, 'room_id': 93, 'title': 'Mt. Holloway'}, 
            108: {'n': 78, 's': 117, 'e': 93, 'room_id': 108, 'title': 'Mt. Holloway'}, 
            117: {'n': 108, 's': 131, 'e': 166, 'w': 133, 'room_id': 117, 'title': 'Mt. Holloway'}, 
            133: {'e': 117, 'w': 173, 'room_id': 133, 'title': 'Mt. Holloway'}, 
            173: {'e': 133, 'w': 214, 'room_id': 173, 'title': 'A misty room'}, 
            214: {'n': 194, 'e': 173, 'w': 226, 'room_id': 214, 'title': 'A misty room'}, 
            194: {'s': 214, 'w': 129, 'room_id': 194, 'title': 'A misty room'}, 
            129: {'n': 126, 'e': 194, 'w': 170, 'room_id': 129, 'title': 'A misty room'}, 
            126: {'n': 98, 's': 129, 'room_id': 126, 'title': 'A misty room'}, 
            98: {'n': 102, 's': 126, 'e': 70, 'w': 109, 'room_id': 98, 'title': 'Mt. Holloway'}, 
            102: {'s': 98, 'w': 142, 'room_id': 102, 'title': 'A misty room'}, 
            142: {'e': 102, 'w': 159, 'room_id': 142, 'title': 'A misty room'}, 
            159: {'e': 142, 'w': 196, 'room_id': 159, 'title': 'A misty room'}, 
            196: {'n': 222, 'e': 159, 'w': 197, 'room_id': 196, 'title': 'A misty room'}, 
            197: {'n': 232, 'e': 196, 'w': 276, 'room_id': 197, 'title': 'A misty room'}, 
            232: {'n': 272, 's': 197, 'w': 235, 'room_id': 232, 'title': 'A misty room'}, 
            235: {'n': 330, 'e': 232, 'w': 355, 'room_id': 235, 'title': 'A misty room'}, 
            355: {'e': 235, 'room_id': 355, 'title': 'A misty room'}, 
            330: {'n': 369, 's': 235, 'w': 383, 'room_id': 330, 'title': 'A misty room'}, 
            383: {'e': 330, 'w': 495, 'room_id': 383, 'title': 'A misty room'}, 
            495: {'e': 383, 'room_id': 495, 'title': 'The Transmogriphier'}, 
            369: {'n': 400, 's': 330, 'w': 376, 'room_id': 369, 'title': 'A misty room'}, 
            376: {'e': 369, 'room_id': 376, 'title': 'A misty room'}, 
            400: {'s': 369, 'room_id': 400, 'title': 'A misty room'}, 
            272: {'n': 295, 's': 232, 'room_id': 272, 'title': 'A misty room'}, 
            295: {'s': 272, 'room_id': 295, 'title': 'A misty room'}, 
            276: {'e': 197, 'w': 419, 'room_id': 276, 'title': 'A misty room'}, 
            419: {'e': 276, 'room_id': 419, 'title': 'A misty room'}, 
            222: {'n': 305, 's': 196, 'room_id': 222, 'title': 'A misty room'}, 
            305: {'n': 365, 's': 222, 'room_id': 305, 'title': 'A misty room'}, 
            365: {'s': 305, 'room_id': 365, 'title': 'A misty room'}, 
            70: {'s': 163, 'e': 60, 'w': 98, 'room_id': 70, 'title': 'Mt. Holloway'}, 
            60: {'n': 45, 'e': 36, 'w': 70, 'room_id': 60, 'title': 'Mt. Holloway'}, 
            36: {'s': 48, 'e': 22, 'w': 60, 'room_id': 36, 'title': 'Mt. Holloway'}, 
            48: {'n': 36, 's': 105, 'w': 149, 'room_id': 48, 'title': 'Mt. Holloway'}, 
            149: {'e': 48, 'room_id': 149, 'title': 'Mt. Holloway'}, 
            105: {'n': 48, 'w': 202, 'room_id': 105, 'title': 'Mt. Holloway'}, 
            202: {'e': 105, 'room_id': 202, 'title': 'Mt. Holloway'}, 
            22: {'n': 18, 's': 78, 'w': 36, 'room_id': 22, 'title': 'The Peak of Mt. Holloway'}, 
            18: {'n': 12, 's': 22, 'w': 25, 'room_id': 18, 'title': 'Mt. Holloway'}, 
            25: {'e': 18, 'room_id': 25, 'title': 'Mt. Holloway'}, 
            21: {'e': 12, 'w': 29, 'room_id': 21, 'title': 'Mt. Holloway'}, 
            29: {'s': 45, 'e': 21, 'w': 49, 'room_id': 29, 'title': 'Mt. Holloway'}, 
            45: {'n': 29, 's': 60, 'room_id': 45, 'title': 'Mt. Holloway'}, 
            163: {'n': 70, 'room_id': 163, 'title': 'Mt. Holloway'}, 
            109: {'s': 185, 'e': 98, 'w': 175, 'room_id': 109, 'title': 'A misty room'}, 
            185: {'n': 109, 'room_id': 185, 'title': 'A misty room'}, 
            175: {'s': 183, 'e': 109, 'w': 179, 'room_id': 175, 'title': 'A misty room'}, 
            179: {'s': 233, 'e': 175, 'w': 213, 'room_id': 179, 'title': 'A misty room'}, 
            213: {'e': 179, 'w': 420, 'room_id': 213, 'title': 'A misty room'}, 
            420: {'s': 444, 'e': 213, 'w': 437, 'room_id': 420, 'title': 'A misty room'}, 
            437: {'e': 420, 'w': 497, 'room_id': 437, 'title': 'A misty room'}, 
            497: {'e': 437, 'room_id': 497, 'title': 'A misty room'}, 
            444: {'n': 420, 'w': 490, 'room_id': 444, 'title': 'A misty room'}, 
            490: {'e': 444, 'w': 493, 'room_id': 490, 'title': 'A misty room'}, 
            493: {'e': 490, 'room_id': 493, 'title': 'A misty room'}, 
            233: {'n': 179, 'w': 238, 'room_id': 233, 'title': 'A misty room'}, 
            238: {'e': 233, 'room_id': 238, 'title': 'A misty room'}, 
            183: {'n': 175, 's': 229, 'room_id': 183, 'title': 'A misty room'}, 
            229: {'n': 183, 's': 250, 'w': 236, 'room_id': 229, 'title': 'A misty room'}, 
            236: {'s': 264, 'e': 229, 'room_id': 236, 'title': 'A misty room'}, 
            264: {'n': 236, 's': 274, 'w': 273, 'room_id': 264, 'title': 'A misty room'}, 
            274: {'n': 264, 'w': 308, 'room_id': 274, 'title': 'A misty room'}, 
            308: {'e': 274, 'room_id': 308, 'title': 'A misty room'}, 
            273: {'n': 343, 'e': 264, 'room_id': 273, 'title': 'A misty room'}, 
            343: {'s': 273, 'w': 351, 'room_id': 343, 'title': 'A misty room'}, 
            351: {'s': 491, 'e': 343, 'w': 478, 'room_id': 351, 'title': 'A misty room'}, 
            491: {'n': 351, 'room_id': 491, 'title': 'A misty room'}, 
            478: {'e': 351, 'room_id': 478, 'title': 'A misty room'}, 
            250: {'n': 229, 's': 294, 'e': 289, 'room_id': 250, 'title': 'A misty room'}, 
            294: {'n': 250, 's': 334, 'room_id': 294, 'title': 'A misty room'}, 
            334: {'n': 294, 's': 393, 'e': 341, 'w': 391, 'room_id': 334, 'title': 'A misty room'}, 
            393: {'n': 334, 's': 482, 'room_id': 393, 'title': 'A misty room'}, 
            482: {'n': 393, 'room_id': 482, 'title': 'A misty room'}, 
            391: {'s': 396, 'e': 334, 'w': 428, 'room_id': 391, 'title': 'A misty room'}, 
            396: {'n': 391, 'room_id': 396, 'title': 'A misty room'}, 
            428: {'e': 391, 'room_id': 428, 'title': 'A misty room'}, 
            341: {'s': 449, 'w': 334, 'room_id': 341, 'title': 'A misty room'}, 
            449: {'n': 341, 'room_id': 449, 'title': 'A misty room'}, 
            289: {'w': 250, 'room_id': 289, 'title': 'A misty room'}, 
            170: {'e': 129, 'room_id': 170, 'title': 'A misty room'}, 
            226: {'s': 300, 'e': 214, 'room_id': 226, 'title': 'A misty room'}, 
            300: {'n': 226, 's': 377, 'w': 389, 'room_id': 300, 'title': 'A misty room'}, 
            377: {'n': 300, 'room_id': 377, 'title': 'A misty room'}, 
            389: {'e': 300, 'room_id': 389, 'title': 'A misty room'}, 
            166: {'s': 198, 'e': 150, 'w': 117, 'room_id': 166, 'title': 'Mt. Holloway'}, 
            150: {'n': 135, 'w': 166, 'room_id': 150, 'title': 'A misty room'}, 
            135: {'s': 150, 'e': 106, 'room_id': 135, 'title': 'A misty room'}, 
            106: {'n': 100, 's': 111, 'w': 135, 'room_id': 106, 'title': 'A misty room'}, 
            111: {'n': 106, 's': 367, 'e': 158, 'room_id': 111, 'title': 'A misty room'}, 
            367: {'n': 111, 'room_id': 367, 'title': 'A misty room'}, 
            158: {'s': 167, 'w': 111, 'room_id': 158, 'title': 'A misty room'}, 
            167: {'n': 158, 's': 262, 'e': 260, 'room_id': 167, 'title': 'A misty room'}, 
            262: {'n': 167, 's': 370, 'e': 358, 'room_id': 262, 'title': 'A misty room'}, 
            358: {'e': 401, 'w': 262, 'room_id': 358, 'title': 'A misty room'}, 
            401: {'w': 358, 'room_id': 401, 'title': 'A misty room'}, 
            370: {'n': 262, 's': 434, 'e': 407, 'room_id': 370, 'title': 'A misty room'}, 
            434: {'n': 370, 'room_id': 434, 'title': 'A misty room'}, 
            407: {'s': 496, 'w': 370, 'room_id': 407, 'title': 'A misty room'}, 
            496: {'n': 407, 'room_id': 496, 'title': 'A misty room'}, 
            260: {'w': 167, 'room_id': 260, 'title': 'A misty room'}, 
            100: {'s': 106, 'e': 112, 'w': 68, 'room_id': 100, 'title': 'A misty room'}, 
            112: {'s': 141, 'e': 140, 'w': 100, 'room_id': 112, 'title': 'A misty room'}, 
            140: {'w': 112, 'room_id': 140, 'title': 'A misty room'}, 
            141: {'n': 112, 'e': 156, 'room_id': 141, 'title': 'A misty room'}, 
            156: {'s': 168, 'e': 164, 'w': 141, 'room_id': 156, 'title': 'A misty room'}, 
            164: {'n': 217, 'e': 298, 'w': 156, 'room_id': 164, 'title': 'A misty room'}, 
            217: {'s': 164, 'e': 247, 'room_id': 217, 'title': 'A misty room'}, 
            247: {'e': 261, 'w': 217, 'room_id': 247, 'title': 'A misty room'}, 
            261: {'s': 277, 'e': 322, 'w': 247, 'room_id': 261, 'title': 'A misty room'}, 
            322: {'n': 382, 'e': 435, 'w': 261, 'room_id': 322, 'title': 'A misty room'}, 
            435: {'w': 322, 'room_id': 435, 'title': 'A misty room'}, 
            382: {'s': 322, 'e': 388, 'room_id': 382, 'title': 'A misty room'}, 
            388: {'e': 477, 'w': 382, 'room_id': 388, 'title': 'A misty room'}, 
            477: {'e': 483, 'w': 388, 'room_id': 477, 'title': 'A misty room'}, 
            483: {'w': 477, 'room_id': 483, 'title': 'A misty room'}, 
            277: {'n': 261, 'e': 323, 'room_id': 277, 'title': 'A misty room'}, 
            323: {'e': 433, 'w': 277, 'room_id': 323, 'title': 'A misty room'}, 
            433: {'s': 455, 'e': 460, 'w': 323, 'room_id': 433, 'title': 'A misty room'}, 
            455: {'n': 433, 'room_id': 455, 'title': 'A misty room'}, 
            460: {'w': 433, 'room_id': 460, 'title': 'A misty room'}, 
            298: {'s': 324, 'w': 164, 'room_id': 298, 'title': 'A misty room'}, 
            324: {'n': 298, 's': 349, 'e': 354, 'room_id': 324, 'title': 'A misty room'}, 
            349: {'n': 324, 's': 352, 'e': 384, 'w': 356, 'room_id': 349, 'title': 'A misty room'}, 
            356: {'e': 349, 'room_id': 356, 'title': 'A misty room'}, 
            384: {'w': 349, 'room_id': 384, 'title': 'A misty room'}, 
            352: {'n': 349, 's': 362, 'e': 485, 'room_id': 352, 'title': 'A misty room'}, 
            485: {'w': 352, 'room_id': 485, 'title': 'A misty room'}, 
            362: {'n': 352, 's': 399, 'w': 463, 'room_id': 362, 'title': 'A misty room'}, 
            463: {'s': 468, 'e': 362, 'room_id': 463, 'title': 'A misty room'}, 
            468: {'n': 463, 'room_id': 468, 'title': 'A misty room'}, 
            399: {'n': 362, 's': 467, 'room_id': 399, 'title': 'A misty room'}, 
            467: {'n': 399, 'room_id': 467, 'title': "Pirate Ry's"}, 
            354: {'w': 324, 'room_id': 354, 'title': 'A misty room'}, 
            168: {'n': 156, 'e': 340, 'room_id': 168, 'title': 'A misty room'}, 
            340: {'w': 168, 'room_id': 340, 'title': 'A misty room'}, 
            68: {'n': 52, 'e': 100, 'room_id': 68, 'title': 'A misty room'}, 
            52: {'n': 35, 's': 68, 'e': 75, 'room_id': 52, 'title': 'A misty room'}, 
            35: {'s': 52, 'w': 34, 'room_id': 35, 'title': 'A misty room'}, 
            75: {'e': 85, 'w': 52, 'room_id': 75, 'title': 'A misty room'}, 
            85: {'e': 154, 'w': 75, 'room_id': 85, 'title': 'A misty room'}, 
            154: {'e': 193, 'w': 85, 'room_id': 154, 'title': 'A misty room'}, 
            193: {'e': 251, 'w': 154, 'room_id': 193, 'title': 'A misty room'}, 
            251: {'e': 315, 'w': 193, 'room_id': 251, 'title': 'A misty room'}, 
            315: {'w': 251, 'room_id': 315, 'title': 'A misty room'}, 
            11: {'e': 17, 'w': 9, 'room_id': 11, 'title': 'Mt. Holloway'}, 
            17: {'n': 24, 'e': 42, 'w': 11, 'room_id': 17, 'title': 'A misty room'}, 
            24: {'s': 17, 'room_id': 24, 'title': 'A misty room'}, 
            42: {'n': 44, 's': 80, 'e': 118, 'w': 17, 'room_id': 42, 'title': 'A misty room'}, 
            44: {'s': 42, 'room_id': 44, 'title': 'A misty room'}, 
            118: {'e': 137, 'w': 42, 'room_id': 118, 'title': 'A misty room'}, 
            137: {'w': 118, 'room_id': 137, 'title': 'A misty room'}, 
            80: {'n': 42, 's': 81, 'e': 86, 'room_id': 80, 'title': 'A misty room'}, 
            81: {'n': 80, 'room_id': 81, 'title': 'A misty room'}, 
            86: {'s': 96, 'e': 90, 'w': 80, 'room_id': 86, 'title': 'A misty room'}, 
            90: {'e': 178, 'w': 86, 'room_id': 90, 'title': 'A misty room'}, 
            178: {'n': 209, 'e': 243, 'w': 90, 'room_id': 178, 'title': 'A misty room'}, 
            209: {'s': 178, 'room_id': 209, 'title': 'A misty room'}, 
            243: {'s': 293, 'e': 256, 'w': 178, 'room_id': 243, 'title': 'A misty room'}, 
            256: {'s': 360, 'e': 327, 'w': 243, 'room_id': 256, 'title': 'A misty room'}, 
            327: {'e': 427, 'w': 256, 'room_id': 327, 'title': 'A misty room'}, 
            427: {'e': 430, 'w': 327, 'room_id': 427, 'title': 'A misty room'}, 
            430: {'n': 443, 'e': 439, 'w': 427, 'room_id': 430, 'title': 'A misty room'}, 
            443: {'s': 430, 'e': 471, 'room_id': 443, 'title': 'A misty room'}, 
            471: {'w': 443, 'room_id': 471, 'title': 'A misty room'}, 
            439: {'w': 430, 'room_id': 439, 'title': 'A misty room'}, 
            360: {'n': 256, 'e': 398, 'room_id': 360, 'title': 'A misty room'}, 
            398: {'e': 438, 'w': 360, 'room_id': 398, 'title': 'A misty room'}, 
            438: {'e': 465, 'w': 398, 'room_id': 438, 'title': 'A misty room'}, 
            465: {'e': 498, 'w': 438, 'room_id': 465, 'title': 'A misty room'}, 
            498: {'w': 465, 'room_id': 498, 'title': 'A misty room'}, 
            293: {'n': 243, 'room_id': 293, 'title': 'A misty room'}, 
            96: {'n': 86, 'e': 97, 'room_id': 96, 'title': 'A misty room'}, 
            97: {'e': 181, 'w': 96, 'room_id': 97, 'title': 'A misty room'}, 
            181: {'w': 97, 'room_id': 181, 'title': 'A misty room'}, 
            1: {'e': 0, 'room_id': 1, 'title': 'Shop'}, 
            103: {'n': 160, 'w': 69, 'room_id': 103, 'title': 'A misty room'}, 
            160: {'s': 103, 'room_id': 160, 'title': 'A misty room'}, 
            69: {'n': 94, 's': 51, 'e': 103, 'room_id': 69, 'title': 'A misty room'}, 
            51: {'n': 69, 'e': 57, 'w': 39, 'room_id': 51, 'title': 'A misty room'}, 
            57: {'e': 145, 'w': 51, 'room_id': 57, 'title': 'A misty room'}, 
            145: {'n': 174, 'e': 220, 'w': 57, 'room_id': 145, 'title': 'A misty room'}, 
            174: {'n': 192, 's': 145, 'e': 224, 'room_id': 174, 'title': 'A misty room'}, 
            224: {'w': 174, 'room_id': 224, 'title': 'A misty room'}, 
            192: {'n': 201, 's': 174, 'e': 223, 'room_id': 192, 'title': 'A misty room'}, 
            201: {'s': 192, 'room_id': 201, 'title': 'A misty room'}, 
            223: {'n': 283, 'w': 192, 'room_id': 223, 'title': 'A misty room'}, 
            283: {'n': 331, 's': 223, 'e': 313, 'room_id': 283, 'title': 'A misty room'}, 
            331: {'s': 283, 'e': 446, 'room_id': 331, 'title': 'A misty room'}, 
            446: {'e': 466, 'w': 331, 'room_id': 446, 'title': 'A misty room'}, 
            466: {'s': 486, 'e': 472, 'w': 446, 'room_id': 466, 'title': 'A misty room'}, 
            486: {'n': 466, 'room_id': 486, 'title': 'A misty room'}, 
            472: {'w': 466, 'room_id': 472, 'title': 'A misty room'}, 
            313: {'w': 283, 'room_id': 313, 'title': 'A misty room'}, 
            220: {'w': 145, 'room_id': 220, 'title': 'A misty room'}, 
            94: {'n': 152, 's': 69, 'room_id': 94, 'title': 'A misty room'}, 
            152: {'s': 94, 'room_id': 152, 'title': 'A misty room'}, 
            115: {'n': 116, 'e': 95, 'room_id': 115, 'title': 'A misty room'}, 
            116: {'n': 132, 's': 115, 'room_id': 116, 'title': 'A misty room'}, 
            132: {'s': 116, 'room_id': 132, 'title': 'A misty room'}, 
            144: {'e': 155, 'w': 134, 'room_id': 144, 'title': 'A misty room'}, 
            155: {'s': 187, 'e': 316, 'w': 144, 'room_id': 155, 'title': 'A misty room'}, 
            187: {'n': 155, 'room_id': 187, 'title': 'A misty room'}, 
            316: {'n': 344, 'w': 155, 'room_id': 316, 'title': 'A misty room'}, 
            344: {'n': 392, 's': 316, 'e': 390, 'room_id': 344, 'title': 'A misty room'}, 
            392: {'s': 344, 'e': 462, 'room_id': 392, 'title': 'A misty room'}, 
            462: {'w': 392, 'room_id': 462, 'title': 'A misty room'}, 
            390: {'w': 344, 'room_id': 390, 'title': 'A misty room'}, 
            200: {'n': 227, 's': 147, 'e': 206, 'room_id': 200, 'title': 'A misty room'}, 
            227: {'n': 269, 's': 200, 'room_id': 227, 'title': 'A misty room'}, 
            269: {'n': 319, 's': 227, 'room_id': 269, 'title': 'A misty room'}, 
            319: {'n': 359, 's': 269, 'e': 345, 'room_id': 319, 'title': 'A misty room'}, 
            345: {'s': 375, 'w': 319, 'room_id': 345, 'title': 'A misty room'}, 
            375: {'n': 345, 'e': 385, 'room_id': 375, 'title': 'A misty room'}, 
            385: {'w': 375, 'room_id': 385, 'title': 'A misty room'}, 
            359: {'s': 319, 'room_id': 359, 'title': 'A misty room'}, 
            206: {'n': 288, 'e': 380, 'w': 200, 'room_id': 206, 'title': 'A misty room'}, 
            380: {'n': 424, 'w': 206, 'room_id': 380, 'title': 'A misty room'}, 
            424: {'s': 380, 'e': 473, 'room_id': 424, 'title': 'A misty room'}, 
            473: {'e': 494, 'w': 424, 'room_id': 473, 'title': 'A misty room'}, 
            494: {'w': 473, 'room_id': 494, 'title': 'A misty room'}, 
            288: {'s': 206, 'room_id': 288, 'title': 'A misty room'}, 
            285: {'n': 286, 's': 267, 'room_id': 285, 'title': 'A misty room'}, 
            286: {'n': 336, 's': 285, 'w': 291, 'room_id': 286, 'title': 'A misty room'}, 
            291: {'n': 410, 'e': 286, 'w': 347, 'room_id': 291, 'title': 'A misty room'}, 
            347: {'n': 452, 's': 442, 'e': 291, 'room_id': 347, 'title': 'A misty room'}, 
            452: {'s': 347, 'room_id': 452, 'title': 'A misty room'}, 
            442: {'n': 347, 'room_id': 442, 'title': 'A misty room'}, 
            410: {'s': 291, 'room_id': 410, 'title': 'A misty room'}, 
            336: {'s': 286, 'room_id': 336, 'title': 'A misty room'}, 
            31: {'n': 30, 'e': 33, 'room_id': 31, 'title': 'A misty room'}, 
            33: {'e': 38, 'w': 31, 'room_id': 33, 'title': 'A misty room'}, 
            38: {'s': 59, 'e': 66, 'w': 33, 'room_id': 38, 'title': 'A misty room'}, 
            59: {'n': 38, 's': 104, 'e': 92, 'room_id': 59, 'title': 'A misty room'}, 
            104: {'n': 59, 'e': 107, 'room_id': 104, 'title': 'A misty room'}, 
            107: {'s': 120, 'e': 121, 'w': 104, 'room_id': 107, 'title': 'A misty room'}, 
            121: {'n': 128, 'e': 143, 'w': 107, 'room_id': 121, 'title': 'A misty room'}, 
            143: {'e': 212, 'w': 121, 'room_id': 143, 'title': 'A misty room'}, 
            212: {'w': 143, 'room_id': 212, 'title': 'A misty room'}, 
            128: {'s': 121, 'e': 189, 'room_id': 128, 'title': 'A misty room'}, 
            189: {'e': 255, 'w': 128, 'room_id': 189, 'title': 'A misty room'}, 
            255: {'w': 189, 'room_id': 255, 'title': 'A misty room'}, 
            120: {'n': 107, 'e': 127, 'room_id': 120, 'title': 'A misty room'}, 
            127: {'e': 184, 'w': 120, 'room_id': 127, 'title': 'A misty room'}, 
            184: {'e': 221, 'w': 127, 'room_id': 184, 'title': 'A misty room'}, 
            221: {'s': 253, 'e': 240, 'w': 184, 'room_id': 221, 'title': 'A misty room'}, 
            253: {'n': 221, 'e': 258, 'room_id': 253, 'title': 'A misty room'}, 
            258: {'e': 306, 'w': 253, 'room_id': 258, 'title': 'A misty room'}, 
            306: {'e': 397, 'w': 258, 'room_id': 306, 'title': 'A misty room'}, 
            397: {'w': 306, 'room_id': 397, 'title': 'A misty room'}, 
            240: {'n': 249, 'e': 386, 'w': 221, 'room_id': 240, 'title': 'A misty room'}, 
            249: {'n': 265, 's': 240, 'e': 282, 'room_id': 249, 'title': 'A misty room'}, 
            282: {'w': 249, 'room_id': 282, 'title': 'A misty room'}, 
            265: {'n': 279, 's': 249, 'e': 270, 'room_id': 265, 'title': 'A misty room'}, 
            270: {'n': 416, 'e': 338, 'w': 265, 'room_id': 270, 'title': 'A misty room'}, 
            416: {'s': 270, 'room_id': 416, 'title': 'A misty room'}, 
            338: {'s': 379, 'w': 270, 'room_id': 338, 'title': 'A misty room'}, 
            379: {'n': 338, 'e': 395, 'room_id': 379, 'title': 'A misty room'},
            395: {'s': 403, 'e': 421, 'w': 379, 'room_id': 395, 'title': 'A misty room'}, 
            421: {'n': 440, 'w': 395, 'room_id': 421, 'title': 'A misty room'}, 
            440: {'s': 421, 'w': 476, 'room_id': 440, 'title': 'A misty room'}, 
            476: {'e': 440, 'room_id': 476, 'title': 'A misty room'}, 
            403: {'n': 395, 'room_id': 403, 'title': 'A misty room'}, 
            279: {'s': 265, 'room_id': 279, 'title': 'A misty room'}, 
            386: {'e': 414, 'w': 240, 'room_id': 386, 'title': 'A misty room'}, 
            414: {'w': 386, 'room_id': 414, 'title': 'A misty room'}, 
            92: {'w': 59, 'room_id': 92, 'title': 'A misty room'}, 
            66: {'n': 169, 'e': 123, 'w': 38, 'room_id': 66, 'title': 'A misty room'}, 
            169: {'s': 66, 'e': 186, 'room_id': 169, 'title': 'A misty room'}, 
            186: {'e': 205, 'w': 169, 'room_id': 186, 'title': 'A misty room'}, 
            205: {'s': 241, 'e': 479, 'w': 186, 'room_id': 205, 'title': 'A misty room'}, 
            241: {'n': 205, 'e': 266, 'room_id': 241, 'title': 'A misty room'}, 
            266: {'w': 241, 'room_id': 266, 'title': 'A misty room'}, 
            479: {'w': 205, 'room_id': 479, 'title': 'A misty room'}, 
            123: {'w': 66, 'room_id': 123, 'title': 'A misty room'}, 
            28: {'n': 27, 'room_id': 28, 'title': 'A misty room'}, 
            43: {'e': 10, 'w': 47, 'room_id': 43, 'title': 'A misty room'}, 
            47: {'n': 71, 'e': 43, 'room_id': 47, 'title': 'A misty room'}, 
            71: {'s': 47, 'room_id': 71, 'title': 'A misty room'}, 
            4: {'n': 23, 'e': 13, 'w': 0, 'room_id': 4, 'title': 'A misty room'}, 
            13: {'e': 15, 'w': 4, 'room_id': 13, 'title': 'A misty room'}, 
            15: {'w': 13, 'room_id': 15, 'title': 'A misty room'}, 
            23: {'s': 4, 'e': 26, 'room_id': 23, 'title': 'A misty room'}, 
            26: {'e': 55, 'w': 23, 'room_id': 26, 'title': 'A misty room'}, 
            55: {'w': 26, 'room_id': 55, 'title': 'Wishing Well'}, 
            78: {'n': 22, 's': 108, 'room_id': 78, 'title': 'Mt. Holloway'}, 
            131: {'n': 117, 's': 244, 'w': 138, 'room_id': 131, 'title': 'Mt. Holloway'}, 
            244: {'n': 131, 'e': 239, 'room_id': 244, 'title': 'A misty room'}, 
            239: {'n': 198, 'w': 244, 'room_id': 239, 'title': 'A misty room'}, 
            198: {'n': 166, 's': 239, 'e': 199, 'room_id': 198, 'title': 'A misty room'}, 
            199: {'s': 230, 'w': 198, 'room_id': 199, 'title': 'A misty room'}, 
            230: {'n': 199, 's': 307, 'e': 297, 'room_id': 230, 'title': 'A misty room'}, 
            307: {'n': 230, 's': 373, 'e': 371, 'w': 321, 'room_id': 307, 'title': 'A misty room'}, 
            321: {'s': 413, 'e': 307, 'room_id': 321, 'title': 'A misty room'}, 
            413: {'n': 321, 'room_id': 413, 'title': 'A misty room'}, 
            373: {'n': 307, 's': 480, 'room_id': 373, 'title': 'A misty room'}, 
            480: {'n': 373, 'room_id': 480, 'title': 'A misty room'}, 
            371: {'s': 475, 'w': 307, 'room_id': 371, 'title': 'A misty room'}, 
            475: {'n': 371, 's': 484, 'room_id': 475, 'title': 'A misty room'}, 
            484: {'n': 475, 'room_id': 484, 'title': 'A misty room'}, 
            297: {'w': 230, 'room_id': 297, 'title': 'A misty room'}, 
            138: {'s': 211, 'e': 131, 'w': 195, 'room_id': 138, 'title': 'A misty room'}, 
            195: {'s': 228, 'e': 138, 'w': 225, 'room_id': 195, 'title': 'A misty room'}, 
            225: {'s': 278, 'e': 195, 'room_id': 225, 'title': 'A misty room'}, 
            278: {'n': 225, 'room_id': 278, 'title': 'A misty room'}, 
            228: {'n': 195, 's': 281, 'room_id': 228, 'title': 'A misty room'}, 
            281: {'n': 228, 's': 318, 'e': 309, 'w': 317, 'room_id': 281, 'title': 'A misty room'}, 
            317: {'s': 387, 'e': 281, 'w': 409, 'room_id': 317, 'title': 'A misty room'}, 
            409: {'e': 317, 'room_id': 409, 'title': 'A misty room'}, 
            387: {'n': 317, 's': 417, 'w': 431, 'room_id': 387, 'title': 'A misty room'}, 
            431: {'e': 387, 'w': 492, 'room_id': 431, 'title': 'A misty room'}, 
            492: {'e': 431, 'room_id': 492, 'title': 'A misty room'}, 
            417: {'n': 387, 'room_id': 417, 'title': 'A misty room'}, 
            309: {'s': 333, 'e': 326, 'w': 281, 'room_id': 309, 'title': 'A misty room'}, 
            333: {'n': 309, 's': 378, 'room_id': 333, 'title': 'A misty room'},
            378: {'n': 333, 'room_id': 378, 'title': 'A misty room'}, 
            326: {'s': 342, 'w': 309, 'room_id': 326, 'title': 'A misty room'}, 
            342: {'n': 326, 's': 432, 'room_id': 342, 'title': 'A misty room'}, 
            432: {'n': 342, 'room_id': 432, 'title': 'A misty room'}, 
            318: {'n': 281, 's': 487, 'room_id': 318, 'title': 'A misty room'}, 
            487: {'n': 318, 's': 489, 'room_id': 487, 'title': 'A misty room'}, 
            489: {'n': 487, 'room_id': 489, 'title': 'A misty room'}, 
            211: {'n': 138, 'room_id': 211, 'title': 'A misty room'}, 
            49: {'s': 79, 'e': 29, 'w': 136, 'room_id': 49, 'title': 'A misty room'}, 
            136: {'e': 49, 'w': 148, 'room_id': 136, 'title': 'A misty room'}, 
            148: {'e': 136, 'w': 292, 'room_id': 148, 'title': 'A misty room'}, 
            292: {'n': 301, 'e': 148, 'room_id': 292, 'title': 'A misty room'}, 
            301: {'n': 304, 's': 292, 'room_id': 301, 'title': 'A misty room'}, 
            304: {'s': 301, 'room_id': 304, 'title': 'A misty room'}, 
            79: {'n': 49, 'room_id': 79, 'title': 'A misty room'}
        }
    }

    componentDidMount() {
        // initilizing player
        axios.get('https://lambda-treasure-hunt.herokuapp.com/api/adv/init/', {
            headers: {'Authorization': 'Token 69d408c7addd42914cf6c6ed7a8c8bfe60deb146'}
        }).then(res => {
            this.cooldown(res.data.cooldown)
            this.setState({
                ...this.state,
                data: res.data
            })
        }).catch(err => {
            alert("cooldown in process");
            console.log(err);
            // rerun cdm after timeout ///////////////
        })
    }

    cooldown = (time) => {
        // cooldown is active
        this.setState({
            ...this.state,
            cooldown: time
        })
        // cooldown is done after timeout
        setTimeout(() => {
            this.setState({
                ...this.state,
                cooldown: false
            })
        }, time)
    }



    move = (direction) => {
        let next_location = this.state.map[this.state.data.room_id][direction].toString();
        let data = JSON.stringify({
            "direction": direction,
            "next_room_id": next_location
        })

        axios.post("https://lambda-treasure-hunt.herokuapp.com/api/adv/move/", data,
            {"Authorization": "Token 69d408c7addd42914cf6c6ed7a8c8bfe60deb146"}
        ).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
    }

    grab = (item) => {
        axios.post("https://lambda-treasure-hunt.herokuapp.com/api/adv/take", {
                json: {"name": item} ,
                headers: {"Content-Type": "application/json", "Authorization": "Token 69d408c7addd42914cf6c6ed7a8c8bfe60deb146"}
            }
        )
    }

    drop = (item) => {
        axios.post("https://lambda-treasure-hunt.herokuapp.com/api/adv/drop", {
                json: {"name": item} ,
                headers: {"Content-Type": "application/json", "Authorization": "Token 69d408c7addd42914cf6c6ed7a8c8bfe60deb146"}
            }
        )
    }

    getStatus = () => {
        axios.post("https://lambda-treasure-hunt.herokuapp.com/api/adv/status/", {
                headers: {"Authorization": "Token 69d408c7addd42914cf6c6ed7a8c8bfe60deb146"}
            }
        )
    }

    wear = (item) => {
        axios.post("https://lambda-treasure-hunt.herokuapp.com/api/adv/wear/", {
                json: {"name": item} ,
                headers: {"Content-Type": "application/json", "Authorization": "Token 69d408c7addd42914cf6c6ed7a8c8bfe60deb146"}
            }
        )
    }

    new_name = (name) => {
        axios.post("https://lambda-treasure-hunt.herokuapp.com/api/adv/change_name/", {
                json: {"name": name} ,
                headers: {"Content-Type": "application/json", "Authorization": "Token 69d408c7addd42914cf6c6ed7a8c8bfe60deb146"}
            }
        )
    }

    comfirm_new_name = (response) => {
        axios.post("https://lambda-treasure-hunt.herokuapp.com/api/adv/change_name/", {
                json: {"name": this.state.name, "confirm": response} ,
                headers: {"Content-Type": "application/json", "Authorization": "Token 69d408c7addd42914cf6c6ed7a8c8bfe60deb146"}
            }
        )
    }

    sell = (treasure) => {
        axios.post("https://lambda-treasure-hunt.herokuapp.com/api/adv/sell/", {
                json: {"name": treasure} ,
                headers: {"Content-Type": "application/json", "Authorization": "Token 69d408c7addd42914cf6c6ed7a8c8bfe60deb146"}
            }
        )
    }

    confirm_sell = (treasure) => {
        axios.post("https://lambda-treasure-hunt.herokuapp.com/api/adv/sell/", {
                json: {"name": treasure, 'confirm':'yes'} ,
                headers: {"Content-Type": "application/json", "Authorization": "Token 69d408c7addd42914cf6c6ed7a8c8bfe60deb146"}
            }
        )
    }

    proof = () => {
        axios.get("https://lambda-treasure-hunt.herokuapp.com/api/bc/last_proof/", {
                headers: {"Authorization": "Token 69d408c7addd42914cf6c6ed7a8c8bfe60deb146"}
            }
        )
    }

    mine = (new_proof) => {
        axios.post("https://lambda-treasure-hunt.herokuapp.com/api/bc/mine/", {
                json: {"proof": new_proof} ,
                headers: {"Content-Type": "application/json", "Authorization": "Token 69d408c7addd42914cf6c6ed7a8c8bfe60deb146"}
            }
        )
    }

    render(){
        console.log(this.state.data);
        return(
            <>
                <section className="home">
                    <div className="section-location">
                        <div className="map">
                            <GenerateMap />
                        </div>
                        <div className="room-info">
                            
                        </div>
                    </div>
                    <div className="u-flip-mobile">
                        <div className="section-control">
                            <button onClick={() => this.move('s')}>move</button>
                        </div>
                        <div className="section-info">

                        </div>
                    </div>

                </section>
                <Footer />
            </>
        )
    }
}

export default Home