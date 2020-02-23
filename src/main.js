let allTrades = {
	displayName: "Trades",
  dataSource: "ALL_TRADES",
  fields: [
    //{ name: "Make",  fieldName: "make"  },
    // { name: "Model", fieldName: "model" },
    { name: "Price", fieldName: "price" }
  ]
}

let allTradesAudit = {
	displayName: "Trades Audit",
	dataSource: "ALL_TRADES_AUDIT"
}

let trades = {
	displayName: "Trades",
	views: [
    allTrades, 
    allTradesAudit
	]
}

let modules = [
  trades
]

export default modules;