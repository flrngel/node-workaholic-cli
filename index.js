var request=require("request");
var extend=require("xtend");

/*
 * workaholic front client for node.js
 * author : flrngel
 *
 * */

var workaholic=function(opts){
	/*
	 * workaholic option spec:
	 *  host: <host> # default: localhost
	 *  port: <port> # default: 8007
	 *  password: <password> # default: undefined
	 *  ticketing: (true|false) # default: false
	 *
	 * */

	var default_options={
		host: "localhost",
		port: 8007,
		password: undefined,
		ticketing: false
	};

	this.options=extend(default_options,opts);
}

workaholic.prototype.new=function(data,callback){
	/*
	 * data spec(see more: https://github.com/flrngel/workaholic#post-worknew):
	 *  taskName: "<task name>",
	 *  argument: ["<arg1>","<arg2>",...]
	 *
	 * */

	request.post({
		uri: this.options.host+":"+this.options.port+"/work/new",
		json: {
			ticketing: this.options.ticketing,
			data: data
		}
	},callback);
};

workaholic.prototype.status=function(tid,callback){
	request.get({
		uri: this.options.host+":"+this.options.port+"/work/status",
		qs: {
			ticket: tid
		}
	});
};

module.exports = workaholic;
