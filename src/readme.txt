add this to tsconfig.json

{
"compilerOptions": {
"module": "commonjs",
"moduleResolution": "node",
"pretty": true,
"sourceMap": true,
"target": "es6",
"outDir": "./dist",
"baseUrl": "./src"
},
"include": [
"src/**/*.ts"
],
"exclude": [
"node_modules"
]
}



/////////

"build": "tsc",
"start": "nodemon ./dist/server.js",

Explanation:

Okay, contrary to what I previously thought, further research shows that extended: true and app.use(bodyParser.json()) can be used together. So it is not only extended: false that uses it. The statement app.use(bodyParser.json()) is to be used independently, whether you set extended as true or false.

app.use(bodyParser.json()) basically tells the system that you want json to be used.

bodyParser.urlencoded({extended: ...}) basically tells the system whether you want to use a simple algorithm for shallow parsing (i.e. false) or complex algorithm for deep parsing that can deal with nested objects (i.e. true).