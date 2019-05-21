const coins = [
  {
    "id": 1,
    "symbol": "BTC",
    "name": "Bitcoin",
    "color": "#f7931A",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/Sy33Krudb/btc.svg",
    "label": "Bitcoin"
  },
  {
    "id": 2,
    "symbol": "ETH",
    "name": "Ethereum",
    "color": "#3C3C3D",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/rk4RKHOuW/eth.svg",
    "label": "Ethereum"
  },
  {
    "id": 3,
    "symbol": "XRP",
    "name": "XRP",
    "color": "#000000",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/B1oPuTyfX/xrp.svg",
    "label": "XRP"
  },
  {
    "id": 4,
    "symbol": "BCH",
    "name": "Bitcoin Cash",
    "color": "#8dc451",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/By8ziihX7/bch.svg",
    "label": "Bitcoin Cash"
  },
  {
    "id": 5,
    "symbol": "EOS",
    "name": "EOS",
    "color": "#443f54",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/PqOYrWSje/eos2.svg",
    "label": "EOS"
  },
  {
    "id": 7,
    "symbol": "LTC",
    "name": "Litecoin",
    "color": "#a0a0a0",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/BUvPxmc9o/ltcnew.svg",
    "label": "Litecoin"
  },
  {
    "id": 8,
    "symbol": "USDT",
    "name": "Tether",
    "color": "#22a079",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/SJs1nH_OZ/usdt.svg",
    "label": "Tether"
  },
  {
    "id": 9,
    "symbol": "ADA",
    "name": "Cardano",
    "color": "#3cc8c8",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/ryY28nXhW/ada.svg",
    "label": "Cardano"
  },
  {
    "id": 6,
    "symbol": "XLM",
    "name": "Stellar",
    "color": "#000000",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/78CxK1xsp/Stellar_symbol_black_RGB.svg",
    "label": "Stellar"
  },
  {
    "id": 11567,
    "symbol": "FT*",
    "name": "FCoin Token",
    "color": null,
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/ZHyEQOaPd/Fcoin.svg",
    "label": "FCoin Token"
  },
  {
    "id": 11,
    "symbol": "TRX",
    "name": "TRON",
    "color": "#eb0029",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/behejNqQs/trx.svg",
    "label": "TRON"
  },
  {
    "id": 4875,
    "symbol": "BSV",
    "name": "Bitcoin SV",
    "color": "#eab300",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/388ehh6kq/bitcoin-sv-1.svg",
    "label": "Bitcoin SV"
  },
  {
    "id": 21,
    "symbol": "ZEC",
    "name": "ZCash",
    "color": "#000",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/rJrKiS_uZ/zec.svg",
    "label": "ZCash"
  },
  {
    "id": 10,
    "symbol": "XMR",
    "name": "Monero",
    "color": "#ff7519",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/Syz-oSd_Z/xmr.svg",
    "label": "Monero"
  },
  {
    "id": 13,
    "symbol": "DASH",
    "name": "Dash",
    "color": "#1c75bc",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/PyCmduSxt/Dash-D-white_on_blue_circle.svg",
    "label": "Dash"
  },
  {
    "id": 12,
    "symbol": "MIOTA",
    "name": "IOTA",
    "color": "#000",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/H1IQ9Bdd-/miota.svg",
    "label": "IOTA"
  },
  {
    "id": 18,
    "symbol": "XTZ",
    "name": "Tezos",
    "color": "#2c7df7",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/HkLUdilQ7/xtz.svg",
    "label": "Tezos"
  },
  {
    "id": 4966,
    "symbol": "ATOM*",
    "name": "Cosmos",
    "color": null,
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/HJzHboruM/atom.svg",
    "label": "Cosmos"
  },
  {
    "id": 71,
    "symbol": "HT",
    "name": "Huobi Token",
    "color": "#2daadf",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/ryFpQe0c7/ht.svg",
    "label": "Huobi Token"
  },
  {
    "id": 26,
    "symbol": "ONT",
    "name": "Ontology",
    "color": "#32a4be",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/rJHf0aixm/ont.svg",
    "label": "Ontology"
  },
  {
    "id": 16,
    "symbol": "ETC",
    "name": "Ethereum Classic",
    "color": "#699070",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/rJfyor__W/etc.svg",
    "label": "Ethereum Classic"
  },
  {
    "id": 15,
    "symbol": "NEO",
    "name": "NEO",
    "color": "#aedb00",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/Bkop5Hu_Z/neo.svg",
    "label": "NEO"
  },
  {
    "id": 17,
    "symbol": "XEM",
    "name": "NEM",
    "color": "#67b2e8",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/Bkvu9rOOZ/xem.svg",
    "label": "NEM"
  },
  {
    "id": 22,
    "symbol": "MKR",
    "name": "Maker",
    "color": "#1abc9c",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/sjHfS7jCS/mkrdao.svg",
    "label": "Maker"
  },
  {
    "id": 14,
    "symbol": "BNB",
    "name": "Binance Coin",
    "color": "#e8b342",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/B1N19L_dZ/bnb.svg",
    "label": "Binance Coin"
  },
  {
    "id": 59,
    "symbol": "LINK",
    "name": "Chainlink",
    "color": "#4680b0",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/9NOP9tOem/chainlink.svg",
    "label": "Chainlink"
  },
  {
    "id": 46,
    "symbol": "BAT",
    "name": "Basic Attention Token",
    "color": "#9e1f63",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/SyX3N05JQ/bat.svg",
    "label": "Basic Attention Token"
  },
  {
    "id": 19,
    "symbol": "VET",
    "name": "VeChain",
    "color": "#4bc0fa",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/B1_TDu9Dm/VEN.svg",
    "label": "VeChain"
  },
  {
    "id": 1524,
    "symbol": "OKB",
    "name": "OKB",
    "color": null,
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/BJcjC5rCQ/Okex.svg",
    "label": "OKB"
  },
  {
    "id": 23,
    "symbol": "BTG",
    "name": "Bitcoin Gold",
    "color": "#021e6b",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/BkLedkw-G/btg.svg",
    "label": "Bitcoin Gold"
  },
  {
    "id": 10296,
    "symbol": "CRO",
    "name": "Crypto.com Chain",
    "color": "#01275d",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/2o91jm73M/cro.svg",
    "label": "Crypto.com Chain"
  },
  {
    "id": 20,
    "symbol": "DOGE",
    "name": "Dogecoin",
    "color": "#c2a633",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/H1arXIuOZ/doge.svg",
    "label": "Dogecoin"
  },
  {
    "id": 1760,
    "symbol": "USDC",
    "name": "USDC",
    "color": null,
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/jkDf8sQbY/usdc.svg",
    "label": "USDC"
  },
  {
    "id": 51,
    "symbol": "HOT*",
    "name": "Holo",
    "color": "#007f88",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/B1Bz-3m_X/Hot.svg",
    "label": "Holo"
  },
  {
    "id": 24,
    "symbol": "OMG",
    "name": "OmiseGo",
    "color": "#1a56f0",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/BJGUoHu_Z/omg.svg",
    "label": "OmiseGo"
  },
  {
    "id": 4157,
    "symbol": "ZB",
    "name": "ZB Token",
    "color": null,
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/VhtrNhSv7/ZB.svg",
    "label": "ZB Token"
  },
  {
    "id": 29,
    "symbol": "QTUM",
    "name": "QTUM",
    "color": "#2e9ad0",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/SkpDqAShz/qtum.svg",
    "label": "QTUM"
  },
  {
    "id": 28,
    "symbol": "DCR",
    "name": "Decred",
    "color": "#3268fb",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/SyJaBU_dZ/dcr.svg",
    "label": "Decred"
  },
  {
    "id": 43,
    "symbol": "WAVES",
    "name": "Waves",
    "color": "#0056FF",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/B1tzRbyMz/waves.svg",
    "label": "Waves"
  },
  {
    "id": 274,
    "symbol": "TUSD",
    "name": "TrueUSD",
    "color": "#1f2e5a",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/ZjuIqhhNH/tusd.svg",
    "label": "TrueUSD"
  },
  {
    "id": 27,
    "symbol": "LSK",
    "name": "Lisk",
    "color": "#23508e",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/SJTGUIozm/lisk.svg",
    "label": "Lisk"
  },
  {
    "id": 35,
    "symbol": "NANO",
    "name": "Nano",
    "color": "#4a90e2",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/HygqO-iPM/nano.svg",
    "label": "Nano"
  },
  {
    "id": 50,
    "symbol": "REP",
    "name": "Augur",
    "color": "#5f2652",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/H1GlZLd_Z/rep.svg",
    "label": "Augur"
  },
  {
    "id": 36,
    "symbol": "BCD",
    "name": "Bitcoin Diamond",
    "color": "#ffc75d",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/ByN45aEm7/bcd.svg",
    "label": "Bitcoin Diamond"
  },
  {
    "id": 37,
    "symbol": "ICX",
    "name": "ICON",
    "color": "#1aaaba",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/By_O0CoXf/ICON.svg",
    "label": "ICON"
  },
  {
    "id": 25,
    "symbol": "ZRX",
    "name": "0x",
    "color": "#595b5b",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/Hy7oqBSFW/zrx.svg",
    "label": "0x"
  },
  {
    "id": 69,
    "symbol": "ELF",
    "name": "aelf",
    "color": "#7c1cb9",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/B1mSolBNM/elf.svg",
    "label": "aelf"
  },
  {
    "id": 78,
    "symbol": "AOA*",
    "name": "Aurora",
    "color": "#299aa9",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/SydvVF6UQ/aurora.svg",
    "label": "Aurora"
  },
  {
    "id": 1694,
    "symbol": "PAX",
    "name": "Paxos Standard",
    "color": "#085229",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/H1NkFcuhX/pax.svg",
    "label": "Paxos Standard"
  },
  {
    "id": 5001,
    "symbol": "BF",
    "name": "BitForex Token",
    "color": null,
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/tG3ps5jPI/bitforex.svg",
    "label": "BitForex Token"
  },
  {
    "id": 32,
    "symbol": "BTS",
    "name": "Bitshares",
    "color": "#35baeb",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/B1TCoS_O-/bts.svg",
    "label": "Bitshares"
  },
  {
    "id": 44,
    "symbol": "NPXS",
    "name": "Pundi X",
    "color": "#f4cf00",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/Hk6cqrrKf/pxs.svg",
    "label": "Pundi X"
  },
  {
    "id": 31,
    "symbol": "BCN",
    "name": "ByteCoin",
    "color": "#f04086",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/B1AbzkcLM/bcn.svg",
    "label": "ByteCoin"
  },
  {
    "id": 40,
    "symbol": "XVG",
    "name": "Verge",
    "color": "#00cbff",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/HSz1MpI5l/xvg.svg",
    "label": "Verge"
  },
  {
    "id": 61,
    "symbol": "IOST",
    "name": "IOST",
    "color": "#000000",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/H1tTqFuSf/iost.svg",
    "label": "IOST"
  },
  {
    "id": 55,
    "symbol": "XET",
    "name": "Eternal Token",
    "color": "#fe5368",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/S1Ra8xLNX/XET.svg",
    "label": "Eternal Token"
  },
  {
    "id": 30,
    "symbol": "DGB",
    "name": "DigiByte",
    "color": "#002352",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/HJcoNFDSM/dgb.svg",
    "label": "DigiByte"
  },
  {
    "id": 33,
    "symbol": "AE",
    "name": "Aeternity",
    "color": "#de3f6b",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/HJg3pANTZ/ae.svg",
    "label": "Aeternity"
  },
  {
    "id": 38,
    "symbol": "SC",
    "name": "Siacoin",
    "color": "#20ee82",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/Bk4Gi1qLM/sc.svg",
    "label": "Siacoin"
  },
  {
    "id": 57,
    "symbol": "KMD",
    "name": "Komodo",
    "color": "#326464",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/SyobU8dOb/kmd.svg",
    "label": "Komodo"
  },
  {
    "id": 125,
    "symbol": "RVN",
    "name": "Ravencoin",
    "color": "#384182",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/S10Asj-8X/rvn.svg",
    "label": "Ravencoin"
  },
  {
    "id": 126,
    "symbol": "ENJ",
    "name": "Enjin Coin",
    "color": "#6279d3",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/zIfmGQ-3_/enj.svg",
    "label": "Enjin Coin"
  },
  {
    "id": 96,
    "symbol": "THETA",
    "name": "Theta Token",
    "color": "#1b1f2a",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/HJHg2k9Lf/theta.svg",
    "label": "Theta Token"
  },
  {
    "id": 87,
    "symbol": "WTC",
    "name": "Waltonchain",
    "color": "#8400fd",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/SJlGzwe87/wtc.svg",
    "label": "Waltonchain"
  },
  {
    "id": 39,
    "symbol": "STEEM",
    "name": "Steem",
    "color": "#004EFF",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/SkkCsr_OW/steem.svg",
    "label": "Steem"
  },
  {
    "id": 10463,
    "symbol": "BTT*",
    "name": "BitTorrent",
    "color": null,
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/oRjmSKLj0/BTT.svg",
    "label": "BitTorrent"
  },
  {
    "id": 369,
    "symbol": "QBIT",
    "name": "Qubitica",
    "color": null,
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/ZISuBs0OKzG/qubitica.svg",
    "label": "Qubitica"
  },
  {
    "id": 583,
    "symbol": "THR",
    "name": "ThoreCoin",
    "color": null,
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/9BZGIZ7Kvc/thorecoin.svg",
    "label": "ThoreCoin"
  },
  {
    "id": 121,
    "symbol": "STORJ",
    "name": "Storj",
    "color": "#2683ff",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/r1KI_IduZ/storj.svg",
    "label": "Storj"
  },
  {
    "id": 34,
    "symbol": "ZIL",
    "name": "Zilliqa",
    "color": "#49c1bf",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/H18JFWswf/zil.svg",
    "label": "Zilliqa"
  },
  {
    "id": 75,
    "symbol": "MONA",
    "name": "MonaCoin",
    "color": "#f0dbb0",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/SkxEgPdd-/mona.svg",
    "label": "MonaCoin"
  },
  {
    "id": 101,
    "symbol": "POLY",
    "name": "PolyBit",
    "color": "#70d7c4",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/xkGbyNpua/poly.svg",
    "label": "PolyBit"
  },
  {
    "id": 53,
    "symbol": "SNT",
    "name": "Status",
    "color": "#5b6dee",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/B1MQMP__Z/snt.svg",
    "label": "Status"
  },
  {
    "id": 62,
    "symbol": "KCS",
    "name": "KuCoin Shares",
    "color": "#0097e8",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/Byr-81qLG/kcs.svg",
    "label": "KuCoin Shares"
  },
  {
    "id": 115,
    "symbol": "KIN",
    "name": "Kin",
    "color": "#0054c8",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/rJDpy02JM/kin.svg",
    "label": "Kin"
  },
  {
    "id": 52,
    "symbol": "STRAT",
    "name": "Stratis",
    "color": "#21bbc0",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/SyEuoBu_W/strat.svg",
    "label": "Stratis"
  },
  {
    "id": 58,
    "symbol": "CNX",
    "name": "Cryptonex",
    "color": "#228cc1",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/S12KybHNf/cnx.svg",
    "label": "Cryptonex"
  },
  {
    "id": 134,
    "symbol": "DENT",
    "name": "Dent",
    "color": "#fa2922",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/BJEc3RhmG/dent.svg",
    "label": "Dent"
  },
  {
    "id": 95,
    "symbol": "DAI",
    "name": "Dai",
    "color": "#f5a365",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/S1ffe-owM/dai.svg",
    "label": "Dai"
  },
  {
    "id": 64,
    "symbol": "MAID",
    "name": "MaidSafe Coin",
    "color": "#5194d2",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/HJjQZLd_Z/maid.svg",
    "label": "MaidSafe Coin"
  },
  {
    "id": 56,
    "symbol": "ARDR",
    "name": "Ardor",
    "color": "#1562a1",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/HyZRH8d_W/ardr.svg",
    "label": "Ardor"
  },
  {
    "id": 89,
    "symbol": "MCO",
    "name": "Crypto.com",
    "color": "#01275d",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/PauKcQ3ht/cro.svg",
    "label": "Crypto.com"
  },
  {
    "id": 49,
    "symbol": "GNT",
    "name": "Golem",
    "color": "#002d64",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/rkzb-Uuu-/gnt.svg",
    "label": "Golem"
  },
  {
    "id": 1988,
    "symbol": "DEX",
    "name": "Coinbit DEX",
    "color": null,
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/o-tq8aTNH/dex_logo.svg",
    "label": "Coinbit DEX"
  },
  {
    "id": 129,
    "symbol": "FCT",
    "name": "Factoids",
    "color": "#5a8bab",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/SJkSWUdOZ/fct.svg",
    "label": "Factoids"
  },
  {
    "id": 84,
    "symbol": "DGD",
    "name": "Digix DAO",
    "color": "#c8c9cb",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/HyrrNJ9LM/dgd.svg",
    "label": "Digix DAO"
  },
  {
    "id": 868,
    "symbol": "EVN",
    "name": "Envion",
    "color": null,
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/HJFsJub1X/env.svg",
    "label": "Envion"
  },
  {
    "id": 77,
    "symbol": "MANA",
    "name": "Decentraland",
    "color": "#f47e33",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/rJEGUyvbf/mana.svg",
    "label": "Decentraland"
  },
  {
    "id": 70,
    "symbol": "GXS",
    "name": "GXShares",
    "color": "#6699ff",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/H1_JAANaW/gxs.svg",
    "label": "GXShares"
  },
  {
    "id": 97,
    "symbol": "WAX",
    "name": "WAX",
    "color": "#ed8825",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/B1c6n7nXG/wax.svg",
    "label": "WAX"
  },
  {
    "id": 82,
    "symbol": "ARK",
    "name": "ARK",
    "color": "#f70000",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/HyWBr8_OW/ark.svg",
    "label": "ARK"
  },
  {
    "id": 86,
    "symbol": "ZEN",
    "name": "Horizen",
    "color": "#041742",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/r1dc3pGvX/zen.svg",
    "label": "Horizen"
  },
  {
    "id": 72,
    "symbol": "LRC",
    "name": "Loopring",
    "color": "#000000",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/Hyi4YJz3M/lrc.svg",
    "label": "Loopring"
  },
  {
    "id": 5371,
    "symbol": "INB",
    "name": "Insight Chain",
    "color": null,
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/i230a9U2Sqq/insight-chain.svg",
    "label": "Insight Chain"
  },
  {
    "id": 154,
    "symbol": "SAN",
    "name": "Santiment",
    "color": "#26a987",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/S10Nxvdub/san.svg",
    "label": "Santiment"
  },
  {
    "id": 444,
    "symbol": "CLAM",
    "name": "CLAMS",
    "color": null,
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/rkcW7w_O-/clam.svg",
    "label": "CLAMS"
  },
  {
    "id": 79,
    "symbol": "LOOM",
    "name": "Loom Network",
    "color": "#007e9e",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/B17eQ7HwX/loom.svg",
    "label": "Loom Network"
  },
  {
    "id": 399,
    "symbol": "LA",
    "name": "LATOKEN",
    "color": null,
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/H1FsUFwSG/la.svg",
    "label": "LATOKEN"
  },
  {
    "id": 73,
    "symbol": "HC",
    "name": "HCASH",
    "color": "#56428e",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/HJ6OlzVKW/hsr.svg",
    "label": "HCASH"
  },
  {
    "id": 54,
    "symbol": "PPT",
    "name": "Populous",
    "color": "#152743",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/HyCw7LOdZ/ppt.svg",
    "label": "Populous"
  },
  {
    "id": 65,
    "symbol": "RDD",
    "name": "Reddcoin",
    "color": "#b50c00",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/By1bgDdOb/rdd.svg",
    "label": "Reddcoin"
  },
  {
    "id": 422,
    "symbol": "NMR",
    "name": "Numeraire",
    "color": null,
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/Bk6eoUOuZ/nmr.svg",
    "label": "Numeraire"
  },
  {
    "id": 68,
    "symbol": "MOAC",
    "name": "MOAC",
    "color": "#000000",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/rk02EfNgX/moac.svg",
    "label": "MOAC"
  },
  {
    "id": 4180,
    "symbol": "WICC",
    "name": "WaykiChain",
    "color": "#119fea",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/By3Ij-NlQ/wicc.svg",
    "label": "WaykiChain"
  },
  {
    "id": 67,
    "symbol": "NAS",
    "name": "Nebulas",
    "color": "#0935f4",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/HJkpf-owM/nas.svg",
    "label": "Nebulas"
  },
  {
    "id": 150,
    "symbol": "BHPC",
    "name": "BHPCash",
    "color": "#072942",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/BkWUY5rCm/bhpc.svg",
    "label": "BHPCash"
  },
  {
    "id": 4172,
    "symbol": "POLY*",
    "name": "Polymath Network",
    "color": "#5161a4",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/SyECt32XQ/polymath.svg",
    "label": "Polymath Network"
  },
  {
    "id": 92,
    "symbol": "POWR",
    "name": "Power Ledger",
    "color": "#00cdd7",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/HyT355R_Q/powr.svg",
    "label": "Power Ledger"
  },
  {
    "id": 114,
    "symbol": "R",
    "name": "Revain",
    "color": "#35263b",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/SJ8agWHEf/r.svg",
    "label": "Revain"
  },
  {
    "id": 138,
    "symbol": "VERI",
    "name": "Veritaseum",
    "color": "#282828",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/SJE0orHtW/veri.svg",
    "label": "Veritaseum"
  },
  {
    "id": 85,
    "symbol": "NOAH",
    "name": "Noah Coin",
    "color": "#193b54",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/Bn8u5b7v6M2/noah-coin.svg",
    "label": "Noah Coin"
  },
  {
    "id": 99,
    "symbol": "NEXO",
    "name": "Nexo",
    "color": "#0e34aa",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/V2znfjzI4/nexo.svg",
    "label": "Nexo"
  },
  {
    "id": 76,
    "symbol": "BNT",
    "name": "Bancor",
    "color": "#102644",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/ryEqP8u_-/bnt.svg",
    "label": "Bancor"
  },
  {
    "id": 93,
    "symbol": "PIVX",
    "name": "PIVX",
    "color": "#5d5177",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/BknhDIOu-/pivx.svg",
    "label": "PIVX"
  },
  {
    "id": 83,
    "symbol": "QASH",
    "name": "QASH",
    "color": "#014df8",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/rJbgsJDbG/qash.svg",
    "label": "QASH"
  },
  {
    "id": 140,
    "symbol": "BRD",
    "name": "Bread Token",
    "color": "#fd6f73",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/HJR6RGCEG/brd.svg",
    "label": "Bread Token"
  },
  {
    "id": 48,
    "symbol": "ETP",
    "name": "Metaverse ETP",
    "color": "#fcb26d",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/ByRxGl-kf/etp.svg",
    "label": "Metaverse ETP"
  },
  {
    "id": 60,
    "symbol": "WAN",
    "name": "Wanchain",
    "color": "#2dbeea",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/S1mGeu9fQ/wan.svg",
    "label": "Wanchain"
  },
  {
    "id": 147,
    "symbol": "RLC",
    "name": "iExec RLC",
    "color": "#f8df01",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/H16Oqk98G/rlc.svg",
    "label": "iExec RLC"
  },
  {
    "id": 80,
    "symbol": "FUN",
    "name": "FunFair",
    "color": "#ef0667",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/HyPKwU_uZ/fun.svg",
    "label": "FunFair"
  },
  {
    "id": 180,
    "symbol": "TRUE",
    "name": "True Chain",
    "color": "#203260",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/B1DIX30lQ/true.svg",
    "label": "True Chain"
  },
  {
    "id": 100,
    "symbol": "XZC",
    "name": "ZCoin",
    "color": "#1f1f2e",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/HkGDewuO-/xzc.svg",
    "label": "ZCoin"
  },
  {
    "id": 314,
    "symbol": "REPO",
    "name": "REPO",
    "color": "#25282f",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/ADLH9xkwYs/repo.svg",
    "label": "REPO"
  },
  {
    "id": 105,
    "symbol": "SYS",
    "name": "SysCoin",
    "color": "#03739b",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/HJt_qIu_-/sys.svg",
    "label": "SysCoin"
  },
  {
    "id": 104,
    "symbol": "KNC",
    "name": "Kyber Network",
    "color": "#31cb9e",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/HkGb9qRdX/knc.svg",
    "label": "Kyber Network"
  },
  {
    "id": 106,
    "symbol": "QKC",
    "name": "QuarkChain",
    "color": "#4c2a49",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/Bk0PIhCem/qkc.svg",
    "label": "QuarkChain"
  },
  {
    "id": 47,
    "symbol": "ETN",
    "name": "Electroneum",
    "color": "#24b4dd",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/HJvOCDlyM/etn.svg",
    "label": "Electroneum"
  },
  {
    "id": 113,
    "symbol": "ENG",
    "name": "Enigma",
    "color": "#1f49c3",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/HkCn_5C_7/eng.svg",
    "label": "Enigma"
  },
  {
    "id": 160,
    "symbol": "ODE",
    "name": "ODEM",
    "color": "#35363b",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/HmvsZPtYU01/odem.svg",
    "label": "ODEM"
  },
  {
    "id": 250,
    "symbol": "PAI",
    "name": "PCHAIN",
    "color": "#1d295b",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/rk3Gv3tLm/Pchain.svg",
    "label": "PCHAIN"
  },
  {
    "id": 90,
    "symbol": "ELA",
    "name": "Elastos",
    "color": "#3e8483",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/suO-HsdmS/ela.svg",
    "label": "Elastos"
  },
  {
    "id": 159,
    "symbol": "TOMO",
    "name": "TomoChain",
    "color": "#614184",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/OyWi-iSaaig/tomochain.svg",
    "label": "TomoChain"
  },
  {
    "id": 294,
    "symbol": "CSC",
    "name": "CasinoCoin",
    "color": "#bf0a0a",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/dVL4ifcAalA/casinocoin.svg",
    "label": "CasinoCoin"
  },
  {
    "id": 124,
    "symbol": "BIX",
    "name": "Bibox Token",
    "color": "#659aea",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/B1HhmtwSz/bix.svg",
    "label": "Bibox Token"
  },
  {
    "id": 163,
    "symbol": "RDN",
    "name": "Raiden Network Token",
    "color": "#000000",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/SyuVgXngM/rdn.svg",
    "label": "Raiden Network Token"
  },
  {
    "id": 102,
    "symbol": "GAS",
    "name": "Gas",
    "color": "#295020",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/rJMSO8ddb/neo.svg",
    "label": "Gas"
  },
  {
    "id": 94,
    "symbol": "NXT",
    "name": "Nxt",
    "color": "#005f7d",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/rkEsD8u_W/nxt.svg",
    "label": "Nxt"
  },
  {
    "id": 4185,
    "symbol": "PRE*",
    "name": "Presearch",
    "color": null,
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/-JtU-umVJKS/presearch.svg",
    "label": "Presearch"
  },
  {
    "id": 231,
    "symbol": "UTK",
    "name": "UTRUST",
    "color": "#7781ff",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/f7KgilBUl/utk.svg",
    "label": "UTRUST"
  },
  {
    "id": 11318,
    "symbol": "MINX",
    "name": "InnovaMinex",
    "color": null,
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/yy2GlI_3H/innovaminex.svg",
    "label": "InnovaMinex"
  },
  {
    "id": 187,
    "symbol": "PART",
    "name": "Particl",
    "color": "#04dea8",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/rJpP2xB6b/part.svg",
    "label": "Particl"
  },
  {
    "id": 91,
    "symbol": "PAY",
    "name": "TenX",
    "color": "#48d0e0",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/HyNrm-jDz/pay.svg",
    "label": "TenX"
  },
  {
    "id": 123,
    "symbol": "GRS",
    "name": "Groestlcoin ",
    "color": "#0f2e4d",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/S1MGvOPCW/grs.svg",
    "label": "Groestlcoin "
  },
  {
    "id": 118,
    "symbol": "CVC",
    "name": "Civic",
    "color": "#3aae4f",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/ry7EHLuu-/cvc.svg",
    "label": "Civic"
  },
  {
    "id": 112,
    "symbol": "CTXC",
    "name": "Cortex",
    "color": "#050a22",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/5IqptpLlH/ctxc.svg",
    "label": "Cortex"
  },
  {
    "id": 181,
    "symbol": "AGI",
    "name": "SingularityNET",
    "color": "#489bfb",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/Bk8y0gjDG/agi.svg",
    "label": "SingularityNET"
  },
  {
    "id": 501,
    "symbol": "HST",
    "name": "Decision Token",
    "color": null,
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/6t6kdNkcMCA/decision-token.svg",
    "label": "Decision Token"
  },
  {
    "id": 986,
    "symbol": "WDC",
    "name": "WorldCoin",
    "color": null,
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/TdNhc80E3q/worldcoin.svg",
    "label": "WorldCoin"
  },
  {
    "id": 148,
    "symbol": "GBYTE",
    "name": "Byteball",
    "color": "#1560bd",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/SJQXHLO_Z/gbyte.svg",
    "label": "Byteball"
  },
  {
    "id": 110,
    "symbol": "OCN",
    "name": "Odyssey",
    "color": "#52b59f",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/qRMWzkTPTO/odyssey.svg",
    "label": "Odyssey"
  },
  {
    "id": 98,
    "symbol": "DGTX",
    "name": "Digitex Futures",
    "color": "#05242e",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/HkX4rQc9m/dgtx.svg",
    "label": "Digitex Futures"
  },
  {
    "id": 81,
    "symbol": "RHOC",
    "name": "RChain",
    "color": "#cc1e46",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/Hko33yvWG/rchain.svg",
    "label": "RChain"
  },
  {
    "id": 178,
    "symbol": "GNO",
    "name": "Gnosis",
    "color": "#00a6c4",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/r16I7Lud-/gno.svg",
    "label": "Gnosis"
  },
  {
    "id": 4372,
    "symbol": "MAN*",
    "name": "Matrix AI Network",
    "color": null,
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/a3KM6O5CT/man.svg",
    "label": "Matrix AI Network"
  },
  {
    "id": 203,
    "symbol": "MEDX",
    "name": "MediBlocX",
    "color": "#0b7aff",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/HyhvvOxIm/medx.svg",
    "label": "MediBlocX"
  },
  {
    "id": 5374,
    "symbol": "INO",
    "name": "INO COIN",
    "color": null,
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/r1KIr7DBX/ino.svg",
    "label": "INO COIN"
  },
  {
    "id": 170,
    "symbol": "APL",
    "name": "Apollo Currency",
    "color": "#e1000a",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/ByqaKyAEX/APL.svg",
    "label": "Apollo Currency"
  },
  {
    "id": 9408,
    "symbol": "LTO",
    "name": "Lotus Token Inc",
    "color": null,
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/uQWs4NSGeHn/lotus-token-inc.svg",
    "label": "Lotus Token Inc"
  },
  {
    "id": 1630,
    "symbol": "GUSD",
    "name": "Gemini dollar",
    "color": "#30D7FA",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/s5cHqxxYr/gusd.svg",
    "label": "Gemini dollar"
  },
  {
    "id": 5939,
    "symbol": "ZT",
    "name": "ZTCoin",
    "color": null,
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/yBF8yroLV/zbg.svg",
    "label": "ZTCoin"
  },
  {
    "id": 116,
    "symbol": "NXS",
    "name": "Nexus",
    "color": "#0ca4fb",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/SkbAT0VaZ/nxs.svg",
    "label": "Nexus"
  },
  {
    "id": 207,
    "symbol": "EMC2",
    "name": "Einsteinium",
    "color": "#19588f",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/r1kx9JDZf/EMC2.svg",
    "label": "Einsteinium"
  },
  {
    "id": 142,
    "symbol": "VTC",
    "name": "Vertcoin",
    "color": "#047b4d",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/H1W-WvO_-/vtc.svg",
    "label": "Vertcoin"
  },
  {
    "id": 2849,
    "symbol": "FTM",
    "name": "Fantom",
    "color": null,
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/cY3moT__SV/fantom.svg",
    "label": "Fantom"
  },
  {
    "id": 166,
    "symbol": "BFT",
    "name": "BF Token",
    "color": "#5d0e99",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/unzjpBx6v/BFT-alt.svg",
    "label": "BF Token"
  },
  {
    "id": 229,
    "symbol": "REN",
    "name": "Republic Protocol",
    "color": "#000000",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/tpvp2fZPtV8/republic-protocol.svg",
    "label": "Republic Protocol"
  },
  {
    "id": 63,
    "symbol": "MITH",
    "name": "Mithril",
    "color": "#0078D3",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/By2uk2kz7/mith.svg",
    "label": "Mithril"
  },
  {
    "id": 182,
    "symbol": "ANT",
    "name": "Aragon",
    "color": "#00cbe6",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/BJceOL__-/ant.svg",
    "label": "Aragon"
  },
  {
    "id": 151,
    "symbol": "EDO",
    "name": "Eidoo",
    "color": "#494949",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/Bkwm4x-JG/edo.svg",
    "label": "Eidoo"
  },
  {
    "id": 109,
    "symbol": "DRGN",
    "name": "Dragonchain",
    "color": "#4ebbe4",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/BkOYNy9IM/drgn.svg",
    "label": "Dragonchain"
  },
  {
    "id": 567,
    "symbol": "EKT",
    "name": "EDUCare",
    "color": "#000000",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/S1D05U8-m/ekt.svg",
    "label": "EDUCare"
  },
  {
    "id": 133,
    "symbol": "TEL",
    "name": "Telcoin",
    "color": "#7551aa",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/SkQfB__SM/tel.svg",
    "label": "Telcoin"
  },
  {
    "id": 175,
    "symbol": "BITCNY",
    "name": "bitCNY",
    "color": null,
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/S1avQtwHG/bitcny.svg",
    "label": "bitCNY"
  },
  {
    "id": 296,
    "symbol": "QNT",
    "name": "Quant",
    "color": null,
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/se9xzo_Uc/Quant-Logo.svg",
    "label": "Quant"
  },
  {
    "id": 135,
    "symbol": "GTO",
    "name": "Gifto",
    "color": "#851be3",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/BJCM7S5VG/gto.svg",
    "label": "Gifto"
  },
  {
    "id": 200,
    "symbol": "COSM",
    "name": "Cosmo Coin",
    "color": null,
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/-0bRj0opxs/cosmo-coin.svg",
    "label": "Cosmo Coin"
  },
  {
    "id": 144,
    "symbol": "MDA",
    "name": "Moeda Loyalty Points",
    "color": "#019241",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/B1eZ4OlJM/mda.svg",
    "label": "Moeda Loyalty Points"
  },
  {
    "id": 88,
    "symbol": "DROP",
    "name": "Dropil",
    "color": "#0f2137",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/N4uvq_E53/drop.svg",
    "label": "Dropil"
  },
  {
    "id": 278,
    "symbol": "LBA",
    "name": "Cred",
    "color": "#0d7296",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/w4lJfH74AOU/cred.svg",
    "label": "Cred"
  },
  {
    "id": 146,
    "symbol": "ZIP",
    "name": "Zipper",
    "color": null,
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/QOnUs8_QSrH/zipper.svg",
    "label": "Zipper"
  },
  {
    "id": 197,
    "symbol": "TPAY",
    "name": "TrollPlay",
    "color": "#fd1f92",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/aqjQ530cYe-/trollplay.svg",
    "label": "TrollPlay"
  },
  {
    "id": 259,
    "symbol": "VIA",
    "name": "ViaCoin",
    "color": "#1147f5",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/Byj5oMqRb/via.svg",
    "label": "ViaCoin"
  },
  {
    "id": 168,
    "symbol": "SMART",
    "name": "SmartCash",
    "color": "#f5b718",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/rkWoNWjDM/smart.svg",
    "label": "SmartCash"
  },
  {
    "id": 162,
    "symbol": "NEBL",
    "name": "Neblio",
    "color": "#39a4d6",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/ry4bRAETb/nebl.svg",
    "label": "Neblio"
  },
  {
    "id": 268,
    "symbol": "VITE",
    "name": "VITE",
    "color": "#000000",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/BkpP69A_7/vite.svg",
    "label": "VITE"
  },
  {
    "id": 313,
    "symbol": "WABI",
    "name": "WaBi",
    "color": null,
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/SyfBZWSVG/wabi.svg",
    "label": "WaBi"
  },
  {
    "id": 137,
    "symbol": "REQ",
    "name": "Request Network",
    "color": "#0f5f84",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/BywMiFa-z/req.svg",
    "label": "Request Network"
  },
  {
    "id": 128,
    "symbol": "SKY",
    "name": "Skycoin",
    "color": "#0072ff",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/rJ0ac8X6-/sky.svg",
    "label": "Skycoin"
  },
  {
    "id": 201,
    "symbol": "XWC",
    "name": "WhiteCoin",
    "color": "#af4ddf",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/KlQptX5fZYp/whitecoin.svg",
    "label": "WhiteCoin"
  },
  {
    "id": 262,
    "symbol": "BTX",
    "name": "Bitcore",
    "color": "#cd2b78",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/HJ2vzJcUz/btx.svg",
    "label": "Bitcore"
  },
  {
    "id": 219,
    "symbol": "APIS",
    "name": "APIS",
    "color": "#21428e",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/rkMK8O8-7/apis.svg",
    "label": "APIS"
  },
  {
    "id": 255,
    "symbol": "RCN",
    "name": "Ripio Credit Network",
    "color": "#000000",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/H1FeC7hkM/rcn.svg",
    "label": "Ripio Credit Network"
  },
  {
    "id": 249,
    "symbol": "TCT",
    "name": "TokenClub",
    "color": "#2871db",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/ngAIR6o_6fw/tokenclub.svg",
    "label": "TokenClub"
  },
  {
    "id": 136,
    "symbol": "STORM",
    "name": "Storm",
    "color": "#a08cdb",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/rJxHa5RdX/storm.svg",
    "label": "Storm"
  },
  {
    "id": 184,
    "symbol": "MTL",
    "name": "Metal",
    "color": "#000000",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/HJfUS8udb/mtl.svg",
    "label": "Metal"
  },
  {
    "id": 188,
    "symbol": "QSP",
    "name": "Quantstamp",
    "color": "#212b3a",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/HkBFj50uX/qsp.svg",
    "label": "Quantstamp"
  },
  {
    "id": 244,
    "symbol": "EURS",
    "name": "STASIS EURS",
    "color": "#2468e4",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/H1LhjTFAmk/stasis-eurs.svg",
    "label": "STASIS EURS"
  },
  {
    "id": 282,
    "symbol": "ADX",
    "name": "AdEx",
    "color": "#1076bd",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/ryAjnLwRZ/icon.svg",
    "label": "AdEx"
  },
  {
    "id": 177,
    "symbol": "DATA",
    "name": "Streamr DATAcoin",
    "color": "#3f008c",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/HyzqOqCdX/data.svg",
    "label": "Streamr DATAcoin"
  },
  {
    "id": 179,
    "symbol": "POE",
    "name": "Po.et",
    "color": "#03bf6d",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/BJcrxZBVM/poe.svg",
    "label": "Po.et"
  },
  {
    "id": 233,
    "symbol": "SBD",
    "name": "Steem Dollars",
    "color": "#171f24",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/SJZOWNNgX/steem.svg",
    "label": "Steem Dollars"
  },
  {
    "id": 215,
    "symbol": "NAV",
    "name": "NavCoin",
    "color": "#7d59b5",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/LcNvH6V9Q/nav.svg",
    "label": "NavCoin"
  },
  {
    "id": 204,
    "symbol": "IOTX",
    "name": "IoTeX",
    "color": "#00dabe",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/hCcq8iAAu/iotx.svg",
    "label": "IoTeX"
  },
  {
    "id": 108,
    "symbol": "GVT",
    "name": "Genesis Vision",
    "color": "#03bdaf",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/HyTRHKPBf/gvt.svg",
    "label": "Genesis Vision"
  },
  {
    "id": 171,
    "symbol": "MFT",
    "name": "Mainframe",
    "color": "#da1157",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/SyQP6hnXX/mft.svg",
    "label": "Mainframe"
  },
  {
    "id": 634,
    "symbol": "SNTR",
    "name": "Silent Notary",
    "color": null,
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/BJVfu_9-m/sntr.svg",
    "label": "Silent Notary"
  },
  {
    "id": 191,
    "symbol": "BLOCK",
    "name": "BlockNet",
    "color": "#006afe",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/AqYH0LaW0/block.svg",
    "label": "BlockNet"
  },
  {
    "id": 272,
    "symbol": "KAN",
    "name": "BitKan",
    "color": null,
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/nppTDocRYXJ/bitkan.svg",
    "label": "BitKan"
  },
  {
    "id": 157,
    "symbol": "HPB",
    "name": "High Performance Blockchain",
    "color": "#063c60",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/SkRe8FPrM/hpb.svg",
    "label": "High Performance Blockchain"
  },
  {
    "id": 527,
    "symbol": "EGT",
    "name": "Egretia",
    "color": "#f6be1d",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/HyBd7NyrX/EGT.svg",
    "label": "Egretia"
  },
  {
    "id": 186,
    "symbol": "TNB",
    "name": "Time New Bank",
    "color": "#ffc04e",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/HknX2y9If/tnb.svg",
    "label": "Time New Bank"
  },
  {
    "id": 131,
    "symbol": "WGR",
    "name": "Wagerr",
    "color": "#dd0000",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/rJIJNlfmQ/wgr.svg",
    "label": "Wagerr"
  },
  {
    "id": 213,
    "symbol": "SRN",
    "name": "SirinLabs",
    "color": "#3fbfad",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/rkHJbZS4M/srn.svg",
    "label": "SirinLabs"
  },
  {
    "id": 205,
    "symbol": "RUFF",
    "name": "Ruff",
    "color": "#2fe3e4",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/cqI5HS3ZWZH/ruff.svg",
    "label": "Ruff"
  },
  {
    "id": 153,
    "symbol": "TKY",
    "name": "THEKEY",
    "color": "#5abae4",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/_Et-YvlDS3/thekey.svg",
    "label": "THEKEY"
  },
  {
    "id": 1150,
    "symbol": "BLZ",
    "name": "Bluzelle",
    "color": "#043160",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/ryus0gsDz/blz.svg",
    "label": "Bluzelle"
  },
  {
    "id": 260,
    "symbol": "DAPS",
    "name": "DAPS Token",
    "color": "#5E1C5A",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/MJXJHMBX9/daps.svg",
    "label": "DAPS Token"
  },
  {
    "id": 210,
    "symbol": "MDS",
    "name": "MediShares",
    "color": "#2c333a",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/Syp2vJ98M/mds.svg",
    "label": "MediShares"
  },
  {
    "id": 198,
    "symbol": "ACT",
    "name": "Achain",
    "color": "#4f86aa",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/kJhpE6Osh/act.svg",
    "label": "Achain"
  },
  {
    "id": 258,
    "symbol": "ECA",
    "name": "Electra",
    "color": "#611b3f",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/B127_xSEM/eca.svg",
    "label": "Electra"
  },
  {
    "id": 292,
    "symbol": "TNT",
    "name": "Tierion",
    "color": null,
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/Bkbt4r5Nf/tnt.svg",
    "label": "Tierion"
  },
  {
    "id": 532,
    "symbol": "FLO",
    "name": "FlorinCoin",
    "color": null,
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/KS695ygTZ/flo.svg",
    "label": "FlorinCoin"
  },
  {
    "id": 211,
    "symbol": "AUTO",
    "name": "Cube",
    "color": "#1f2b44",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/0sQQx4gqH/auto.svg",
    "label": "Cube"
  },
  {
    "id": 331,
    "symbol": "NKN",
    "name": "NKN",
    "color": "#0a1e31",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/H1y_q8AeX/nkn.svg",
    "label": "NKN"
  },
  {
    "id": 165,
    "symbol": "CRPT",
    "name": "Crypterium",
    "color": "#05b1c9",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/pBxXs_oZq99/crypterium.svg",
    "label": "Crypterium"
  },
  {
    "id": 446,
    "symbol": "PRO",
    "name": "Propy",
    "color": null,
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/B1a-KtwBf/pro.svg",
    "label": "Propy"
  },
  {
    "id": 158,
    "symbol": "ETHOS",
    "name": "Ethos",
    "color": "#009587",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/S1IeLQnef/ethos.svg",
    "label": "Ethos"
  },
  {
    "id": 164,
    "symbol": "NCASH",
    "name": "Nucleus Vision",
    "color": "#043a68",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/9FZbyvXp1/ncash.svg",
    "label": "Nucleus Vision"
  },
  {
    "id": 252,
    "symbol": "VIBE",
    "name": "VIBE",
    "color": null,
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/Sk9XZbSNf/vibe.svg",
    "label": "VIBE"
  },
  {
    "id": 363,
    "symbol": "EVX",
    "name": "Everex",
    "color": null,
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/Hk00-jrdz/evx.svg",
    "label": "Everex"
  },
  {
    "id": 287,
    "symbol": "IHT",
    "name": "IHT Real Estate Protocol",
    "color": "#9abb4b",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/fJNs7pIeF9t/iht-real-estate-protocol.svg",
    "label": "IHT Real Estate Protocol"
  },
  {
    "id": 358,
    "symbol": "SWFTC",
    "name": "SwftCoin",
    "color": null,
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/_S08hOcDFxs/swftcoin.svg",
    "label": "SwftCoin"
  },
  {
    "id": 232,
    "symbol": "XAS",
    "name": "Asch",
    "color": "#fba40e",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/BJoXHB5VG/xas.svg",
    "label": "Asch"
  },
  {
    "id": 362,
    "symbol": "B2B",
    "name": "B2BX",
    "color": "#008b5f",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/SkKSsWCV7/B2BX.svg",
    "label": "B2BX"
  },
  {
    "id": 319,
    "symbol": "PZM",
    "name": "Prizm",
    "color": "#7155aa",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/EP24WW8E2tU/prizm.svg",
    "label": "Prizm"
  },
  {
    "id": 226,
    "symbol": "ZCL",
    "name": "ZClassic",
    "color": "#e5692c",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/HyJ5W-HVM/zcl.svg",
    "label": "ZClassic"
  },
  {
    "id": 192,
    "symbol": "DTA",
    "name": "DATA",
    "color": "#0c2a4f",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/rymvWsBdG/dta.svg",
    "label": "DATA"
  },
  {
    "id": 848,
    "symbol": "CHX",
    "name": "Chainium",
    "color": null,
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/4tpQh5StKOp/chainium.svg",
    "label": "Chainium"
  },
  {
    "id": 286,
    "symbol": "DMT",
    "name": "DMarket",
    "color": null,
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/Hy2jYTBRb/dmt.svg",
    "label": "DMarket"
  },
  {
    "id": 335,
    "symbol": "INT",
    "name": "Internet Node Token",
    "color": "#da1b28",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/Hynk81cLM/int.svg",
    "label": "Internet Node Token"
  },
  {
    "id": 227,
    "symbol": "LEND",
    "name": "ETHLend",
    "color": "#0bacc7",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/Hy3xgZHVz/lend.svg",
    "label": "ETHLend"
  },
  {
    "id": 194,
    "symbol": "XDN",
    "name": "DigitalNote ",
    "color": "#507ca5",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/r1Xiixr4M/xdn.svg",
    "label": "DigitalNote "
  },
  {
    "id": 245,
    "symbol": "DNT",
    "name": "district0x",
    "color": "#7cf8fa",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/ByXwJmRVf/dnt.svg",
    "label": "district0x"
  },
  {
    "id": 206,
    "symbol": "VEE",
    "name": "BLOCKv",
    "color": "#8facce",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/SJl621cIf/vee.svg",
    "label": "BLOCKv"
  },
  {
    "id": 176,
    "symbol": "PPC",
    "name": "PeerCoin",
    "color": "#3cb054",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/BytuoI__W/ppc.svg",
    "label": "PeerCoin"
  },
  {
    "id": 506,
    "symbol": "TAAS",
    "name": "Token as a Service",
    "color": null,
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/SydJH_v0Z/taas.svg",
    "label": "Token as a Service"
  },
  {
    "id": 119,
    "symbol": "EMC",
    "name": "Emercoin",
    "color": "#4d2a68",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/HkCJtUd_b/emc.svg",
    "label": "Emercoin"
  },
  {
    "id": 281,
    "symbol": "QLC",
    "name": "QLC Chain",
    "color": "#5f00ad",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/rJ-0YkqUG/qlc.svg",
    "label": "QLC Chain"
  },
  {
    "id": 152,
    "symbol": "DDD",
    "name": "Scry.info",
    "color": "#000c3c",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/l6ZVsmJdE9h/scryinfo.svg",
    "label": "Scry.info"
  },
  {
    "id": 214,
    "symbol": "SNM",
    "name": "SONM",
    "color": "#6522ff",
    "iconType": "vector",
    "iconUrl": "https://cdn.coinranking.com/B1tFxPdd-/snm.svg",
    "label": "SONM"
  }
]

export default coins;