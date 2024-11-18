export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","favicon.png","images/alma.png","images/almas_pite.png","images/banana.png","images/csirkepaprikas.png","images/szendvics.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.tO49YQ02.js","app":"_app/immutable/entry/app.D81-kjlx.js","imports":["_app/immutable/entry/start.tO49YQ02.js","_app/immutable/chunks/entry.BkPylU4M.js","_app/immutable/chunks/scheduler.CszMd_qe.js","_app/immutable/chunks/index.C9RZqJXW.js","_app/immutable/entry/app.D81-kjlx.js","_app/immutable/chunks/scheduler.CszMd_qe.js","_app/immutable/chunks/index.B2ovvTLf.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			{
				id: "/api/ingredients",
				pattern: /^\/api\/ingredients\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/ingredients/_server.js'))
			},
			{
				id: "/api/menu",
				pattern: /^\/api\/menu\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/menu/_server.js'))
			},
			{
				id: "/api/recipes",
				pattern: /^\/api\/recipes\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/recipes/_server.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
