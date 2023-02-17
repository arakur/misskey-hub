import{_ as s,o as r,c as n,a,b as i,w as o,d as e,e as d,r as c}from"./app.3f993c59.js";const l={},u=a("h1",{id:"pages",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#pages","aria-hidden":"true"},"#"),e(" Pages")],-1),p=e("La fonction Pages permet de cr\xE9er des pages web personnalis\xE9es. Vous pouvez y inclure du contenu multim\xE9dia, du formatage, et m\xEAme lancer des scripts. Comme les autres fonctions de Misskey, votre contenu peut utiliser le format "),h=e("MFM"),b=e("."),f=d('<p>Les pages sont compos\xE9es de diff\xE9rents blocs, pouvant \xEAtre d\xE9plac\xE9s par glisser-d\xE9poser.</p><h2 id="blocs-de-contenu" tabindex="-1"><a class="header-anchor" href="#blocs-de-contenu" aria-hidden="true">#</a> Blocs de contenu</h2><p>Les blocs de contenu affichent diff\xE9rent types de contenu.</p><h3 id="section" tabindex="-1"><a class="header-anchor" href="#section" aria-hidden="true">#</a> Section</h3><p>Un groupe de blocs pouvant contenir d\u2019autres blocs. Chaque bloc de contenu poss\xE8de un titre qui sera affich\xE9 comme en-t\xEAte.</p><h3 id="texte" tabindex="-1"><a class="header-anchor" href="#texte" aria-hidden="true">#</a> Texte</h3><p>Affiche un texte. Celui-ci peut \xEAtre format\xE9 et contenir des variables (Voir la section correspondante).</p><h3 id="images" tabindex="-1"><a class="header-anchor" href="#images" aria-hidden="true">#</a> Images</h3><p>Affiche une image depuis votre stockage.</p><h3 id="zone-de-texte" tabindex="-1"><a class="header-anchor" href="#zone-de-texte" aria-hidden="true">#</a> Zone de texte</h3><p>Affiche du texte avec une \xE9tiquette <code>text area</code>. Ce bloc ne prend pas en charge le MFM mais autorise l\u2019interpolation de variable.</p><h3 id="note-interne" tabindex="-1"><a class="header-anchor" href="#note-interne" aria-hidden="true">#</a> Note interne</h3><p>TODO</p><h3 id="canevas" tabindex="-1"><a class="header-anchor" href="#canevas" aria-hidden="true">#</a> Canevas</h3><p>TODO</p><h2 id="bloc-d-entree" tabindex="-1"><a class="header-anchor" href="#bloc-d-entree" aria-hidden="true">#</a> Bloc d\u2019entr\xE9e</h2><p>Les blocs d\u2019entr\xE9e permettent de cr\xE9er des pages interactives avec des formulaires. Ces blocs peuvent \xEAtre utilis\xE9s pour interagir avec les variables et les script d\u2019une page.</p><h2 id="blocs-speciaux" tabindex="-1"><a class="header-anchor" href="#blocs-speciaux" aria-hidden="true">#</a> Blocs sp\xE9ciaux</h2><p>Les blocs sp\xE9ciaux fournissent des fonctions uniques \xE0 votre page. Par exemple le fait un formulaire de publication de note et le contr\xF4le de page.</p><h2 id="variables" tabindex="-1"><a class="header-anchor" href="#variables" aria-hidden="true">#</a> Variables</h2><p>Les variables sont utilis\xE9es pour des pages dynamiques. Vous pouvez indiquer la valeur d\u2019une variable via <b>{ nom de variable }</b> dans le texte. Par exemple dans <b>Hello { thing } world!</b>, si la valeur de la variable (thing) est <b>ai</b>, alors le texte deviendrait <b>Hello ai world!</b>.</p><p>Les variables sont \xE9valu\xE9es de haut en bas, et il n\u2019est pas possible d\u2019appeler une variable avant qu\u2019elle ne soit d\xE9finie.Par exemple, soit <b>A, B, C</b> d\xE9finies dans cet ordre, <b>A</b> et <b>B</b> peuvent \xEAtre appel\xE9es dans <b>C</b> mais <b>B</b> et <b>C</b> ne peuvent pas \xEAtre appel\xE9es dans <b>A</b>.</p><p>Pour recevoir une entr\xE9e, placez un bloc \xAB\u202FEntr\xE9e\u202F\xBB sur la page et utilisez le nom de variable pour indiquer la variable o\xF9 enregistrer la valeur entr\xE9e (la variable sera automatiquement cr\xE9\xE9e). La variable peut ensuite \xEAtre utilis\xE9e pour r\xE9aliser des actions en fonction de l\u2019entr\xE9e.</p><p>Les fonctions peuvent \xEAtre utilis\xE9es pour r\xE9p\xE9ter des groupes de calculs. Pour cela, cr\xE9ez une variable de type \xAB\u202FFonction\u202F\xBB. Une fonction peut avoir diff\xE9rents arguments, dont les valeurs sont disponibles comme variables au sein de la fonction. Il existe diff\xE9rentes fonctions d\u2019ordre primaire, appelant d\u2019autres fonctions comme arguments. Les fonctions peuvent \xEAtre pr\xE9d\xE9finies ou plac\xE9es \xE0 m\xEAme l\u2019emplacement d\u2019argument.</p>',24);function m(v,x){const t=c("RouterLink");return r(),n("div",null,[u,a("p",null,[p,i(t,{to:"/fr/docs/features/mfm.html"},{default:o(()=>[h]),_:1}),b]),f])}var _=s(l,[["render",m],["__file","pages.html.vue"]]);export{_ as default};
