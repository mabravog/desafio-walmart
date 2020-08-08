const url = require('url');
const getProducts = require('./getProducts');

const productss = [
    {
        "id": 1,
        "brand": "ooy eqrceli",
        "description": "rlñlw brhrka",
        "image": "www.lider.cl/catalogo/images/whiteLineIcon.svg",
        "price": 498724
    },
    {
        "id": 2,
        "brand": "dsaasd",
        "description": "zlrwax bñyrh",
        "image": "www.lider.cl/catalogo/images/babyIcon.svg",
        "price": 130173
    },
    {
        "id": 3,
        "brand": "weñxoab",
        "description": "hqhoy qacirk",
        "image": "www.lider.cl/catalogo/images/homeIcon.svg",
        "price": 171740
    },
    {
        "id": 4,
        "brand": "sjlzxeo",
        "description": "pnyn rlxbewnk",
        "image": "www.lider.cl/catalogo/images/computerIcon.svg",
        "price": 890348
    },
    {
        "id": 5,
        "brand": "peuoooypt",
        "description": "trcwl iagxxh",
        "image": "www.lider.cl/catalogo/images/whiteLineIcon.svg",
        "price": 814893
    },
    {
        "id": 6,
        "brand": "ñuo onfbtya",
        "description": "vangde oswss",
        "image": "www.lider.cl/catalogo/images/homeIcon.svg",
        "price": 468750
    },
    {
        "id": 7,
        "brand": "wiñ nvnactr",
        "description": "nkhux ztdnct",
        "image": "www.lider.cl/catalogo/images/bicycleIcon.svg",
        "price": 472543
    },
    {
        "id": 8,
        "brand": "sfzkvoñ",
        "description": "hdvt tbrdeiñl",
        "image": "www.lider.cl/catalogo/images/tvIcon.svg",
        "price": 428894
    },
    {
        "id": 9,
        "brand": "nzo acrrñvh",
        "description": "ahelf lxhñep",
        "image": "www.lider.cl/catalogo/images/tvIcon.svg",
        "price": 29530
    },
    {
        "id": 10,
        "brand": "adsfsda",
        "description": "dñqy ipvukesh",
        "image": "www.lider.cl/catalogo/images/smartphoneIcon.svg",
        "price": 691504
    },
    {
        "id": 11,
        "brand": "iñmfdpd",
        "description": "fqfwt ikpxov",
        "image": "www.lider.cl/catalogo/images/gamesIcon.svg",
        "price": 533752
    },
    {
        "id": 12,
        "brand": "vfbjgpt",
        "description": "iwpazñ ltxsh",
        "image": "www.lider.cl/catalogo/images/tvIcon.svg",
        "price": 647307
    },
    {
        "id": 13,
        "brand": "breizhf",
        "description": "dquyja crdgj",
        "image": "www.lider.cl/catalogo/images/computerIcon.svg",
        "price": 918745
    },
    {
        "id": 14,
        "brand": "dcc gdodkñg",
        "description": "odrnuh ixdta",
        "image": "www.lider.cl/catalogo/images/smartphoneIcon.svg",
        "price": 643123
    },
    {
        "id": 15,
        "brand": "ckyprmg",
        "description": "ñlagjl rnkmt",
        "image": "www.lider.cl/catalogo/images/bedRoomIcon.svg",
        "price": 953318
    },
    {
        "id": 16,
        "brand": "fqqejoy",
        "description": "thyh mpzxgwnw",
        "image": "www.lider.cl/catalogo/images/gamesIcon.svg",
        "price": 525834
    },
    {
        "id": 17,
        "brand": "cni tñcapdx",
        "description": "lzqf rkhusibs",
        "image": "www.lider.cl/catalogo/images/gamesIcon.svg",
        "price": 235494
    },
    {
        "id": 18,
        "brand": "asdfdsa",
        "description": "zdczs omedat",
        "image": "www.lider.cl/catalogo/images/smartphoneIcon.svg",
        "price": 849666
    },
    {
        "id": 19,
        "brand": "ñhm pcjpemc",
        "description": "ñnkak giehcj",
        "image": "www.lider.cl/catalogo/images/homeIcon.svg",
        "price": 868855
    },
    {
        "id": 20,
        "brand": "auc fjbkjyd",
        "description": "tdge lbcakogp",
        "image": "www.lider.cl/catalogo/images/bedRoomIcon.svg",
        "price": 843751
    },
    {
        "id": 21,
        "brand": "hai jabwbsp",
        "description": "hcpqws jyufm",
        "image": "www.lider.cl/catalogo/images/tvIcon.svg",
        "price": 829806
    },
    {
        "id": 22,
        "brand": "vhg aowurdr",
        "description": "pqfqtr ybmiq",
        "image": "www.lider.cl/catalogo/images/bicycleIcon.svg",
        "price": 933254
    },
    {
        "id": 23,
        "brand": "dasad",
        "description": "zyss vmcñvzwt",
        "image": "www.lider.cl/catalogo/images/bedRoomIcon.svg",
        "price": 370775
    },
    {
        "id": 24,
        "brand": "fzpusgc",
        "description": "jnrojo tjcja",
        "image": "www.lider.cl/catalogo/images/homeIcon.svg",
        "price": 669045
    },
    {
        "id": 25,
        "brand": "soiayxr",
        "description": "oftetv sxgwl",
        "image": "www.lider.cl/catalogo/images/toysIcon.svg",
        "price": 912974
    },
    {
        "id": 26,
        "brand": "ofojjctj",
        "description": "ñwylwi yktiq",
        "image": "www.lider.cl/catalogo/images/homeIcon.svg",
        "price": 989405
    },
    {
        "id": 27,
        "brand": "soiayxr",
        "description": "aeecg nfrieh",
        "image": "www.lider.cl/catalogo/images/toysIcon.svg",
        "price": 154070
    },
    {
        "id": 28,
        "brand": "aio efyubfx",
        "description": "zymart xqisc",
        "image": "www.lider.cl/catalogo/images/bicycleIcon.svg",
        "price": 691783
    },
    {
        "id": 29,
        "brand": "dsafasd",
        "description": "zlrwax bñyrh",
        "image": "www.lider.cl/catalogo/images/furnitureIcon.svg",
        "price": 756135
    },
    {
        "id": 30,
        "brand": "ñszuqiq",
        "description": "pqln spqwnrgy",
        "image": "www.lider.cl/catalogo/images/smartphoneIcon.svg",
        "price": 571646
    }
];

async function router(req, res) {
    const reqUrl = url.parse(req.url, true);

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');

    if (req.method !== 'GET' && req.method !== 'OPTIONS') {
        res.writeHead(401);
        res.end(JSON.stringify({
            message: 'No autorizado'
        }));
        return;
    }
    
    switch (reqUrl.pathname) {
        case '/':
            res.writeHead(200);
            res.end(JSON.stringify({ up: "ok" }));
            break;
        
        case '/products':
            try {
                var products = await getProducts();
                res.writeHead(200);
                res.end(JSON.stringify({ products: products }));
                break;
            } catch (error) {
                res.writeHead(500);
                res.end(JSON.stringify({ message: error }));
                break;
            }
        
        default:
            res.writeHead(500);
            res.end('{ message: "Error" }');
            break;
    }
}

module.exports = router;