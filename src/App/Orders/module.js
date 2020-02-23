let allOrders = {
	displayName: "Orders",
  dataSource: "ALL_ORDERS",
  fields: [
    { name: "Model", fieldName: "model" },
    { name: "Price", fieldName: "price" }
  ]
}

let orders = {
	displayName: "Orders",
	views: [
    allOrders
	]
}

export default orders;