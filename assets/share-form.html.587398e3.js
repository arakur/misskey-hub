import{_ as d,o as r,c as i,a as t,b as s,w as n,e as o,d as e,r as c}from"./app.5e140da5.js";const l={},h=o('<h1 id="formularz-udostepniania" tabindex="-1"><a class="header-anchor" href="#formularz-udostepniania" aria-hidden="true">#</a> Formularz udost\u0119pniania</h1><p>Kiedy otworzysz <code>/share</code> w Misskey w Przegl\u0105darce dostaniesz formularz udostepniania. Ten formularz jest przydatny je\u015Bli chcesz aby u\u017Cytkownicy udost\u0119pniali zawarto\u015B\u0107 swojej strony z zewn\u0105trz.</p><p>Mo\u017Cesz te\u017C wyspecyfikowa\u0107 opcje w adresie, w tym udost\u0119pniana zawarto\u015B\u0107, jako parametry.</p><h2 id="parametry" tabindex="-1"><a class="header-anchor" href="#parametry" aria-hidden="true">#</a> Parametry</h2><div class="custom-container tip"><i class="fas fa-info"></i><p>Wszystkie parametry s\u0105 <strong>opcjonalne</strong>.</p></div><table><thead><tr><th>Parametr</th><th>Opis</th></tr></thead><tbody><tr><td><code>title</code></td><td>tytu\u0142 umieszczony przed tre\u015Bci\u0105 materia\u0142u</td></tr><tr><td><code>text</code></td><td>tre\u015B\u0107 materia\u0142u</td></tr><tr><td><code>url</code></td><td>Adres URL umieszczony po materiale</td></tr></tbody></table><h3 id="informacje-odpowiedzi" tabindex="-1"><a class="header-anchor" href="#informacje-odpowiedzi" aria-hidden="true">#</a> Informacje odpowiedzi</h3><p>Mo\u017Cesz utworzy\u0107 wpis kt\xF3ry jest odpowiedzi\u0105 na inny wpis przy u\u017Cyciu tych parametr\xF3w.</p><table><thead><tr><th>Paramentr</th><th>Opis</th></tr></thead><tbody><tr><td><code>replyId</code></td><td>ID wpisu na kt\xF3ry odpowiadasz</td></tr><tr><td><code>replyUri</code></td><td>URL do wpisu na kt\xF3ry odpowiadasz (okre\u015Bla inny serwer)</td></tr></tbody></table><h3 id="informacje-o-repostowaniu" tabindex="-1"><a class="header-anchor" href="#informacje-o-repostowaniu" aria-hidden="true">#</a> Informacje o repostowaniu</h3><p>Mo\u017Cesz utworzy\u0107 wpis kt\xF3ry jest wpisem inne osoby przy u\u017Cyciu tych parametr\xF3w.</p><table><thead><tr><th>Parametr</th><th>Opis</th></tr></thead><tbody><tr><td><code>renoteId</code></td><td>ID wpisu do repostowania</td></tr><tr><td><code>renoteUri</code></td><td>URL wpisu do repostowania (okre\u015Bla serwer z kt\xF3rego jest wpis)</td></tr></tbody></table><h3 id="widocznosc" tabindex="-1"><a class="header-anchor" href="#widocznosc" aria-hidden="true">#</a> Widoczno\u015B\u0107</h3><p>Podane opcje pozwalaj\u0105 ustali\u0107 widoczno\u015B\u0107.</p>',14),p=t("thead",null,[t("tr",null,[t("th",null,"Parametr"),t("th",null,"Opis")])],-1),u=t("tr",null,[t("td",null,[t("code",null,"visibility")]),t("td",null,[e("widoczno\u015B\u0107 albo - "),t("code",null,"public"),e(", "),t("code",null,"home"),e(", "),t("code",null,"followers"),e(", "),t("code",null,"specified")])],-1),z=t("tr",null,[t("td",null,[t("code",null,"localOnly")]),t("td",null,"0(nie) albo 1(tak)")],-1),w=t("tr",null,[t("td",null,[t("code",null,"visibleUserIds")]),t("td",null,"docelowe ID u\u017Cytkownik\xF3w")],-1),y=t("td",null,[t("code",null,"visibleAccts")],-1),m=e("docelowy u\u017Cytkownik "),b=e("acct"),_=e("s (podzielone przecinkiem)"),f=o('<p>::: uwaga je\u017Celi <code>visibility</code>(widoczno\u015B\u0107) jest <code>specified</code>(ustalona) to <code>visibleUserIds</code> i <code>visibleAccts</code> musz\u0105 te\u017C by\u0107 ustawione. :::</p><h3 id="za\u0142aczniki" tabindex="-1"><a class="header-anchor" href="#za\u0142aczniki" aria-hidden="true">#</a> Za\u0142\u0105czniki</h3><p>Mo\u017Cesz za\u0142\u0105czy\u0107 za\u0142\u0105czniki do swojego wpisu.</p><table><thead><tr><th>Parametr</th><th>Opis</th></tr></thead><tbody><tr><td><code>fileIds</code></td><td>ID plik\xF3w za\u0142\u0105czonych (podzielone przecinkami)</td></tr></tbody></table>',4);function k(j,v){const a=c("RouterLink");return r(),i("div",null,[h,t("table",null,[p,t("tbody",null,[u,z,w,t("tr",null,[y,t("td",null,[m,s(a,{to:"/pl/docs/glossary.html#acct"},{default:n(()=>[b]),_:1}),_])])])]),f])}var I=d(l,[["render",k],["__file","share-form.html.vue"]]);export{I as default};
