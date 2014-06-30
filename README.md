# node-workaholic-cli

node.js client module for workaholic front

## Installation

	npm install workaholic-cli

## Example

	var workaholic=require("workaholic-cli");
	var work=new workaholic();
	
	work.new({
	  taskName: "phpTEST",
	  argument: ["/tmp/thisfile.php","argument1"]
	},function(e,r){
	  // process_result
	});

## License

MIT
