'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "33330532710945fcb72e1192ccb03fcc",
".git/config": "bd7b708eb5fdbacebd416326c61d8678",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d9bfcdc6c0f60c26cbb099d9fe6c11df",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8fa6344c06beaa91bd4b224dfa8df5e3",
".git/logs/refs/heads/master": "44c530550894928d20388003a473db32",
".git/logs/refs/remotes/origin/master": "11487203551756a0db46bc0e0ff720c2",
".git/objects/01/b6166f79f70df53c9bae65b98ceafa6ad3b6a6": "1e0b038c2904a6efad57a361351aa06d",
".git/objects/03/cbc392903ac3504cb3633bbf27c21a7a5606f6": "6988659ecee9afb0253e2ebd2bd33921",
".git/objects/04/6e59ab4db77776bc14f0f960023d18adb452dc": "15f44f49dd205275f680eaafd37043ac",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/0c/2ee5039531c9d487a75cc747e9eb2bdba5ba6f": "66a45a228fe1c13fbe84244b925594b9",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0d/e91162a67d3ddd345e7286d6cf0906d4dedd18": "a1c2ef7effd8fed6080a97e6bf4a0b04",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/14/208711a8aa10053d9a656465d950ead2d3e038": "138f429931da4b97a969b710bb2993e7",
".git/objects/15/32b6ea2ec7d15b3226ea8374a25b7be2d45d91": "4e3fc27c7cafe70331317bd16e8a3d36",
".git/objects/17/118604d6dc5d61cf0aa66e0423cefaa7ca6383": "b8510a43298aa257b3c659191b9a01c7",
".git/objects/17/5b96f41048ee497bcde2678d0021f5c5c89adf": "2a1a7c6cb6d3e39b7a95d114f8790120",
".git/objects/1c/f57335d963d3ac815e4824a61ada773c667767": "13e26ce938f4c2eaa424d8a2bf6c9e29",
".git/objects/1d/1273b191a4f605eb1190daf1840c52d92d4541": "63d96268d072c11d92d7331ee4bbc142",
".git/objects/1d/d94df40b2a77888fa8a22cd700284775db2982": "405f64ea5160cf5c802cec066ca6b74e",
".git/objects/1e/2e024885ab0b5fff37cee43d8e42cf6db10348": "4ed20cf0186a9ced70f34f85a0def6bf",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/21/ba26e5e9e544ba2eeebd6a157b85e80ae03a4e": "a9217a13134086199751ec93bac13928",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/27/fad8b50f490b319ccb3f75258871fc2ecf3007": "fbea4abb4bb053ffe39447e73a7f201a",
".git/objects/28/b5172ef74d414d9e9e889d10f5689ace0bb67c": "a19b655aa2ab33fb456cf143c52bb7e6",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2c/70ee6f1591f0e9679da9cdb348965ba3533a76": "ddd3ece8da5e0f744678805e85074670",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/30/6a02f325c56a89c3a2ba7145b10ce1957a171e": "68324dafba1b37daba2ecc77d8ced658",
".git/objects/30/a18ad9e9cc780a129e409e16e2056abfe8e4a9": "646168da613266998067d249c09c76c0",
".git/objects/32/dacaa60d9fb2ff3cd75790687f94b31600918b": "a5303f04fa709fcd7f08d25fe74fc400",
".git/objects/34/d2aa7d65bedfca61cca67267533c17638433c6": "7b640c163a96580b0142c2e124f8ff7f",
".git/objects/36/9aa98a716125c3c6d6ff7d16a6c15d9e7a604d": "0bbca58787ca70384149b3182e49aea6",
".git/objects/38/dc445c243adc11db03c0fe46cf6d097033273e": "61a52d9804ae51e766da1ff2c8aa9018",
".git/objects/39/f2e2ef8425584bba3de398a504219566d85db4": "ac3658807c857d271b2397cce85a070f",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/40/192da43bf841e53eee677d07fa863d719c95e9": "0e94ed609dc941410ae95e0f4fb2b0c4",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/44/b64dabdb4f31aad13a427e1c31250f4311ac86": "74cd9efe8355392eba90aa947fdf2723",
".git/objects/45/dde408875ff530ec94e6d076a7bcd834a1295f": "0cff9e2f8faf70a03c2c62c934ca47cc",
".git/objects/47/a2bee3d282764d41bd36daeda81a7db6b6afad": "24aa9c52d134ea18ac4b4c1339af423b",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4f/823139b55185acb2d726639645abffe1bd8be9": "87bd3253e15315a8a12e5ebaee28d74a",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/52/03febc26cc0f3aa1919949e6634b004e3edacc": "d5faee7a5675a32f6c7877098316ed32",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/57/c941154ec43812d36107b48353ee87aec37516": "ca8d5014983d37d48abd5c424025e662",
".git/objects/5a/5b048b029190701f9d272e7c905819cb70a0ec": "10d2d2ba8692508cc1880c53be80d7bd",
".git/objects/5c/ae32c520f61bd141a4e2b82b8f84a5ebdadb88": "4b0cdd40c3e39352c73084f581744beb",
".git/objects/5d/cd87b2fc92fde303e1896b74d18b94fe6d13e2": "2869c08210b720545b3fc1e96516784b",
".git/objects/5e/323f3367ae6ee9ab234db228bbb5a1b2173256": "0984bb065a07b36f4d151313fd7a449e",
".git/objects/68/70514dfe050ef915c12f937d705c87a1d2bae0": "c32fa415589aad80a6ee35d0af7261ad",
".git/objects/6a/4c99ff95e35b18ff6db89926e9d16b59b88654": "e41ecc2d4fc5b4897fb876b1d8a62f1b",
".git/objects/72/bd2ed7fd3da448ff535261c512c784ee9b433e": "db3348cba4af3dfbf53bb80bda689567",
".git/objects/76/b65d9b8b1194e12e2862612173a646aeb8f606": "ed3a3e379196caf6fc6240b473844507",
".git/objects/78/de5ac53221946e6390095e5e3af63be1a220ce": "43181051f06762c12a6ba7b50c832ee4",
".git/objects/7c/7d3f4c649620b4db7169807b0a44fc7466567c": "9678c202a684d7019502c5376f281f06",
".git/objects/7e/d53e658e4e1a0644283293a03f68f2c2c171d8": "6156872a4e99f64674d3febb12da2baa",
".git/objects/80/c8b3e6be569a3d936dcc88dc54c926e703fdf6": "e4797d1a4b955b914b344d2f3fdd21c5",
".git/objects/82/b89610e5311cf34b1bb5d7c88c08eb91089998": "069e7acb765a83fff90dc63581224f41",
".git/objects/84/ebcc424b73b1727174af7bf7c02f8047681090": "fffb9a0ea874eaf5c82b48e8df119feb",
".git/objects/87/7596474dcef64b1e88e18f21b9194da662b38c": "b45e54f606330351bcfb72d22414f230",
".git/objects/88/61fefa77b354f8d5c46896caab1b3ebf08c063": "1c034cb79d06566b081f26c54cb5fb39",
".git/objects/88/aeb5cfec": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/92/70afe506c4e98b6bf137cfc5d36afe56b9bce3": "9793402e7c845b233764cbb1e68f5047",
".git/objects/93/fad5574555ef4f9c1bb01f990c307343cbbaec": "a7ab06893bce1d81246ddf46f044d08a",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/99/2959cd4b4de2f3e3e3f9cc0bfc0d7503f0cc37": "e9c47da2d7e5bfcbd3e95263b18af8bf",
".git/objects/99/5590834a4eb4dbb351764c520beeab5b7f7a8a": "806207dcdf002e899896970cf5b35688",
".git/objects/99/9f9d03038e884c430fd63add13b20ec1c87ba3": "454ea59f82fe2a4c8869ba9820158e6a",
".git/objects/9b/b8d771ad50b0f29a109824ab9289d0359e7456": "566fb44313abe10d1c6c0a05ba67af1f",
".git/objects/a0/055faf7120a96b505c2814a1e65420bd3fe6df": "cfb8c851625d810a7c5e110a47cf1fc5",
".git/objects/a1/f1287db86468c54e78180c3a75a660462ec2af": "ff659294f23294fb67ec5c0cc62de9d8",
".git/objects/a2/426a9a985793a116ee53d8427eb1ae4cd341e5": "7e4c0a573f91032cdd71a904866c4e7d",
".git/objects/a2/fb49c2ccf2f98f7a6b96d0c58b5748e7dfe970": "4348d702af216f7a6bec2d18e5f4b5f9",
".git/objects/a3/003ea0c4e58c6a85a14991b61b3cf1366020ef": "e6c7d1d83e841e131e0d06011b21a9b2",
".git/objects/a3/849e0c6cf7b7f00d0c404cefbc1e5a94c1a75b": "8b07a25ee8d3e010228a9ed6ab750d38",
".git/objects/a6/603cd1f7cbdc4a1c77fd1bfbe240b2b0864d7c": "be01908682bee9740611346860df709c",
".git/objects/a6/ea91b984deab585eb814e99c05078fa9f986cc": "d2dbdc7870ef5385d90e4c0eb9d628fd",
".git/objects/a7/d85e8d10288ae7c29438ec63268de727cf2215": "37a81aaece99d136ecc2133fca8b680a",
".git/objects/ab/41351779ffad25a352c545a1fd3268d210714d": "cb83febbb22a710f593f843ce9b946f9",
".git/objects/ac/168df93de16954efedba9f215bbe1e2647d8fa": "9a24e8258776359319a8ae8073625f02",
".git/objects/ae/39b2291c8aceee760587eedff48b5f4a108a4c": "af710070a81219743232d7784134ffe2",
".git/objects/b6/bf0ec3a6c83f6b8687db7f9f7c8d3b1862d5a5": "29bff664130caa176a1c2ef1a5d6d30c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/17c24c17f2bb176ec0829d045b1b4700df5d88": "70f58ae6a2de9ab530ab7d846a220cf7",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/2395b5dc91420e9203ee13a96a13cab690e746": "8dddfb89c6e41f070a0cee90862dc781",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/ba/f1af89c149c56a7e6cc805c37d7fe78af52257": "e6b5bc47ba06b537e06f896966fa0272",
".git/objects/bb/10a9a07a8cf93c33ae676092a66a939860ea94": "d0edea89d255e7525bd1b81fb686bc31",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bd/4e219f2230dee490251b86beda534309faab3e": "ea19ff5f248320975a524151802a5a9b",
".git/objects/bf/a988c6dcc5de682c96901780537b86ad692a4d": "d39ba68d3bf52e7a624bb65cb7d3b9cc",
".git/objects/bf/bcfa9f6953f7f98a61179ef9a698ba66606a12": "5ddf690c259cd142d415a02b8bb3b991",
".git/objects/c0/b7487c7c0be0dc901b1a6480da27598cf956a7": "69ff720c33f8107b19dc1512b7b798ed",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/cb/a20dc65d96b046fed92100091256b9ddcab11a": "d8058a005be620a457eb425763e562ab",
".git/objects/ce/1271d3ab962d8fac3b22831d7ec1b235e36ccc": "1b57a5358f8fb41ae0d7f22fdc12ac4f",
".git/objects/d1/23045af6fb253b4a0e228b83579839622fe523": "0f1bdb12d9b7516eaae622cb5a5f64ba",
".git/objects/d6/4778a32b90d81b763730e69e3e66e68251dcb8": "52e4d363212dc2cef7af873c77911b90",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/de/72fad58bfa427d58733657e34b72b036dbc732": "caf5229ab13a256a6f6863d9648980b2",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/ea/91e1a7b63fdca52c9ba458cb253562568c3643": "0523f18a538996e910ad8f6811d7c586",
".git/objects/eb/25e926fc75f9f8ebe93f79f776d0e7fa54c385": "8e57e6b5dba23279ae076dbe304527d3",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/0a07db7cc295bafe4e9a0ceea8417433ecbb20": "12a7bd69cae2b3a46f4545771c01d159",
".git/objects/f1/905e5677fd594389ec1bcb849be47c38788538": "d5aeb63799b0ed75920c9a20c4fc5387",
".git/objects/f5/6e3c00b7ae1b48c9d2cca2d7e5d4bd4d45be51": "cc5045cd1d9ae1c32e6f1d8f95e6667b",
".git/objects/f5/d355403b1af102d6dc00c7ef1bbde8350531c6": "a36a1b35c4a922bc4439f1509b77d726",
".git/objects/f6/3dcc6561d4a542e8b77b36ae4babc8bcbcc044": "fe2ba79eda4f9aa5299bc3678b418c7e",
".git/refs/heads/master": "7ca749c7863b24e85d2ff96f85aca628",
".git/refs/remotes/origin/master": "7ca749c7863b24e85d2ff96f85aca628",
"assets/AssetManifest.bin": "d907b500e8fc834f664f36df0dc9a404",
"assets/AssetManifest.bin.json": "7c7da6e7042b9993757f62d13c429e36",
"assets/AssetManifest.json": "1d7ba9d92bde60c94c7e8bbb8747fe0f",
"assets/assets/icons/about.png": "bd36ee38429b0970bb924777cbbcf8e4",
"assets/assets/icons/ammar.jpeg": "165e04f344d6196e100a91214019d418",
"assets/assets/icons/certificate.png": "635d509a026c29e3a9c9a5e71370981c",
"assets/assets/icons/clock.svg": "b9ff6dd2862543c3b9743a455bbffd82",
"assets/assets/icons/education.png": "af8bf11b46e0b6fc9b24034ab9a5353f",
"assets/assets/icons/email.png": "2c1a7560c88ea83e6b2593cd07af8ad8",
"assets/assets/icons/experience.png": "40fab9f6235f4f37054a277ed32fe0f2",
"assets/assets/icons/flutter.svg": "356b8423fb4c37e3babe292a9e03c975",
"assets/assets/icons/github.png": "1b9b9f71269e504156ce9d89a00f2551",
"assets/assets/icons/github.svg": "76d344f08412543c74ccd1fb2493d607",
"assets/assets/icons/linkedin.png": "9d42391daecb952cdffaad185d9aae4b",
"assets/assets/icons/linkedin.svg": "3332e5306c890dfe6c9549c849124e19",
"assets/assets/icons/matrix.png": "9127a90a234090cbf8815bb0502fd873",
"assets/assets/icons/playstore.svg": "dafbbd5f4a256bb2bcf37f16f3ceff1b",
"assets/assets/icons/project.png": "d48a9a00442dba2e576e121cbbaec43d",
"assets/assets/icons/projects.png": "153a5f320099ca9c35c2041b6d996acd",
"assets/assets/icons/resume.png": "6d3418fe72fed6f3b9e1bd0a2f015161",
"assets/assets/icons/skills.png": "16167c6e4eb960742ec05a6cd4b78f11",
"assets/assets/icons/topMate.png": "8f85d44acfac5e1e6f6e43f1ae2f88aa",
"assets/assets/icons/twitter.svg": "8f662cde3e6a9aca24b77c1639d9423e",
"assets/assets/icons/x.png": "6352d995b0c2a0f882503daa1d99a2e7",
"assets/assets/icons/youtube.svg": "3eb182663fd1181f048705dedec45580",
"assets/assets/images/cloudRed.svg": "bda20cdd4888404719f432377a3665f9",
"assets/assets/images/cloudyBlue.svg": "e9d5e246793cd42bc01f6809d826583d",
"assets/assets/rive/rain.riv": "91a917f7343f7ac4523955e4ac8ca7f6",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "b50688148a931404a6b358791c1a7b97",
"assets/NOTICES": "9aa595d7e31ccd4da268068ba48814d7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "f25e8e701660fb45e2a81ff3f43c6d5c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "b72c617acdf2227c8b1413215f620711",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "570a54e96fb2003e6db48119dcd33401",
"/": "570a54e96fb2003e6db48119dcd33401",
"main.dart.js": "3df0a396115d4e30d30a39372e1eb5ac",
"manifest.json": "3190bf3a467865b7a64442326abbf0f8",
"version.json": "45d144cc6575b333a5ccc1304f096284"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
