# node-workaholic-cli

node.js client module for workaholic front

## Installation

	npm install workaholic-cli

## How-to

	var workaholic=require("workaholic-cli");
	var work=new workaholic();
	
	work.new({
	  taskName: "php",
	  argument: ["/tmp/test.php","2"]
	},function(e,r){
	  // process_result
	});

## License

MIT
