// Basic client-side app skeleton for Tulasi Sales System


const app = (function(){
// local storage keys
const LS_USERS = 'ts_users';
const LS_DISTRICTS = 'ts_districts';
const LS_TOWNS = 'ts_towns';
const LS_DISTRIBUTORS = 'ts_distributors';
const LS_OUTLETS = 'ts_outlets';
const LS_ITEMS = 'ts_items';
const LS_SALES = 'ts_sales_orders';
const LS_VISITS = 'ts_outlet_visits';


// load initial JSON files (for starter we embed default load)
function loadDefaults(){
// if not present in localStorage, load from embedded data files via fetch
if(!localStorage.getItem(LS_USERS)){
fetch('data/users.json').then(r=>r.json()).then(j=>localStorage.setItem(LS_USERS, JSON.stringify(j)));
}
if(!localStorage.getItem(LS_ITEMS)){
fetch('data/items.json').then(r=>r.json()).then(j=>localStorage.setItem(LS_ITEMS, JSON.stringify(j)));
}
// districts/towns/distributors/outlets start empty
if(!localStorage.getItem(LS_DISTRICTS)) localStorage.setItem(LS_DISTRICTS, JSON.stringify([]));
if(!localStorage.getItem(LS_TOWNS)) localStorage.setItem(LS_TOWNS, JSON.stringify([]));
if(!localStorage.getItem(LS_DISTRIBUTORS)) localStorage.setItem(LS_DISTRIBUTORS, JSON.stringify([]));
if(!localStorage.getItem(LS_OUTLETS)) localStorage.setItem(LS_OUTLETS, JSON.stringify([]));
if(!localStorage.getItem(LS_SALES)) localStorage.setItem(LS_SALES, JSON.stringify([]));
if(!localStorage.getItem(LS_VISITS)) localStorage.setItem(LS_VISITS, JSON.stringify([]));
}


function login(uid,pwd){
uid = uid.toUpperCase();
const users = JSON.parse(localStorage.getItem(LS_USERS) || '{}')
