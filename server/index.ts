import MozelSyncServer from "mozel-sync/dist/MozelSyncServer";
import model from "@/model";

const server = require('http').createServer();
const io = require('socket.io')(server, {
	cors:true,
	origins:["http://localhost:63342"]
});
server.listen(3000);

const sync = new MozelSyncServer({io, model});
sync.start();
